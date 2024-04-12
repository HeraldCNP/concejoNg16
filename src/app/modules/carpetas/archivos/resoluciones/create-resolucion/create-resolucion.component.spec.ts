import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResolucionComponent } from './create-resolucion.component';

describe('CreateResolucionComponent', () => {
  let component: CreateResolucionComponent;
  let fixture: ComponentFixture<CreateResolucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateResolucionComponent]
    });
    fixture = TestBed.createComponent(CreateResolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
