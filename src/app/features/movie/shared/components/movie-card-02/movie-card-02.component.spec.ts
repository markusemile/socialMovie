import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCard02Component } from './movie-card-02.component';

describe('MovieCard02Component', () => {
  let component: MovieCard02Component;
  let fixture: ComponentFixture<MovieCard02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCard02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCard02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
