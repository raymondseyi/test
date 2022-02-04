import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public userForm:FormGroup= this.fb.group({})
  constructor(public fb:FormBuilder, public router:Router, private _userService:UsersService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstname : ["",Validators.required],
      lastname : ["",Validators.required],
      password : ["",Validators.required],
      email : ["",Validators.required],
      phonenumber: ["",Validators.required],
    })
  }
  signUp(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this._userService.postUser(this.userForm.value)
      // this.router.navigate(['/signin'])
    }else{
      alert(`Kindly fill all details`)
    }
    
  }

}
