import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public userForm:FormGroup = this.fb.group({})
  constructor(public fb:FormBuilder,public router:Router) { }
  public allUsers: any=[]
  ngOnInit(): void {
    this.userForm = this.fb.group({
      email:[''],
      password:['']
    })
  }
  signIn(){
    let signInTester = this.allUsers.find((val:any,i:any)=>val.email==this.userForm.value.email&&val.password==this.userForm.value.password)
    console.log(signInTester);
    if(!signInTester){
      alert(`Kindly fill in all details `);
    }
    else{
      this.router.navigate(['/'])
    }
  }

}
