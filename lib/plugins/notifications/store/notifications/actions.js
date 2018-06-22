"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actions = /** @class */ (function () {
    function Actions() {
        this.add = function (context, notification) {
            context.commit("add", notification);
        };
        this.remove = function (context, notification) {
            context.commit("remove", notification);
        };
        this.test = function (context) {
            console.info("here");
        };
    }
    return Actions;
}());
exports.default = Actions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9wbHVnaW5zL25vdGlmaWNhdGlvbnMvc3RvcmUvbm90aWZpY2F0aW9ucy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0E7SUFBQTtRQUNFLFFBQUcsR0FBRyxVQUNKLE9BQXFELEVBQ3JELFlBQStCO1lBRS9CLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQUVGLFdBQU0sR0FBRyxVQUNQLE9BQXFELEVBQ3JELFlBQStCO1lBRS9CLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQztRQUVGLFNBQUksR0FBRyxVQUFDLE9BQXFEO1lBQzNELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDIn0=