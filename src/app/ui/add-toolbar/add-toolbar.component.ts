import { Component, EventEmitter, Output } from '@angular/core'
import { FlexColComponent } from '../grid/flex-col/flex-col.component'
import { MatIcon } from '@angular/material/icon'
import { MatIconButton } from '@angular/material/button'
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu'

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
    ],
})
export class AddToolbarComponent {
    @Output() onAddButton: EventEmitter<any> = new EventEmitter<any>()

    matMenuSections: { icon: string; name: string }[][] = [
        [
            {
                icon: 'apps',
                name: 'New Section',
            },
        ],
        [
            {
                icon: 'short_text',
                name: 'Short Text',
            },
            {
                icon: 'subject',
                name: 'Long Text',
            },
        ],
        [
            {
                icon: 'radio_button_checked',
                name: 'Multiple Choice',
            },
            {
                icon: 'check_box',
                name: 'Check-boxes',
            },
            {
                icon: 'expand_circle_down',
                name: 'Drop-down',
            },
        ],
        [
            {
                icon: 'event',
                name: 'Date',
            },
        ],
        [
            {
                icon: 'description',
                name: 'Document',
            },
        ],
    ]

    handleAddButton(menuButton: { icon: string; name: string }) {
        if (menuButton.name === 'New Section') {
            this.onAddButton.emit()
        }
    }
}
