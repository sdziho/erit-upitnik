import { Routes } from '@angular/router'

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./admin/admin.routes').then((r) => r.ADMIN_ROUTES),
    },
    {
        path: 'analytics',
        loadChildren: () =>
            import('./analytics/analytics.routes').then(
                (r) => r.ANALYTICS_ROUTES
            ),
    },
    {
        path: 'fill-form',
        loadChildren: () =>
            import('./fill-form/fill-form.routes').then(
                (r) => r.FILL_FORM_ROUTES
            ),
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('./projects/projects.routes').then((r) => r.PROJECTS_ROUTES),
    },
    {
        path: 'applications',
        loadChildren: () =>
            import('./applications/applications.routes').then(
                (r) => r.APPLICATIONS_ROUTES
            ),
    },
    {
        path: 'reports',
        loadChildren: () =>
            import('./reports/reports.routes').then((r) => r.REPORTS_ROUTES),
    },
    {
        path: 'settings',
        loadChildren: () =>
            import('./settings/settings.routes').then((r) => r.SETTINGS_ROUTES),
    },
]
