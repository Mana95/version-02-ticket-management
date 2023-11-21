import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { EmployeeService } from './shared/services/employee/employee.service';
import { TablesComponent } from './layout/tables/tables.component';

import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { PageHeaderModule } from "./shared/modules/page-header/page-header.module";
import { TablesModule } from './layout/tables/tables.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './layout/employee/employee.component';
import { ItemsComponent } from './layout/items/items.component';
import { TicketissueComponent } from './layout/ticketissue/ticketissue.component';
import { TicketapproveComponent } from './layout/ticketapprove/ticketapprove.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';



@NgModule({
    declarations: [AppComponent,EmployeeComponent,TablesComponent,LoginComponent,ItemsComponent,TicketissueComponent,TicketapproveComponent],
    providers: [AuthGuard, EmployeeService],
    bootstrap: [AppComponent],
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        PageHeaderModule,
        TablesModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(),
        NgxPaginationModule,
        LoginModule,
        FormsModule,
             ReactiveFormsModule
    
        
        
    ]
})
export class AppModule {}
