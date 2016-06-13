import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
            <h1>Software Development PM Board</h1>
            <div>Backlog
                <div (click)="func(backlog)" *ngIf=backlog.show>Ticket ID: {{backlog.id}} - Title: {{backlog.title}} - Details: {{backlog.details}}</div>
                <div *ngIf=!backlog.show>
                    Edit Title: <input [(ngModel)]="backlog.title" placeholder="backlog.title"> <br>
                    Edit Details: <input [(ngModel)]="backlog.details" placeholder="backlog.details">
                    <button (click)="func(backlog)">Save Changes</button>
            </div>
        `
})
export class AppComponent {
    title = "Software Project Board";
    backlog: Ticket = {
        id: 1,
        title: "Setup Mock JIRA Board",
        status: "Backlog",
        details: "I need to setup a mock JIRA Board",
        show: true
    };
    func = function (backlog) {
        backlog.show ? backlog.show = false : backlog.show = true
    };
}

export class Ticket {
    id: number;
    title: string;
    status: string;
    details: string;
    show: boolean;
}
