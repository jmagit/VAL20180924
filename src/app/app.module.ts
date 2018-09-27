import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndraCoreModule, LoggerService, ERROR_LEVEL } from '../indra-core';
import { FacturacionModule } from './facturacion/facturacion.module';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { NotificationComponent } from './notification/notification.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PERSONAS_COMPONENTS } from './personas/personas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    NotificationComponent,
    DinamicoComponent,
    CalculadoraComponent,
    PERSONAS_COMPONENTS
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    IndraCoreModule, FacturacionModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
