import { PostService } from './../post.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { title } from 'process';

@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']
}
)
export class PostCreateComponent{

  constructor(public postService : PostService){}

onAddPost(form : NgForm){
  if(form.invalid){
    return;
  }
 this.postService.addPost(form.value.title , form.value.content);
 form.resetForm();

}

}
