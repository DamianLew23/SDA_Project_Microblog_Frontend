import { Component, OnInit, NgModule } from "@angular/core";
import { HttpPostService } from "./http-post.service";
import { Post } from "./post/post.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private httpPostService: HttpPostService) {}

  ngOnInit() {
    this.getPosts();
  }

  newPostContent: string;

  newPost: Post = { contentText: this.newPostContent };

  myPosts: Array<Post>;

  getPosts() {
    this.httpPostService.getPosts().subscribe(posts => {
      console.log(posts);
      this.myPosts = posts;
    });
  }

  addPost() {
    this.httpPostService.addPost(this.newPost).subscribe(post => {
      console.log(post);
      this.getPosts();
    });
  }
}
