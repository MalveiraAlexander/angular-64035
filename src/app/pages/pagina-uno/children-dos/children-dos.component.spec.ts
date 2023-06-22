import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenDosComponent } from './children-dos.component';

describe('ChildrenDosComponent', () => {
  let component: ChildrenDosComponent;
  let fixture: ComponentFixture<ChildrenDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrenDosComponent]
    });
    fixture = TestBed.createComponent(ChildrenDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
