import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { PersonaModelo } from 'src/app/Modelos/Personas/persona.modelo';
import { ServicioApiService } from 'src/app/Servicios/servicio-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {

  ListaPersonas : PersonaModelo[] = [];

  constructor(private serviApi: ServicioApiService, private router: Router) { }

  ngOnInit(): void {
  }

  ConsultarPersonas()
  {
     this.serviApi.consultarPersonas().subscribe((res)=>{
      console.log('prueba');
      if(res.mensaje.error == true)
      {
        Swal.fire({
          icon:'warning',
          title: 'Alert',
          text: `${res.mensaje.mensaje}`
         });
      }
      else{
        this.ListaPersonas = res.data;
        
        Swal.fire({
          icon:'success',
          title: 'Exito',
          text: ' Tus registros'
         });
        console.log("hay data")
      }
     });
  }

}
