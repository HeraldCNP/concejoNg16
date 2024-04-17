import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConvocatoriaComponent } from './update-convocatoria.component';

describe('UpdateConvocatoriaComponent', () => {
  let component: UpdateConvocatoriaComponent;
  let fixture: ComponentFixture<UpdateConvocatoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateConvocatoriaComponent]
    });
    fixture = TestBed.createComponent(UpdateConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
