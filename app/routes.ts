import {Routes} from '@angular/router'

import{
    CreateSessionComponent
} from './events/index'

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']}

]