import {RouterModule, Routes} from '@angular/router';
import { ListarPersonasComponent } from './components/ListarPersonas/listar-personas/listar-personas.component';

const APP_ROUTES: Routes = [
    {path:'ListarPersonas', component: ListarPersonasComponent},
    {path:'**', pathMatch: 'full', redirectTo:'FormularioPersona'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:false});