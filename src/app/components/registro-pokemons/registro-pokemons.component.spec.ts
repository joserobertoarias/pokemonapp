import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPokemonsComponent } from './registro-pokemons.component';

describe('RegistroPokemonsComponent', () => {
  let component: RegistroPokemonsComponent;
  let fixture: ComponentFixture<RegistroPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
