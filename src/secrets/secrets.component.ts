import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule, Validators} from '@angular/forms'
import { SecretserviceService } from '../services/secretservice.service';
import { error } from 'console';
import { interval, Observable, Subscription } from 'rxjs';



 
@Component({
  selector: 'app-secrets',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './secrets.component.html',
  styleUrl: './secrets.component.css',

  



})
export class SecretsComponent {

constructor(private service:SecretserviceService){

}
secret:string=""
user:string=""

errorMsg:string[]
savedMsg:string


ngOnInit(){

this.find();
this.verifiErrors();


 
}
ngDoCheck() {
  this.verifiErrors();
}






saveSecret=new FormGroup({
    secret:new FormControl('',[Validators.required,Validators.maxLength(250),Validators.minLength(5)]),
    username:new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(2)])
})

save(){
const secrets={
    secret:this.saveSecret.get('secret')?.value,
    user:this.saveSecret.get('username')?.value
}
this.service.save(secrets).subscribe(resp=>{

  console.log("Secret is save")
},error=>{
  console.error("Secret error"+error)
})

console.log(secrets)
this.saveSecret.reset()
this.savedMsg='Your secret is saved!!'





}


find(){
  this.service.search().subscribe(respo=>{
    this.secret=respo.secret
    this.user=respo.user
},error=>{
    console.log("Erro no secrets available")
})
}



verifiErrors(){
  this.errorMsg=[];

  //secret
  if(this.saveSecret.get('secret').hasError('required') && this.saveSecret.get('secret').touched){
    this.errorMsg.push('This secret is required')
  }

  if(this.saveSecret.get('secret').hasError('maxlength') && this.saveSecret.get('secret').touched){
    this.errorMsg.push('This secret is veryy big')
  }
  if(this.saveSecret.get('secret').hasError('minlength') && this.saveSecret.get('secret').touched){
    this.errorMsg.push('This secret is small')
  }

  //user
  if(this.saveSecret.get('username').hasError('required') && this.saveSecret.get('username').touched){
    this.errorMsg.push('This username is required')
  }

  if(this.saveSecret.get('username').hasError('maxlength') && this.saveSecret.get('username').touched){
    this.errorMsg.push('This username is veryy big')
  }
  if(this.saveSecret.get('username').hasError('minlength') && this.saveSecret.get('username').touched){
    this.errorMsg.push('This username is small')
  }
  


}



}
