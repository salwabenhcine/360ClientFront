import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-verify-registration',
  templateUrl: './verify-registration.component.html',
  styleUrls: ['./verify-registration.component.css']
})
export class VerifyRegistrationComponent implements OnInit {
message : any
verificationcode: any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  forUser() {
    this.userService.verification(this.verificationcode).subscribe(
      (response) => {
        this.message
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
}
}
