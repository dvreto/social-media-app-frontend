import { Posts } from './app.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-media-app';
  firstName = 'daniel';
  lastName = 'vretoski';
  avatar = 'avatar';

  posts: Posts[] = [];



  postMessage(form: NgForm): void {
    console.log(form.value.description);
    let post: Posts = new Posts(this.firstName, this.lastName, this.avatar, form.value.description )
    this.posts.push(post);

    
    
    
  }


}

