import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireAssranceComponent } from './prestataire-assrance.component';

describe('PrestataireAssranceComponent', () => {
  let component: PrestataireAssranceComponent;
  let fixture: ComponentFixture<PrestataireAssranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestataireAssranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireAssranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
