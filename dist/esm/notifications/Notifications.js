var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from "react";
const NotificationPrompt = (props) => {
    const { deniedTitle = "Browser notifications are blocked. Please update your browser settings.", deniedClassName = "", notSetTitle = "Allow Browser Notifications", notSetClassName = "", failedTitle = "Failed to give permission, try again!", failedClassName = "" } = props;
    const [notificationPermission, setNotificationPermission] = useState("");
    useEffect(() => {
        checkNotificationPermission();
    }, []);
    const checkNotificationPermission = () => {
        if (!('Notification' in window)) {
            return;
        }
        if (Notification.permission === 'granted') {
            setNotificationPermission("granted");
        }
        else if (Notification.permission !== "denied") {
            setNotificationPermission("not-set");
        }
        else {
            setNotificationPermission("denied");
        }
    };
    const handlePermissionRequest = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const permission = yield Notification.requestPermission();
            setNotificationPermission(permission);
        }
        catch (error) {
            setNotificationPermission("failed");
        }
    });
    return (React.createElement("div", null,
        notificationPermission === 'denied' && (React.createElement("div", { className: deniedClassName }, deniedTitle)),
        notificationPermission === 'not-set' && (React.createElement("div", { className: notSetClassName, onClick: handlePermissionRequest }, notSetTitle)),
        notificationPermission === "failed" && (React.createElement("div", { className: failedClassName }, failedTitle))));
};
export default NotificationPrompt;
//# sourceMappingURL=Notifications.js.map