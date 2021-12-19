import { Component } from '@angular/core';
//import { Vehiculos } from 'src/app/api/models';
import { VehiculosControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehiculos } from 'src/app/models/vehiculos';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html'
})
export class VehiculosComponent {
  listOfData: Vehiculos[] = [];
  http: any;
  form!: FormGroup;
  visible = false;
  accion:boolean=true;
  idModificar:string='';
  constructor(
    private vehiculosService:VehiculosService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder
  ){this.buildForm();}
  
  private buildForm() {
    this.form = this.formBuilder.group({
      placa: [''],
      color: [''],
      marca: [''],
      tipo: ['']
    });
  }
  ngOnInit(): void {
    this.vehiculosService.getAllVehiculos().toPromise().then(
      (data: Vehiculos[]) => this.listOfData = data
    )
  }

  delete(id: string) {
    this.vehiculosService.deleteVehiculos(id).toPromise().then(() => {
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
      this.vehiculosService.postVehiculos(this.form.value).toPromise().then((data: any) => {
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
      this.vehiculosService.putVehiculos(this.idModificar,this.form.value).toPromise().then(()=>{
        for(let elemento of this.listOfData.filter(x=>x.id===this.idModificar)){
          elemento.placa=this.form.value.placa;
          elemento.color= this.form.value.color;
          elemento.marca= this.form.value.marca;
          elemento.tipo= this.form.value.tipo;
        }
        this.visible = false;
        this.nzMessageService.success('El registro fue actualizado con exito!');
      }, (error) => {
        this.nzMessageService.error('El registro no pudo ser actualizado, por favor intente de nuevo');
        console.error(error);
      })
    }
  }

  modificar(item:Vehiculos):void{
    this.accion=false;
    this.idModificar=item.id;
    this.visible = true;
    this.form=this.formBuilder.group({
      placa: [item.placa],
      color: [item.color],
      marca: [item.marca],
      tipo: [item.tipo]
    })
  }

  submitForm(): void {
    for (const i in this.form?.controls) {
      this.form?.controls[i].markAsDirty();
      this.form?.controls[i].updateValueAndValidity();
    }
  }
}


