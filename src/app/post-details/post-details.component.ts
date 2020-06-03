import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postID;
  post;
  comments;
  searchKeyword;
  constructor(private route: ActivatedRoute,public configService: ConfigService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postID = params.get('postID');
      this.getPostDetail();
      this.getPostComments();
    });
  }

  getPostDetail(){
    this.configService.getPostDetail(this.postID)
    .subscribe((data) => this.post = data);
  }

  getPostComments(){
    this.configService.getPostComments(this.postID)
    .subscribe((data) => this.comments = data);
  }

}
