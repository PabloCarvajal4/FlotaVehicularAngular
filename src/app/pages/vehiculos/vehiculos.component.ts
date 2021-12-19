import { Component } from '@angular/core';
import { Vehiculos } from 'src/app/api/models';
import { VehiculosControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private vehiculosService:VehiculosControllerService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit():void{
    this.getData();

  }

  getData():void{
    this.vehiculosService.find().subscribe(data=>this.listOfData=data);
  }
  }

