import { Component, Input } from '@angular/core'
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
import { FlexColComponent } from '../grid/flex-col/flex-col.component'

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
        FlexColComponent,
    ],
})
export class AddQuestionComponent {
    @Input() type!: string
    @Input() section!: FormGroup
    @Input() form!: FormGroup

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

    badgeType = BadgeTypes.SQUARE
}
