import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeyComponent } from './create-ley.component';

describe('CreateLeyComponent', () => {
  let component: CreateLeyComponent;
  let fixture: ComponentFixture<CreateLeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLeyComponent]
    });
    fixture = TestBed.createComponent(CreateLeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
