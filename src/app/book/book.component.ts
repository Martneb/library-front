import {Component, OnInit} from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  //THIS SECTION IS FoR VARIABLES
  //create an array of books
  books: Book[] = [];
  book: Book = {
    uuid: "",
    name: "",
    description: "",
    releaseDate: "",
    authorIDs: [],
    quantity: "",
    pages: ""
  }

  //THIS SECTION IS FOR CONSTRUCTOR
  constructor(private apiService: ApiService) {
  }

  //THIS SECTION IS FOR METHODS (PRIORITY IMPLEMENTATION METHODS)
  ngOnInit(): void {
    this.getAllBooks();
  }

  //create method getAllBooks() that makes use of apiService and on a successful response saves the books into an array
  getAllBooks() {
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

  saveBook() {
    this.apiService.saveBook(this.book).subscribe(
      //Recieves book without UUID, returns Book with UUID
      res => {
        this.book = res;
      },
      err => {
        alert("Book couldn't be saved")
      }
    )

  }
}
