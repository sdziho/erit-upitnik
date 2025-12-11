import { Component, inject, Signal } from '@angular/core'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { LayoutStore } from '../../store/layout.store'
import { NavigationList, Routes } from '../../models/navigation.model'
import { RouterModule } from '@angular/router'
import { FlexColComponent } from '../../../ui/grid/flex-col/flex-col.component'
import { ProfileBadgeComponent } from '../../../ui/badges/profile-badge.component'
import { AuthService } from '../../services/auth.service'

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
        FlexColComponent,
        ProfileBadgeComponent,
    ],
})
export class SideNavComponent {
    readonly #layoutStore = inject(LayoutStore)
    readonly #authService = inject(AuthService)
    isNavbarOpen$: Signal<boolean> = this.#layoutStore.isNavbarOpen$
    routesList: Routes[] = NavigationList
    user$: Signal<string | null> = this.#authService.user$
    role$: Signal<string | null> = this.#authService.role$
}
