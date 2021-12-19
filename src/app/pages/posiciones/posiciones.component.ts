import { Component } from '@angular/core';
import { Posiciones } from 'src/app/api/models';
import { PosicionesControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html'
})
export class PosicionesComponent {
  listOfData: Posiciones[] = [ ];
  http: any;
  form!: FormGroup;
  visible = false;
  accion:boolean=true;
  idModificar:string='';
  constructor(
    private posicionesService:PosicionesControllerService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit():void{
    this.getData();

  }

  getData():void{
    this.posicionesService.find().subscribe(data=>this.listOfData=data);
  }
  }