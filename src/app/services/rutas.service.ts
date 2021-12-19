import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rutas, RutasWithoutID } from '../models/rutas';
const ENDPOINT = 'rutas';
@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllRutas(){
    return this.http.get<Rutas[]>(`https://flotavehicular.herokuapp.com/${ENDPOINT}`)
  }

  //POST
  postRutas(rutas:RutasWithoutID){
    return this.http.post(`https://flotavehicular.herokuapp.com/${ENDPOINT}`,rutas);
  }

  //PUT
  putRutas(id:string,rutas:RutasWithoutID){
    return this.http.put(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,rutas)
  }

  //PATCH
  patchRutas(id:string,rutas:RutasWithoutID){
    return this.http.patch(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,rutas)
  }

  //DELETE
deleteRutas(id:string){
    return this.http.delete(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`)
  }
}
