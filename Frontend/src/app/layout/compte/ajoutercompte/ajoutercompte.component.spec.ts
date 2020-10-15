import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercompteComponent } from './ajoutercompte.component';

describe('AjoutercompteComponent', () => {
  let component: AjoutercompteComponent;
  let fixture: ComponentFixture<AjoutercompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutercompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutercompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
