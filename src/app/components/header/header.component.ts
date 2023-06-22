import { Component, OnInit, inject } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  color: string = '#f11d41';
  private stateService = inject(StateService); // Solo Angular 16 en adelante
  private router = inject(Router); // Solo Angular 16 en adelante

  ngOnInit(): void {
    this.stateService.changeColor.subscribe((color: string) => {
      this.color = color;
    });
  }

  goToPage(page: string) {
    this.stateService.showMessages.emit(true);
    this.router.navigate([page]);
  }
}
