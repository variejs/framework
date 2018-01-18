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
var Ajv = require("Ajv");
var inversify_1 = require("inversify");
var ValidationService = /** @class */ (function () {
    function ValidationService() {
        this._validator = new Ajv({
            allErrors: true,
            format: "full"
        });
    }
    ValidationService.prototype.validate = function (data, schema, messages) {
        var validate = this._validator.compile(schema);
        if (!this._validator.validate(schema, data)) {
            var errors_1 = {};
            validate.errors.map(function (error) {
                var param = "";
                var message = "";
                switch (error.keyword) {
                    case "required":
                        param = error.params.missingProperty;
                        message = param + " is required.";
                        break;
                    default:
                        param = error.dataPath.substring(1);
                        message = param + " " + error.message.toLowerCase();
                        break;
                }
                errors_1[param] = message;
                if (messages[param]) {
                    errors_1[param] = messages[param];
                }
            });
            return errors_1;
        }
        return true;
    };
    ValidationService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());
exports.default = ValidationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWp2VmFsaWRhdGlvblNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmFsaWRhdGlvbi9BanZWYWxpZGF0aW9uU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUEyQjtBQUMzQix1Q0FBdUM7QUFJdkM7SUFHRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUM7WUFDeEIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxvQ0FBUSxHQUFmLFVBQWdCLElBQVksRUFBRSxNQUFjLEVBQUUsUUFBZ0I7UUFDNUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksUUFBTSxHQUFHLEVBQUUsQ0FBQztZQUVoQixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFTLEtBUzVCO2dCQUNDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDZixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBRWpCLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN0QixLQUFLLFVBQVU7d0JBQ2IsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO3dCQUNyQyxPQUFPLEdBQU0sS0FBSyxrQkFBZSxDQUFDO3dCQUNsQyxLQUFLLENBQUM7b0JBQ1I7d0JBQ0UsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxPQUFPLEdBQU0sS0FBSyxTQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFJLENBQUM7d0JBQ3BELEtBQUssQ0FBQztnQkFDVixDQUFDO2dCQUVELFFBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBRXhCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLFFBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxRQUFNLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBakRrQixpQkFBaUI7UUFEckMsc0JBQVUsRUFBRTs7T0FDUSxpQkFBaUIsQ0FrRHJDO0lBQUQsd0JBQUM7Q0FBQSxBQWxERCxJQWtEQztrQkFsRG9CLGlCQUFpQiJ9