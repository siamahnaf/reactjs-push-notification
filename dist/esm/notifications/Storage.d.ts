type voidFunc = () => void;
export type eventFunc = (e: any) => void;
export type onClickType = voidFunc | eventFunc | undefined;
export type Options = {
    title: string;
    subtitle?: string;
    message?: string;
    onClick?: onClickType;
    duration?: number;
};
export interface PushNotificationObject {
    title: string;
    subtitle?: string;
    message?: string;
    onClick?: onClickType;
}
export declare class PushNotification {
    title: string;
    subtitle?: string;
    message?: string;
    id?: number;
    onClick?: onClickType;
    constructor(op: PushNotificationObject);
}
declare class Storage {
    Storage: Array<PushNotification>;
    Listener: (storage: any) => void;
    popAndPush: (NotificationId: number) => void;
    setTimer: (NotificationId: number, duration: number) => void;
    addListener: (listener: (v: Array<PushNotification>) => void) => void;
    addWebNotification: (options: Options) => void;
    showNotification: (notification: PushNotification) => void;
    addNotification: (options: Options) => void;
}
declare const _default: Storage;
export default _default;
