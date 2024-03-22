import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoComponent } from './list-tipo.component';

describe('ListTipoComponent', () => {
  let component: ListTipoComponent;
  let fixture: ComponentFixture<ListTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTipoComponent]
    });
    fixture = TestBed.createComponent(ListTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
