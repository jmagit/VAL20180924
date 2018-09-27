import { Injectable } from '@angular/core';
import { LoggerService } from '../../indra-core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private listado: Array<string> = [];

  constructor(private out: LoggerService) { }

  public get Listado() { return Object.assign([], this.listado); }

  public add(msg: string) {
    if (msg) {
      this.listado.push(msg);
      this.out.error(msg);
    } else {
      this.out.error('Falta el mensaje.');
    }
  }

  public remove(index: number) {
    if (0 <= index && index < this.listado.length) {
      this.listado.splice(index, 1);
    } else {
      this.out.error('Index out of range.');
    }
  }

  public clear() {
    if (this.listado.length > 0) {
      this.listado.splice(0);
    }
  }
}
