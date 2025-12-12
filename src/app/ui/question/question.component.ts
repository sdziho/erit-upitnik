import { Component, Input } from '@angular/core'
import { MatExpansionModule } from '@angular/material/expansion'
import { BadgeComponent, BadgeTypes } from '../badges/badge.component'
import { Answers, QuestionType } from '../../core/models/questionnaire.model'
import { FlexColComponent } from '../grid/flex-col/flex-col.component'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { NgClass } from '@angular/common'

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
    standalone: true,
    imports: [
        MatExpansionModule,
        BadgeComponent,
        FlexColComponent,
        MatCheckboxModule,
        NgClass,
    ],
})
export class QuestionComponent {
    badgeType = BadgeTypes.SQUARE
    @Input() id!: string
    @Input() question!: string
    @Input() answers!: Answers[]
    @Input() type!: QuestionType
}
