import { Component, OnInit } from '@angular/core';

@Component({

  // Selector as a Class
  // selector: '.app-trial-cli1',

  // Selector as a Attribute
  // selector: '[app-trial-cli1]',

  // Selector as a Element
  selector: 'app-trial-cli1',


  //********* You can use either template or templateUrl, can also use both but the initial one will be overridden by the latter one.************
  // template: `<user-component></user-component>`,
  templateUrl: './trial-cli1.component.html',

  // styles: [`
  //
  //   `]
  styleUrls: ['./trial-cli1.component.css']
})
// export class TrialCli1Component implements OnInit {
//
  // constructor() {
  //
  // }
//
//   ngOnInit() {
//   }
//
// }
export class TrialCli1Component {
userName = "Shohil Sethia";
allowButtonDisabling = false;
serverCreated = false;

// Constructor Function is called everytime the component is called.

  constructor() {
      setTimeout( () => { this.allowButtonDisabling = true }, 2000 );
      setTimeout( () => { this.allowButtonDisabling = false }, 6000 );
      // setTimeout( () => {this.constructor()}, 6000 );
  }

// This is how we declare function in TypeScript
   returnUserName(){
    return this.userName
    }

// Button Click Function Logic
  serverStatus = "Server is not created so far !"
  onButtonClick(){
    this.serverStatus = "Wowwiieee,  you just now created a brand new Server !"
    this.serverCreated = true;
  }

// Getting Input from
  userValue: String = '';
  onGettingInput(event: any){
    console.log(event);
      this.userValue = event.target.value;
    //            OR
    // This is how Casting is done here !
    // this.userValue = (<HTMLInputElement>event.target).value
  }

// Getting styling values from
  getColor(){
    return this.allowButtonDisabling ? 'Green' : 'Red';
  }



// Array for Playing with ngFor Directive
  serversArray = ['Server 1', 'Server 2', 'Server 3'];



// Directive Assignment
  counter = 0;
  buttonLog = [];
  tas = null;
  directiveAssign(){
    this.tas = new Date();
    ++this.counter;
    // this.buttonLog.push("The button has been called " + this.counter + " times on " + this.tas);
    this.buttonLog.push(this.buttonLog.length + 1)
  }
  colorResult(){
    return this.counter >= 5 ? 'blue':'transparent';
  }
}
