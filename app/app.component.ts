import { Component, Input, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { backlog } from './backlog.component';

@Component({
    selector: 'my-app',
    template:`
            <a [routerLink]="['/login']">Login</a>
            <a [routerLink]="['/welcome']">Welcome</a>
            <router-outlet></router-outlet>          
        `,
    directives: [backlog, ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit {
    title = "Software Project Board";
    tickets: Ticket[];
    ngOnInit() {
        this.tickets = SeedTickets;
        console.log("this tickets", this.tickets);
    }
    TicketChanger($event) {
        console.log("event", $event);
        console.log("Tickets array", this.tickets);
    }
}

export class Ticket {
    id: number;
    title: string;
    status: string;
    details: string;
    show: boolean;
}

var SeedTickets: Ticket[] = [
    { id: 0, title: "Setup JIRA Board", status: "BACKLOG", details: "Setup your Jira Board and get to work!", show: true },
    { id: 1, title: "Make Issue Columns", status: "BACKLOG", details: "This is details for making issue columns", show: true },
    { id: 2, title: "Backlog Issue 3", status: "BACKLOG", details: "This is details for BLI3", show: true },
    { id: 3, title: "In QA1", status: "QA", details: "This issue is in QA!", show: true },
    { id: 4, title: "In QA2", status: "QA", details: "This issue is in QA!", show: true }
];
