import { Component } from '@angular/core';
//import { Transportistas } from 'src/app/api/models';
//import { TransportistasControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transportistas } from 'src/app/models/transportistas';
import { TransportistasService } from 'src/app/services/transportistas.service';

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
    private transportistasService:TransportistasService,
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
  ngOnInit(): void {
    this.transportistasService.getAllTransportistas().toPromise().then(
      (data: Transportistas[]) => this.listOfData = data
    )
  }

  delete(id: string) {
    this.transportistasService.deleteTransportistas(id).toPromise().then(() => {
      this.nzMessageService.warning('El registro fue eliminado con exito!');
      this.listOfData = this.listOfData.filter(x => x.id !== id);
    }, (error) => {
      this.nzMessageService.error('El registro no pudo ser eliminado, por favor intente de nuevo');
      console.error(error);
    })
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
    this.buildForm();
  }

  guardar(): void {
    if (this.accion) {
      this.transportistasService.postTransportistas(this.form.value).toPromise().then((data: any) => {
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
      this.transportistasService.putTransportistas(this.idModificar,this.form.value).toPromise().then(()=>{
        for(let elemento of this.listOfData.filter(x=>x.id===this.idModificar)){
          elemento.identidad=this.form.value.identidad;
          elemento.nombre= this.form.value.nombre;
          elemento.licencia= this.form.value.licencia;
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
    this.idModificar=item.id;
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
