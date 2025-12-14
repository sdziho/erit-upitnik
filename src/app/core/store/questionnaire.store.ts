import { computed, inject, Injectable, Signal } from '@angular/core'
import { FormArray, FormGroup } from '@angular/forms'
import { signalState, patchState } from '@ngrx/signals'
import { FormProviderService } from '../services/form-provider.service'
import { QuestionnaireFormTypes } from '../models/questionnaire.model'

interface LayoutState {
    form: FormGroup | null
}

const initialState: LayoutState = {
    form: null,
}

@Injectable({ providedIn: 'root' })
export class QuestionnaireStore {
    readonly #state = signalState(initialState)
    readonly #formProvicerService = inject(FormProviderService)
    form$: Signal<FormGroup> = computed(() => this.#state.form() as FormGroup)

    initForm() {
        patchState(this.#state, {
            form: this.#formProvicerService.generateForm(
                QuestionnaireFormTypes.QUESTIONNAIRE
            ),
        })
    }

    addSection() {
        const formArray = this.form$()?.get('sections') as FormArray
        formArray.push(
            this.#formProvicerService.generateForm(
                QuestionnaireFormTypes.SECTION
            )
        )
    }

    addQuestion(section: FormGroup) {
        const sectionArray = section?.get('questions') as FormArray
        sectionArray.push(
            this.#formProvicerService.generateForm(
                QuestionnaireFormTypes.QUESTION
            )
        )
    }

    addAnswer(question: FormGroup) {
        const answerArray = question?.get('answers') as FormArray
        answerArray.push(
            this.#formProvicerService.generateForm(
                QuestionnaireFormTypes.ANSWERS
            )
        )
    }

    addConditionalLogic(question: FormGroup) {
        const conditionalLogicArray = question?.get(
            'conditionalLogic'
        ) as FormArray
        conditionalLogicArray.push(
            this.#formProvicerService.generateForm(
                QuestionnaireFormTypes.CONDITIONAL_LOGIC
            )
        )
    }
}
