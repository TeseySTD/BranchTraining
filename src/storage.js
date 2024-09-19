"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.prototype.saveBooks = function (books) {
        localStorage.setItem("books", JSON.stringify(books));
    };
    Storage.prototype.getBooks = function () {
        var books = localStorage.getItem("books");
        return books ? JSON.parse(books) : [];
    };
    Storage.prototype.getBookById = function (id) {
        var books = this.getBooks();
        return books.find(function (book) { return book.id === id; });
    };
    Storage.prototype.saveUsers = function (users) {
        localStorage.setItem("users", JSON.stringify(users));
    };
    Storage.prototype.getUsers = function () {
        var users = localStorage.getItem("users");
        return users ? JSON.parse(users) : [];
    };
    Storage.prototype.getUserById = function (id) {
        var users = this.getUsers();
        return users.find(function (user) { return user.id === id; });
    };
    return Storage;
}());
exports.Storage = Storage;
