import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

import {DisplayGrid, GridsterConfig, GridsterItem, GridType} from 'ngx-gridster';

@Component({
  selector: 'app-grid-sizes',
  templateUrl: './gridSizes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GridSizesComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  ngOnInit() {
    this.options = {
      gridType: GridType.FitToGridOptions,
      displayGrid: DisplayGrid.Always,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },
      minCols: 5,
      maxCols: 5,
      minRows: 5,
      maxRows: 5,
      defaultItemCols: 1,
      defaultItemRows: 1
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 1, rows: 1, y: 0, x: 4}
    ];
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
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }
}
