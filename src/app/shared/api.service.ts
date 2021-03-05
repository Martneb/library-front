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
  private GET_ALL_BOOK = `${this.BASE_URL}book/all`
  private POST_BOOK = `${this.BASE_URL}book/save`
  //AUTHOR
  private GET_ALL_AUTHORS = `${this.BASE_URL}author/all`
  private POST_AUTHOR = `${this.BASE_URL}author/save`
  private DEL_BOOK = `${this.BASE_URL}book/delete/`
  private DEL_AUTHOR = `${this.BASE_URL}author/delete/`
  private GET_BOOKS_OF_AUTHOR = `${this.BASE_URL}author/getBookByAuthorId/`

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.GET_ALL_BOOK)
  }

  saveBook(book:Book): Observable<Book> {
    return this.http.post<Book>(this.POST_BOOK,book)
  }

  getAllAuthors(): Observable<Author[]>{
    return this.http.get<Author[]>(this.GET_ALL_AUTHORS)
  }

  saveAuthor(author:Author): Observable<Author>{
    return this.http.post<Author>(this.POST_AUTHOR,author)
  }

  deleteBook(id:String):Observable<Book>{
    return this.http.delete<Book>(this.DEL_BOOK+id)
  }

  deleteAuthor(id:String):Observable<Author>{
    return this.http.delete<Author>(this.DEL_AUTHOR+id)
  }

  getBooksByAUTHORID(id:String): Observable<Book[]>{
    return this.http.get<Book[]>(this.GET_BOOKS_OF_AUTHOR+id)
  }
}
