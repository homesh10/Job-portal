import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { ContactusComponent } from './Pages/contactus/contactus.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { ForgetComponent } from './Pages/forget/forget.component';
import { NotificationsComponent } from './Pages/notifications/notifications.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';


export const routes: Routes = [
    // Public pages
    {'path': 'home', redirectTo:'', pathMatch:'full'},
    {'path':'','title':'Home-Page | Kanker Recruitment Portal',component:HomeComponent},
    {'path': 'about', redirectTo: 'about-us', pathMatch: 'full' },
    {'path':'about-us','title':'About-Us | Kanker Recruitment Portal',component:AboutusComponent },
    {'path': 'contact', redirectTo: 'contact-us', pathMatch: 'full' },
    {'path':'contact-us','title':'Contact-Us | Kanker Recruitment Portal',component:ContactusComponent},
    {'path':'register','title':'User-Registration | Kanker Recruitment Portal',component:RegisterComponent},
    {'path':'login','title':'User-Login | Kanker Recruitment Portal', component:LoginComponent},
    {'path': 'forgot', redirectTo: 'ForgotPassword', pathMatch: 'full' },
    {'path': 'forgotpassword', redirectTo: 'ForgotPassword', pathMatch: 'full' },
    {'path':'ForgotPassword','title':'Forgot User ID & Password | Kanker Recruitment Portal', component:ForgetComponent},
    {'path':'notification',redirectTo:'notifications',pathMatch:'full'},
    {'path':'notifications','title':'Recruitment Notifications | Kanker Recruitment Portal', component:NotificationsComponent},
    {'path':'gallery','title':'Gallery | Kanker Recruitment Portal', component:GalleryComponent},

    //Lazy Routing For User Module
    {'path':'user',  loadChildren:()=>import('./Modules/User/user.module').then(mod=> mod.UserModule)},    


    //Lazy Routing For User Module
    {'path':'admin',  loadChildren:()=>import('./Modules/Admin/admin.module').then(mod=> mod.AdminModule)},  
  
// This is For 404 Page  Error Handling
    { 'path': '**','title':'Erorr 404 | Page Not Found !..', component:PageNotFoundComponent}

];
