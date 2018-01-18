"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Form = /** @class */ (function () {
    function Form(data) {
        for (var field in data) {
            this[field] = data[field];
        }
        this.validator = $app.make("$validator");
    }
    Form.prototype.validation = function (_a) {
        var schema = _a.schema, messages = _a.messages;
        this._schema = schema;
        this._messages = messages;
        return this;
    };
    Form.prototype.isValid = function () {
        return this.validator.validate(this, this._schema, this._messages);
    };
    return Form;
}());
exports.default = Form;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL2Zvcm1zL0Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUdFLGNBQVksSUFBSTtRQUNkLEdBQUcsQ0FBQyxDQUFDLElBQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSx5QkFBVSxHQUFqQixVQUFrQixFQUFvQjtZQUFsQixrQkFBTSxFQUFFLHNCQUFRO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIn0=