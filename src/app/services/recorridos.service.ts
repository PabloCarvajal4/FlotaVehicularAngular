import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recorridos, RecorridosWithoutID } from '../models/recorridos';
const ENDPOINT = 'recorridos';

@Injectable({
  providedIn: 'root'
})
export class RecorridosService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllRecorridos(){
    return this.http.get<Recorridos[]>(`https://flotavehicular.herokuapp.com/${ENDPOINT}`)
  }

  //POST
  postRecorridos(recorridos:RecorridosWithoutID){
    return this.http.post(`https://flotavehicular.herokuapp.com/${ENDPOINT}`,recorridos);
  }

  //PUT
  putRecorridos(id:string,recorridos:RecorridosWithoutID){
    return this.http.put(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,recorridos)
  }

  //PATCH
  patchRecorridos(id:string,recorridos:RecorridosWithoutID){
    return this.http.patch(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,recorridos)
  }

  //DELETE
deleteRecorridos(id:string){
    return this.http.delete(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`)
  }
}
