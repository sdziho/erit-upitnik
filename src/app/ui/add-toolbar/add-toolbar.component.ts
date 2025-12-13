import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FlexColComponent } from '../grid/flex-col/flex-col.component'
import { MatIcon } from '@angular/material/icon'
import { MatIconButton } from '@angular/material/button'
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu'
import { NgStyle } from '@angular/common'
import { QuestionType } from '../../core/models/questionnaire.model'

@Component({
    selector: 'app-add-toolbar',
    templateUrl: './add-toolbar.component.html',
    styleUrls: ['./add-toolbar.component.scss'],
    standalone: true,
    imports: [
        FlexColComponent,
        MatIcon,
        MatIconButton,
        MatMenu,
        MatMenuTrigger,
        MatMenuItem,
        NgStyle,
    ],
})
export class AddToolbarComponent {
    @Output() onAddButton: EventEmitter<any> = new EventEmitter<any>()
    @Input() addMode: boolean = false

    matMenuSections: { icon: string; name: string }[][] = [
        [
            {
                icon: 'apps',
                name: QuestionType.NEW_SECTION,
            },
        ],
        [
            {
                icon: 'short_text',
                name: QuestionType.SHORT_TEXT,
            },
            {
                icon: 'subject',
                name: QuestionType.LONG_TEXT,
            },
        ],
        [
            {
                icon: 'radio_button_checked',
                name: QuestionType.MULTIPLE_CHOICE,
            },
            {
                icon: 'check_box',
                name: QuestionType.CHECK_BOX,
            },
            {
                icon: 'expand_circle_down',
                name: QuestionType.DROP_DOWN,
            },
        ],
        [
            {
                icon: 'event',
                name: QuestionType.DATE,
            },
        ],
        [
            {
                icon: 'description',
                name: QuestionType.DOCUMENT,
            },
        ],
    ]

    handleAddButton(menuButton: { icon: string; name: string }) {
        this.onAddButton.emit(menuButton.name)
    }
}
