import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public foobar = 'Enter something...';

  getValue(myInput: HTMLInputElement){
    if (myInput.value == ""){
      alert('Enter Something!');
    }
    else {
      this.foobar = myInput.value;
    }
  }
}
