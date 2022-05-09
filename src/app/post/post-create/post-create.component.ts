import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPost: string = "No Content";
  newPost2: string = "No Content";
  enteredValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(post: HTMLTextAreaElement){
    this.newPost = post.value;
  }
  onAddSecondPost(){
    this.newPost2 = this.enteredValue;
  }


}
