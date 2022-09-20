import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "../assets/BridgeLabz_Logo.svg";
  blUrl = "https://www.bridgelabz.com/";
  userName = "";
  nameError = "";

  ngOnInit():void{
    this.title = "Hello from Bridgelabz";
  }

  onClick($event: any){
    console.log("logo is clicked", $event);
    window.open(this.blUrl, "_blank")
  }
  onInput($event: any){
    console.log("verifying input", $event.data)
    const nameRegex = RegExp("^[A-Z]{1}[\\w]{2,}$");
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    } else {
      this.nameError = "Invalid Name";
    }
  }
}
