import { Component } from '@angular/core';
import { Transportistas } from 'src/app/api/models';
import { TransportistasControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transportistas',
  templateUrl: './transportistas.component.html'
})
export class TransportistasComponent {
  listOfData: Transportistas[] = [];
  http: any;
  form!: FormGroup;
  visible = false;
  accion:boolean=true;
  idModificar:string='';

  constructor(
    private transportistasService:TransportistasControllerService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder
  ){this.buildForm();}
  
  private buildForm() {
    this.form = this.formBuilder.group({
      identidad: [''],
      nombre: [''],
      licencia: ['']
    });
  }
  ngOnInit():void{
    this.getData();
  }
  getData():void{
    this.transportistasService.find().subscribe(data=>this.listOfData=data);
  }
  
  cancel(): void {
    this.nzMessageService.info('Su registro sigue activo! =D')
  }

  open(): void {
    this.visible = true;
    this.accion=true;
  }

  close(): void {
    this.visible = false;
  }

  guardar(): void {
    if (this.accion) {
      this.transportistasService.create().toPromise().then((data: any) => {
        //this.listOfHardware.push(data);
        this.nzMessageService.success('El registro fue ingresado con exito!');
        this.listOfData = [...this.listOfData, data]
        //Limpia el formulario y lo cierra
        this.buildForm();
        this.visible = false;
      }, (error) => {
        this.nzMessageService.error('El registro no pudo ser ingresado, por favor intente de nuevo');
        console.error(error);
      })
    }else{
      this.transportistasService.updateAll(this.form.value).toPromise().then(()=>{
        for(let elemento of this.listOfData.filter(x=>x.id===this.idModificar)){
          elemento.dni=this.form.value.dni;
          elemento.nombre= this.form.value.nombre;
          elemento.apellido= this.form.value.apellido;
          elemento.edad= this.form.value.edad;
          elemento.cargo=this.form.value.cargo;
        }
        this.visible = false;
        this.nzMessageService.success('El registro fue actualizado con exito!');
      }, (error) => {
        this.nzMessageService.error('El registro no pudo ser actualizado, por favor intente de nuevo');
        console.error(error);
      })
    }
  }

  modificar(item:Transportistas):void{
    this.accion=false;
    this.idModificar=item.identidad;
    this.visible = true;
    this.form=this.formBuilder.group({
      identidad: [item.identidad],
      nombre: [item.nombre],
      licencia: [item.licencia]
    })
  }

  submitForm(): void {
    for (const i in this.form?.controls) {
      this.form?.controls[i].markAsDirty();
      this.form?.controls[i].updateValueAndValidity();
    }
  }
  }
