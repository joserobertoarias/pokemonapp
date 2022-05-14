import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPokeCardComponent } from './mi-poke-card.component';

describe('MiPokeCardComponent', () => {
  let component: MiPokeCardComponent;
  let fixture: ComponentFixture<MiPokeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPokeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPokeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
