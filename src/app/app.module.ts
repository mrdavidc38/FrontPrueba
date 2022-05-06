import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.rutas';
import { ListarPersonasComponent } from './components/ListarPersonas/listar-personas/listar-personas.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NabvarComponent } from './components/NavBar/nabvar/nabvar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPersonasComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
