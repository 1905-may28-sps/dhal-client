import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {User} from '../../shared/model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  signInUser() {

  this.userService.logIn(this.user).subscribe(
    resp => {
      console.log(resp);
      console.log(this.user);
     /* this.user.id = 0;
      this.user.email = '';
      this.user.firstName = '';
    */
      this.user = new User();
      this.router.navigateByUrl('/dashboard');


    });


}

}
