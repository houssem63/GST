import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMotdepasseComponent } from './change-motdepasse.component';

describe('ChangeMotdepasseComponent', () => {
  let component: ChangeMotdepasseComponent;
  let fixture: ComponentFixture<ChangeMotdepasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeMotdepasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMotdepasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
