import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichePersonnelComponent } from './affiche-personnel.component';

describe('AffichePersonnelComponent', () => {
  let component: AffichePersonnelComponent;
  let fixture: ComponentFixture<AffichePersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichePersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
