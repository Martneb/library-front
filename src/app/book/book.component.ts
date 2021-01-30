import {Component, OnInit} from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Book} from "../model/book";
import {Author} from "../model/author";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  //THIS SECTION IS FoR VARIABLES
  //create an array of books
  authors: Author[] = [];
  books: Book[] = [];
  book: Book = {
    uuid: "",
    name: "",
    description: "",
    releaseDate: "",
    authorID: "",
    quantity: "",
    pages: ""
  }

  //THIS SECTION IS FOR CONSTRUCTOR
  constructor(private apiService: ApiService) {
  }

  //THIS SECTION IS FOR METHODS (PRIORITY IMPLEMENTATION METHODS)
  ngOnInit(): void {
    this.getAllBooks();
    this.getAuthors();
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

  getAuthors(){
    this.apiService.getAllAuthors().subscribe(
      res =>{
        this.authors = res;
      },
      error => {
        alert("Couldn't find authors")
      }
    )
  }

  saveBook() {
    this.apiService.saveBook(this.book).subscribe(
      //Recieves book without UUID, returns Book with UUID
      res => {
        this.books.push(res);
        this.book.name = "";
        this.book.description = "";
        this.book.releaseDate = "";
        this.book.pages = "";
        this.book.quantity = "";
        this.book.authorID = "";
      },
      err => {
        alert("Book couldn't be saved")
      }
    )

  }
}
