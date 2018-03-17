"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var Form = /** @class */ (function () {
    function Form(data, validator) {
        if (validator) {
            this._validator = validator;
        }
        Object.assign(this, data);
        this.setOriginaldata();
    }
    Form.prototype.validation = function (_a) {
        var rules = _a.rules, messages = _a.messages;
        this.rules = rules;
        this.messages = messages;
        return this;
    };
    Form.prototype.isValid = function () {
        if (this._validator) {
            var errors = this._validator.validate(this.data(), this.rules, this.messages);
            if (Object.keys(errors).length) {
                return false;
            }
        }
        return true;
    };
    Form.prototype.errors = function () {
        return this._validator.validate(this.data(), this.rules, this.messages);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL2Zvcm1zL0Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBc0I7QUFHdEI7SUFPRSxjQUFZLElBQVksRUFBRSxTQUFzQztRQUM5RCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDOUIsQ0FBQztRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0seUJBQVUsR0FBakIsVUFBa0IsRUFBbUI7WUFBakIsZ0JBQUssRUFBRSxzQkFBUTtRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHNCQUFPLEdBQWQ7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FDbkMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUNYLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FDZCxDQUFDO1lBQ0YsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHFCQUFNLEdBQWI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSxvQkFBSyxHQUFaO1FBQ0UsR0FBRyxDQUFDLENBQUMsSUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDdkMsYUFBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBQ0UsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLENBQUMsSUFBTSxLQUFLLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM3QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDhCQUFlLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQWxFRCxJQWtFQztBQUVELGtCQUFlLElBQUksQ0FBQyJ9