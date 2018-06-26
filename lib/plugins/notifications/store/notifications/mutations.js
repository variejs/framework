"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var Mutations = /** @class */ (function () {
    function Mutations() {
        var _this = this;
        this.add = function (state, notification) {
            notification.id = _this.guid();
            state.notifications.push(notification);
        };
        this.remove = function (state, notification) {
            vue_1.default.set(state, "notifications", state.notifications.filter(function (tempNotification) {
                return notification.id !== tempNotification.id;
            }));
        };
    }
    // TODO - this needs to be moved out
    Mutations.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return (s4() +
            s4() +
            "-" +
            s4() +
            "-" +
            s4() +
            "-" +
            s4() +
            "-" +
            s4() +
            s4() +
            s4());
    };
    return Mutations;
}());
exports.default = Mutations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3BsdWdpbnMvbm90aWZpY2F0aW9ucy9zdG9yZS9ub3RpZmljYXRpb25zL211dGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUFzQjtBQUl0QjtJQUFBO1FBQUEsaUJBc0NDO1FBckNDLFFBQUcsR0FBRyxVQUFDLEtBQXlCLEVBQUUsWUFBK0I7WUFDL0QsWUFBWSxDQUFDLEVBQUUsR0FBRyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO1FBRUYsV0FBTSxHQUFHLFVBQUMsS0FBeUIsRUFBRSxZQUErQjtZQUNsRSxhQUFHLENBQUMsR0FBRyxDQUNMLEtBQUssRUFDTCxlQUFlLEVBQ2YsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQSxnQkFBZ0I7Z0JBQ3pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBd0JKLENBQUM7SUF0QkMsb0NBQW9DO0lBQzVCLHdCQUFJLEdBQVo7UUFDRTtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDN0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUNMLEVBQUUsRUFBRTtZQUNKLEVBQUUsRUFBRTtZQUNKLEdBQUc7WUFDSCxFQUFFLEVBQUU7WUFDSixHQUFHO1lBQ0gsRUFBRSxFQUFFO1lBQ0osR0FBRztZQUNILEVBQUUsRUFBRTtZQUNKLEdBQUc7WUFDSCxFQUFFLEVBQUU7WUFDSixFQUFFLEVBQUU7WUFDSixFQUFFLEVBQUUsQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQyJ9