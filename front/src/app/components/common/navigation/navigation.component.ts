import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    private version:string = '1.0.0';
    private display:boolean = true;

    constructor() { }

    ngOnInit() {
    }

}
