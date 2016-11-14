# com-chilipeppr-widget-cayenn
This widget shows you icons for all of your Cayenn devices which are IoT devices that can announce their existence to ChiliPeppr via Serial Port JSON Server. When they announce their existence this widget sees it and shows you an icon so you can interact with each respective widget for the Cayenn device.

![alt text](screenshot.png "Screenshot")

## ChiliPeppr Widget / Cayenn

All ChiliPeppr widgets/elements are defined using cpdefine() which is a method
that mimics require.js. Each defined object must have a unique ID so it does
not conflict with other ChiliPeppr widgets.

| Item                  | Value           |
| -------------         | ------------- | 
| ID                    | com-chilipeppr-widget-cayenn |
| Name                  | Widget / Cayenn |
| Description           | This widget shows you icons for all of your Cayenn devices which are IoT devices that can announce their existence to ChiliPeppr via Serial Port JSON Server. When they announce their existence this widget sees it and shows you an icon so you can interact with each respective widget for the Cayenn device. |
| chilipeppr.load() URL | http://raw.githubusercontent.com/chilipeppr/widget-cayenn/master/auto-generated-widget.html |
| Edit URL              | http://ide.c9.io/chilipeppr/widget-cayenn |
| Github URL            | http://github.com/chilipeppr/widget-cayenn |
| Test URL              | https://preview.c9users.io/chilipeppr/widget-cayenn/widget.html |

## Example Code for chilipeppr.load() Statement

You can use the code below as a starting point for instantiating this widget 
inside a workspace or from another widget. The key is that you need to load 
your widget inlined into a div so the DOM can parse your HTML, CSS, and 
Javascript. Then you use cprequire() to find your widget's Javascript and get 
back the instance of it.

```javascript
// Inject new div to contain widget or use an existing div with an ID
$("body").append('<' + 'div id="myDivWidgetCayenn"><' + '/div>');

chilipeppr.load(
  "#myDivWidgetCayenn",
  "http://raw.githubusercontent.com/chilipeppr/widget-cayenn/master/auto-generated-widget.html",
  function() {
    // Callback after widget loaded into #myDivWidgetCayenn
    // Now use require.js to get reference to instantiated widget
    cprequire(
      ["inline:com-chilipeppr-widget-cayenn"], // the id you gave your widget
      function(myObjWidgetCayenn) {
        // Callback that is passed reference to the newly loaded widget
        console.log("Widget / Cayenn just got loaded.", myObjWidgetCayenn);
        myObjWidgetCayenn.init();
      }
    );
  }
);

```

## Publish

This widget/element publishes the following signals. These signals are owned by this widget/element and are published to all objects inside the ChiliPeppr environment that listen to them via the 
chilipeppr.subscribe(signal, callback) method. 
To better understand how ChiliPeppr's subscribe() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-pub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr valign="top"><td>/com-chilipeppr-widget-cayenn/onExampleGenerate</td><td>Example: Publish this signal when we go to generate gcode.</td></tr>    
      </tbody>
  </table>

## Subscribe

This widget/element subscribes to the following signals. These signals are owned by this widget/element. Other objects inside the ChiliPeppr environment can publish to these signals via the chilipeppr.publish(signal, data) method. 
To better understand how ChiliPeppr's publish() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-sub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Foreign Publish

This widget/element publishes to the following signals that are owned by other objects. 
To better understand how ChiliPeppr's subscribe() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-foreignpub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Foreign Subscribe

This widget/element publishes to the following signals that are owned by other objects.
To better understand how ChiliPeppr's publish() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-foreignsub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr valign="top"><td>/com-chilipeppr-widget-cayenn/com-chilipeppr-widget-serialport/onAnnounce</td><td>We subscribe to this signal so we can hear about announcements of devices from SPJS.</td></tr>    
      </tbody>
  </table>

## Methods / Properties

