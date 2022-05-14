import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPokemonesComponent } from './mis-pokemones.component';

describe('MisPokemonesComponent', () => {
  let component: MisPokemonesComponent;
  let fixture: ComponentFixture<MisPokemonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisPokemonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
