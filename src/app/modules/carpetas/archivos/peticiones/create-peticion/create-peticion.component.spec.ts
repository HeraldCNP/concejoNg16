import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePeticionComponent } from './create-peticion.component';

describe('CreatePeticionComponent', () => {
  let component: CreatePeticionComponent;
  let fixture: ComponentFixture<CreatePeticionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePeticionComponent]
    });
    fixture = TestBed.createComponent(CreatePeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
