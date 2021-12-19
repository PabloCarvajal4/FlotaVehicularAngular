import { Component } from '@angular/core';
import { Recorridos } from 'src/app/api/models';
import { RecorridoControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html'
})
export class RecorridosComponent {
  listOfData: Recorridos[] = [ ];
  http: any;
  form!: FormGroup;
  visible = false;
  accion:boolean=true;
  idModificar:string='';
  
  constructor(
    private recorridosService:RecorridoControllerService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit():void{
    this.getData();

  }

  getData():void{
    this.recorridosService.find().subscribe(data=>this.listOfData=data);
  }
  }