import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Post } from "./post/post.component";

@Injectable({
  providedIn: "root"
})
export class HttpPostService {
  constructor(private http: HttpClient) {}

  /** Get All Posts */
  getPosts(): Observable<Array<Post>> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("user1:1")
      })
    };
    return this.http.get<Array<Post>>(
      "http://localhost:8080/api/posts",
      httpOptions
    );
  }

  /** Add Post */
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>("http://localhost:8080/api/posts", post);
  }
}
