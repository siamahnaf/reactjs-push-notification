import NotificationPrompt from "./notifications/Notifications";
import Storage, { Options } from "./notifications/Storage";

const pushNotification: (options: Options) => void = Storage.addNotification;
export { pushNotification, NotificationPrompt };