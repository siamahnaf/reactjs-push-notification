import React from "react";
interface Props {
    deniedTitle?: string;
    deniedClassName?: string;
    notSetTitle?: string;
    notSetClassName?: string;
    failedTitle?: string;
    failedClassName?: string;
}
declare const NotificationPrompt: (props: Props) => React.JSX.Element;
export default NotificationPrompt;
