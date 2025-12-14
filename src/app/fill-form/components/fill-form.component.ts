import { Component, effect, inject, ViewChild } from '@angular/core'
import {
    MatStepper,
    MatStep,
    MatStepperNext,
    MatStepperPrevious,
} from '@angular/material/stepper'
import { QuestionnaireStore } from '../../core/store/questionnaire.store'
import { QuestionComponent } from '../../ui/question/question.component'
import { FormArray, FormGroup } from '@angular/forms'
import { MatButton } from '@angular/material/button'
import { SectionComponent } from '../../ui/section/section.component'
import { QuestionnaireFormTypes } from '../../core/models/questionnaire.model'

@Component({
    selector: 'app-fill-form',
    templateUrl: './fill-form.component.html',
    styleUrls: ['./fill-form.component.scss'],
    standalone: true,
    imports: [
        MatStepper,
        MatStep,
        MatStepperNext,
        MatStepperPrevious,
        QuestionComponent,
        MatButton,
        SectionComponent,
    ],
})
export class FillFormComponent {
    @ViewChild('stepper') stepper!: MatStepper
    readonly #store = inject(QuestionnaireStore)

    form$ = this.#store.form$
    listOfSectionIds$ = this.#store.listOfSectionIds$
    listOfQuestionIds$ = this.#store.listOfQuestionIds$

    stepIndexMap = new Map<string, number>()

    constructor() {
        effect(() => {
            const listOfQuestionIds = this.listOfQuestionIds$()
            listOfQuestionIds.forEach((q: any, index: number) => {
                this.stepIndexMap.set(q.uniqueId, index)
            })
        })
    }

    get sections() {
        return this.form$()?.get('sections') as FormArray<FormGroup<any>>
    }

    getQuestions(section: FormGroup) {
        return section?.get('questions') as FormArray<FormGroup<any>>
    }

    getAnswers(question: FormGroup) {
        return question.get('answers')
    }

    getConditionalLogic(question: FormGroup) {
        return question.get('conditionalLogic')
    }

    next(stepper: MatStepper, question: FormGroup) {
        const logics = this.getConditionalLogic(question)?.value
        for (let logic of logics) {
            if (
                this.getAnswers(question)?.value.some(
                    (answer: any) =>
                        answer.id === logic.answerId && answer.selected
                )
            ) {
                if (logic.type === QuestionnaireFormTypes.QUESTION) {
                    const index = this.stepIndexMap.get(logic.navigateToId)
                    if (index !== undefined) {
                        stepper.selectedIndex = index
                    }
                }
                if (logic.type === QuestionnaireFormTypes.SECTION) {
                    const idToNavigate = this.listOfQuestionIds$().find((val) =>
                        val.sectionId.includes(logic.navigateToId)
                    )?.uniqueId as string
                    const index = this.stepIndexMap.get(idToNavigate)
                    if (index !== undefined) {
                        stepper.selectedIndex = index
                    }
                }
            }
        }
    }
}
