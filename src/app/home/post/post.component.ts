import { Component, OnInit } from "@angular/core";
import { HttpPostService } from "./http-post.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  constructor(private httpPostService: HttpPostService) {}

  ngOnInit() {}

  getPosts() {
    this.httpPostService.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }
}

export interface Post {
  id?: number;
  content?: string;
}
