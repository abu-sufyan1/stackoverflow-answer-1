import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getAll(): String[] {
    return [
      '../assets/images/books/book-1.jpg',
      '../assets/images/books/book-2.jpg',
      '../assets/images/books/book-3.jpg',
      '../assets/images/books/book-4.jpg',
      '../assets/images/books/book-5.jpg',
    ];
  }
}
