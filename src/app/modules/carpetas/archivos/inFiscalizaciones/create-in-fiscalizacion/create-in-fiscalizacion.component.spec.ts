import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInFiscalizacionComponent } from './create-in-fiscalizacion.component';

describe('CreateInFiscalizacionComponent', () => {
  let component: CreateInFiscalizacionComponent;
  let fixture: ComponentFixture<CreateInFiscalizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInFiscalizacionComponent]
    });
    fixture = TestBed.createComponent(CreateInFiscalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
