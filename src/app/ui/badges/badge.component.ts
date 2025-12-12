import { Component, Input } from '@angular/core'
import { InitialsPipe } from '../../core/pipes/initials-pipe'
import { NgStyle } from '@angular/common'

export const enum BadgeTypes {
    PROFILE = 'Profile',
    SQUARE = 'Square',
}
@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
    standalone: true,
    imports: [InitialsPipe, NgStyle],
})
export class BadgeComponent {
    @Input() type!: BadgeTypes
    @Input() text!: string
    @Input() style: { [key: string]: string } = {}
}
