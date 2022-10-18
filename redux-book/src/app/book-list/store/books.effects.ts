import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GoogleBooksService } from '../books.service';
import { catchError, EMPTY, mergeMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as BookActions from './books.actions';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private booksService: GoogleBooksService) { }

  loadBooks$ = createEffect(() => this.actions$.pipe(
      ofType(BookActions.loadBooks),
      mergeMap(() => this.booksService.getBooks()
        .pipe(
          map(books => BookActions.retrievedBookList({ books })),
          catchError(() => EMPTY)
        ))
    )
  );
}
