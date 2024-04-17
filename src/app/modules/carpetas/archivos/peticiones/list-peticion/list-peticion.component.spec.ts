import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeticionComponent } from './list-peticion.component';

describe('ListPeticionComponent', () => {
  let component: ListPeticionComponent;
  let fixture: ComponentFixture<ListPeticionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPeticionComponent]
    });
    fixture = TestBed.createComponent(ListPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
