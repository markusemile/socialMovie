import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCard01Component } from './movie-card-01.component';

describe('MovieCard01Component', () => {
  let component: MovieCard01Component;
  let fixture: ComponentFixture<MovieCard01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCard01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCard01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
