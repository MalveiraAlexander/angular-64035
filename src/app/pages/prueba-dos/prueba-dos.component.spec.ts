import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDosComponent } from './prueba-dos.component';

describe('PruebaDosComponent', () => {
  let component: PruebaDosComponent;
  let fixture: ComponentFixture<PruebaDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaDosComponent]
    });
    fixture = TestBed.createComponent(PruebaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
