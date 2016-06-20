import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    selector: "login",
    template: "<h1> Login </h1><router-outlet></router-outlet>",
    directives: [ROUTER_DIRECTIVES]
})
export class login {

}

