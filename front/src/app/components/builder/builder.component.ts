import { Component,
    OnInit } from '@angular/core';

import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.css'],
    providers: [DatabaseService]
})
export class BuilderComponent implements OnInit {

    constructor(
        private databaseService: DatabaseService
    ) { }

    ngOnInit() {
        this.databaseService.getTools();
    }

}
