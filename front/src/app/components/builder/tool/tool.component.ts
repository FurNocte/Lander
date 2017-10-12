import { Component,
    OnInit,
    Input,
    HostListener } from '@angular/core';

@Component({
    selector: 'g [app-tool]',
    templateUrl: './tool.component.html',
    styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

    @Input() private x:number = 100;
    @Input() private y:number = 100;
    @Input() private width:number = 100;
    @Input() private height:number = 100;

    private gridSpace:number = 10;
    private isMoving:boolean = false;
    private isResizing:number = 0;
    private border:string = "100,100 100,200 200,200 200,100";

    constructor() { }

    ngOnInit() {
        this.updateBorder();
    }

    private updateBorder() {
        this.border = this.x + ',' + this.y + ' ' +
            (this.x + this.width) + ',' + this.y + ' ' +
            (this.x + this.width) + ',' + (this.y + this.height) + ' ' +
            this.x + ',' + (this.y + this.height);
    }

    private alignToGrid() {
        this.x = Math.floor(this.x / this.gridSpace) * this.gridSpace;
        this.y = Math.floor(this.y / this.gridSpace) * this.gridSpace;
        this.width = Math.floor(this.width / this.gridSpace) * this.gridSpace;
        this.height = Math.floor(this.height / this.gridSpace) * this.gridSpace;
        this.updateBorder();
    }

    private startMoving() {
        this.isMoving = true;
    }

    private moving(event:MouseEvent) {
        if (this.isMoving && event.button === 0) {
            this.x += event.movementX;
            if (this.x < 0) this.x = 0;
            this.y += event.movementY;
            if (this.y < 0) this.y = 0;
            this.updateBorder();
        }
    }

    private stopMoving() {
        this.isMoving = false;
        this.alignToGrid();
    }

    private startResizing(corner) {
        this.isResizing = corner;
    }

    private resizing(event:MouseEvent) {
        if (this.isResizing == 1) {
            this.y += event.movementY;
            this.height -= event.movementY;
        } else if (this.isResizing == 2) {
            this.height += event.movementY;
        } else if (this.isResizing == 3) {
            this.x += event.movementX;
            this.width -= event.movementX;
        } else if (this.isResizing == 4) {
            this.width += event.movementX;
        }
        this.updateBorder();
    }

    private stopResizing() {
        this.isResizing = 0;
        this.alignToGrid();
    }

    @HostListener('mousemove', ['$event'])
    onMousemove(event:MouseEvent) {
        if (this.isResizing)
            this.resizing(event);
    }

    @HostListener('mouseup')
    onMouseUp() {
        if (this.isMoving)
            this.stopMoving();
        if (this.isResizing)
            this.stopResizing();
    }

    @HostListener('mouseout')
    onMouseOut() {
        if (this.isMoving)
            this.stopMoving();
        if (this.isResizing)
            this.stopResizing();
    }
}
