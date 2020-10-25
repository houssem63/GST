import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntretienComponent } from './edit-entretien.component';

describe('EditEntretienComponent', () => {
  let component: EditEntretienComponent;
  let fixture: ComponentFixture<EditEntretienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEntretienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
