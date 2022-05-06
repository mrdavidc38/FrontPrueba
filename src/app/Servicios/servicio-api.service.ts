import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PersonaModelo } from '../Modelos/Personas/persona.modelo';
import { RespuestaModelo } from '../Modelos/Respuesta/respuesta.modelo';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  private url=environment.basepersona;
  

  private autorizacion = btoa(environment.usuario+':'+environment.clave);
  header = new HttpHeaders({'Authorization':`${this.autorizacion}`,'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  consultarPersonas()
  {
    return this.http.get<RespuestaModelo<PersonaModelo[]>>(`${this.url}/ConsultarPersonas`,{headers:this.header});
  }
}