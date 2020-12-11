import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Author} from "../model/author";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: Author[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }
  getAllAuthors(){
    this.apiService.getAllAuthors().subscribe(
      res =>{
        this.authors = res;
      },
      error => {
        alert("No authors found, something went wrong")
      }
    );
  }
}
