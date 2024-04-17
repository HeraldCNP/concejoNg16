import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInfComisionComponent } from './create-inf-comision.component';

describe('CreateInfComisionComponent', () => {
  let component: CreateInfComisionComponent;
  let fixture: ComponentFixture<CreateInfComisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInfComisionComponent]
    });
    fixture = TestBed.createComponent(CreateInfComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
