import { inject, Injectable } from '@angular/core'
import { FormBuilder, FormArray, FormGroup } from '@angular/forms'
import { QuestionnaireFormUtils } from '../models/form-field-definitions.model'
import { QuestionnaireFormTypes } from '../models/questionnaire.model'

@Injectable({
    providedIn: 'root',
})
export class FormProviderService {
    readonly #formBuilder = inject(FormBuilder)

    generateForm(state: QuestionnaireFormTypes): FormGroup {
        switch (state) {
            case 'questionnaire':
                return this.#formBuilder.group(
                    QuestionnaireFormUtils.questionnaire(this.#formBuilder)
                ) as FormGroup
            case 'section':
                return this.#formBuilder.group(
                    QuestionnaireFormUtils.section(this.#formBuilder)
                ) as FormGroup
            case 'question':
                return this.#formBuilder.group(
                    QuestionnaireFormUtils.question(this.#formBuilder)
                ) as FormGroup
            case 'answers':
                return this.#formBuilder.group(
                    QuestionnaireFormUtils.answer()
                ) as FormGroup
            case 'conditional logic':
                return this.#formBuilder.group(
                    QuestionnaireFormUtils.conditionalLogic()
                ) as FormGroup
            default:
                return this.#formBuilder.group(
                    QuestionnaireFormUtils.questionnaire(this.#formBuilder)
                ) as FormGroup
        }
    }
}
