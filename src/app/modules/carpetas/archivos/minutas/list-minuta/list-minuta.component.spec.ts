import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMinutaComponent } from './list-minuta.component';

describe('ListMinutaComponent', () => {
  let component: ListMinutaComponent;
  let fixture: ComponentFixture<ListMinutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMinutaComponent]
    });
    fixture = TestBed.createComponent(ListMinutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
