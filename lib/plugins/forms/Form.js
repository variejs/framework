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
            var errors = this._validator.validate(this.data(), this._rules, this._messages);
            if (Object.keys(errors).length) {
                return false;
            }
        }
        return true;
    };
    Form.prototype.errors = function () {
        return this._validator.validate(this.data(), this._rules, this._messages);
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
                data[field] = this[field];
            }
        }
        return data;
    };
    Form.prototype.setOriginaldata = function () {
        this._originalData = Object.assign({}, this.data());
    };
    Form.prototype.isDirty = function () {
        return JSON.stringify(this.data()) !== JSON.stringify(this._originalData);
    };
    return Form;
}());
exports.default = Form;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL2Zvcm1zL0Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBc0I7QUFHdEI7SUFNRSxjQUFZLElBQVksRUFBRSxTQUFzQztRQUM5RCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDOUIsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDLElBQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx5QkFBVSxHQUFqQixVQUFrQixFQUFtQjtZQUFqQixnQkFBSyxFQUFFLHNCQUFRO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQ1gsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsU0FBUyxDQUNmLENBQUM7WUFDRixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0scUJBQU0sR0FBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVNLG9CQUFLLEdBQVo7UUFDRSxHQUFHLENBQUMsQ0FBQyxJQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN2QyxhQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLG1CQUFJLEdBQVg7UUFDRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsQ0FBQyxJQUFNLEtBQUssSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sOEJBQWUsR0FBdEI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTSxzQkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBbEVELElBa0VDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIn0=