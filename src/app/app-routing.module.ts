import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { TransportistasComponent } from './pages/transportistas/transportistas.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { RutasControllerService } from './api/services';
import { RecorridosComponent } from './pages/recorridos/recorridos.component';
import { PosicionesComponent } from './pages/posiciones/posiciones.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: '', component:MenuComponent,
    children:[
      {path:'welcome',component:WelcomeComponent},
      {path:'transportistas',component:TransportistasComponent},
      {path:'recorridos',component:RecorridosComponent},
      {path:'rutas',component:RutasComponent},
      {path:'posiciones',component:PosicionesComponent},
      {path:'vehiculos',component:VehiculosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
