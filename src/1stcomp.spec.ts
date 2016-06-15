import { AppComponent, Ticket } from '../app/app.component';
import { backlog } from '../app/backlog.component';
import { EventEmitter } from '@angular/core';

it('true is true', () => { expect(true).toEqual(true); });
it('null is not the same thing as undefined', function () {
    expect(null).not.toEqual(undefined);
});

describe('AppComponent', () => {

    it('has a Title', () => {
        let AppComponent: AppComponent = {
            title: "MyTitle", tickets: [], ngOnInit: function () { }, TicketChanger: function () { }
        };
        expect(AppComponent.title).toEqual('MyTitle');
    });
});

describe('BacklogComponent', () => {

    it('func returns true', () => {
        let backlog: backlog = {
            tickets: [],
            ticketsChange: new EventEmitter(),
            func: function (ticket) {
                console.log("Ticket", ticket);
                ticket.show ? ticket.show = false : ticket.show = true
                this.ticketsChange.emit(ticket);
                return true;
            }
        };
        expect(backlog.func(new Ticket())).toBe(true);
    });
}); 