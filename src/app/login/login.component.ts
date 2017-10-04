import { Component, OnInit } from '@angular/core';
import { MdDialog , MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {remember:false};

  constructor(public dialogRef: MdDialogRef<LoginComponent>) { }
  
    ngOnInit() {
    }
  
    onSubmit() {
      console.log("User: ", this.user);
      this.dialogRef.close();
    }

}
