import { Routes } from '@angular/router';
// import { AuthGuard } from './core/guards/auth-guard';
// import { AdminGuard } from './core/guards/admin-guard.guard';
// import { StudentsGuard } from './core/guards/students-guard.guard';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component'
// import { Admin } from './pages/admin/admin.component';
// import { Students } from './pages/students/students.component';
//
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
//   { path: 'students', loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule) },
//   { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
