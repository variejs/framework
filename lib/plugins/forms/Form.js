"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var Form = /** @class */ (function () {
    function Form(data, validator) {
        if (validator) {
            this._validator = validator;
        }
        for (var field in data) {
            this[field] = data[field];
        }
        this.setOriginaldata();
    }
    Form.prototype.validation = function (_a) {
        var rules = _a.rules, messages = _a.messages;
        this._rules = rules;
        this._messages = messages;
        return this;
    };
    Form.prototype.isValid = function () {
        if (this._validator) {
            return this._validator.validate(this.data(), this._rules, this._messages);
        }
        return true;
    };
    Form.prototype.reset = function () {
        for (var field in this._originalData) {
            vue_1.default.set(this, field, this._originalData[field]);
        }
        this.setOriginaldata();
    };
    Form.prototype.data = function () {
        var data = {};
        var tempData = Object.assign({}, this);
        for (var field in tempData) {
            if (field.indexOf("_") != 0) {
                data[field] = JSON.parse(JSON.stringify(this[field]));
            }
        }
        return data;
    };
    Form.prototype.setOriginaldata = function () {
        this._originalData = Object.assign({}, this.data());
    };
    Form.prototype.isDirty = function () {
        return JSON.stringify(this.data()) === JSON.stringify(this._originalData);
    };
    return Form;
}());
exports.default = Form;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL2Zvcm1zL0Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBc0I7QUFHdEI7SUFNRSxjQUFZLElBQVksRUFBRSxTQUFzQztRQUM5RCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDOUIsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDLElBQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx5QkFBVSxHQUFqQixVQUFrQixFQUFtQjtZQUFqQixnQkFBSyxFQUFFLHNCQUFRO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sb0JBQUssR0FBWjtRQUNFLEdBQUcsQ0FBQyxDQUFDLElBQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLGFBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sbUJBQUksR0FBWDtRQUNFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxDQUFDLElBQU0sS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDhCQUFlLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQUVELGtCQUFlLElBQUksQ0FBQyJ9