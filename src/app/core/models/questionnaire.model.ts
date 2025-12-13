export enum QuestionType {
    NEW_SECTION = 'New Section',
    SHORT_TEXT = 'Short Text',
    LONG_TEXT = 'Long Text',
    MULTIPLE_CHOICE = 'Multiple Choice',
    CHECK_BOX = 'Check-Box',
    DROP_DOWN = 'Drop-Down',
    DATE = 'Date',
    DOCUMENT = 'Document',
}

export enum QuestionnaireFormTypes {
    SECTION = 'section',
    QUESTION = 'question',
    QUESTIONNAIRE = 'questionnaire',
    ANSWERS = 'answers',
}

export interface Answers {
    text: string
    correct: boolean
    flagged?: boolean
    points?: number
}

export interface Question {
    text: string
    type: QuestionType
    answers: Answers[]
}

export interface Section {
    id: string | null
    name: string | null
    questions: Question[]
}

export interface Questionnaire {
    sections: Section[]
}
