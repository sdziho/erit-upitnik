import { Component, EventEmitter, Input, Output } from '@angular/core'
import { AddToolbarComponent } from '../add-toolbar/add-toolbar.component'

@Component({
    selector: 'app-no-data-page',
    templateUrl: './no-data-page.component.html',
    styleUrls: ['./no-data-page.component.scss'],
    standalone: true,
    imports: [AddToolbarComponent],
})
export class NoDataPageComponent {
    @Output() onButtonAction: EventEmitter<string> = new EventEmitter<string>()
    @Input() text!: string
    @Input() buttonText!: string

    handleButtonAction(event: string) {
        this.onButtonAction.emit(event)
    }
}
