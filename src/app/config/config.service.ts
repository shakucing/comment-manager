import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {


  base_url = "https://jsonplaceholder.typicode.com/"
  posts_url = this.base_url+"posts";
  postDetail_url = this.posts_url + "/";
  postComment_url = this.base_url+"comments?postId=";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.posts_url);
  }

  getPostDetail(postID) {
    return this.http.get(this.postDetail_url+postID);
  }

  getPostComments(postID) {
    return this.http.get(this.postComment_url+postID);
  }
}