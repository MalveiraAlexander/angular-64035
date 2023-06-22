import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenUnoComponent } from './children-uno.component';

describe('ChildrenUnoComponent', () => {
  let component: ChildrenUnoComponent;
  let fixture: ComponentFixture<ChildrenUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrenUnoComponent]
    });
    fixture = TestBed.createComponent(ChildrenUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
