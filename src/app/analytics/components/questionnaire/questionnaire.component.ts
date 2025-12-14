import { Component, inject, OnInit, Signal } from '@angular/core'
import { FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { SectionComponent } from '../../../ui/section/section.component'
import { QuestionnaireStore } from '../../../core/store/questionnaire.store'
import { QuestionComponent } from '../../../ui/question/question.component'
import { BadgeTypes } from '../../../ui/badges/badge.component'
import { AddFieldComponent } from '../../../ui/add-field/add-field.component'
import { FlexRowComponent } from '../../../ui/grid/flex-row/flex-row.component'
import { AddToolbarComponent } from '../../../ui/add-toolbar/add-toolbar.component'
import { AddQuestionComponent } from '../../../ui/add-question/add-question.component'
import { NoDataPageComponent } from '../../../ui/no-data-page/no-data-page.component'
import { QuestionType } from '../../../core/models/questionnaire.model'
import { MatIcon } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'
import { ChangeDetectorRef } from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

@UntilDestroy()
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
        AddQuestionComponent,
        NoDataPageComponent,
        MatIcon,
        MatButtonModule,
    ],
})
export class QuestionnaireComponent implements OnInit {
    readonly #store = inject(QuestionnaireStore)
    readonly #router = inject(Router)
    readonly #cd = inject(ChangeDetectorRef)

    questionnaireForm$: Signal<FormGroup> = this.#store.form$
    badgeType = BadgeTypes.SQUARE

    get sections() {
        return this.questionnaireForm$()?.get('sections') as FormArray<
            FormGroup<any>
        >
    }

    getSectionName(section: FormGroup) {
        return section.get('name')?.value
    }

    ngOnInit(): void {
        this.#store.initForm$().pipe(untilDestroyed(this)).subscribe()
    }

    getQuestions(section: FormGroup) {
        return section?.get('questions') as FormArray<FormGroup<any>>
    }

    getAnswer(question: FormGroup) {
        return question?.get('answers')
    }

    addSection(): void {
        this.#store.addSection()
        this.#addUniqueSectionIdentifier()
    }

    addQuestion(section: FormGroup, type: QuestionType): void {
        this.#store.addQuestion(section as FormGroup)
        //add one blank answer to latest question
        const questionsNumber = this.getQuestions(section).controls.length
        const lastQuestion = this.getQuestions(section).at(questionsNumber - 1)
        this.#addUniqueQuestionIdentifier(questionsNumber, lastQuestion)
        lastQuestion.get('type')?.setValue(type)
        this.#store.addAnswer(lastQuestion)
    }

    addAnswer(question: FormGroup) {
        this.#store.addAnswer(question)
        this.#cd.detectChanges()
    }

    #addUniqueSectionIdentifier() {
        const sectionLength = this.sections.value.length
        this.sections.at(sectionLength - 1).setValue({
            id: `S-${sectionLength.toString().padStart(3, '0')}`,
            name: '',
            questions: [],
        })
    }
    #addUniqueQuestionIdentifier(
        questionsNumber: number,
        lastQuestion: FormGroup
    ) {
        lastQuestion
            .get('id')
            ?.setValue(`Q-${questionsNumber.toString().padStart(3, '0')}`)
    }

    addField(fieldName: string, section: FormGroup | null = null) {
        if (
            [QuestionType.MULTIPLE_CHOICE, QuestionType.CHECK_BOX].includes(
                fieldName as QuestionType
            ) &&
            section
        ) {
            this.addQuestion(section, fieldName as QuestionType)
        } else if (fieldName === QuestionType.NEW_SECTION) {
            this.addSection()
        }
    }

    handleNavigation() {
        this.#router.navigate(['/fill-form'])
    }
}
