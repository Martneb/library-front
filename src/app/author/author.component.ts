import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Author} from '../model/author';
import {Book} from '../model/book';
import {Observable} from "rxjs";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: Author[] = [];
  author: Author = {
    uuid: '',
    name: '',
    birthDate: '',
    books: []
  };

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  getAllAuthors(): void {
    this.apiService.getAllAuthors().subscribe(
      res => {
        this.authors = res;
        for (let author of this.authors) {
          this.populateAuthorWithBooks(author)
        }
        // TODO: for every author get the books by authorID
      },
      error => {
        alert('No authors found, something went wrong');
      }
    );
  }

  saveAuthor(author: Author): void {
    // Sending object of Author that has only the "name"
    this.apiService.saveAuthor(author).subscribe(
      res => {
        // getting back the object of Author with uuid and name
        // adding that object to the list of authors
        this.authors.push(res);
        this.author.name = '';
      },
      err => {
        alert('Author couldn\'t be saved');
      }
    );
  }

  deleteAuthor(id: String): void {
    this.apiService.deleteAuthor(id).subscribe(
      res => {
        console.log("Removed author with ID: " + id)
        this.getAllAuthors()
      },
      error => {
        console.log("Couldn\'t remove author with ID: " + id)
      }
    );
  }

  // this method given the id returns a list of book for passed author id
  /*
  getAllAuthorsBooks(id:String): Book[] {
    let books: Book[];
    this.apiService.getBooksByAUTHORID(id).subscribe(
      res =>{
        res;
      },
      error => {
        books = []
      }
    );

  }

   */

  // This method, given the author, retrieves by the id the list of books associated with it  and puts it in the variable books of the author
  populateAuthorWithBooks(author: Author): void {
    this.apiService.getBooksByAUTHORID(author.uuid).subscribe(
      res => {
        author.books = res;
      },
      error => {
        console.log("Something went wrong while retrieving books for author " + author.name)
      }
    )
  }
}
