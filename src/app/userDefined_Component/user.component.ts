import { Component } from '@angular/core'
import { TrialCli1Component } from '../trial-cli1/trial-cli1.component'

@Component({
  selector: 'user-component',
  // template:'',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class userComponent {
  trialCli = new TrialCli1Component();
  // console.log();
  introduction:String = this.trialCli.returnUserName();

  // introduction = "Hi this is " + this.trialCli["userName"] + " first Component";
}
