import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  http = inject(HttpClient)
  url = 'https://jsonplaceholder.typicode.com';

  constructor() { }

  getPost(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.url}/posts`)
  }

  getThumbnails() {
    return this.http.get(`${this.url}/photos`)
  }

}
