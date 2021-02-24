import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFamilyViewComponent } from './article-family-view.component';

describe('ArticleFamilyViewComponent', () => {
  let component: ArticleFamilyViewComponent;
  let fixture: ComponentFixture<ArticleFamilyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFamilyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFamilyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
