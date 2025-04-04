import io from "socket.io-client";

export default function Streamer() {
  this.userSaveState = {};

  this.onConnectCbs = [];
  this.onConnectionLimitCbs = [];
  this.token = "";

  let useDev = false;
  // TODO: window.user.isDev && window.util.queryString.get("streamer_local") == 1;

  this.socketUrl = "https://www.sdsweather.com/radaromega";

  this.environment = useDev ? "DEVELOPMENT" : "PRODUCTION";

  this.userType = "USER";
  // TODO: token.length > 0 ? "USER" : "GUEST";

  this.listenEventsToCb = {};
  this.stopListenEventsToCb = {};

  // Check if the streamer is online
  console.log("Initializing socket");

  // this.connect();
}

Streamer.prototype.disconnect = function () {
  // console.log("Trying to disconnect");
  if (this.isConnected()) {
    this.socket.close();
  }
};

Streamer.prototype.connect = function () {
  this.socket = io(this.socketUrl, {
    transports: ["websocket"],
    secure: true,
  });

  let me = this;
  let socket = me.socket;

  console.log("Connect called");
  socket.on("connect", function () {
    console.log("Streamer::connected", me.socketUrl);

    socket.emit("authentication", {
      user: "GUEST",
      token: me.token,
    });
  });
  //token
  socket.on("authenticated", function () {
    console.log("Streamer::authenticated (" + me.userType + ")");

    me.onConnectCbs.forEach(function (cb) {
      cb && cb();
    });
  });

  socket.on("disconnect", function () {
    console.log("Streamer::disconnect");
  });

  socket.on("user-connection-limit", function (data) {
    console.log("Streamer::user-connection-limit", data);

    me.onConnectionLimitCbs.forEach(function (cb) {
      cb && cb(data);
    });
  });

  // Native devices will receive push notifications
  // via Apple or FCM
  // TODO: Deleted code pertaining to nativeApp
  socket.on("notifications-push", function (data) {
    console.log("Streamer::debug::notifications-push", data);

    // me.notifications.show(data);
  });
};

Streamer.prototype.getSocket = function (roomId) {
  return this.socket;
};

Streamer.prototype.joinRoom = function (roomId) {
  this.socket.emit("join-room", roomId);
};

Streamer.prototype.leaveRoom = function (roomId) {
  this.socket.emit("leave-room", roomId);
};

Streamer.prototype.listenToRoom = function (roomId, eventId, cb) {
  this.joinRoom(roomId);

  let fullEventName = roomId + "-" + eventId;

  console.log("Streamer::listenToRoom", fullEventName);

  this.socket.on(fullEventName, cb);

  if (this.listenEventsToCb[fullEventName]) {
    this.listenEventsToCb[fullEventName].forEach(function (c) {
      c();
    });
  }
};

Streamer.prototype.listenToRoomEvent = function (roomId, eventId, cb) {
  let fullEventName = roomId + "-" + eventId;

  if (this.listenEventsToCb[fullEventName] == undefined) {
    this.listenEventsToCb[fullEventName] = [];
  }

  this.listenEventsToCb[fullEventName].push(cb);
};

Streamer.prototype.stopListeningToRoom = function (roomId, eventId) {
  this.leaveRoom(roomId);

  let fullEventName = roomId + "-" + eventId;

  console.log("Streamer::stopListeningToRoom", fullEventName);

  this.socket.off(fullEventName);

  if (this.stopListenEventsToCb[fullEventName]) {
    this.stopListenEventsToCb[fullEventName].forEach(function (c) {
      c();
    });
  }
};

Streamer.prototype.stopListenToRoomEvent = function (roomId, eventId, cb) {
  let fullEventName = roomId + "-" + eventId;

  if (this.stopListenEventsToCb[fullEventName] == undefined) {
    this.stopListenEventsToCb[fullEventName] = [];
  }

  this.stopListenEventsToCb[fullEventName].push(cb);
};

Streamer.prototype.queryDevice = function (deviceUuid, query, params, cb) {
  let me = this;

  let eventName = "query-device-" + deviceUuid + "-query-response-" + query;

  me.socket.once(eventName, cb);

  me.socket.emit("query-device", {
    token: me.token,
    uuid: deviceUuid,
    query: query,
    params: params,
  });
};

Streamer.prototype.queryDeviceRegistration = function (params, cb) {
  let me = this;

  let eventName = "query-device-registration-" + params.code + "-response";

  me.socket.once(eventName, cb);

  me.socket.emit("query-device-registration", {
    token: me.token,
    code: params.code,
    hardware: params.hardware,
  });
};

Streamer.prototype.deviceActuator = function (uuid, actuation) {
  let me = this;

  me.socket.emit("device-actuator", {
    uuid: uuid,
    token: me.token,
    actuation: actuation,
  });
};

Streamer.prototype.isConnected = function () {
  return this.getSocket().connected;
};

Streamer.prototype.getEnvironment = function () {
  return this.environment;
};

Streamer.prototype.showSettings = function () {
  let me = this;

  let ui = new UIPopupModal();
  ui.open(me.getSettingsContent(ui));

  return false;
};

Streamer.prototype.getSettingsContent = function (ui) {
  let me = this;

  let body = $("<div/>").html("WIP");

  return {
    header: {
      text: "Settings",
    },
    body: body,
    attached: function () {},
  };
};

Streamer.prototype.onConnect = function (cb) {
  if (this.isConnected()) {
    setTimeout(cb, 1);
  } else {
    if (!this.onConnectCbs.includes(cb)) {
      this.onConnectCbs.push(cb);
    }
  }
};

Streamer.prototype.onConnectionLimit = function (cb) {
  this.onConnectionLimitCbs.push(cb);
};

Streamer.prototype.setSaveData = function (data) {
  if (typeof data != "object" || data == null) return;

  this.userSaveState = data;
};

Streamer.prototype.getSaveData = function () {
  return this.userSaveState;
};
