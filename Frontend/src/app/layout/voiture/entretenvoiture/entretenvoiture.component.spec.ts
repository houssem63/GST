import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretenvoitureComponent } from './entretenvoiture.component';

describe('EntretenvoitureComponent', () => {
  let component: EntretenvoitureComponent;
  let fixture: ComponentFixture<EntretenvoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntretenvoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntretenvoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
