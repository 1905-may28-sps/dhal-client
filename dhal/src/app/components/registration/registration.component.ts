import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../shared/model';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UsersService, private rounter: Router) { }

  ngOnInit() {
  }

  registerUser() {
    console.log(this.user);
    this.userService.addUser(this.user).subscribe(
      resp => {
        console.log(resp);
        console.log(this.user);
        this.user.id = 0;
        this.user.email = '';
        this.user.firstName = '';
        this.user.lastName = '';
        this.user.username = '';
        this.user.password = '';
        this.rounter.navigateByUrl('/signIn');

      },
      error => {
        window.alert('Something went wrong, We could not create your new user');
      });
  }

}
