import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMinutaComponent } from './update-minuta.component';

describe('UpdateMinutaComponent', () => {
  let component: UpdateMinutaComponent;
  let fixture: ComponentFixture<UpdateMinutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMinutaComponent]
    });
    fixture = TestBed.createComponent(UpdateMinutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
