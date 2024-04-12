import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeyComponent } from './list-ley.component';

describe('ListLeyComponent', () => {
  let component: ListLeyComponent;
  let fixture: ComponentFixture<ListLeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListLeyComponent]
    });
    fixture = TestBed.createComponent(ListLeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
