ngx-gridster (original angular-gridster2)
==============
[![npm version](https://badge.fury.io/js/ngx-gridster.svg)](https://badge.fury.io/js/ngx-gridster)
[![dependencies Status](https://david-dm.org/automatica-core/ngx-gridster/status.svg)](https://david-dm.org/automatica-core/ngx-gridster)
[![devDependencies Status](https://david-dm.org/automatica-core/ngx-gridster/dev-status.svg)](https://david-dm.org/automatica-core/ngx-gridster?type=dev)
[![downloads](https://img.shields.io/npm/dm/ngx-gridster.svg)](https://www.npmjs.com/package/ngx-gridster)
[![Donate with Bitcoin](https://en.cryptobadges.io/badge/micro/1Ck4XgAxys3aBjdesKQQ62zx7m4vozUest)](https://en.cryptobadges.io/donate/1Ck4XgAxys3aBjdesKQQ62zx7m4vozUest)

Donate DogeCoin: DPVz6RSAJrXZqTF4sGXpS1dqwvU36hSaAQ

### Angular implementation of angular-gridster [Demo](https://automatica-core.github.io/ngx-gridster/)

### Requires Angular 8.x
### For other Angular versions check the other branches.

## Install

``npm install ngx-gridster --save``

Should work out of the box with webpack, respectively angular-cli.

```javascript
import { GridsterModule } from 'ngx-gridster';

@NgModule({
  imports: [ GridsterModule ],
  ...
})
```
## Browser support
  What Angular supports [here](https://github.com/angular/angular)
## How to use

```html
<gridster [options]="options">
  <gridster-item [item]="item" *ngFor="let item of dashboard">
    <!-- your content here -->
  </gridster-item>
</gridster>
```

Initialize a simple dashboard:
```typescript
   import { GridsterConfig, GridsterItem }  from 'ngx-gridster';
   options: GridsterConfig;
   dashboard: Array<GridsterItem>;

   static itemChange(item, itemComponent) {
     console.info('itemChanged', item, itemComponent);
   }
 
   static itemResize(item, itemComponent) {
     console.info('itemResized', item, itemComponent);
   }
 
   ngOnInit() {
     this.options = {
       itemChangeCallback: AppComponent.itemChange,
       itemResizeCallback: AppComponent.itemResize,
     };
 
     this.dashboard = [
       {cols: 2, rows: 1, y: 0, x: 0},
       {cols: 2, rows: 2, y: 0, x: 2}
     ];
   }
 
   changedOptions() {
     this.options.api.optionsChanged();
   }
 
   removeItem(item) {
     this.dashboard.splice(this.dashboard.indexOf(item), 1);
   }
 
   addItem() {
     this.dashboard.push({});
   }
```

##### Note: The gridster will take all the available space from the parent. It will not size depending on content. The parent of the component needs to have a size.


### Having iFrame in widgets content
iFrames can interfere with drag/resize of widgets. For a workaround please read [this issue #233](https://github.com/automatica-core/ngx-gridster/issues/233)

### Interact with content without dragging

Option 1 (without text selection):
```html
<gridster-item>
   <div (mousedown)="$event.stopPropagation()" (touchstart)="$event.stopPropagation()">
     Some content to click without dragging the widget
   </div>
   <div class="item-buttons">
     <button md-icon-button md-raised-button class="drag-handler">
         <md-icon>open_with</md-icon>
     </button>
     <button md-icon-button md-raised-button class="remove-button" (click)="removeItem($event, item)"
             (touchstart)="removeItem($event, item)" mdTooltip="Remove">
       <md-icon>clear</md-icon>
     </button>
   </div>
</gridster-item>
```

Option 2 (with text selection):
```html
<gridster-item>
  <div class="gridster-item-content">
      Some content to select and click without dragging the widget
  </div>
  <div class="item-buttons">
    <button md-icon-button md-raised-button class="drag-handler">
      <md-icon>open_with</md-icon>
    </button>
    <button md-icon-button md-raised-button class="remove-button" (click)="removeItem($event, item)"
            (touchstart)="removeItem($event, item)" mdTooltip="Remove">
      <md-icon>clear</md-icon>
    </button>
  </div>
</gridster-item>
```
 
### Contributors [here](https://github.com/automatica-core/ngx-gridster/graphs/contributors)

### Supporters
@matpag (Mattia Pagini)
Derek

### [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/tiberiuzuld)

### License
 The MIT License
 
 Copyright (c) 2019 Tiberiu Zuld
