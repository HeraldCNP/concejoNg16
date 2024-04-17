import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCronogramaComponent } from './create-cronograma.component';

describe('CreateCronogramaComponent', () => {
  let component: CreateCronogramaComponent;
  let fixture: ComponentFixture<CreateCronogramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCronogramaComponent]
    });
    fixture = TestBed.createComponent(CreateCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
