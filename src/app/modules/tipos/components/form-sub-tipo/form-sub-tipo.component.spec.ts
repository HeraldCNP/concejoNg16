import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubTipoComponent } from './form-sub-tipo.component';

describe('FormSubTipoComponent', () => {
  let component: FormSubTipoComponent;
  let fixture: ComponentFixture<FormSubTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSubTipoComponent]
    });
    fixture = TestBed.createComponent(FormSubTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
