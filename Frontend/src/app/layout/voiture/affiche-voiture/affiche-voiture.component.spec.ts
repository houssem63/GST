import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheVoitureComponent } from './affiche-voiture.component';

describe('AfficheVoitureComponent', () => {
  let component: AfficheVoitureComponent;
  let fixture: ComponentFixture<AfficheVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
