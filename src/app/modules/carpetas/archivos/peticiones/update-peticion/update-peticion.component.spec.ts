import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePeticionComponent } from './update-peticion.component';

describe('UpdatePeticionComponent', () => {
  let component: UpdatePeticionComponent;
  let fixture: ComponentFixture<UpdatePeticionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePeticionComponent]
    });
    fixture = TestBed.createComponent(UpdatePeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
