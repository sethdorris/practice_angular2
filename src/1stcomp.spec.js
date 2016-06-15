"use strict";
var app_component_1 = require('../app/app.component');
var core_1 = require('@angular/core');
it('true is true', function () { expect(true).toEqual(true); });
it('null is not the same thing as undefined', function () {
    expect(null).not.toEqual(undefined);
});
describe('AppComponent', function () {
    it('has a Title', function () {
        var AppComponent = {
            title: "MyTitle", tickets: [], ngOnInit: function () { }, TicketChanger: function () { }
        };
        expect(AppComponent.title).toEqual('MyTitle');
    });
});
describe('BacklogComponent', function () {
    it('func returns true', function () {
        var backlog = {
            tickets: [],
            ticketsChange: new core_1.EventEmitter(),
            func: function (ticket) {
                console.log("Ticket", ticket);
                ticket.show ? ticket.show = false : ticket.show = true;
                this.ticketsChange.emit(ticket);
                return true;
            }
        };
        expect(backlog.func(new app_component_1.Ticket())).toBe(true);
    });
});
//# sourceMappingURL=1stcomp.spec.js.map