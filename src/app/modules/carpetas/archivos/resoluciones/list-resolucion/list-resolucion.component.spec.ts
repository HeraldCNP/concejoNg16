import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResolucionComponent } from './list-resolucion.component';

describe('ListResolucionComponent', () => {
  let component: ListResolucionComponent;
  let fixture: ComponentFixture<ListResolucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListResolucionComponent]
    });
    fixture = TestBed.createComponent(ListResolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
