import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { RouterPaths } from './entities/enums/RouterPaths.enum';
import { CheckAuth } from './shared/guards/checkAuth';
import { CheckAuthCalendar } from './shared/guards/checkAuth calendar';

const routes: Routes = [
  {
    path: RouterPaths.MAIN,
    loadChildren: () =>
      import('../pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: RouterPaths.PROFILE,
    loadChildren: () =>
      import('../pages/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [CheckAuth],
  },
  {
    path: RouterPaths.CALENDAR,
    loadChildren: () =>
      import('../pages/calendar/calendar.module').then((m) => m.CalendarModule),
    canActivate: [CheckAuthCalendar],
  },
  {
    path: RouterPaths.LOGIN,
    loadChildren: () =>
      import('../pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: RouterPaths.EXCHANGE_RATES,
    loadChildren: () =>
      import('../pages/exchange rates/exchange rates.module').then(
        (m) => m.ExchangeRatesModule
      ),
  },
  {
    path: RouterPaths.INFO,
    loadChildren: () =>
      import('../pages/info/info.module').then((m) => m.InfoModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [CheckAuth],
})
export class AppRoutingModule {}
