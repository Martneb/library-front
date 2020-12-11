import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {Observable} from "rxjs";
import {Author} from "../model/author";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = `http://localhost:8080/`
  //BOOK
  private GET_ALL_BOOK = `${this.BASE_URL}/book/all`
  //AUTHOR
  private GET_ALL_AUTHORS = `${this.BASE_URL}/author/all`

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.GET_ALL_BOOK)
  }

  getAllAuthors(): Observable<Author[]>{
    return this.http.get<Author[]>(this.GET_ALL_AUTHORS)
  }
}
