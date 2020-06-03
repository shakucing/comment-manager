import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts;
  constructor(public configService: ConfigService) { }

  ngOnInit(): void {
    this.showPosts();
  }

  showPosts(){
    this.configService.getPosts()
    .subscribe((data) => this.posts = data);
  }

}
