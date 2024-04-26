import { Component, NgModule, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
// mvc
// model view controller

  postService = inject(PostService)

  input = "";
  text = "The boy is going to school"

  changeText() {
    this.text = !this.input ? this.text : this.input
  }

  fetchPosts() {
    this.postService.getPost().subscribe(res => {
      console.log(res);
      
    })
  }

}
