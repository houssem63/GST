import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteEditPersonnelComponent } from './ajoute-edit-personnel.component';

describe('AjouteEditPersonnelComponent', () => {
  let component: AjouteEditPersonnelComponent;
  let fixture: ComponentFixture<AjouteEditPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteEditPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteEditPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
