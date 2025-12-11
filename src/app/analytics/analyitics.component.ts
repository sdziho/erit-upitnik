import { Component, OnInit } from '@angular/core'
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component'

@Component({
    selector: 'app-analyitics',
    templateUrl: './analyitics.component.html',
    styleUrls: ['./analyitics.component.scss'],
    standalone: true,
    imports: [QuestionnaireComponent],
})
export class AnalyticsComponent implements OnInit {
    ngOnInit(): void {}
}
