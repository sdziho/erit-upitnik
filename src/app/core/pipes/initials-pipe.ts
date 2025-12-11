import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'initials',
})
export class InitialsPipe implements PipeTransform {
    transform(fullName: string | null | undefined): string {
        if (!fullName) return ''

        return fullName
            .trim()
            .split(/\s+/)
            .map((word) => word[0]?.toUpperCase())
            .join('')
    }
}
