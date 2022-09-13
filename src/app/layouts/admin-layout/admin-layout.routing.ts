import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { AutoecolesComponent } from '../../autoecoles/autoecoles.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { EditAutoecoleComponent } from 'app/editautoecole/editautoecole.component';
import { EditMoniteurComponent } from 'app/editmoniteur/editmoniteur.component';
import { EditRendezvousComponent } from 'app/editrendezvous/editrendezvous.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'autoecoles',  component: AutoecolesComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'editAutoecole/:id', component: EditAutoecoleComponent },
    { path: 'editRendezvous/:id', component:EditRendezvousComponent },
    { path: 'editMoniteur/:id', component: EditMoniteurComponent },
];
