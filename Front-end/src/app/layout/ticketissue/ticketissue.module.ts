import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageHeaderModule } from '../../shared';

import { TicketissueRoutingModule } from './ticketissue-routing.module';
import { TicketissueComponent } from './ticketissue.component';

import { TablesModule } from '../tables/tables.module';
import { TablesComponent } from '../tables/tables.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, TicketissueRoutingModule, PageHeaderModule,TablesModule,ReactiveFormsModule],
    declarations: [],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TicketIssueModule {}
