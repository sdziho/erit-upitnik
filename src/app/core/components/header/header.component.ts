import { Component, inject, Signal } from '@angular/core'
import { MatToolbar } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButton } from '@angular/material/button'
import { LayoutStore } from '../../store/layout.store'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [MatToolbar, MatIconModule, MatButton],
})
export class HeaderComponent {
    readonly #layoutStore = inject(LayoutStore)
    isNavbarOpen$: Signal<boolean> = this.#layoutStore.isNavbarOpen$
    title$: Signal<string> = this.#layoutStore.title$
    routerNames$: Signal<string[]> = this.#layoutStore.routerNames$

    get lastRouterName() {
        return this.routerNames$()[this.routerNames$().length - 1]
    }

    handleMenuClick() {
        this.#layoutStore.toggleNavbar()
    }
}
