import { Component, Input } from '@angular/core'
import { BadgeTypes } from '../badges/badge.component'
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { MatFormField } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatCheckbox } from '@angular/material/checkbox'
import { FlexRowComponent } from '../grid/flex-row/flex-row.component'
import { MatRadioButton } from '@angular/material/radio'

@Component({
    selector: 'app-add-answer',
    templateUrl: './add-answer.component.html',
    styleUrls: ['./add-answer.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatCheckbox,
        FlexRowComponent,
        MatRadioButton,
    ],
})
export class AddAnswerComponent {
    @Input() question!: FormGroup

    get type() {
        return this.question?.get('type')?.value
    }

    get answers() {
        return this.question?.get('answers') as FormArray
    }

    badgeType = BadgeTypes.SQUARE
}
