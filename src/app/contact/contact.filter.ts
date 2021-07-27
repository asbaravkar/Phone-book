import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'contactfilter'
})

export class ProductFilterPipe implements PipeTransform {
transform(contactList:any, searchText:any) {
    if(searchText){
        return contactList.filter((x: { firstName: string; })=>x.firstName.toLowerCase().indexOf(searchText) != -1)
    } else {
        return contactList
    }
}
}