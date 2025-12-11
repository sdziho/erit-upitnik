import { Component, Input } from '@angular/core'
import { InitialsPipe } from '../../core/pipes/initials-pipe'

@Component({
    selector: 'app-profile-badge',
    templateUrl: './profile-badge.component.html',
    styleUrls: ['./profile-badge.component.scss'],
    standalone: true,
    imports: [InitialsPipe],
})
export class ProfileBadgeComponent {
    @Input() name: string | null = null
}
