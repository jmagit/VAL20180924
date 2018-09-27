import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export class BaseDAOService<T> {
  protected baseUrl = environment.URL_WSREST;
  constructor(private http: HttpClient, entidad: string) {
    this.baseUrl += entidad;
  }
  query(): Observable<T> {
    return this.http.get<T>(this.baseUrl);
  }
  get(id: any): Observable<T> {
    return this.http.get<T>(this.baseUrl + '/' + id);
  }
  add(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, item);
  }
  change(item: T): Observable<T> {
    return this.http.put<T>(this.baseUrl, item);
  }
  remove(id: any): Observable<T> {
    return this.http.delete<T>(this.baseUrl + '/' + id);
  }
}
