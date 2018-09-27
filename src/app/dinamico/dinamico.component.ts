import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemosComponent } from '../demos/demos.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { PersonasComponent } from '../personas/personas.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [HomeComponent, DemosComponent, CalculadoraComponent,
    PersonasComponent]
})
export class DinamicoComponent implements OnInit {
  private menu = [
    {texto: 'Personas', componente: PersonasComponent},
    {texto: 'Inicio', componente: HomeComponent },
    {texto: 'Demos', componente: DemosComponent},
    {texto: 'Calculadora', componente: CalculadoraComponent},
  ];
  private seleccionado = this.menu[0].componente;

  constructor() { }

  public get Menu() { return this.menu; }
  public get Seleccionado() { return this.seleccionado; }

  ngOnInit() {
  }

  public seleccionar(indice: number) {
    if (0 <= indice && indice < this.menu.length) {
      this.seleccionado = this.menu[indice].componente;
    }
  }
}