The table below shows, in order, the methods and properties inside the widget/element.

  <table id="com-chilipeppr-elem-methodsprops" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Method / Property</th>
              <th>Type</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr valign="top"><td>id</td><td>string</td><td>"com-chilipeppr-widget-cayenn"<br><br>The ID of the widget. You must define this and make it unique.</td></tr><tr valign="top"><td>name</td><td>string</td><td>"Widget / Cayenn"</td></tr><tr valign="top"><td>desc</td><td>string</td><td>"This widget shows you icons for all of your Cayenn devices which are IoT devices that can announce their existence to ChiliPeppr via Serial Port JSON Server. When they announce their existence this widget sees it and shows you an icon so you can interact with each respective widget for the Cayenn device."</td></tr><tr valign="top"><td>url</td><td>string</td><td>"http://raw.githubusercontent.com/chilipeppr/widget-cayenn/master/auto-generated-widget.html"</td></tr><tr valign="top"><td>fiddleurl</td><td>string</td><td>"http://ide.c9.io/chilipeppr/widget-cayenn"</td></tr><tr valign="top"><td>githuburl</td><td>string</td><td>"http://github.com/chilipeppr/widget-cayenn"</td></tr><tr valign="top"><td>testurl</td><td>string</td><td>"http://widget-cayenn-chilipeppr.c9users.io/widget.html"</td></tr><tr valign="top"><td>publish</td><td>object</td><td>Please see docs above.<br><br>Define the publish signals that this widget/element owns or defines so that
