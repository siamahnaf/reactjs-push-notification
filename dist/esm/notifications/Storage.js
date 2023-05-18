export class PushNotification {
    constructor(op) {
        this.title = op.title;
        this.subtitle = op.subtitle;
        this.message = op.message;
        this.onClick = op.onClick;
    }
}
class Storage {
    constructor() {
        this.Storage = [];
        this.Listener = () => this.Storage;
        this.popAndPush = (NotificationId) => {
            let i = 0;
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
        this.setTimer = (NotificationId, duration) => {
            setTimeout(() => this.popAndPush(NotificationId), duration);
        };
        this.addListener = (listener) => {
            this.Listener = listener;
        };
        this.addWebNotification = (options) => {
            const { title, subtitle, message, duration, onClick } = options;
            const newNotification = new PushNotification({ title, subtitle, message, onClick });
            this.Storage.push(newNotification);
            this.setTimer(newNotification.id, duration || 3000);
            this.showNotification(newNotification);
            this.Listener(this.Storage);
        };
        this.showNotification = (notification) => {
            if (Notification.permission === 'granted') {
                const { title, message, onClick } = notification;
                const not = new Notification(title, {
                    body: message
                });
                not.onclick = onClick || null;
            }
            else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then((permission) => {
                    if (permission === 'granted') {
                        const { title, message, onClick } = notification;
                        const not = new Notification(title, {
                            body: message
                        });
                        not.onclick = onClick || null;
                    }
                });
            }
        };
        this.addNotification = (options) => {
            return this.addWebNotification(options);
        };
    }
}
export default new Storage();
//# sourceMappingURL=Storage.js.map