import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheEtretienComponent } from './affiche-etretien.component';

describe('AfficheEtretienComponent', () => {
  let component: AfficheEtretienComponent;
  let fixture: ComponentFixture<AfficheEtretienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheEtretienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheEtretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
