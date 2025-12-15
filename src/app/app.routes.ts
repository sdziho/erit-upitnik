import { Routes } from '@angular/router'
import { RouteNames } from './core/models/navigation.model'

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full',
        data: { name: RouteNames.ANALITIKA },
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./admin/admin.routes').then((r) => r.ADMIN_ROUTES),
        data: { name: RouteNames.ADMIN },
    },
    {
        path: 'analytics',
        loadChildren: () =>
            import('./analytics/analytics.routes').then(
                (r) => r.ANALYTICS_ROUTES
            ),
        data: { name: RouteNames.ANALITIKA },
    },
    {
        path: 'fill-form',
        loadChildren: () =>
            import('./fill-form/fill-form.routes').then(
                (r) => r.FILL_FORM_ROUTES
            ),
        data: { name: 'Ispunjavanje upitnika' },
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('./projects/projects.routes').then((r) => r.PROJECTS_ROUTES),
        data: { name: RouteNames.PROJEKTI },
    },
    {
        path: 'applications',
        loadChildren: () =>
            import('./applications/applications.routes').then(
                (r) => r.APPLICATIONS_ROUTES
            ),
        data: { name: RouteNames.PRIJAVE },
    },
    {
        path: 'reports',
        loadChildren: () =>
            import('./reports/reports.routes').then((r) => r.REPORTS_ROUTES),
        data: { name: RouteNames.IZVJESTAVANJE },
    },
    {
        path: 'settings',
        loadChildren: () =>
            import('./settings/settings.routes').then((r) => r.SETTINGS_ROUTES),
        data: { name: RouteNames.POSTAVKE },
    },
]
