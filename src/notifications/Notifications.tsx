import React, { useState, useEffect } from "react";

interface Props {
    deniedTitle?: string;
    deniedClassName?: string;
    notSetTitle?: string;
    notSetClassName?: string;
    failedTitle?: string;
    failedClassName?: string;
}

const NotificationPrompt = (props: Props) => {
    const {
        deniedTitle = "Browser notifications are blocked. Please update your browser settings.",
        deniedClassName = "",
        notSetTitle = "Allow Browser Notifications",
        notSetClassName = "",
        failedTitle = "Failed to give permission, try again!",
        failedClassName = ""

    } = props
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
        } else if (Notification.permission !== "denied") {
            setNotificationPermission("not-set");
        } else {
            setNotificationPermission("denied");
        }
    };

    const handlePermissionRequest = async () => {
        try {
            const permission = await Notification.requestPermission();
            setNotificationPermission(permission);
        } catch (error) {
            setNotificationPermission("failed")
        }
    };

    return (
        <div>
            {notificationPermission === 'denied' && (
                <div className={deniedClassName}>{deniedTitle}</div>
            )}
            {notificationPermission === 'not-set' && (
                <div className={notSetClassName} onClick={handlePermissionRequest}>{notSetTitle}</div>
            )}
            {notificationPermission === "failed" && (
                <div className={failedClassName}>{failedTitle}</div>
            )}
        </div>
    );
};

export default NotificationPrompt;
