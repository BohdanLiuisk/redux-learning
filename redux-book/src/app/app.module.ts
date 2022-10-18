import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { booksReducer } from './book-list/store/books.reducer';
import { collectionReducer } from './book-list/store/collection.reducer';
import { BookListComponent } from './book-list/book-list/book-list.component';
import { BookCollectionComponent } from './book-list/book-collection/book-collection.component';
import { BooksEffects } from './book-list/store/books.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    EffectsModule.forRoot([BooksEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
