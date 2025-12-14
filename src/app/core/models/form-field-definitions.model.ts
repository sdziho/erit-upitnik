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
            uniqueId: new FormControl(
                Math.random().toString(36),
                Validators.required
            ), //this is important for navigating to question in stepper
            text: new FormControl('', Validators.required),
            type: new FormControl('Check-Box'),
            answers: formBuilder.array([]),
            conditionalLogic: formBuilder.array([]),
        }
    }

    public static answer() {
        return {
            id: new FormControl(
                Math.random().toString(36),
                Validators.required
            ), //random id
            text: new FormControl('', Validators.required),
            correct: new FormControl(false, Validators.required),
            flagged: new FormControl(false),
            comment: new FormControl(''),
            points: new FormControl(NaN),
            selected: new FormControl(false),
        }
    }

    public static conditionalLogic() {
        return {
            answerId: new FormControl(null, Validators.required),
            type: new FormControl(null, Validators.required),
            navigateToId: new FormControl(null, Validators.required),
        }
    }
}
