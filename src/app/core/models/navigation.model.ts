export interface Routes {
    name: string
    icon: string
    route: string[]
}

export const NavigationList: Routes[] = [
    {
        name: 'Prijave',
        icon: 'feedback',
        route: ['/applications'],
    },
    {
        name: 'Projekti',
        icon: 'holiday_village',
        route: ['/projects'],
    },
    {
        name: 'Analitika i detekcija',
        icon: 'equalizer',
        route: ['/analytics'],
    },
    {
        name: 'Izvještavanje',
        icon: 'assignment',
        route: ['/reports'],
    },
    {
        name: 'Administracija korisnika',
        icon: 'people_alt',
        route: ['/admin'],
    },
    {
        name: 'Postavke',
        icon: 'settings',
        route: ['/settings'],
    },
]
