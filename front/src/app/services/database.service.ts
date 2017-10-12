import { Injectable } from '@angular/core';

import { DiskDB } from 'diskdb';

@Injectable()
export class DatabaseService {

    private db: DiskDB;

    constructor() {
        this.db = new DiskDB();
    }

    getTools() {
        this.db.connect('../database/', ['tools']);
    }
}
