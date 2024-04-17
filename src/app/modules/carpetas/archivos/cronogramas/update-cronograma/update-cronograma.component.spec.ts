import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCronogramaComponent } from './update-cronograma.component';

describe('UpdateCronogramaComponent', () => {
  let component: UpdateCronogramaComponent;
  let fixture: ComponentFixture<UpdateCronogramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCronogramaComponent]
    });
    fixture = TestBed.createComponent(UpdateCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
