import { Injectable } from '@angular/core';
import { IAnimal } from '../types/general.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }

  remove(id: Number) {
    return this.http.delete<IAnimal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(this.apiUrl)
  }

  getItemById(id: number): Observable<IAnimal> {
    return this.http.get<IAnimal>(`${this.apiUrl}/${id}`);
  }
}
