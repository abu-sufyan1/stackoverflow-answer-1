import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { BookService } from './book.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <ul>
      <li *ngFor ="let read of books">
        <a >
        <img src='{{read}}' alt="">
        </a>
      </li>
    </ul>
  `,
})
export class App {
  name = 'Angular';
  books: String[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getAll();
  }
}

bootstrapApplication(App);
