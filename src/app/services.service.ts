import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user'
import { Observable } from 'rxjs';
import { Book } from './model/book';


@Injectable({
    providedIn: 'root'
})
export class ServicesService{
    
    constructor(private http: HttpClient){ }
    selectedBook: Book;
    postUser(data:any):
    Observable<Object>{
        return this.http.post('http://localhost:8000/api/v1/users/register',data);
    }
    bookArr:Book[] =[];

    // setSearchData(data: Book) {
    //   this.bookArr.push(data);
    // }

    // getSearchData(): Book[]{
    //   return this.bookArr;
    // }
    // viewBook(book: Book) {
    //   this.selectedBook=book;
    // }

    // getBookToView(): Book | null {
    //   return this.selectedBook;
    // }
  addbook(book:Book):Observable<any>{
    console.log(book)
    return this.http.post('http://localhost:8082/api/v1/admin/books/add',book);
  }
  
}