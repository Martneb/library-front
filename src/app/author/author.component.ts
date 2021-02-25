import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Author} from '../model/author';
import {Book} from '../model/book';

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
}
