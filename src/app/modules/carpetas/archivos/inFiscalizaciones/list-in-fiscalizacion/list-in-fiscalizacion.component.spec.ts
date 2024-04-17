import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInFiscalizacionComponent } from './list-in-fiscalizacion.component';

describe('ListInFiscalizacionComponent', () => {
  let component: ListInFiscalizacionComponent;
  let fixture: ComponentFixture<ListInFiscalizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInFiscalizacionComponent]
    });
    fixture = TestBed.createComponent(ListInFiscalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
