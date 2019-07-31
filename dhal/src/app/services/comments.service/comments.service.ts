import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Comments} from '../../shared/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url = environment.userUrl;
  reqOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };
  constructor(private http: HttpClient) { }

  public postNewComment(comment: Comments) {
    console.log(comment);
    return this.http.post<Comments>(`${this.url}/comment`, comment, this.reqOptions);
  }

  public getAllComments( comment: Comments) {
    console.log(comment);
    return this.http.post<Comments>(`${this.url}/comments`, comment, this.reqOptions);
  }

  public getCommentsById

}
