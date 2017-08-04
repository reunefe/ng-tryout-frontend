import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerTileComponent } from './owner-tile.component';

describe('OwnerTileComponent', () => {
  let component: OwnerTileComponent;
  let fixture: ComponentFixture<OwnerTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
