import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType } from 'projects/ngx-gridster/src/public_api';

export class ClassItem {

  private _x: number;
  public get x(): number {
    return this._x;
  }
  public set x(v: number) {
    this._x = v;
  }

  private _y: number;
  public get y(): number {
    return this._y;
  }
  public set y(v: number) {
    this._y = v;
  }


  private _cols: number;
  public get cols(): number {
    return this._cols;
  }
  public set cols(v: number) {
    this._cols = v;
  }



  private _rows: number;
  public get rows(): number {
    return this._rows;
  }
  public set rows(v: number) {
    this._rows = v;
  }


}

@Component({
  selector: 'app-class-items',
  templateUrl: './class-items.component.html',
  styleUrls: ['./class-items.component.css']
})
export class ClassItemsComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<ClassItem>;

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      maxCols: 10,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };



    this.dashboard = [
      this.createItem(2, 1, 0, 0),
      this.createItem(2, 2, 0, 2),

      this.createItem(1, 1, 0, 4),

    ];
  }

  createItem(cols, rows, y, x) {
    const classItem = new ClassItem();

    classItem.cols = cols;
    classItem.rows = rows;
    classItem.x = x;
    classItem.y = y;

    return classItem;
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push(this.createItem(1, 1, 0, 0));
  }

}
