import { forwardRef, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { MenuComponent } from './pages/menu/menu.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ApiInterceptor } from './pages/api.interceptor';
//import { EmpleadosComponent } from './pages/empleados/empleados.component';
//import { ProduccionComponent } from './pages/produccion/produccion.component';
//import { DistribucionComponent } from './pages/distribucion/distribucion.component';
//NGZORRO
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { ApiModule } from './api/api.module';
import { environment } from 'src/environments/environment';
import { TransportistasComponent } from './pages/transportistas/transportistas.component';
import { LoginComponent } from './pages/login/login.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { RecorridosComponent } from './pages/recorridos/recorridos.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { PosicionesComponent } from './pages/posiciones/posiciones.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

registerLocaleData(en);

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TransportistasComponent,
    LoginComponent,
    RutasComponent,
    RecorridosComponent,
    VehiculosComponent, 
    PosicionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    //NG ZORRO
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzIconModule,
    NzSelectModule,
    ApiModule.forRoot({ rootUrl: environment.API }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

