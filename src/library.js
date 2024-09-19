"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        console.log(item);
        this.items.push(item);
    };
    Library.prototype.removeItem = function (item) {
        console.log(this.items, item);
        this.items = this.items.filter(function (i) { return JSON.stringify(i) != JSON.stringify(item); });
    };
    Library.prototype.updateItem = function (oldItem, newItem) {
        this.removeItem(oldItem);
        this.addItem(newItem);
    };
    Library.prototype.updateItems = function (items) {
        this.items = items;
    };
    Library.prototype.getItems = function () {
        return this.items;
    };
    return Library;
}());
exports.Library = Library;
