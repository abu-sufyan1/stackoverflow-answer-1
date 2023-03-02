import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  constructor() {
  }

  getAll(): String[] {
    return [
      'src/assets/images/books/book-1.jpg',
      'src/assets/images/books/book-1.jpg',
      'src/assets/images/books/book-1.jpg',
    ]
  }

}