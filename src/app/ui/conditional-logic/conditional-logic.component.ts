import { Component, inject, Input } from '@angular/core'
import {
    AbstractControl,
    FormArray,
    FormGroup,
    ReactiveFormsModule,
} from '@angular/forms'
import { MatIconButton } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { QuestionnaireStore } from '../../core/store/questionnaire.store'
import { FlexRowComponent } from '../grid/flex-row/flex-row.component'
import { MatFormField, MatSelect } from '@angular/material/select'
import { MatOption } from '@angular/material/core'
import { QuestionnaireFormTypes } from '../../core/models/questionnaire.model'

@Component({
    selector: 'app-conditional-logic',
    templateUrl: './conditional-logic.component.html',
    styleUrls: ['./conditional-logic.component.scss'],
    standalone: true,
    imports: [
        MatIcon,
        MatIconButton,
        ReactiveFormsModule,
        FlexRowComponent,
        MatSelect,
        MatOption,
        MatFormField,
    ],
})
export class ConditionalLogicComponent {
    readonly #questionnaireStore = inject(QuestionnaireStore)
    @Input() question!: FormGroup

    form$ = this.#questionnaireStore.form$
    listOfSectionIds$ = this.#questionnaireStore.listOfSectionIds$
    listOfQuestionIds$ = this.#questionnaireStore.listOfQuestionIds$
    openType = [QuestionnaireFormTypes.QUESTION, QuestionnaireFormTypes.SECTION]

    get conditionalLogic(): FormArray {
        return this.question.get('conditionalLogic') as FormArray
    }

    get answers(): FormArray {
        return this.question.get('answers') as FormArray
    }

    getAnswerId(answer: AbstractControl<any>) {
        return answer.get('id')
    }

    getAnswerText(answer: AbstractControl<any>) {
        return answer.get('text')
    }

    handleAddOptionClick() {
        this.#questionnaireStore.addConditionalLogic(this.question)
    }

    deleteIconVisible(cl: AbstractControl<any>) {
        return (
            cl.get('type')?.value &&
            cl.get('answerId')?.value &&
            cl.get('navigateToId')?.value
        )
    }

    handleDeleteClick(index: number) {
        this.conditionalLogic.removeAt(index)
    }
}
