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
  ){}

  ngOnInit():void{
    this.getData();

  }

  getData():void{
    this.transportistasService.find().subscribe(data=>this.listOfData=data);
  }
  }
