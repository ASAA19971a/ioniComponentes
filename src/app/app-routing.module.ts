import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: 'alert',
    loadChildren: () =>
      import('./pages/alert/alert.module').then((m) => m.AlertPageModule),
  },
  {
    path: 'action-sheet',
    loadChildren: () =>
      import('./pages/action-sheet/action-sheet.module').then(
        (m) => m.ActionSheetPageModule
      ),
  },
  {
    path: 'avatar',
    loadChildren: () =>
      import('./pages/avatar/avatar.module').then((m) => m.AvatarPageModule),
  },
  {
    path: 'badge',
    loadChildren: () =>
      import('./pages/badge/badge.module').then((m) => m.BadgePageModule),
  },
  {
    path: 'buttons',
    loadChildren: () =>
      import('./pages/buttons/buttons.module').then((m) => m.ButtonsPageModule),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./pages/card/card.module').then((m) => m.CardPageModule),
  },
  {
    path: 'chip',
    loadChildren: () =>
      import('./pages/chip/chip.module').then((m) => m.ChipPageModule),
  },
  {
    path: 'date-time',
    loadChildren: () =>
      import('./pages/date-time/date-time.module').then(
        (m) => m.DateTimePageModule
      ),
  },
  {
    path: 'picker',
    loadChildren: () =>
      import('./pages/picker/picker.module').then((m) => m.PickerPageModule),
  },
  {
    path: 'fab',
    loadChildren: () =>
      import('./pages/fab/fab.module').then((m) => m.FabPageModule),
  },
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./pages/checkbox/checkbox.module').then(
        (m) => m.CheckboxPageModule
      ),
  },
  {
    path: 'infinite-scroll',
    loadChildren: () =>
      import('./pages/infinite-scroll/infinite-scroll.module').then(
        (m) => m.InfiniteScrollPageModule
      ),
  },  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list-reorder',
    loadChildren: () => import('./pages/list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('./pages/progress/progress.module').then( m => m.ProgressPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
