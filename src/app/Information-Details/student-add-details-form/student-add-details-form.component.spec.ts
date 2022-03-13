import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddDetailsFormComponent } from './student-add-details-form.component';

describe('StudentAddDetailsFormComponent', () => {
  let component: StudentAddDetailsFormComponent;
  let fixture: ComponentFixture<StudentAddDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
