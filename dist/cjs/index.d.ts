import NotificationPrompt from "./notifications/Notifications";
import { Options } from "./notifications/Storage";
declare const pushNotification: (options: Options) => void;
export { pushNotification, NotificationPrompt };
