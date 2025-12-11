import { Component, Input } from '@angular/core'
import { InitialsPipe } from '../../core/pipes/initials-pipe'

export const enum BadgeTypes {
    PROFILE = 'Profile',
    SQUARE = 'Square',
}
@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
    standalone: true,
    imports: [InitialsPipe],
})
export class BadgeComponent {
    @Input() type: BadgeTypes = BadgeTypes.PROFILE
    @Input() text: string | null = null
}
