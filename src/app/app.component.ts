import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './core/components/header/header.component'
import { SideNavComponent } from './core/components/navbar/side-nav.component'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, SideNavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'erit-upitnik'
}
