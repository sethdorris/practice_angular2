"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var backlog_component_1 = require('./backlog.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Software Project Board";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.tickets = SeedTickets;
        console.log("this tickets", this.tickets);
    };
    AppComponent.prototype.TicketChanger = function ($event) {
        console.log("event", $event);
        console.log("Tickets array", this.tickets);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n            <h1>Software Development PM Board</h1>\n            <div>\n                <h3>Backlog</h3>\n                <backlog [tickets]=\"tickets\" (ticketsChange)=\"TicketChanger($event);\"></backlog>\n            </div>          \n        ",
            directives: [backlog_component_1.backlog]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Ticket = (function () {
    function Ticket() {
    }
    return Ticket;
}());
exports.Ticket = Ticket;
var SeedTickets = [
    { id: 0, title: "Setup JIRA Board", status: "BACKLOG", details: "Setup your Jira Board and get to work!", show: true },
    { id: 1, title: "Make Issue Columns", status: "BACKLOG", details: "This is details for making issue columns", show: true },
    { id: 2, title: "Backlog Issue 3", status: "BACKLOG", details: "This is details for BLI3", show: true },
    { id: 3, title: "In QA1", status: "QA", details: "This issue is in QA!", show: true },
    { id: 4, title: "In QA2", status: "QA", details: "This issue is in QA!", show: true }
];
//# sourceMappingURL=app.component.js.map