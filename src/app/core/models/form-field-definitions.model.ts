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

    public static question() {
        return {
            text: new FormControl('', Validators.required),
            type: new FormControl('short-text'),
            answers: new FormControl([], Validators.required),
        }
    }
}
