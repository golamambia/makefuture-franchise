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
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
   {
    path: 'our-service',
    loadChildren: () => import('./our-service/our-service.module').then( m => m.OurServicePageModule)
  },
  {
    path: 'my-admission',
    loadChildren: () => import('./my-admission/my-admission.module').then( m => m.MyAdmissionPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'redeem-point',
    loadChildren: () => import('./redeem-point/redeem-point.module').then( m => m.RedeemPointPageModule)
  },
  {
    path: 'my-offer',
    loadChildren: () => import('./my-offer/my-offer.module').then( m => m.MyOfferPageModule)
  },
  {
    path: 'student-list',
    loadChildren: () => import('./student-list/student-list.module').then( m => m.StudentListPageModule)
  },
  {
    path: 'membership',
    loadChildren: () => import('./membership/membership.module').then( m => m.MembershipPageModule)
  },
  {
    path: 'apply-authorization',
    loadChildren: () => import('./apply-authorization/apply-authorization.module').then( m => m.ApplyAuthorizationPageModule)
  },
  {
    path: 'apply-payout',
    loadChildren: () => import('./apply-payout/apply-payout.module').then( m => m.ApplyPayoutPageModule)
  },
  {
    path: 'contact-mentor',
    loadChildren: () => import('./contact-mentor/contact-mentor.module').then( m => m.ContactMentorPageModule)
  },
  {
    path: 'my-address',
    loadChildren: () => import('./my-address/my-address.module').then( m => m.MyAddressPageModule)
  },
   {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'bank-information',
    loadChildren: () => import('./bank-information/bank-information.module').then( m => m.BankInformationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
