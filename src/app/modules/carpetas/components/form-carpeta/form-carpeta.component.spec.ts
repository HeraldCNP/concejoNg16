import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCarpetaComponent } from './form-carpeta.component';

describe('FormCarpetaComponent', () => {
  let component: FormCarpetaComponent;
  let fixture: ComponentFixture<FormCarpetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCarpetaComponent]
    });
    fixture = TestBed.createComponent(FormCarpetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
