import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCarpetaComponent } from './ver-carpeta.component';

describe('VerCarpetaComponent', () => {
  let component: VerCarpetaComponent;
  let fixture: ComponentFixture<VerCarpetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCarpetaComponent]
    });
    fixture = TestBed.createComponent(VerCarpetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
