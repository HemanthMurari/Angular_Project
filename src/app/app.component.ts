import { Component } from '@angular/core';
import { LogService } from './services/log.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  log: any;

  constructor(private logService: LogService, private router: Router) {
    this.log = logService;
    this.router = router;
  }

  ngAfterViewInit() {
    if (!this.log.getStatus()) {
      this.router.navigate(['login']);
    } else {
      if (this.log.usertype == 'admin') {
        this.router.navigate(['admin/home']);
      } else {
        this.router.navigate(['user/home']);
      }
    }
  }
}
