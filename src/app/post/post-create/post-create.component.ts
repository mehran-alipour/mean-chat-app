import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { FormControl } from '@angular/forms';

import { PostsService } from '../posts.service';
// import {Post} from "../post.model";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  // newPost: string = "No Content";
  // newPost2: string = "No Content";
  // enteredValue = ''; // two way bonding
  // @Output() addPost = new EventEmitter<Post>();
  // title = new FormControl('');
  // content = new FormControl('');


  // enteredTitle = '';
  // enteredDesc = '';

  constructor(public postsServices: PostsService) { }

  ngOnInit(): void {
  }

  // onAddPost(post: HTMLTextAreaElement){
  //   this.newPost = post.value;
  // }
  // onAddSecondPost(){
  //   this.newPost2 = this.enteredValue;
  // }
  // onAddPost(){
  //   const postData:Post = {
  //     title: this.enteredTitle,
  //     content:  this.enteredDesc
  //   }
  //   this.enteredTitle = "";
  //   this.enteredDesc = "";
  //   this.addPost.emit(postData);
  // }
  // onSubmit(){
  //   const postData:Post = {
  //     title: this.title.value,
  //     content:  this.content.value
  //   }
  //   this.title.setValue("");
  //   this.content.setValue("");
  //   this.addPost.emit(postData);
  // }
  // onAddPost(form: NgForm){
  //   if(!form.invalid){
  //     const postData:Post = {
  //       title: form.value.title,
  //       content:  form.value.content
  //     }
  //     form.reset();
  //     this.addPost.emit(postData);
  //   }
  // }
  onAddPost(form: NgForm){
    if(!form.invalid){
      this.postsServices.addPost(form.value.title, form.value.content);
      form.resetForm();
    }
  }

}
