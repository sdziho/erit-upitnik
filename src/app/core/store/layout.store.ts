import { computed, inject, Injectable } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { signalState, patchState } from '@ngrx/signals'
import { filter, map } from 'rxjs'

interface LayoutState {
    isNavbarOpen: boolean
    title: string
    routerNames: string[]
}

const initialState: LayoutState = {
    isNavbarOpen: false,
    title: 'Upitnik',
    routerNames: [],
}

@Injectable({ providedIn: 'root' })
export class LayoutStore {
    readonly #state = signalState(initialState)
    readonly #router = inject(Router)
    readonly #activatedRoute = inject(ActivatedRoute)

    isNavbarOpen$ = computed(() => this.#state.isNavbarOpen())
    title$ = computed(() => this.#state.title())
    routerNames$ = computed(() => this.#state.routerNames())

    initRouteListener$() {
        return this.#router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.#getAllChildRoutes())
        )
    }

    toggleNavbar() {
        patchState(this.#state, { isNavbarOpen: !this.isNavbarOpen$() })
    }

    setTitle(title: string) {
        patchState(this.#state, { title })
    }

    #getAllChildRoutes() {
        const names: string[] = []
        this.#collectRoutes(this.#activatedRoute, names)
        patchState(this.#state, { routerNames: names })
    }

    #collectRoutes(route: ActivatedRoute, names: string[]) {
        const routeName = route.snapshot.data['name']
        if (routeName && names[names.length - 1] !== routeName) {
            names.push(routeName)
        }

        if (route.firstChild) {
            this.#collectRoutes(route.firstChild, names)
        }
    }
}
