import { Component, inject, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './core/components/header/header.component'
import { SideNavComponent } from './core/components/navbar/side-nav.component'
import { AuthService } from './core/services/auth.service'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, SideNavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    readonly #authService = inject(AuthService)
    ngOnInit(): void {
        this.#authService.login('Marko Markovic')
    }
}
