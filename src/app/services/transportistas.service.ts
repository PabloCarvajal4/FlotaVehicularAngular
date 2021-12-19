import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transportistas, TransportistasWithoutID } from '../models/transportistas';

const ENDPOINT = 'transportistas';

@Injectable({
  providedIn: 'root'
})
export class TransportistasService {
  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllTransportistas(){
    return this.http.get<Transportistas[]>(`https://flotavehicular.herokuapp.com/${ENDPOINT}`)
  }

  //POST
  postTransportistas(transportistas:TransportistasWithoutID){
    return this.http.post(`https://flotavehicular.herokuapp.com/${ENDPOINT}`,transportistas);
  }

  //PUT
  putTransportistas(id:string,transportistas:TransportistasWithoutID){
    return this.http.put(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,transportistas)
  }

  //PATCH
  patchTransportistas(id:string,transportistas:TransportistasWithoutID){
    return this.http.patch(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`,transportistas)
  }

  //DELETE
deleteTransportistas(id:string){
    return this.http.delete(`https://flotavehicular.herokuapp.com/${ENDPOINT}/${id}`)
  }
}