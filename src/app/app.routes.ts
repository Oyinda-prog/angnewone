 import { Routes } from '@angular/router';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { EditcomponetComponent } from './editcomponet/editcomponet.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ContactappeditComponent } from './contactappedit/contactappedit.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { ParentbehaviorsubComponent } from './parentbehaviorsub/parentbehaviorsub.component';
import { TemplatevalidationComponent } from './templatevalidation/templatevalidation.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NoteappComponent } from './noteapp/noteapp.component';
import { ViewnoteappComponent } from './viewnoteapp/viewnoteapp.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { userguardGuard } from './userguard.guard';
import { StudentsigninComponent } from './studentsignin/studentsignin.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { studentGuard } from './guards/student.guard';
import { StudentprofilepictureComponent } from './studentprofilepicture/studentprofilepicture.component';
import { StudentupdatepasswordComponent } from './studentupdatepassword/studentupdatepassword.component';
import { StudentcourseComponent } from './studentcourse/studentcourse.component';
import { Component } from '@angular/core';
import { StudentcourseupdateComponent } from './studentcourseupdate/studentcourseupdate.component';
import { StudentclassmatesComponent } from './studentclassmates/studentclassmates.component';
import { StudentprofileeditComponent } from './studentprofileedit/studentprofileedit.component';
import { StudentreceiptuploadsComponent } from './studentreceiptuploads/studentreceiptuploads.component';
import { StudentnotekeepComponent } from './studentnotekeep/studentnotekeep.component';
import { ChildeComponent } from './childe/childe.component';
import { EventparentComponent } from './eventparent/eventparent.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminresoursesComponent } from './adminresourses/adminresourses.component';
import { StudentresourcesComponent } from './studentresources/studentresources.component';
import { StudentemailpageComponent } from './studentemailpage/studentemailpage.component';
import { StudentresetpasswordoneComponent } from './studentresetpasswordone/studentresetpasswordone.component';
import { StudentresetpasswordtwoComponent } from './studentresetpasswordtwo/studentresetpasswordtwo.component';
import { AdminreceiptpageComponent } from './adminreceiptpage/adminreceiptpage.component';
import { PipeComponent } from './pipe/pipe.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';

export const routes: Routes = [
    // {path:'',component:LandingpageComponent},
    // {path:"home",redirectTo:'',pathMatch:'full'},
    // {path:"contact",children:[
    //     {path:'',component:ContactAppComponent},
    //     {path:"edit/:index",component:EditcomponetComponent}
    // ]},
    
{path:'', component:LandingpageComponent},
{path:'home',redirectTo:'',pathMatch:'full'},
{path:'behaviorsubject', component:ParentbehaviorsubComponent},
{path:'usersignin', component:UsersigninComponent},
{path:'usersignup', component:UsersignupComponent},
{path:'event_path', component:ChildeComponent},
{path:'userdashboard', component:UserdashboardComponent},
{path:'studentsignin', component:StudentsigninComponent},
{path:'studentsignup', component:StudentsignupComponent},
{path:'angularmaterial',component:AngularmaterialComponent},
{path:'pipe',component:PipeComponent},
{path:'password_reset', component:StudentresetpasswordoneComponent},
{path:'reset_password', component:StudentresetpasswordtwoComponent},
{path:'eventparent', component:EventparentComponent},
{path:'adminsignup', component:AdminsignupComponent},
{path:'adminsignin', component:AdminsigninComponent},
{path:'admindashboard', children:[
   { path:'',component:AdmindashboardComponent},
   {path:'emailpage',component:StudentemailpageComponent},
   { path:'resourseuploads',component:AdminresoursesComponent},
   { path:'receiptpage',component:AdminreceiptpageComponent},
]},
{path:'studentdashboard',
children:[
{path:'',component:StudentdashboardComponent},
{path:'classmates',component:StudentclassmatesComponent},
{path:'profilepicture',component:StudentprofilepictureComponent},
{path:'resources',component:StudentresourcesComponent},
{path:'profile_page',component:StudentprofileeditComponent},
{path:'updatepassword',component:StudentupdatepasswordComponent},
{path:'receiptuploads',component:StudentreceiptuploadsComponent},
{path:'notekeep',component:NoteappComponent},
{path:'courses', children:[
   { path:'',component:StudentcourseComponent},
   {path:'add',component:StudentcourseupdateComponent},
]
    
    },

],
     canActivate:[studentGuard]},
{path:'reactiveform', component:ReactiveformComponent},
{path:'noteapp',children:[
    {path:'',component:NoteappComponent},
    {path:':index',component:ViewnoteappComponent}
]},
{path:'dashboard',children:[
    {path:'',component:DashboardComponent},
    {path:'profile',children:[
        {path:'',component:ProfileComponent},
        {path:'update_profile',component:UpdateprofileComponent}
    ]
},
]},

{
    path:'contact',children:[
        {path:'',component:ContactAppComponent},
        {path:'view',component:ViewcontactComponent},
        {path:'edit/:id',component:EditcomponetComponent}
    ]
},

{path:'**',component:ErrorpageComponent}


];
