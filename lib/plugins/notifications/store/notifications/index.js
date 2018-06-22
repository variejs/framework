"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = require("./state");
var actions_1 = require("./actions");
var mutations_1 = require("./mutations");
var inversify_1 = require("inversify");
var Notifications = /** @class */ (function () {
    function Notifications() {
        this.state = state_1.default;
        this.namespaced = true;
        this.name = "notifications";
        this.actions = new actions_1.default();
        this.mutations = new mutations_1.default();
    }
    Notifications = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], Notifications);
    return Notifications;
}());
exports.default = Notifications;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcGx1Z2lucy9ub3RpZmljYXRpb25zL3N0b3JlL25vdGlmaWNhdGlvbnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNEI7QUFDNUIscUNBQWdDO0FBQ2hDLHlDQUFvQztBQUNwQyx1Q0FBdUM7QUFHdkM7SUFPRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBYmtCLGFBQWE7UUFEakMsc0JBQVUsRUFBRTs7T0FDUSxhQUFhLENBY2pDO0lBQUQsb0JBQUM7Q0FBQSxBQWRELElBY0M7a0JBZG9CLGFBQWEifQ==