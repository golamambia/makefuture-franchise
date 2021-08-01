import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   //pathMatch: 'full'
  // },
   {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'find-course',
    loadChildren: () => import('./find-course/find-course.module').then( m => m.FindCoursePageModule)
  },
  {
    path: 'find-college',
    loadChildren: () => import('./find-college/find-college.module').then( m => m.FindCollegePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'admission',
    loadChildren: () => import('./admission/admission.module').then( m => m.AdmissionPageModule)
  },
  {
    path: 'apply-for-counselling',
    loadChildren: () => import('./apply-for-counselling/apply-for-counselling.module').then( m => m.ApplyForCounsellingPageModule)
  },
  {
    path: 'apply-form',
    loadChildren: () => import('./apply-form/apply-form.module').then( m => m.ApplyFormPageModule)
  },
  {
    path: 'college-details/:slug',
    loadChildren: () => import('./college-details/college-details.module').then( m => m.CollegeDetailsPageModule)
  },
  {
    path: 'course-details/:slug',
    loadChildren: () => import('./course-details/course-details.module').then( m => m.CourseDetailsPageModule)
  },
  {
    path: 'news-details/:slug',
    loadChildren: () => import('./news-details/news-details.module').then( m => m.NewsDetailsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
   {
    path: 'our-service',
    loadChildren: () => import('./our-service/our-service.module').then( m => m.OurServicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
