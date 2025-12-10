import { Component, inject, Signal } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable, map, shareReplay } from 'rxjs'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { LayoutStore } from '../../store/layout.store'
import { NavigationList, Routes } from '../../models/navigation.model'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    standalone: true,
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        RouterModule,
    ],
})
export class SideNavComponent {
    readonly #breakpointObserver = inject(BreakpointObserver)
    readonly #layoutStore = inject(LayoutStore)
    isNavbarOpen$: Signal<boolean> = this.#layoutStore.isNavbarOpen$
    routesList: Routes[] = NavigationList

    isHandset$: Observable<boolean> = this.#breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(
            map((result) => result.matches),
            shareReplay()
        )
}
