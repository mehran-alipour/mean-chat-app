import { Component } from '@angular/core';
import { Post } from "./post/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-chat-app';
  posts: Post[] = [];

  onPostAdded(p:Post){
    this.posts.push(p);
  }
}
