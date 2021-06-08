import { Posts } from './app.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from './post.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-media-app';
  firstName = 'daniel';
  lastName = 'vretoski';
  avatar = '../assets/pics/unnamed.png';
  ParagraphChecker:boolean = false;

  posts: Posts[] = [];

  postMessage(form: NgForm): void {
    console.log(form.value.description);
    
    if (form.value.description !="" && form.value.description !=null ) {
      
    this.ParagraphChecker = false;
    let post: Posts = new Posts(this.firstName, this.lastName, this.avatar, form.value.description )
    this.posts.push(post);
    form.resetForm();
    
    }
    else{
      this.ParagraphChecker = true;
    }
  }

  OnDelete(id: number){
    
    this.posts.splice(id,1);

}

OnUpdate(id: number){
  

}

}
