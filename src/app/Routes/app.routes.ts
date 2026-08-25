import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { Profile } from './about-page/profile/profile';
import { Setting } from './about-page/setting/setting';

export const routes: Routes = [
  //basic routes for learning pupose only
  { path: '', component: HomePage },
  {
    path: 'about',
    component: AboutPage,
    children: [
      { path: 'profile', component: Profile },
      { path: 'setting', component: Setting },
    ],
  },
  { path: 'contact', component: ContactPage },
];
