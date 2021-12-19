import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculos, VehiculosWithoutID } from '../models/vehiculos';
const ENDPOINT = 'vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllVehiculos(){
    return this.http.get<Vehiculos[]>(`https://flotavehicular.herokuapp.com/${ENDPOINT}`)
  }

  //POST
  postVehiculos(vehiculos:VehiculosWithoutID){
    return this.http.post(`https://flotavehicular.herokuapp.com/${ENDPOINT}`,vehiculos);
  }

  //PUT
  putVehiculos(id:string,vehiculos:VehiculosWithoutID){
    return this.http.put(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,vehiculos)
  }

  //PATCH
  patchVehiculos(id:string,vehiculos:VehiculosWithoutID){
    return this.http.patch(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,vehiculos)
  }

  //DELETE
deleteVehiculos(id:string){
    return this.http.delete(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`)
  }
}

