import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  //create an array of books
  books: Book[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  //create method getAllBooks() that makes use of apiService and on a successful response saves the books into an array
  getAllBooks(){
    this.apiService.getAllBooks().subscribe(
      res => {
        //write what you do with the response
        this.books = res;
      },
      err => {
        //write what you do in case of an error
        alert("Something went wrong while getting books")
      }
    );
  }
}
