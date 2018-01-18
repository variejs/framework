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
        var schema = _a.schema, messages = _a.messages;
        this._schema = schema;
        this._messages = messages;
        return this;
    };
    Form.prototype.isValid = function () {
        if (this._validator) {
            return this._validator.validate(this, this._schema, this._messages);
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
            if (field.indexOf('_') != 0) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL2Zvcm1zL0Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBc0I7QUFHdEI7SUFPRSxjQUFZLElBQWEsRUFBRSxTQUF1QztRQUNoRSxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDOUIsQ0FBQztRQUNELEdBQUcsQ0FBQyxDQUFDLElBQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx5QkFBVSxHQUFqQixVQUFrQixFQUFvQjtZQUFsQixrQkFBTSxFQUFFLHNCQUFRO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sb0JBQUssR0FBWjtRQUNJLEdBQUcsQ0FBQyxDQUFDLElBQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLGFBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDakQsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sbUJBQUksR0FBWDtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQSxDQUFDLElBQU0sS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSw4QkFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLHNCQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUFFRCxrQkFBZSxJQUFJLENBQUMifQ==