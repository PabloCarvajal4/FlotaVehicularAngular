import { Component } from '@angular/core';
import { Rutas } from 'src/app/api/models';
import { RutasControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html'
})
export class RutasComponent {
  listOfData: Rutas[] = [ ];
  http: any;
  form!: FormGroup;
  visible = false;
  accion:boolean=true;
  idModificar:string='';
  constructor(
    private rutasService:RutasControllerService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit():void{
    this.getData();

  }

  getData():void{
    this.rutasService.find().subscribe(data=>this.listOfData=data);
  }
  }
