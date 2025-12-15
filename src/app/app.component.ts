import { Component, inject, OnInit, Signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './core/components/header/header.component'
import { SideNavComponent } from './core/components/navbar/side-nav.component'
import { AuthService } from './core/services/auth.service'
import { LayoutStore } from './core/store/layout.store'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
@UntilDestroy()
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, SideNavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    readonly #authService = inject(AuthService)
    readonly #layoutStore = inject(LayoutStore)
    routerNames$: Signal<string[]> = this.#layoutStore.routerNames$

    ngOnInit(): void {
        this.#authService.login('Marko Markovic')
        this.#layoutStore
            .initRouteListener$()
            .pipe(untilDestroyed(this))
            .subscribe()
    }
}
