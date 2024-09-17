<img src="https://res.cloudinary.com/dbjrx698c/image/upload/v1704611347/logo_w4vxp0.png" width="100" height="100" style="display: block; margin: 0 auto;">

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

# Stay in touch

- Author - [Siam Ahnaf](https://www.siamahnaf.com/)
- Website - [https://www.siamahnaf.com/](https://www.siamahnaf.com/)
- Twitter - [https://twitter.com/siamahnaf198](https://twitter.com/siamahnaf198)
- Github - [https://github.com/siamahnaf](https://github.com/siamahnaf)
