import { Component, OnInit } from '@angular/core';
import {Comments} from '../../shared/comments';
import {CommentsService} from '../../services/comments.service/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: Comments;
  user = JSON.parse(localStorage.getItem('userData'));

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
  }

  postComment() {
    var date = new Date();
    var timestamp = date.getTime();
    this.comments.authorId = this.user.id;
    this.comments.commentRateId = String(timestamp);


    console.log('POSTING COMMENT');
    this.commentsService.postNewComment(this.comments).subscribe(
    resp => {
      var data = resp;
    }
      );
    error => {
      window.alert('Something went wrong, we could not post your comment, please try again!')
    }
  }
}
