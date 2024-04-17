import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInFiscalizacionComponent } from './update-in-fiscalizacion.component';

describe('UpdateInFiscalizacionComponent', () => {
  let component: UpdateInFiscalizacionComponent;
  let fixture: ComponentFixture<UpdateInFiscalizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInFiscalizacionComponent]
    });
    fixture = TestBed.createComponent(UpdateInFiscalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
