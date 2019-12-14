import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.component";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpPostService {
  constructor(private http: HttpClient) {}

  /** Get All Posts */
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>("http://localhost:8080/api/posts");
  }
}
