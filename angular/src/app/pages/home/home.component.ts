import { Component, NgModule, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post/post.service';
import { Posts } from '../../interfaces/posts.interface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
// mvc
// model view controller

  postService = inject(PostService)

  input = "";
  text: string = "The boy is going to school"
  posts: Posts[] = [];
  thumbnails: any = [];

  ngOnInit(): void {
    this.fetchPosts();
  }

  changeText() {
    this.text = !this.input ? this.text : this.input
  }

  fetchPosts() {
    this.postService.getPost().subscribe(res => {
      this.posts = res.splice(-10);
      this.fetchThumbnails()
    })
  }

  fetchThumbnails() {
    this.postService.getThumbnails().subscribe(res => {
      this.thumbnails = res;
      this.thumbnails = this.thumbnails.splice(-10);
      this.posts.map((post, index) => {
        this.posts[index].thumbnail = this.thumbnails[index].thumbnailUrl
      }) 
    })
  }

}
