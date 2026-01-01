"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationPrompt = exports.pushNotification = void 0;
const Notifications_1 = __importDefault(require("./notifications/Notifications"));
exports.NotificationPrompt = Notifications_1.default;
const Storage_1 = __importDefault(require("./notifications/Storage"));
const pushNotification = Storage_1.default.addNotification;
exports.pushNotification = pushNotification;
//# sourceMappingURL=index.js.map