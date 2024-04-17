import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCorrespondenciaComponent } from './create-correspondencia.component';

describe('CreateCorrespondenciaComponent', () => {
  let component: CreateCorrespondenciaComponent;
  let fixture: ComponentFixture<CreateCorrespondenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCorrespondenciaComponent]
    });
    fixture = TestBed.createComponent(CreateCorrespondenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
