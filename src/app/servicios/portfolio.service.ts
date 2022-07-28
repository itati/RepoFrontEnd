import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
private base_url = environment.url
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    console.log("Esta es la función del servicio portfolio");
    return this.http.get('./assets/data/data.json');
  }
getPortafolio(){
  debugger;
  return this.http.get(`${this.base_url}/ver/personas`);
}
getPortafolioByID(id:number){
  debugger;
  return this.http.get(`${this.base_url}/buscar/${id}`);
}
}
