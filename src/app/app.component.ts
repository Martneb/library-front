import {Component, OnInit} from '@angular/core';
import {Book} from "./model/book";
import {ApiService} from "./shared/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'library-front';
  books: Book[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.apiService.getAllBooks().subscribe(
      res =>  {
        this.books = res;
      },
      err => {
        console.log("AN error has happened when getting books")
        alert("AN error has happened when getting books")
      }
    )
  }
}
