"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CollectionSuitsComponent = (function () {
    function CollectionSuitsComponent() {
        this.list1 = [
            { name: './images/Kiku-BlueTanzaku.jpeg' },
            { name: './images/Kiku-Normal-2.jpeg' },
            { name: './images/Kiku-Normal-2.jpeg' }
        ];
        this.list2 = [
            { name: './images/Kiku-Normal-2.jpeg' },
            { name: './images/Kiku-Normal-2.jpeg' },
            { name: './images/Kiri-Normal-3.jpeg' }
        ];
    }
    CollectionSuitsComponent.prototype.onList1Drop = function (e) {
        this.list1.push(e.dragData);
        this.removeItem(e.dragData, this.list2);
    };
    CollectionSuitsComponent.prototype.onList2Drop = function (e) {
        this.list2.push(e.dragData);
        this.removeItem(e.dragData, this.list1);
    };
    CollectionSuitsComponent.prototype.removeItem = function (item, list) {
        var index = list.map(function (e) {
            return e.name;
        }).indexOf(item.name);
        list.splice(index, 1);
    };
    return CollectionSuitsComponent;
}());
CollectionSuitsComponent = __decorate([
    core_1.Component({
        selector: 'swap-list',
        templateUrl: 'app/swap-list/swap-list.component.html',
        styles: ["\n    div.scroll-list {\n      overflow: auto;\n      max-height: 70vh;\n    }\n\n    .drag-over {\n      border: #ff525b dashed 2px;\n    }\n\n    .drag-hint {\n      border: #ffc100 dashed 2px;\n      /*transition: all .2s ease-in-out;*/\n      /*transform: scale(1.05);*/\n    }\n\n    .drag-target-border {\n      border: #00bfff dashed 2px;\n    }\n  "
        ]
    })
], CollectionSuitsComponent);
exports.CollectionSuitsComponent = CollectionSuitsComponent;
//# sourceMappingURL=swap-list.component.js.map
