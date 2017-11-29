"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.add = function (state, notification) {
    notification.id = guid();
    state.notifications.push(notification);
};
exports.remove = function (state, notification) {
    vue_1.default.set(state, "notifications", state.notifications.filter(function (tempNotification) {
        return notification.id !== tempNotification.id;
    }));
};
// TODO - this needs to be moved out
function guid() {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3BsdWdpbnMvbm90aWZpY2F0aW9ucy9zdG9yZS9ub3RpZmljYXRpb25zL211dGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUFzQjtBQUlULFFBQUEsR0FBRyxHQUFHLFVBQ2pCLEtBQXlCLEVBQ3pCLFlBQStCO0lBRS9CLFlBQVksQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDekIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0FBRVcsUUFBQSxNQUFNLEdBQUcsVUFDcEIsS0FBeUIsRUFDekIsWUFBK0I7SUFFL0IsYUFBRyxDQUFDLEdBQUcsQ0FDTCxLQUFLLEVBQ0wsZUFBZSxFQUNmLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQUEsZ0JBQWdCO1FBQ3pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FDSCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsb0NBQW9DO0FBQ3BDO0lBQ0U7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDN0MsUUFBUSxDQUFDLEVBQUUsQ0FBQzthQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQ0wsRUFBRSxFQUFFO1FBQ0osRUFBRSxFQUFFO1FBQ0osR0FBRztRQUNILEVBQUUsRUFBRTtRQUNKLEdBQUc7UUFDSCxFQUFFLEVBQUU7UUFDSixHQUFHO1FBQ0gsRUFBRSxFQUFFO1FBQ0osR0FBRztRQUNILEVBQUUsRUFBRTtRQUNKLEVBQUUsRUFBRTtRQUNKLEVBQUUsRUFBRSxDQUNMLENBQUM7QUFDSixDQUFDIn0=