import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUnoComponent } from './pagina-uno.component';

describe('PaginaUnoComponent', () => {
  let component: PaginaUnoComponent;
  let fixture: ComponentFixture<PaginaUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaUnoComponent]
    });
    fixture = TestBed.createComponent(PaginaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
