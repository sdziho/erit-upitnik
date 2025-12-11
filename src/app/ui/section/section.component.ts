import { Component, Input } from '@angular/core'
import { MatExpansionModule } from '@angular/material/expansion'
import { BadgeComponent, BadgeTypes } from '../badges/badge.component'

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
    standalone: true,
    imports: [MatExpansionModule, BadgeComponent],
})
export class SectionComponent {
    type: BadgeTypes = BadgeTypes.SQUARE
    @Input() title: string = 'Enter title here'
    @Input() id: string = 'S-001'
}
