import { Component, EventEmitter, Input, Output } from '@angular/core'
import { BadgeComponent, BadgeTypes } from '../badges/badge.component'
import {
    AbstractControl,
    FormArray,
    FormGroup,
    ReactiveFormsModule,
} from '@angular/forms'
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { AddAnswerComponent } from '../add-answer/add-answer.component'
import { MatIcon } from '@angular/material/icon'
import { MatIconButton } from '@angular/material/button'

@Component({
    selector: 'app-add-question',
    templateUrl: './add-question.component.html',
    styleUrls: ['./add-question.component.scss'],
    standalone: true,
    imports: [
        BadgeComponent,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        AddAnswerComponent,
        MatIcon,
        MatIconButton,
    ],
})
export class AddQuestionComponent {
    @Output() onAddOption: EventEmitter<any> = new EventEmitter<any>()
    @Input() type!: string
    @Input() section!: FormGroup
    @Input() form!: FormGroup

    badgeType = BadgeTypes.SQUARE

    get questions() {
        return this.section?.get('questions') as FormArray<FormGroup<any>>
    }

    get id() {
        return this.questions.at(this.lastIndex).value.id
    }

    get lastIndex() {
        return this.questions.controls.length - 1
    }

    getAnswers(question: AbstractControl): FormArray {
        return question.get('answers') as FormArray
    }

    handleAddOptionClick(question: FormGroup) {
        this.onAddOption.emit(question)
    }
}
