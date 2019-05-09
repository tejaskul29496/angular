import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // public name = "Person";
  // public successClass = "text-success";
  // public specialClass = "text-special";
  // public hasError = false;
  // public isSpecial=true;
  // public messageClasses = {
  //   "text-success": !this.hasError,
  //   "text-danger": this.hasError,
  //   "text-special": this.isSpecial
  // }

  // public highlightColor = "orange";
  // public titleStyles = {
  //   color: "blue",
  //   fontStyle: "italic"
  // }

  // public greeting ="";

  public name="";

  constructor() { }

  ngOnInit() {
  }

  // greetUser(){
  //   return "Hello "+ this.name;
  // }

  // onClick(event){
  //   console.log(event);
  //   this.greeting = "Welcome Person";
  // }

}
