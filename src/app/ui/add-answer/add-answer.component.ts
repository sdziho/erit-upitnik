import { Component, Input } from '@angular/core'
import { BadgeTypes } from '../badges/badge.component'
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatCheckbox } from '@angular/material/checkbox'
import { FlexRowComponent } from '../grid/flex-row/flex-row.component'

@Component({
    selector: 'app-add-answer',
    templateUrl: './add-answer.component.html',
    styleUrls: ['./add-answer.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatCheckbox,
        FlexRowComponent,
    ],
})
export class AddAnswerComponent {
    @Input() type!: string
    @Input() question!: FormGroup

    get answers() {
        return this.question?.get('answers') as FormArray
    }

    badgeType = BadgeTypes.SQUARE
}
