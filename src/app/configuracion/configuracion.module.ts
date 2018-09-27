import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { CambiaPasswordComponent } from './cambia-password/cambia-password.component';
import { Routes, RouterModule } from '@angular/router';

const rutes: Routes = [
  {path: '', component: ConfiguracionComponent, pathMatch: 'full' },
  {path: 'datos', component: DatosPersonalesComponent},
  {path: 'cambia', component: CambiaPasswordComponent},
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(rutes),
  ],
  declarations: [ConfiguracionComponent, DatosPersonalesComponent, CambiaPasswordComponent]
})
export class ConfiguracionModule { }
