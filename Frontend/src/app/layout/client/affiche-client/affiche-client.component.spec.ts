import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheClientComponent } from './affiche-client.component';

describe('AfficheClientComponent', () => {
  let component: AfficheClientComponent;
  let fixture: ComponentFixture<AfficheClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
