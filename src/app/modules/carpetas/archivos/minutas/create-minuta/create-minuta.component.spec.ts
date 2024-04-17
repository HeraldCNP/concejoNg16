import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMinutaComponent } from './create-minuta.component';

describe('CreateMinutaComponent', () => {
  let component: CreateMinutaComponent;
  let fixture: ComponentFixture<CreateMinutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMinutaComponent]
    });
    fixture = TestBed.createComponent(CreateMinutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
