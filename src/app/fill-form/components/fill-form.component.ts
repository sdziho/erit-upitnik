import { Component, inject, OnInit } from '@angular/core'
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
export class FillFormComponent implements OnInit {
    readonly #store = inject(QuestionnaireStore)
    form$ = this.#store.form$

    get sections() {
        return this.form$()?.get('sections') as FormArray<FormGroup<any>>
    }

    getQuestions(section: FormGroup) {
        return section?.get('questions') as FormArray<FormGroup<any>>
    }

    ngOnInit(): void {}

    next() {
        console.log(this.form$().value)
    }
}
