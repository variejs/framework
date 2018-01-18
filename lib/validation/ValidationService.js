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
            format: 'full',
            passContext: true,
        });
    }
    ValidationService.prototype.validate = function (data, schema, messages) {
        var validate = this._validator.compile(schema);
        if (!this._validator.validate(schema, data)) {
            var errors_1 = {};
            validate.errors.map(function (error) {
                var param = '';
                var message = '';
                switch (error.keyword) {
                    case 'required':
                        param = error.params.missingProperty;
                        message = param + " is required.";
                        break;
                    default:
                        console.info(error);
                        param = error.dataPath.substring(1);
                        message = param + " " + error.message.toLowerCase();
                        break;
                }
                errors_1[param] = message;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvblNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmFsaWRhdGlvbi9WYWxpZGF0aW9uU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUEyQjtBQUMzQix1Q0FBdUM7QUFJdkM7SUFFRTtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUM7WUFDeEIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRyxJQUFJO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxvQ0FBUSxHQUFmLFVBQWdCLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUTtRQUNwQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUMsSUFBSSxRQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWhCLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVMsS0FRNUI7Z0JBQ0MsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNmLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFFakIsTUFBTSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLEtBQUssVUFBVTt3QkFDYixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7d0JBQ3JDLE9BQU8sR0FBTSxLQUFLLGtCQUFlLENBQUE7d0JBQ2pDLEtBQUssQ0FBQztvQkFDUjt3QkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO3dCQUNuQixLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLE9BQU8sR0FBTyxLQUFLLFNBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUksQ0FBQzt3QkFDckQsS0FBSyxDQUFDO2dCQUNWLENBQUM7Z0JBQ0QsUUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxRQUFNLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBN0NrQixpQkFBaUI7UUFEckMsc0JBQVUsRUFBRTs7T0FDUSxpQkFBaUIsQ0E4Q3JDO0lBQUQsd0JBQUM7Q0FBQSxBQTlDRCxJQThDQztrQkE5Q29CLGlCQUFpQiJ9