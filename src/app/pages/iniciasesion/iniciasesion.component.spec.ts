import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciasesionComponent } from './iniciasesion.component';

describe('IniciasesionComponent', () => {
  let component: IniciasesionComponent;
  let fixture: ComponentFixture<IniciasesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciasesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciasesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  (function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()
});
