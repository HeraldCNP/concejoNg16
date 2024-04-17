import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfComisionComponent } from './update-inf-comision.component';

describe('UpdateInfComisionComponent', () => {
  let component: UpdateInfComisionComponent;
  let fixture: ComponentFixture<UpdateInfComisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInfComisionComponent]
    });
    fixture = TestBed.createComponent(UpdateInfComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
