import { Component, Input } from '@angular/core'
import { MatExpansionModule } from '@angular/material/expansion'
import { BadgeComponent, BadgeTypes } from '../badges/badge.component'
import { FlexColComponent } from '../grid/flex-col/flex-col.component'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { NgClass, NgTemplateOutlet } from '@angular/common'
import { MatRadioButton } from '@angular/material/radio'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
    standalone: true,
    imports: [
        MatExpansionModule,
        BadgeComponent,
        FlexColComponent,
        MatCheckboxModule,
        NgClass,
        MatRadioButton,
        NgTemplateOutlet,
        ReactiveFormsModule,
    ],
})
export class QuestionComponent {
    @Input() questionForm!: FormGroup
    @Input() addMode = false

    badgeType = BadgeTypes.SQUARE

    get id() {
        return this.questionForm.get('id')
    }
    get text() {
        return this.questionForm.get('text')
    }
    get answers() {
        return this.questionForm.get('answers')
    }
    get type() {
        return this.questionForm.get('type')
    }

    onCheckboxChange(answer: any, checked: boolean) {
        if (this.addMode) {
            const answers = this.answers!.value

            const updated = answers.map((a: any) =>
                a === answer ? { ...a, selected: checked } : a
            )
            this.answers!.setValue(updated)
        }
    }

    onRadioChange(answer: any) {
        const answers = this.answers!.value

        const updated = answers.map((a: any) => ({
            ...a,
            selected: a === answer,
        }))

        this.answers!.setValue(updated)
    }
}
