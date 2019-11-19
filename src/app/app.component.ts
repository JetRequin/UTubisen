import { Component, Input } from '@angular/core';
import{ AppRoutingModule } from './app-routing.module';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  template:`
  <div #global_container >
  	<ngx-spinner bdColor="rgba(51,51,51,0.8)" size="medium" color="#fff" type="ball-scale-multiple">
      <p style="font-size: 20px; color: white">Loading...</p>
    </ngx-spinner>

    <header>
      <h1> {{ title }} </h1>
    </header>
    
    <div class="container">
        <router-outlet></router-outlet>
    </div>

    <footer>
      Youtube App. Made with Angular
    </footer>  
  <div #global_container >
`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:String = 'app-videos';

  
  constructor(private spinner: NgxSpinnerService) {}
  
  ngOnInit(){
    this.spinner.show()
    
    setTimeout(()=>
    {
      this.spinner.hide()
    },3000)

  }
}
