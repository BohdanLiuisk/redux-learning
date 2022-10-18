import { Component, OnInit } from '@angular/core';
import { selectBookCollection, selectBooks } from './book-list/store/books.selectors';
import { GoogleBooksService } from './book-list/books.service';
import { Store } from '@ngrx/store';
import { addBook, loadBooks, removeBook, retrievedBookList } from './book-list/store/books.actions';
import { Observable } from 'rxjs';
import { Book } from './book-list/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public books$: Observable<Readonly<Book[]>> = this.store.select(selectBooks);
  public bookCollection$: Observable<Readonly<Book[]>> = this.store.select(selectBookCollection);

  constructor(private booksService: GoogleBooksService, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadBooks());
  }

  onAdd(bookId: string): void {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string): void {
    this.store.dispatch(removeBook({ bookId }));
  }
}
