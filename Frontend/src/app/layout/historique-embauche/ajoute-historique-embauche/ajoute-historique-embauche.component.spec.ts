import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteHistoriqueEmbaucheComponent } from './ajoute-historique-embauche.component';

describe('AjouteHistoriqueEmbaucheComponent', () => {
  let component: AjouteHistoriqueEmbaucheComponent;
  let fixture: ComponentFixture<AjouteHistoriqueEmbaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteHistoriqueEmbaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteHistoriqueEmbaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
