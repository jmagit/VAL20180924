import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  private nombre: string = 'mundo';
  public get Nombre(): string { return this.nombre; }
  public set Nombre(valor: string) { this.nombre = valor; }

  listado = [
    {id: 1, nombre: 'Madrid'},
    {id: 2, nombre: 'barcelona'},
    {id: 3, nombre: 'VALECIA'},
    {id: 4, nombre: 'CastellóN'},
  ];
  idProvincia = 3;

  resutado: string = '';
  visible = true;
  estetica = { error: false, importante: true, urgente: true };

  fontsize = 24;

  constructor(public notify: NotificationService) { }

  ngOnInit() {
  }

  public saluda() {
    this.resutado = `Hola ${this.Nombre}`;
  }
  public despide() {
    this.resutado = `Adios ${this.Nombre}`;
  }
  public di(algo: string) {
    this.resutado = `Dice ${algo}`;
  }

  public cambia() {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  public calcula(a: number, b: number): number {
    return a + b;
  }

  public add(provincias: string) {
    if (!provincias) { return; }
    const key: number = this.listado.length ?
      (this.listado[this.listado.length - 1].id + 1) : 1;
    this.listado.push({id: key, nombre: provincias});
    this.idProvincia = key;
  }

        // tslint:disable:member-ordering
        idiomas = [
          { codigo: 'es', region: 'España' },
          { codigo: 'pt', region: 'Portuges' },
          { codigo: 'en-US', region: 'USA' }
        ];
        idioma = this.idiomas[0].codigo;
        resultados: any[] = [];
        valCalculadora = 666;
        // tslint:enable:member-ordering
        ponResultado(origen: string, valor: any) {
          this.resultados.push({
            pos: this.resultados.length + 1,
            origen: origen,
            valor: valor
          });
        }

}
