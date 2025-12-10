import { computed, Injectable } from '@angular/core'
import { signalState, patchState } from '@ngrx/signals'

interface LayoutState {
    isNavbarOpen: boolean
    title: string
}

const initialState: LayoutState = {
    isNavbarOpen: false,
    title: 'Upitnik',
}

@Injectable({ providedIn: 'root' })
export class LayoutStore {
    readonly #state = signalState(initialState)

    isNavbarOpen$ = computed(() => this.#state.isNavbarOpen())
    title$ = computed(() => this.#state.title())

    toggleNavbar() {
        patchState(this.#state, { isNavbarOpen: !this.isNavbarOpen$() })
    }

    setTitle(title: string) {
        patchState(this.#state, { title })
    }
}
