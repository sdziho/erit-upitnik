import { Component, Input } from '@angular/core'
import { BadgeComponent, BadgeTypes } from '../badges/badge.component'
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'

@Component({
    selector: 'app-add-field',
    templateUrl: './add-field.component.html',
    styleUrls: ['./add-field.component.scss'],
    standalone: true,
    imports: [
        BadgeComponent,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatLabel,
    ],
})
export class AddFieldComponent {
    @Input() type!: string
    @Input() form!: FormGroup

    get sections() {
        return this.form?.get('sections') as FormArray
    }

    get id() {
        return this.sections.at(this.lastIndex).value.id
    }

    get lastIndex() {
        return this.sections.controls.length - 1
    }

    badgeType = BadgeTypes.SQUARE
}
