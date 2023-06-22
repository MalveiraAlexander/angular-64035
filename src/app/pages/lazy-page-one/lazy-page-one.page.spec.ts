import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyPageOnePage } from './lazy-page-one.page';

describe('LazyPageOnePage', () => {
  let component: LazyPageOnePage;
  let fixture: ComponentFixture<LazyPageOnePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyPageOnePage]
    });
    fixture = TestBed.createComponent(LazyPageOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

