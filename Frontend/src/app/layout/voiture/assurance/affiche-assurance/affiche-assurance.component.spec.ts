import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheAssuranceComponent } from './affiche-assurance.component';

describe('AfficheAssuranceComponent', () => {
  let component: AfficheAssuranceComponent;
  let fixture: ComponentFixture<AfficheAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
