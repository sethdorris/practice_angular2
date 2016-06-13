import { Pipe } from '@angular/core';

@Pipe({
    name: 'qa',
    pure: false
})
export class qaFilter {
    transform(arrayofitems) {
        return arrayofitems.filter((item) => { return item.status == "QA" });
    }
}