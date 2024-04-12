import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResolucionComponent } from './update-resolucion.component';

describe('UpdateResolucionComponent', () => {
  let component: UpdateResolucionComponent;
  let fixture: ComponentFixture<UpdateResolucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateResolucionComponent]
    });
    fixture = TestBed.createComponent(UpdateResolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
