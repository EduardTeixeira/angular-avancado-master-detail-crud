import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { Category } from "./category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiPath: string = 'api/categories';

  constructor(private _http: HttpClient) {

  }

  getAll(): Observable<Category[]> {

    return this._http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )

  }

  getById(id: number): Observable<Category> {

    const url = `${this.apiPath}/${id}`;

    return this._http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )

  }

  create(category: Category): Observable<Category> {

    return this._http.post(this.apiPath, category).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )

  }

  update(category: Category): Observable<Category> {

    const url = `${this.apiPath}/${category.id}`;

    return this._http.put(url, category).pipe(
      catchError(this.handleError),
      map(() => category)
    )

  }

  delete(id: number): Observable<any> {

    const url = `${this.apiPath}/${id}`;

    return this._http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )

  }

  private jsonDataToCategories(jsonData: any[]): Category[] {

    const categories: Category[] = [];

    jsonData.forEach(element => categories.push(element as Category));

    return categories;

  }

  private jsonDataToCategory(jsonData: any): Category {

    return jsonData as Category;

  }

  private handleError(error: any): Observable<any> {

    console.log("ERRO NA REQUISIÇÃO ::: ", error);

    return throwError(error);

  }

}