other widgets know how to subscribe to them and what they do.</td></tr><tr valign="top"><td>subscribe</td><td>object</td><td>Please see docs above.<br><br>Define the subscribe signals that this widget/element owns or defines so that
other widgets know how to subscribe to them and what they do.</td></tr><tr valign="top"><td>foreignPublish</td><td>object</td><td>Please see docs above.<br><br>Document the foreign publish signals, i.e. signals owned by other widgets
or elements, that this widget/element publishes to.</td></tr><tr valign="top"><td>foreignSubscribe</td><td>object</td><td>Please see docs above.<br><br>Document the foreign subscribe signals, i.e. signals owned by other widgets
or elements, that this widget/element subscribes to.</td></tr><tr valign="top"><td>init</td><td>function</td><td>function () <br><br>All widgets should have an init method. It should be run by the
instantiating code like a workspace or a different widget.</td></tr><tr valign="top"><td>iconsClear</td><td>function</td><td>function () </td></tr><tr valign="top"><td>iconGet</td><td>function</td><td>function (device) </td></tr><tr valign="top"><td>setupRefreshBtn</td><td>function</td><td>function () </td></tr><tr valign="top"><td>sendRefreshCmd</td><td>function</td><td>function () </td></tr><tr valign="top"><td>getSubnetBroadcast</td><td>function</td><td>function (callback) </td></tr><tr valign="top"><td>setupOnAnnounceSubscribe</td><td>function</td><td>function () </td></tr><tr valign="top"><td>cayennDevices</td><td>object</td><td></td></tr><tr valign="top"><td>cayennDeviceIdShowing</td><td>object</td><td></td></tr><tr valign="top"><td>onAnnounce</td><td>function</td><td>function (payload) </td></tr><tr valign="top"><td>sendCmd</td><td>function</td><td>function (deviceid, maincmd, subcmd) </td></tr><tr valign="top"><td>updateCmdsForDevice</td><td>function</td><td>function (payload) </td></tr><tr valign="top"><td>showOneDevice</td><td>function</td><td>function (evt) </td></tr><tr valign="top"><td>showIconList</td><td>function</td><td>function () </td></tr><tr valign="top"><td>loader</td><td>object</td><td>All widgets should have an init method. It should be run by the
instantiating code like a workspace or a different widget.
/
init: function() {
console.log("I am being initted. Thanks.");<br><br>this.setupUiFromLocalStorage();
this.btnSetup();<br><br>this.setupOnAnnounceSubscribe();<br><br>var that = this;
setTimeout(function() {
that.sendRefreshCmd();
}, 2000);<br><br>this.setupRefreshBtn();<br><br>this.activatePopovers();<br><br>// this.forkSetup();<br><br>this.init3d();<br><br>console.log("I am done being initted.");
},<br><br>iconsClear: function() {
$('#' + this.id + ' .cayenn-icons').html("");
},
iconGet: function(device) {<br><br>var name = "Unnamed";
if ('Tag' in device && 'Name' in device.Tag) {
name = device.Tag.Name;
}<br><br>var iconHtml = `
<div class="cayenn-icon" style="" data-delay="1000" data-animation="true" data-placement="auto" data-container="body" data-trigger="hover" 
data-title="` + name + `" 
data-content='` + // <table class="table table-condensed table-striped">
// <tr><th>Gcode</th><th>Description</th></tr>
// <tr><td>Maps to A axis</td><td>Linear slide. Max 0mm. Min -72mm.</td></tr>
// <tr><td>Maps to A axis</td><td>Auger. Unlimited degrees.</td></tr>
// </table>
'';<br><br>if ('Tag' in device && 'Desc' in device.Tag) {   
iconHtml += '<p>' + device.Tag.Desc + '</p>';
}<br><br>if ('Addr' in device && 'IP' in device.Addr) {
iconHtml += '<p style="font-size:10px;margin-bottom:0;">IP: ' + device.Addr.IP + ':8988 UDP/TCP</p>';
}<br><br>iconHtml += "'>\n";<br><br>if ('Tag' in device && 'Icon' in device.Tag) {
iconHtml += '<div class="cayenn-deviceimg" style="border:0px solid blue;background-image:url(\'' +
device.Tag.Icon + '\');" ></div>';
}<br><br>iconHtml += `
<div class="cayenn-name">
` + name + `
</div>
</div>
`;
return iconHtml;
},
setupRefreshBtn: function() {
var btn = $('#' + this.id + ' .btn-refresh');
btn.click(this.sendRefreshCmd.bind(this));
this.iconsClear();
},
sendRefreshCmd: function() {
console.log("sendRefreshCmd");
var that = this;
this.getSubnetBroadcast(function(ip) {
console.log("got subnet broadcast. ip:", ip);
var cmd = "cayenn-sendudp " + ip.subnet + ' {"Cayenn":"Discover"}\n';
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", cmd);<br><br>});<br><br>// make sure we are on the icon list
this.showIconList();<br><br>},
getSubnetBroadcast: function(callback) {
var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};      
pc.createDataChannel("");    //create a bogus data channel
pc.createOffer(pc.setLocalDescription.bind(pc), noop);    // create offer and set local description
pc.onicecandidate = function(ice){  //listen for candidate events
if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
console.log('my IP: ', myIP);
var subnet = myIP.replace(/\d+$/, "255");
console.log("my IP subnet:", subnet);
pc.onicecandidate = noop;
callback({ip:myIP,subnet:subnet});
};    
},
setupOnAnnounceSubscribe: function() {
chilipeppr.subscribe("/com-chilipeppr-widget-serialport/onAnnounce", this, this.onAnnounce.bind(this));    
},
cayennDevices: {},
cayennDeviceIdShowing: null,
onAnnounce: function(payload) {
console.log("Cayenn - got onAnnounce. payload:", payload);<br><br>// We can get these callbacks for
// 1) General announcements of "i-am-a-client"
// 2) Responses to commands<br><br>// see if this is response to command
if ('Tag' in payload && 'Response' in payload.Tag) {
// this is response to command request<br><br>if (payload.Tag.Response == "GetCmds") {<br><br>// this is a list of commands for a specific device.
// see if this is the device that's showing, otherwise ignore it
if (this.cayennDeviceIdShowing == payload.DeviceId) {
// yes, this is for the showing device
this.updateCmdsForDevice(payload);
}
}<br><br>} else {
// this is response to Discover command<br><br>// see if we already have this in our list
if (payload.DeviceId in this.cayennDevices) {
console.log("device already exists in memory.");<br><br>} else {
console.log("looks like new device");<br><br>// store device in global
this.cayennDevices[payload.DeviceId] = payload;<br><br>// create icon
var iconHtml = this.iconGet(payload);
var iconEl = $(iconHtml);
iconEl.popover({html:true});
iconEl.click({DeviceId:payload.DeviceId}, this.showOneDevice.bind(this));
$('#' + this.id + ' .cayenn-icons').append(iconEl);
}<br><br><br><br>}<br><br>
},
sendCmd: function(deviceid, maincmd, subcmd) {
// here we send a command and store a history of it in the log
var cmd = maincmd + " " + subcmd;
if (! cmd.endsWith("\n")) cmd += "\n";
console.log("sending command for deviceid:", deviceid, " cmd:", cmd);
chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", cmd);<br><br>// see if history of log
var device = this.cayennDevices[deviceid];
if (!('log' in device)) device.log = [];<br><br>var entry = {ts:new Date(), maincmd: maincmd, subcmd: subcmd, dir:"out"};<br><br>device.log.unshift(entry);<br><br>// if view for this device is showing, shove it in log view
if (this.cayennDeviceIdShowing == deviceid) {
var logEl = $('#' + this.id + ' .cayenn-log');
var entryEl = $('<tr><td>> ' + entry.ts.toLocaleTimeString() + '</td><td>' + subcmd + '</td></tr>');
logEl.prepend(entryEl);
}
},
updateCmdsForDevice: function(payload) {
// we get this call when we get back a list of commands from the device
console.log("updateCmdsForDevice. payload:", payload);<br><br>// check we have good data
if ('Tag' in payload && 'Response' in payload.Tag && 'Cmds' in payload.Tag) {<br><br>// tag looks good. populate cmd list
var el = $('#' + this.id + ' .cayenn-onedevice');
var cmdListEl = el.find('.cayenn-cmdlist');
cmdListEl.html("");
for (var i = 0; i < payload.Tag.Cmds.length; i++) {
var cmd = payload.Tag.Cmds[i];
var htmlEl = $('<button class="btn btn-xs btn-default">' + cmd + '</button>');
cmdListEl.append(htmlEl);
}<br><br>} else {
console.error("Does not look like we got a good Tag list for response to GetCmds. payload:", payload);
}<br><br>},
showOneDevice: function(evt) {<br><br>console.log("showing one device. evt.data:", evt.data);<br><br>// what device are we dealing with
var device = this.cayennDevices[evt.data.DeviceId];<br><br>// set this as the active showing device
this.cayennDeviceIdShowing = device.DeviceId;<br><br>// hide the icon list, show the single device
$('#' + this.id + ' .cayenn-icon-list').addClass('hidden');<br><br>var el = $('#' + this.id + ' .cayenn-onedevice');<br><br>// swap in the icon
var iconHtml = this.iconGet(device);
var iconEl = $(iconHtml);
// console.log("swapping in icon:", iconHtml);
el.find('.cayenn-icon').parent().html(iconHtml); //.replaceWith(iconEl);<br><br>// add click evt to back button
// make sure old events are removed
el.find(".cayenn-backbtn").off( "click" ).click(this.showIconList.bind(this));
el.find('.cayenn-icon').off( "click" ).click(this.showIconList.bind(this));<br><br>// wipe old cmds
el.find('.cayenn-cmdlist').html("(Asking device...)");<br><br>// show it
el.removeClass('hidden');<br><br>// now ask the device to give us its commands
var maincmd = "cayenn-sendtcp " + device.Addr.IP;
var subcmd = '{"Cmd":"GetCmds"}';
this.sendCmd(device.DeviceId, maincmd, subcmd);
// chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", cmd);<br><br>// ask for queue list (may not have one)
subcmd = '{"Cmd":"GetQ"}';
this.sendCmd(device.DeviceId, maincmd, subcmd);
// chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", cmd);<br><br>},
showIconList: function() {<br><br>console.log("showing icon list");<br><br>// hide others
this.cayennDeviceIdShowing = null;<br><br>// hide the icon list, show the single device
$('#' + this.id + ' .cayenn-onedevice').addClass('hidden');
$('#' + this.id + ' #cayenn-renderarea').addClass('hidden');<br><br>// show the icon list, show the single device
$('#' + this.id + ' .cayenn-icon-list').removeClass('hidden');
},<br><br>/* 3D Related Methods Below</td></tr><tr valign="top"><td>camera</td><td>object</td><td></td></tr><tr valign="top"><td>scene</td><td>object</td><td></td></tr><tr valign="top"><td>renderer</td><td>object</td><td></td></tr><tr valign="top"><td>controls</td><td>object</td><td></td></tr><tr valign="top"><td>init3d</td><td>function</td><td>function () </td></tr><tr valign="top"><td>viewExtents</td><td>function</td><td>function () </td></tr><tr valign="top"><td>onScroll</td><td>function</td><td>function (evt) </td></tr><tr valign="top"><td>onMouseOrTouch</td><td>function</td><td>function (evt) </td></tr><tr valign="top"><td>render</td><td>function</td><td>function (evt) </td></tr><tr valign="top"><td>onResize</td><td>function</td><td>function (evt) </td></tr><tr valign="top"><td>activatePopovers</td><td>function</td><td>function () </td></tr><tr valign="top"><td>btnSetup</td><td>function</td><td>function () <br><br>Call this method from init to setup all the buttons when this widget
is first loaded. This basically attaches click events to your 
buttons. It also turns on all the bootstrap popovers by scanning
the entire DOM of the widget.</td></tr><tr valign="top"><td>onHelloBtnClick</td><td>function</td><td>function (evt) <br><br>onHelloBtnClick is an example of a button click event callback</td></tr><tr valign="top"><td>options</td><td>object</td><td>User options are available in this property for reference by your
methods. If any change is made on these options, please call
saveOptionsLocalStorage()</td></tr><tr valign="top"><td>setupUiFromLocalStorage</td><td>function</td><td>function () <br><br>Call this method on init to setup the UI by reading the user's
stored settings from localStorage and then adjust the UI to reflect
what the user wants.</td></tr><tr valign="top"><td>saveOptionsLocalStorage</td><td>function</td><td>function () <br><br>When a user changes a value that is stored as an option setting, you
should call this method immediately so that on next load the value
is correctly set.</td></tr><tr valign="top"><td>showBody</td><td>function</td><td>function (evt) <br><br>Show the body of the panel.
<br><br><b>evt</b> ({jquery_event})  - If you pass the event parameter in, we 
know it was clicked by the user and thus we store it for the next 
load so we can reset the user's preference. If you don't pass this 
value in we don't store the preference because it was likely code 
that sent in the param.</td></tr><tr valign="top"><td>hideBody</td><td>function</td><td>function (evt) <br><br>Hide the body of the panel.
<br><br><b>evt</b> ({jquery_event})  - If you pass the event parameter in, we 
know it was clicked by the user and thus we store it for the next 
load so we can reset the user's preference. If you don't pass this 
value in we don't store the preference because it was likely code 
that sent in the param.</td></tr><tr valign="top"><td>forkSetup</td><td>function</td><td>function () <br><br>This method loads the pubsubviewer widget which attaches to our 
upper right corner triangle menu and generates 3 menu items like
Pubsub Viewer, View Standalone, and Fork Widget. It also enables
the modal dialog that shows the documentation for this widget.<br><br>By using chilipeppr.load() we can ensure that the pubsubviewer widget
is only loaded and inlined once into the final ChiliPeppr workspace.
We are given back a reference to the instantiated singleton so its
not instantiated more than once. Then we call it's attachTo method
which creates the full pulldown menu for us and attaches the click
events.</td></tr><tr valign="top"><td>threeObj</td><td>object</td><td></td></tr>
      </tbody>
  </table>


## About ChiliPeppr

[ChiliPeppr](http://chilipeppr.com) is a hardware fiddle, meaning it is a 
website that lets you easily
create a workspace to fiddle with your hardware from software. ChiliPeppr provides
a [Serial Port JSON Server](https://github.com/johnlauer/serial-port-json-server) 
that you run locally on your computer, or remotely on another computer, to connect to 
the serial port of your hardware like an Arduino or other microcontroller.

You then create a workspace at ChiliPeppr.com that connects to your hardware 
by starting from scratch or forking somebody else's
workspace that is close to what you are after. Then you write widgets in
Javascript that interact with your hardware by forking the base template 
widget or forking another widget that
is similar to what you are trying to build.

ChiliPeppr is massively capable such that the workspaces for 
[TinyG](http://chilipeppr.com/tinyg) and [Grbl](http://chilipeppr.com/grbl) CNC 
controllers have become full-fledged CNC machine management software used by
tens of thousands.

ChiliPeppr has inspired many people in the hardware/software world to use the
browser and Javascript as the foundation for interacting with hardware. The
Arduino team in Italy caught wind of ChiliPeppr and now
ChiliPeppr's Serial Port JSON Server is the basis for the 
[Arduino's new web IDE](https://create.arduino.cc/). If the Arduino team is excited about building on top
of ChiliPeppr, what
will you build on top of it?

