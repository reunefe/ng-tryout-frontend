import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTileComponent } from './cat-tile.component';

describe('CatTileComponent', () => {
  let component: CatTileComponent;
  let fixture: ComponentFixture<CatTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
