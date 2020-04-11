import Noty from "noty";

import "../assets/styles/notification.css";

class Notification {
  prompt(title, text, approveCallback = () => {}, rejectCallback, opts = {}) {
    text = `
      <div class="notification-overlay"></div>
      <div class="notification-title">${title}</div>
      <div class="notification-content">${text}</div>
    `;

    const notification = this._createNotification({
      text,
      type: "prompt",
      timeout: false,
      closeWith: ["button"],
      ...opts,
    });

    if (!approveCallback) {
      approveCallback = () => {
        notification.close();
      };
    }

    if (!rejectCallback) {
      rejectCallback = () => {
        notification.close();
      };
    }

    notification.options.buttons = [
      Noty.button("OK", "notification-button notification-button-approve", () => approveCallback(notification)),
      Noty.button("CANCEL", "notification-button notification-button-reject", () => rejectCallback(notification)),
    ];

    Noty.closeAll();

    return notification.show();
  }

  success(text, opts = {}) {
    const notification = this._createNotification({ type: "success", text, ...opts });

    return notification.show();
  }

  error(text, opts = {}) {
    const notification = this._createNotification({ type: "error", text, ...opts });

    return notification.show();
  }

  _createNotification(options) {
    const defaults = {
      timeout: 2000,
      theme: "relax",
      type: "success",
      progressBar: false,
      layout: "topCenter",
      animation: {
        open: null,
        close: null,
      },
    };

    return new Noty({ ...defaults, ...options });
  }
}

export default new Notification();
