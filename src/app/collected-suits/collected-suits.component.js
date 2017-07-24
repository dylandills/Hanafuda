"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CollectedSuitsComponent = (function () {
    function CollectedSuitsComponent() {
        this.hand = [
            { cards[] }
        ];
        this.suits = [
            { cards[] }
        ];
    }
    CollectedSuitsComponent.prototype.onHandDrop = function (e) {
        this.hand.push(e.dragData);
        this.removeItem(e.dragData, this.suits);
    };
    CollectedSuitsComponent.prototype.onSuitsDrop = function (e) {
        this.suits.push(e.dragData);
        this.removeItem(e.dragData, this.hand);
    };
    CollectedSuitsComponent.prototype.removeCard = function (card, suit) {
        var index = list.map(function (e) {
            return e.image;
        }).indexOf(card.image);
        hand.splice(index, 1);
    };
    return CollectedSuitsComponent;
}());
CollectedSuitsComponent = __decorate([
    core_1.Component({
        selector: 'colected-suits',
        templateUrl: 'app/colected-suits/colected-suits.component.html'
    })
], CollectedSuitsComponent);
exports.CollectedSuitsComponent = CollectedSuitsComponent;
//# sourceMappingURL=colected-suits.component.js.map
