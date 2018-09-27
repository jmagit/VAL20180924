import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { LoggerService } from '../../indra-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Valencia';

  constructor(private notify: NotificationService, private out: LoggerService) {
    // this.notify.add('Demo de notificacion.');
    // this.notify.remove(0);
    // this.notify.remove(0);
    // this.out.error('Esto es un error');
    // this.out.warn('Esto es un warn');
    // this.out.info('Esto es un info');
    // this.out.log('Esto es un log');
  }

  ngOnInit() {
  }

}
