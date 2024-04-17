import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfComisionComponent } from './list-inf-comision.component';

describe('ListInfComisionComponent', () => {
  let component: ListInfComisionComponent;
  let fixture: ComponentFixture<ListInfComisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInfComisionComponent]
    });
    fixture = TestBed.createComponent(ListInfComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
