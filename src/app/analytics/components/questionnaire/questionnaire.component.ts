import { Component, effect, inject, OnInit, Signal } from '@angular/core'
import { FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { SectionComponent } from '../../../ui/section/section.component'
import { QuestionnaireStore } from '../../../core/store/questionnaire.store'
import { toObservable } from '@angular/core/rxjs-interop'
import { QuestionComponent } from '../../../ui/question/question.component'
import { QuestionType } from '../../../core/models/questionnaire.model'
import { BadgeTypes } from '../../../ui/badges/badge.component'
import { AddFieldComponent } from '../../../ui/add-field/add-field.component'
import { FlexRowComponent } from '../../../ui/grid/flex-row/flex-row.component'
import { AddToolbarComponent } from '../../../ui/add-toolbar/add-toolbar.component'

@Component({
    selector: 'app-questionnaire',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SectionComponent,
        QuestionComponent,
        AddFieldComponent,
        FlexRowComponent,
        AddToolbarComponent,
    ],
})
export class QuestionnaireComponent implements OnInit {
    readonly #store = inject(QuestionnaireStore)
    questionnaireForm$: Signal<FormGroup> = this.#store.form$
    questionnaireFormObs$ = toObservable(this.#store.form$)
    questionType = QuestionType.MULTIPLE_CHOICE
    badgeType = BadgeTypes.SQUARE
    answers = [
        {
            text: 'Donec ac odio tempor orci',
            correct: true,
        },
        {
            text: 'Lacinia quis vel eros donec ac odio tempor orci',
            correct: false,
        },
        {
            text: 'Odio tempor orci',
            correct: false,
        },
        {
            text: 'Vel eros donec ac odio tempor orci',
            correct: false,
            flagged: true,
            points: 1,
        },
    ]

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
        this.addUniqueIdentifier('section')
    }

    addQuestion(section: FormGroup): void {
        this.#store.addQuestion(section)
    }

    addUniqueIdentifier(type: 'section' | 'question') {
        if (type === 'section') {
            const sectionLength = this.sections.value.length
            this.sections.at(sectionLength - 1).setValue({
                id: `S-${sectionLength.toString().padStart(3, '0')}`,
                name: '',
                questions: [],
            })
        }
    }

    submit(): void {
        console.log(this.questionnaireForm$()?.value)
    }
}
