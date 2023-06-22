import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, computed, effect, inject, signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { StateService } from 'src/app/services/state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prueba-uno',
  templateUrl: './prueba-uno.component.html',
  styleUrls: ['./prueba-uno.component.scss'],
  providers: [WeatherService],
})
export class PruebaUnoComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  private nuevaForma = inject(WeatherService); // Solo Angular 16 en adelante
  private stateService = inject(StateService); // Solo Angular 16 en adelante
  color: string = 'red';
  colorSignal = signal<string>('green');
  colorComputed = computed(() => {return this.colorSignal() == 'yellow' ? 'orange' : 'green'});
  subs: Subscription;
  date: Date = new Date();

  constructor(private antiguo: WeatherService) {
    console.log('constructor');
    effect(() => {
      console.log('color', this.colorSignal());
    });
  } // Versiones anteriores a Angular 16

  changeColor() {
    this.color = 'blue';
    this.colorSignal.set('yellow');
    this.stateService.changeColor.emit('purple');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.subs.unsubscribe();
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.subs = this.stateService.showMessages.subscribe((show: boolean) => {
      if (show) {
        alert('Hola');
      }
    });
    console.log(this.antiguo.getWeather('Reconquista'));
    console.log(this.nuevaForma.getWeather('Lima'));
  }



}
