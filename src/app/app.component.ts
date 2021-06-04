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

  posts: any[] = [];


  constructor(private postService: PostService) {
}
  


  postMessage(form: NgForm): void {
    
  }


}

