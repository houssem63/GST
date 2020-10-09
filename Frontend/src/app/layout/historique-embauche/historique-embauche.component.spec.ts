import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueEmbaucheComponent } from './historique-embauche.component';

describe('HistoriqueEmbaucheComponent', () => {
  let component: HistoriqueEmbaucheComponent;
  let fixture: ComponentFixture<HistoriqueEmbaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueEmbaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueEmbaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
