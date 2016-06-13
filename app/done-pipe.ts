import { Pipe } from '@angular/core';

@Pipe({
    name: 'doneFilter',
    pure: false
})
export class doneFilter {
    transform(arrayofitems) {
        return arrayofitems.filter((item) => { return item.status == "DONE" });
    }
}