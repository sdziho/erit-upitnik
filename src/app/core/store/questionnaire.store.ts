import { computed, inject, Injectable, Signal } from '@angular/core'
import { FormArray, FormGroup } from '@angular/forms'
import { signalState, patchState } from '@ngrx/signals'
import { FormProviderService } from '../services/form-provider.service'
import { QuestionnaireFormTypes } from '../models/questionnaire.model'
import { tap } from 'rxjs'

interface QuestionList {
    id: string
    uniqueId: string
    sectionId: string
}
interface LayoutState {
    form: FormGroup | null
    listOfSectionIds: string[]
    listOfQuestionIds: QuestionList[]
}

const initialState: LayoutState = {
    form: null,
    listOfSectionIds: [],
    listOfQuestionIds: [],
}

@Injectable({ providedIn: 'root' })
export class QuestionnaireStore {
    readonly #state = signalState(initialState)
    readonly #formProvicerService = inject(FormProviderService)
    form$: Signal<FormGroup> = computed(() => this.#state.form() as FormGroup)
    listOfSectionIds$: Signal<string[]> = computed(() =>
        this.#state.listOfSectionIds()
    )
    listOfQuestionIds$: Signal<QuestionList[]> = computed(() =>
        this.#state.listOfQuestionIds()
    )

    initForm$() {
        patchState(this.#state, {
            form: this.#formProvicerService.generateForm(
                QuestionnaireFormTypes.QUESTIONNAIRE
            ),
        })

        return this.form$().valueChanges.pipe(
            tap((value) => {
                patchState(this.#state, {
                    listOfSectionIds: value.sections?.map(
                        (section: any) => section.id
                    ),
                    listOfQuestionIds: value.sections.flatMap((section: any) =>
                        section.questions.map((question: any) => ({
                            id: question.id,
                            uniqueId: question.uniqueId,
                            sectionId: section.id,
                        }))
                    ),
                })
            })
        )
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
