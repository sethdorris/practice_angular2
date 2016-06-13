import { Pipe } from '@angular/core';

@Pipe({
    name: 'backlogFilter',
    pure: false
})
export class BacklogFilter {
    transform(arrayofitems) {
        console.log("Array of items", arrayofitems);
        return arrayofitems.filter((item) => { return item.status == "BACKLOG" });
    }
}