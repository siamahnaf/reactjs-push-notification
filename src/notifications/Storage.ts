type voidFunc = () => void;
export type eventFunc = (e: any) => void;

export type onClickType = voidFunc | eventFunc | undefined;

export type Options = {
    title: string,
    subtitle?: string,
    message?: string,
    onClick?: onClickType,
    duration?: number,
}

export interface PushNotificationObject {
    title: string;
    subtitle?: string;
    message?: string;
    onClick?: onClickType;
}

export class PushNotification {
    title: string;
    subtitle?: string;
    message?: string;
    id?: number;
    onClick?: onClickType;
    constructor(op: PushNotificationObject) {
        this.title = op.title;
        this.subtitle = op.subtitle;
        this.message = op.message;
        this.onClick = op.onClick;
    }
}

class Storage {
    Storage: Array<PushNotification> = [];
    Listener: (storage: any) => void = () => this.Storage;

    popAndPush = (NotificationId: number) => {
        let i: number = 0;
        while (i < this.Storage.length) {
            if (this.Storage[i].id === NotificationId) {
                this.Storage.splice(i, 1);
            }
            else {
                ++i;
            }
        }
        this.Listener(this.Storage);
    };

    setTimer = (NotificationId: number, duration: number) => {
        setTimeout(() => this.popAndPush(NotificationId), duration);
    };

    addListener = (listener: (v: Array<PushNotification>) => void): void => {
        this.Listener = listener;
    };

    addWebNotification = (options: Options): void => {
        const { title, subtitle, message, duration, onClick } = options;
        const newNotification: PushNotification = new PushNotification({ title, subtitle, message, onClick });
        this.Storage.push(newNotification);
        this.setTimer(newNotification.id as number, duration || 3000);
        this.showNotification(newNotification);
        this.Listener(this.Storage);
    };

    showNotification = (notification: PushNotification) => {
        if (Notification.permission === 'granted') {
            const { title, message, onClick } = notification;
            const not: Notification = new Notification(title, {
                body: message
            });
            not.onclick = onClick || null;
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    const { title, message, onClick } = notification;
                    const not: Notification = new Notification(title, {
                        body: message
                    });
                    not.onclick = onClick || null;
                }
            });
        }
    };

    addNotification = (options: Options): void => {
        return this.addWebNotification(options);
    };
}

export default new Storage();
