<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-white.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-black.png">
  <img alt="Siam Ahnaf" src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-black.png" height="auto" width="240">
</picture>

# Reactjs Push Notifications

A solution for pushing browser web notification! `reactjs-push-notification` is an npm package that allows you to push notifications to the browser. It can be used with both Next.js and React.js. The package is easy to use and provides a variety of customization options.

# Features
- It is open source and licensed under the MIT license.
- It is compatible with React.js 16.8+ and Next.js 9.5+.
- It has been tested in Chrome, Firefox, and Safari.
- It is well-documented and includes examples.


## Installing

```bash
$ npm install reactjs-push-notification
```

## Example

```javascript
import { pushNotification, NotificationPrompt } from "reactjs-push-notification";

const Push = () => {
    const buttonClick = () => {
        pushNotification({
            title: "Warning",
            subtitle: "This is a subtitle!",
            message: "This is a long message!"
        });
    };
    return (
        <div className="page">
            <NotificationPrompt />
            <button onClick={buttonClick} className="button">
                Push Notifications
            </button>
        </div>
    );
};

export default Push;
```

# Options

<table width="100%">
  <tr>
    <th> Name </th>
    <th> Is Required </th>
    <th> Default </th>
  </tr>
  <tr>
    <td> title </td>
    <td> Required (String) </td>
    <td> Notification Title </td>
  </tr>
   <tr>
    <td> subtitle </td>
    <td> Optional (String) </td>
    <td> Notification Subtitle </td>
  </tr>
   <tr>
    <td> message </td>
    <td> Optional (String) </td>
    <td> Notification Message Body </td>
  </tr>
   <tr>
    <td> onClick </td>
    <td> Optional (Function) </td>
    <td> </td>
  </tr>
   <tr>
    <td> duration </td>
    <td> Optional (Number) </td>
    <td> Notification Duration Time </td>
  </tr>
</table>

## Connect with me
<div style="display: flex; align-items: center; gap: 3px;">
<a href="https://wa.me/8801611994403"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/whatsapp.png" width="40" height="40"></a>
<a href="https://siamahnaf.com/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/web.png" width="40" height="40"></a>
<a href="https://www.linkedin.com/in/siamahnaf/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/linkedin.png" width="40" height="40"></a>
<a href="https://x.com/siamahnaf198" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/x.png" width="40" height="40"></a>
<a href="https://www.facebook.com/siamahnaf198/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/facebook.png" width="40" height="40"></a>
<a href="https://t.me/siamahnaf198" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/telegram.png" width="40" height="40"></a>
<a href="https://www.npmjs.com/~siamahnaf" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/npm.png" width="40" height="40"></a>
</div>


------------

<p align="center" color="red"><a href="https://www.siamahnaf.com/">www.siamahnaf.com</a></p>