import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoComponent } from './create-tipo.component';

describe('CreateTipoComponent', () => {
  let component: CreateTipoComponent;
  let fixture: ComponentFixture<CreateTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTipoComponent]
    });
    fixture = TestBed.createComponent(CreateTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
