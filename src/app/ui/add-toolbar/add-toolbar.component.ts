import { Component, EventEmitter, Output } from '@angular/core'
import { FlexColComponent } from '../grid/flex-col/flex-col.component'
import { MatIcon } from '@angular/material/icon'
import { MatIconButton } from '@angular/material/button'

@Component({
    selector: 'app-add-toolbar',
    templateUrl: './add-toolbar.component.html',
    styleUrls: ['./add-toolbar.component.scss'],
    standalone: true,
    imports: [FlexColComponent, MatIcon, MatIconButton],
})
export class AddToolbarComponent {
    @Output() onAddButton: EventEmitter<any> = new EventEmitter<any>()

    handleAddButton() {
        this.onAddButton.emit()
    }
}
