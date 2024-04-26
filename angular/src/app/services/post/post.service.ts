import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  http = inject(HttpClient)
  url = 'https://jsonplaceholder.typicode.com';

  constructor() { }

  getPost() {
    return this.http.get(`${this.url}/posts`)
  }

}
