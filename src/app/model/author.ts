import {Book} from "./book";

export interface Author{
  uuid: string;
  name: string;
  birthDate: string;
  books: Book[];
}
