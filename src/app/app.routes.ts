import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
//User Componetns
import { HomeuserComponent } from './user/homeuser/homeuser.component';


export const routes: Routes = [
    // Public pages
    {'path': 'home', redirectTo: '', pathMatch: 'full' },
    {'path':'','title':'Home-Page | Kanker Recruitment Portal',component:HomeComponent},
    {'path': 'about', redirectTo: 'about-us', pathMatch: 'full' },
    {'path':'about-us','title':'About-Us | Kanker Recruitment Portal',component:AboutusComponent },
    {'path': 'contact', redirectTo: 'contact-us', pathMatch: 'full' },
    {'path':'contact-us','title':'Contact-Us | Kanker Recruitment Portal',component:ContactusComponent},
    {'path':'register','title':'User-Registration | Kanker Recruitment Portal',component:RegisterComponent},
    {'path':'login','title':'User-Login | Kanker Recruitment Portal', component:LoginComponent},
    {'path': 'forget', redirectTo: 'ForgetPassword', pathMatch: 'full' },
    {'path': 'forgetpassword', redirectTo: 'ForgetPassword', pathMatch: 'full' },
    {'path':'ForgetPassword','title':'Forget User ID & Password | Kanker Recruitment Portal', component:ForgetComponent},
    {'path':'notification',redirectTo:'notifications',pathMatch:'full'},
    {'path':'notifications','title':'Recruitment Notifications | Kanker Recruitment Portal', component:NotificationsComponent},
    {'path':'gallery','title':'Gallery | Kanker Recruitment Portal', component:GalleryComponent},

    // User Routing
    {'path': 'user/home', redirectTo: 'user', pathMatch: 'full'},
    {'path':'user','title':' User Home-Page | Kanker Recruitment Portal',component:HomeuserComponent},



    { path: '**',title:'Erorr 404 | Page Not Found !..', component: PageNotFoundComponent},

  


];
