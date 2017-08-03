import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatOverviewComponent } from './cat-overview.component';

describe('CatOverviewComponent', () => {
  let component: CatOverviewComponent;
  let fixture: ComponentFixture<CatOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
