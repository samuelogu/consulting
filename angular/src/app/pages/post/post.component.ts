import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  route = inject(ActivatedRoute)
  id: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    
  }

}
