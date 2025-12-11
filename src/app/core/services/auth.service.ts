import { computed, Injectable } from '@angular/core'
import { signalState, patchState } from '@ngrx/signals'

interface LayoutState {
    user: string | null
    role: string | null
}

const initialState: LayoutState = {
    user: null,
    role: null,
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    readonly #state = signalState(initialState)

    user$ = computed(() => this.#state.user())
    role$ = computed(() => this.#state.role())

    login(user: string) {
        // hardcoded
        patchState(this.#state, { user, role: 'Superadmin' })
    }
}
