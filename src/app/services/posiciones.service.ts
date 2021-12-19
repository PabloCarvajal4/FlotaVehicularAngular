import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posiciones, PosicionesWithoutID } from '../models/posiciones';
const ENDPOINT = 'posiciones';
@Injectable({
  providedIn: 'root'
})
export class PosicionesService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllPosiciones(){
    return this.http.get<Posiciones[]>(`https://flotavehicular.herokuapp.com/${ENDPOINT}`)
  }

  //POST
  postPosiciones(posiciones:PosicionesWithoutID){
    return this.http.post(`https://flotavehicular.herokuapp.com/${ENDPOINT}`,posiciones);
  }

  //PUT
  putPosiciones(id:string,posiciones:PosicionesWithoutID){
    return this.http.put(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,posiciones)
  }

  //PATCH
  patchPosiciones(id:string,posiciones:PosicionesWithoutID){
    return this.http.patch(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,posiciones)
  }

  //DELETE
deletePosiciones(id:string){
    return this.http.delete(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`)
  }
}

