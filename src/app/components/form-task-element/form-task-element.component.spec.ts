import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaskElementComponent } from './form-task-element.component';

describe('FormTaskElementComponent', () => {
  let component: FormTaskElementComponent;
  let fixture: ComponentFixture<FormTaskElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormTaskElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTaskElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
