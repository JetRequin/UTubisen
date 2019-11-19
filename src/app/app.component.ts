import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="global_container">
    <h1 >
      {{title}}
    </h1>

    <div class="container">
        <router-outlet></router-outlet>
    </div>

    <footer>
      © Metans Dylan - Clément Ducollet App video Angular
    </footer>

  </div>
`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Utubisen';

}
