import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCorrespondenciaComponent } from './update-correspondencia.component';

describe('UpdateCorrespondenciaComponent', () => {
  let component: UpdateCorrespondenciaComponent;
  let fixture: ComponentFixture<UpdateCorrespondenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCorrespondenciaComponent]
    });
    fixture = TestBed.createComponent(UpdateCorrespondenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
