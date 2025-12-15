export interface Routes {
    name: string
    icon: string
    route: string[]
}

export enum RouteNames {
    PRIJAVE = 'Prijave',
    PROJEKTI = 'Projekti',
    ANALITIKA = 'Analitika i detekcija',
    IZVJESTAVANJE = 'Izvještavanje',
    ADMIN = 'Administracija korisnika',
    POSTAVKE = 'Postavke',
}

export const NavigationList: Routes[] = [
    {
        name: RouteNames.PRIJAVE,
        icon: 'feedback',
        route: ['/applications'],
    },
    {
        name: RouteNames.PROJEKTI,
        icon: 'holiday_village',
        route: ['/projects'],
    },
    {
        name: RouteNames.ANALITIKA,
        icon: 'equalizer',
        route: ['/analytics'],
    },
    {
        name: RouteNames.IZVJESTAVANJE,
        icon: 'assignment',
        route: ['/reports'],
    },
    {
        name: RouteNames.ADMIN,
        icon: 'people_alt',
        route: ['/admin'],
    },
    {
        name: RouteNames.POSTAVKE,
        icon: 'settings',
        route: ['/settings'],
    },
]
