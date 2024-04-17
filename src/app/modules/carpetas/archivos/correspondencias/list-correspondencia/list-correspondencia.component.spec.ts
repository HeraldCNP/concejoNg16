import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCorrespondenciaComponent } from './list-correspondencia.component';

describe('ListCorrespondenciaComponent', () => {
  let component: ListCorrespondenciaComponent;
  let fixture: ComponentFixture<ListCorrespondenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCorrespondenciaComponent]
    });
    fixture = TestBed.createComponent(ListCorrespondenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
