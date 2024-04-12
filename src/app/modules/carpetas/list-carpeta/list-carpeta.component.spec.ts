import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarpetaComponent } from './list-carpeta.component';

describe('ListCarpetaComponent', () => {
  let component: ListCarpetaComponent;
  let fixture: ComponentFixture<ListCarpetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCarpetaComponent]
    });
    fixture = TestBed.createComponent(ListCarpetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
