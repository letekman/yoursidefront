import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRating} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import { NavbarComponent } from './components/mainpanel/navbar/navbar.component';
import { MainpanelComponent } from './components/mainpanel/mainpanel/mainpanel.component';
import { FooterComponent } from './components/mainpanel/footer/footer.component';
import { TeacherprofileComponent } from './components/mainpanel/teacherreviews/teacherprofile/teacherprofile.component';
import {TeacherreviewsComponent} from './components/mainpanel/teacherreviews/teacherreviews/teacherreviews.component';
import { ReviewTeacherComponent } from './review-teacher/review-teacher.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        MainpanelComponent,
        FooterComponent,
        TeacherprofileComponent,
        TeacherreviewsComponent,
        ReviewTeacherComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
