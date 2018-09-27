import { Injectable } from '@angular/core';
import { LoggerService } from '../../indra-core';
import { NotificationService } from '../services/notification.service';
import { BaseDAOService } from '../base-code/dao.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasDAOService extends BaseDAOService<any> {
  constructor(http: HttpClient) {
    super(http, 'personas');
  }
}

@Injectable({
  providedIn: 'root'
})
export class PersonasViewModelService {
  protected modo: 'list' | 'add' | 'edit' | 'view' | 'delete' = 'list';
  protected listado: Array<any> = null;
  protected elemento: any = {};
  protected idOriginal: any = null;
  protected pk = 'id';

  constructor(protected out: LoggerService,
    protected notify: NotificationService) { }

  public get Modo() { return this.modo; }
  public get Listado() { return this.listado; }
  public get Elemento() { return this.elemento; }

  public list() {
    if (!this.listado) {
      this.listado = [
        {id: 1, nombre: 'Carmelo', apellidos: 'Coton', edad: 18},
        {id: 2, nombre: 'Pepito', apellidos: 'Grillo', edad: 155},
        {id: 3, nombre: 'Pedro', apellidos: 'Pica Piedra', edad: 51},
        {id: 4, nombre: 'Pablo', apellidos: 'Marmol', edad: 45},
      ];
    }
    this.modo = 'list';
  }

  public add() {
    this.elemento = {};
    this.modo = 'add';
  }
  public edit(key: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.idOriginal = key;
      this.modo = 'edit';
    } else {
      this.notify.add('Elemento no encontrado.');
    }
  }
  public view(key: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.modo = 'view';
    } else {
      this.notify.add('Elemento no encontrado.');
    }
  }
  public delete(key: any) {
    if (!window.confirm('¿Seguro?')) { return; }

    // tslint:disable-next-line:triple-equals
    const indice = this.listado.findIndex(item => item[this.pk] == key);
    if (indice >= 0) {
      this.listado.splice(indice, 1);
      this.list();
    } else {
      this.notify.add('Elemento no encontrado.');
    }
  }

  public cancel() {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }
  public send() {
    switch (this.modo) {
      case 'add':
        this.listado.push(this.elemento);
        this.cancel();
        break;
      case 'edit':
        // tslint:disable-next-line:triple-equals
        const indice = this.listado.findIndex(item => item[this.pk] == this.idOriginal);
        if (indice >= 0) {
          this.listado[indice] = this.elemento;
          this.cancel();
        } else {
          this.notify.add('Elemento no encontrado.');
        }
        break;
      case 'view':
        this.cancel();
        break;
    }
  }
}
