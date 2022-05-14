import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService{
  private posts: Post[] = [];
  private postUpdate = new Subject<Post[]>()


  getPosts() {
    return [...this.posts];
  }

  getPostsUpdate(){
    return this.postUpdate.asObservable();
  }

  addPost(t: string, c:string){
    const post: Post ={title: t, content: c};
    this.posts.push(post);
    this.postUpdate.next([...this.posts])
  }

  addPostObj(post: Post){
    this.posts.push(post)
  }

}
