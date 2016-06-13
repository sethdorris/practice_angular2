import { Component, Input, Output, Pipe, EventEmitter } from '@angular/core';
import { Ticket } from './app.component';
import { BacklogFilter } from './backlog-pipe';
import { qaFilter } from './qa-pipe';
import { doneFilter } from './done-pipe';

@Component({
    selector: 'backlog',
    pipes: [BacklogFilter, qaFilter, doneFilter],
    template: `
        <div *ngFor="let ticket of tickets | backlogFilter">
            <div (click)="func(ticket)" *ngIf="ticket.show">Ticket ID: {{ticket.id}} - Title: {{ticket.title}} - Details: {{ticket.details}} - Status: {{ticket.status}}</div>
            <div *ngIf="!ticket.show">
                Edit Title: <input [(ngModel)]="ticket.title" placeholder="ticket.title"> <br>
                Edit Details: <input [(ngModel)]="ticket.details" placeholder="ticket.details"> <br>
                Edit Status: <select [(ngModel)]="ticket.status">
                                <option value="BACKLOG">BACKLOG</option>
                                <option value="QA">QA / Testing</option>
                                <option value="DONE">DONE</option>
                            </select>
            <button (click)="func(ticket)">Save Changes</button> 
            </div>
        </div>
        <h3>QA</h3>
        <div *ngFor="let ticket of tickets | qa">
            <div (click)="func(ticket)" *ngIf="ticket.show">Ticket ID: {{ticket.id}} - Title: {{ticket.title}} - Details: {{ticket.details}} - Status: {{ticket.status}}</div>
            <div *ngIf="!ticket.show">
                Edit Title: <input [(ngModel)]="ticket.title" placeholder="ticket.title"> <br>
                Edit Details: <input [(ngModel)]="ticket.details" placeholder="ticket.details"> <br>
                Edit Status: <select [(ngModel)]="ticket.status">
                                <option value="BACKLOG">BACKLOG</option>
                                <option value="QA">QA / Testing</option>
                                <option value="DONE">DONE</option>
                            </select>
            <button (click)="func(ticket)">Save Changes</button> 
            </div>
        </div>
        <h3>DONE</h3>
        <div *ngFor="let ticket of tickets | doneFilter">
            <div (click)="func(ticket)" *ngIf="ticket.show">Ticket ID: {{ticket.id}} - Title: {{ticket.title}} - Details: {{ticket.details}} - Status: {{ticket.status}}</div>
            <div *ngIf="!ticket.show">
                Edit Title: <input [(ngModel)]="ticket.title" placeholder="ticket.title"> <br>
                Edit Details: <input [(ngModel)]="ticket.details" placeholder="ticket.details"> <br>
                Edit Status: <select [(ngModel)]="ticket.status">
                                <option value="BACKLOG">BACKLOG</option>
                                <option value="QA">QA / Testing</option>
                                <option value="DONE">DONE</option>
                            </select>
            <button (click)="func(ticket)">Save Changes</button> 
            </div>
        </div>
    `
})

export class backlog {
    @Input()
    tickets: Ticket[];
    @Output()
    ticketsChange =  new EventEmitter();
    func = function (ticket) {
        console.log("Ticket", ticket);
        ticket.show ? ticket.show = false : ticket.show = true
        this.ticketsChange.emit(ticket);
    };
}