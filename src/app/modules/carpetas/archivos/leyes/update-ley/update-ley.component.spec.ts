import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeyComponent } from './update-ley.component';

describe('UpdateLeyComponent', () => {
  let component: UpdateLeyComponent;
  let fixture: ComponentFixture<UpdateLeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLeyComponent]
    });
    fixture = TestBed.createComponent(UpdateLeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
