import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../interface/products';

@Injectable({
  providedIn: 'root',
})
export class HttpProdutcsService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:1200';

  getAllProducts(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<Iproducts> {
    return this.http.get<Iproducts>(`${this.apiUrl}/${id}`);
  }
}
