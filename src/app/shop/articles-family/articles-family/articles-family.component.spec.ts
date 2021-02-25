import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFamilyComponent } from './articles-family.component';

describe('ArticlesFamilyComponent', () => {
  let component: ArticlesFamilyComponent;
  let fixture: ComponentFixture<ArticlesFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
