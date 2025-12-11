import { Component, effect, inject, OnInit, Signal } from '@angular/core'
import { FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms'
import { FormProviderService } from '../../../core/services/form-provider.service'
import { CommonModule } from '@angular/common'
import { SectionComponent } from '../../../ui/section/section.component'
import { QuestionnaireStore } from '../../../core/store/questionnaire.store'
import { toObservable } from '@angular/core/rxjs-interop'

@Component({
    selector: 'app-questionnaire',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, SectionComponent],
})
export class QuestionnaireComponent implements OnInit {
    readonly #store = inject(QuestionnaireStore)
    questionnaireForm$: Signal<FormGroup> = this.#store.form$
    questionnaireFormObs$ = toObservable(this.#store.form$)

    get sections() {
        return this.questionnaireForm$()?.get('sections') as FormArray
    }

    constructor() {
        effect(() => console.log(this.questionnaireForm$()))
    }

    ngOnInit(): void {
        this.#store.initForm()
    }

    getQuestions(section: FormGroup) {
        return section?.get('questions')
    }

    addSection(): void {
        this.#store.addSection()
        console.log(this.sections)
    }

    addQuestion(section: FormGroup): void {
        this.#store.addQuestion(section)
    }

    submit(): void {
        console.log(this.questionnaireForm$()?.value)
    }
}
