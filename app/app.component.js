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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Software Project Board";
        this.backlog = {
            id: 1,
            title: "Setup Mock JIRA Board",
            status: "Backlog",
            details: "I need to setup a mock JIRA Board",
            show: true
        };
        this.func = function (backlog) {
            backlog.show ? backlog.show = false : backlog.show = true;
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n            <h1>Software Development PM Board</h1>\n            <div>Backlog\n                <div (click)=\"func(backlog)\" *ngIf=backlog.show>Ticket ID: {{backlog.id}} - Title: {{backlog.title}} - Details: {{backlog.details}}</div>\n                <div *ngIf=!backlog.show>\n                    Edit Title: <input [(ngModel)]=\"backlog.title\" placeholder=\"backlog.title\"> <br>\n                    Edit Details: <input [(ngModel)]=\"backlog.details\" placeholder=\"backlog.details\">\n                    <button (click)=\"func(backlog)\">Save Changes</button>\n            </div>\n        "
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
//# sourceMappingURL=app.component.js.map