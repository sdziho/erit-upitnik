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
import { MatCheckbox } from '@angular/material/checkbox'
import { FlexColComponent } from '../grid/flex-col/flex-col.component'
import { FlexRowComponent } from '../grid/flex-row/flex-row.component'

@Component({
    selector: 'app-add-answer',
    templateUrl: './add-answer.component.html',
    styleUrls: ['./add-answer.component.scss'],
    standalone: true,
    imports: [
        BadgeComponent,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatCheckbox,
        FlexColComponent,
        FlexRowComponent,
    ],
})
export class AddAnswerComponent {
    @Input() type!: string
    @Input() question!: FormGroup

    get answers() {
        console.log('odg', this.question)
        return this.question?.get('answers') as FormArray
    }

    badgeType = BadgeTypes.SQUARE
}
