import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {RouterPaths} from './entities/enums/RouterPaths.enum';

const routes: Routes = [
	{
		path: RouterPaths.MAIN,
		loadChildren: () => import('../pages/main/main.module').then((m) => m.MainModule),
	},
	{
		path: RouterPaths.PROFILE,
		loadChildren: () => import('../pages/profile/profile.module').then((m) => m.ProfileModule),
	},
	{
		path: RouterPaths.CALENDAR,
		loadChildren: () => import('../pages/calendar/calendar.module').then((m) => m.CalendarModule),
	},
	{
		path: RouterPaths.LOGIN,
		loadChildren: () => import('../pages/login/login.module').then((m) => m.LoginModule),
	},
  {
		path: RouterPaths.INFO,
		loadChildren: () => import('../pages/info/info.module').then((m) => m.InfoModule),
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule],
})

export class AppRoutingModule { }
