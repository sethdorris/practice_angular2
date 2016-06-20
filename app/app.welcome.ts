import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    selector: "welcome",
    template: "<h1> Welcome Brethren I am just testing out the Angular Router! </h1><router-outlet></router-outlet>",
    directives: [ROUTER_DIRECTIVES]
})
export class welcome {

}