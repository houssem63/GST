import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteEditComponent } from './ajoute-edit.component';

describe('AjouteEditComponent', () => {
  let component: AjouteEditComponent;
  let fixture: ComponentFixture<AjouteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
