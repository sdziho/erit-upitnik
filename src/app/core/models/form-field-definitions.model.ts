import { FormBuilder, FormControl, Validators } from '@angular/forms'

//add types later

export class QuestionnaireFormUtils {
    public static section(formBuilder: FormBuilder) {
        return {
            name: new FormControl(null, Validators.required),
            id: new FormControl(null, Validators.required),
            questions: formBuilder.array([]),
        }
    }

    public static questionnaire(formBuilder: FormBuilder) {
        return {
            sections: formBuilder.array([]),
        }
    }

    public static question(formBuilder: FormBuilder) {
        return {
            id: new FormControl('', Validators.required),
            text: new FormControl('', Validators.required),
            type: new FormControl('multiple-choice'),
            answers: formBuilder.array([]),
        }
    }
    public static answer() {
        return {
            text: new FormControl('', Validators.required),
            correct: new FormControl(false, Validators.required),
            flagged: new FormControl(false),
            comment: new FormControl(''),
            points: new FormControl(NaN),
        }
    }
}
