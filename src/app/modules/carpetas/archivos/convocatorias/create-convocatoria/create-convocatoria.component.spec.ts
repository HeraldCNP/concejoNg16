import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConvocatoriaComponent } from './create-convocatoria.component';

describe('CreateConvocatoriaComponent', () => {
  let component: CreateConvocatoriaComponent;
  let fixture: ComponentFixture<CreateConvocatoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateConvocatoriaComponent]
    });
    fixture = TestBed.createComponent(CreateConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
