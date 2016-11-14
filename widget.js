/* global requirejs cprequire cpdefine chilipeppr THREE */
// Defining the globals above helps Cloud9 not show warnings for those variables

// ChiliPeppr Widget/Element Javascript

requirejs.config({
    /*
    Dependencies can be defined here. ChiliPeppr uses require.js so
    please refer to http://requirejs.org/docs/api.html for info.
    
    Most widgets will not need to define Javascript dependencies.
    
    Make sure all URLs are https and http accessible. Try to use URLs
    that start with // rather than http:// or https:// so they simply
    use whatever method the main page uses.
    
    Also, please make sure you are not loading dependencies from different
    URLs that other widgets may already load like jquery, bootstrap,
    three.js, etc.
    
    You may slingshot content through ChiliPeppr's proxy URL if you desire
    to enable SSL for non-SSL URL's. ChiliPeppr's SSL URL is
    https://i2dcui.appspot.com which is the SSL equivalent for
    http://chilipeppr.com
    */
    paths: {
        // Example of how to define the key (you make up the key) and the URL
        // Make sure you DO NOT put the .js at the end of the URL
        // SmoothieCharts: '//smoothiecharts.org/smoothie',
        // Three: '//i2dcui.appspot.com/geturl?url=http://threejs.org/build/three.js',
        Three: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r76/three',
        ThreeTrackballControls: '//i2dcui.appspot.com/slingshot?url=http://rawgit.com/mrdoob/three.js/r77/examples/js/controls/TrackballControls.js',
        
    },
    shim: {
        // See require.js docs for how to define dependencies that
        // should be loaded before your script/widget.
        ThreeTrackballControls: ['Three'],
        
    }
});

cprequire_test(["inline:com-chilipeppr-widget-cayenn"], function(myWidget) {

    // Test this element. This code is auto-removed by the chilipeppr.load()
    // when using this widget in production. So use the cpquire_test to do things
    // you only want to have happen during testing, like loading other widgets or
    // doing unit tests. Don't remove end_test at the end or auto-remove will fail.

    // Please note that if you are working on multiple widgets at the same time
    // you may need to use the ?forcerefresh=true technique in the URL of
    // your test widget to force the underlying chilipeppr.load() statements
    // to referesh the cache. For example, if you are working on an Add-On
    // widget to the Eagle BRD widget, but also working on the Eagle BRD widget
    // at the same time you will have to make ample use of this technique to
    // get changes to load correctly. If you keep wondering why you're not seeing
    // your changes, try ?forcerefresh=true as a get parameter in your URL.

    console.log("test running of " + myWidget.id);

    $('body').prepend('<div id="testDivForFlashMessageWidget"></div>');

    chilipeppr.load(
        "#testDivForFlashMessageWidget",
        "http://fiddle.jshell.net/chilipeppr/90698kax/show/light/",
        function() {
            console.log("mycallback got called after loading flash msg module");
            cprequire(["inline:com-chilipeppr-elem-flashmsg"], function(fm) {
                //console.log("inside require of " + fm.id);
                fm.init();
            });
        }
    );

    // init my widget
    myWidget.init();
    // $('#' + myWidget.id).css('margin', '20px
    $('body').css('padding', '20px');
    $('title').html(myWidget.name);
    
    // Inject new div to contain widget or use an existing div with an ID
    $("body").append('<' + 'div id="myDivWidgetSerialport"><' + '/div>');
    
    
    chilipeppr.load(
      "#myDivWidgetSerialport",
      "http://raw.githubusercontent.com/chilipeppr/widget-spjs/master/auto-generated-widget.html",
      function() {
        // Callback after widget loaded into #myDivWidgetSerialport
        // Now use require.js to get reference to instantiated widget
        cprequire(
          ["inline:com-chilipeppr-widget-serialport"], // the id you gave your widget
          function(myObjWidgetSerialport) {
            // Callback that is passed reference to the newly loaded widget
            console.log("Widget / Serial Port JSON Server just got loaded.", myObjWidgetSerialport);
            myObjWidgetSerialport.init();
            myObjWidgetSerialport.consoleToggle();
          }
        );
      }
    );
    

} /*end_test*/ );

// This is the main definition of your widget. Give it a unique name.
cpdefine("inline:com-chilipeppr-widget-cayenn", ["chilipeppr_ready", "Three", "ThreeTrackballControls" /* other dependencies here */ ], function() {
    // THREE.TrackballControls = ThreeTrackballControls;
    return {
        /**
         * The ID of the widget. You must define this and make it unique.
         */
        id: "com-chilipeppr-widget-cayenn", // Make the id the same as the cpdefine id
        name: "Widget / Cayenn", // The descriptive name of your widget.
        desc: "This widget shows you icons for all of your Cayenn devices which are IoT devices that can announce their existence to ChiliPeppr via Serial Port JSON Server. When they announce their existence this widget sees it and shows you an icon so you can interact with each respective widget for the Cayenn device.", // A description of what your widget does
        url: "(auto fill by runme.js)",       // The final URL of the working widget as a single HTML file with CSS and Javascript inlined. You can let runme.js auto fill this if you are using Cloud9.
        fiddleurl: "(auto fill by runme.js)", // The edit URL. This can be auto-filled by runme.js in Cloud9 if you'd like, or just define it on your own to help people know where they can edit/fork your widget
        githuburl: "(auto fill by runme.js)", // The backing github repo
        testurl: "(auto fill by runme.js)",   // The standalone working widget so can view it working by itself
        /**
         * Define pubsub signals below. These are basically ChiliPeppr's event system.
         * ChiliPeppr uses amplify.js's pubsub system so please refer to docs at
         * http://amplifyjs.com/api/pubsub/
         */
        /**
         * Define the publish signals that this widget/element owns or defines so that
         * other widgets know how to subscribe to them and what they do.
         */
        publish: {
            // Define a key:value pair here as strings to document what signals you publish.
            '/onExampleGenerate': 'Example: Publish this signal when we go to generate gcode.'
        },
        /**
         * Define the subscribe signals that this widget/element owns or defines so that
         * other widgets know how to subscribe to them and what they do.
         */
        subscribe: {
            // Define a key:value pair here as strings to document what signals you subscribe to
            // so other widgets can publish to this widget to have it do something.
            // '/onExampleConsume': 'Example: This widget subscribe to this signal so other widgets can send to us and we'll do something with it.'
        },
        /**
         * Document the foreign publish signals, i.e. signals owned by other widgets
         * or elements, that this widget/element publishes to.
         */
        foreignPublish: {
            // Define a key:value pair here as strings to document what signals you publish to
            // that are owned by foreign/other widgets.
            // '/jsonSend': 'Example: We send Gcode to the serial port widget to do stuff with the CNC controller.'
        },
        /**
         * Document the foreign subscribe signals, i.e. signals owned by other widgets
         * or elements, that this widget/element subscribes to.
         */
        foreignSubscribe: {
            // Define a key:value pair here as strings to document what signals you subscribe to
            // that are owned by foreign/other widgets.
            // '/com-chilipeppr-elem-dragdrop/ondropped': 'Example: We subscribe to this signal at a higher priority to intercept the signal. We do not let it propagate by returning false.'
        
            '/com-chilipeppr-widget-serialport/onAnnounce': 'We subscribe to this signal so we can hear about announcements of devices from SPJS.'
        },
        /**
         * All widgets should have an init method. It should be run by the
         * instantiating code like a workspace or a different widget.
         */
        init: function() {
            console.log("I am being initted. Thanks.");

            this.setupUiFromLocalStorage();
            this.btnSetup();
            
            this.setupOnAnnounceSubscribe();
            
            var that = this;
            setTimeout(function() {
                that.sendRefreshCmd();
            }, 2000);
            
            this.setupRefreshBtn();
            
            this.activatePopovers();
            
            // this.forkSetup();
            
            this.init3d();

            console.log("I am done being initted.");
        },
        
        iconsClear: function() {
            $('#' + this.id + ' .cayenn-icons').html("");
        },
        iconGet: function(device) {
            
            var name = "Unnamed";
            if ('Tag' in device && 'Name' in device.Tag) {
                name = device.Tag.Name;
            }
            
            var iconHtml = `
            <div class="cayenn-icon" style="" data-delay="1000" data-animation="true" data-placement="auto" data-container="body" data-trigger="hover" 
                data-title="` + name + `" 
                data-content='` + // <table class="table table-condensed table-striped">
                    // <tr><th>Gcode</th><th>Description</th></tr>
                    // <tr><td>Maps to A axis</td><td>Linear slide. Max 0mm. Min -72mm.</td></tr>
                    // <tr><td>Maps to A axis</td><td>Auger. Unlimited degrees.</td></tr>
                    // </table>
                    '';
                    
            if ('Tag' in device && 'Desc' in device.Tag) {   
                iconHtml += '<p>' + device.Tag.Desc + '</p>';
            }
            
            if ('Addr' in device && 'IP' in device.Addr) {
                iconHtml += '<p style="font-size:10px;margin-bottom:0;">IP: ' + device.Addr.IP + ':8988 UDP/TCP</p>';
            }
                    
            iconHtml += "'>\n";
            
            if ('Tag' in device && 'Icon' in device.Tag) {
                iconHtml += '<div class="cayenn-deviceimg" style="border:0px solid blue;background-image:url(\'' +
                device.Tag.Icon + '\');" ></div>';
            }
            
            iconHtml += `
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
                chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", cmd);
                
            });
            
            // make sure we are on the icon list
            this.showIconList();
            
        },
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
            console.log("Cayenn - got onAnnounce. payload:", payload);
            
            // We can get these callbacks for
            // 1) General announcements of "i-am-a-client"
            // 2) Responses to commands
            
            // see if this is response to command
            if ('Tag' in payload && 'Response' in payload.Tag) {
                // this is response to command request
                
                if (payload.Tag.Response == "GetCmds") {
                    
                    // this is a list of commands for a specific device.
                    // see if this is the device that's showing, otherwise ignore it
                    if (this.cayennDeviceIdShowing == payload.DeviceId) {
                        // yes, this is for the showing device
                        this.updateCmdsForDevice(payload);
                    }
                }
                
            } else {
                // this is response to Discover command

                // see if we already have this in our list
                if (payload.DeviceId in this.cayennDevices) {
                    console.log("device already exists in memory.");
                
                } else {
                    console.log("looks like new device");
                    
                    // store device in global
                    this.cayennDevices[payload.DeviceId] = payload;
                    
                    // create icon
                    var iconHtml = this.iconGet(payload);
                    var iconEl = $(iconHtml);
                    iconEl.popover({html:true});
                    iconEl.click({DeviceId:payload.DeviceId}, this.showOneDevice.bind(this));
                    $('#' + this.id + ' .cayenn-icons').append(iconEl);
                }
                
                

            }
            
            
        },
        sendCmd: function(deviceid, maincmd, subcmd) {
            // here we send a command and store a history of it in the log
            var cmd = maincmd + " " + subcmd;
            if (! cmd.endsWith("\n")) cmd += "\n";
            console.log("sending command for deviceid:", deviceid, " cmd:", cmd);
            chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", cmd);
            
            // see if history of log
            var device = this.cayennDevices[deviceid];
            if (!('log' in device)) device.log = [];
            
            var entry = {ts:new Date(), maincmd: maincmd, subcmd: subcmd, dir:"out"};
            
            device.log.unshift(entry);
            
            // if view for this device is showing, shove it in log view
            if (this.cayennDeviceIdShowing == deviceid) {
                var logEl = $('#' + this.id + ' .cayenn-log');
                var entryEl = $('<tr><td>> ' + entry.ts.toLocaleTimeString() + '</td><td>' + subcmd + '</td></tr>');
                logEl.prepend(entryEl);
            }
        },
        updateCmdsForDevice: function(payload) {
            // we get this call when we get back a list of commands from the device
            console.log("updateCmdsForDevice. payload:", payload);
            
            // check we have good data
            if ('Tag' in payload && 'Response' in payload.Tag && 'Cmds' in payload.Tag) {
                
                // tag looks good. populate cmd list
                var el = $('#' + this.id + ' .cayenn-onedevice');
                var cmdListEl = el.find('.cayenn-cmdlist');
                cmdListEl.html("");
                for (var i = 0; i < payload.Tag.Cmds.length; i++) {
                    var cmd = payload.Tag.Cmds[i];
                    var htmlEl = $('<button class="btn btn-xs btn-default">' + cmd + '</button>');
                    cmdListEl.append(htmlEl);
                }
            
            } else {
                console.error("Does not look like we got a good Tag list for response to GetCmds. payload:", payload);
            }

        },
        showOneDevice: function(evt) {
            
            console.log("showing one device. evt.data:", evt.data);
            
            // what device are we dealing with
            var device = this.cayennDevices[evt.data.DeviceId];
            
            // set this as the active showing device
            this.cayennDeviceIdShowing = device.DeviceId;
            
            // hide the icon list, show the single device
            $('#' + this.id + ' .cayenn-icon-list').addClass('hidden');
            
            var el = $('#' + this.id + ' .cayenn-onedevice');
            
            // swap in the icon
            var iconHtml = this.iconGet(device);
            var iconEl = $(iconHtml);
            // console.log("swapping in icon:", iconHtml);
            el.find('.cayenn-icon').parent().html(iconHtml); //.replaceWith(iconEl);
            
            // add click evt to back button
            // make sure old events are removed
            el.find(".cayenn-backbtn").off( "click" ).click(this.showIconList.bind(this));
            el.find('.cayenn-icon').off( "click" ).click(this.showIconList.bind(this));
            
            // wipe old cmds
            el.find('.cayenn-cmdlist').html("(Asking device...)");
            
            // show it
            el.removeClass('hidden');
            
            // now ask the device to give us its commands
            var maincmd = "cayenn-sendtcp " + device.Addr.IP;
            var subcmd = '{"Cmd":"GetCmds"}';
            this.sendCmd(device.DeviceId, maincmd, subcmd);
            // chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", cmd);
            
            // ask for queue list (may not have one)
            subcmd = '{"Cmd":"GetQ"}';
            this.sendCmd(device.DeviceId, maincmd, subcmd);
            // chilipeppr.publish("/com-chilipeppr-widget-serialport/ws/send", cmd);
            
        },
        showIconList: function() {
            
            console.log("showing icon list");
            
            // hide others
            this.cayennDeviceIdShowing = null;
            
            // hide the icon list, show the single device
            $('#' + this.id + ' .cayenn-onedevice').addClass('hidden');
            $('#' + this.id + ' #cayenn-renderarea').addClass('hidden');

            // show the icon list, show the single device
            $('#' + this.id + ' .cayenn-icon-list').removeClass('hidden');
        },

        /* 3D Related Methods Below */
        loader: null,
        camera: null,
        scene: null,
        renderer: null,
        controls: null,
        init3d: function() {
            
            console.log("cayenn - initting 3d viewer")
            this.loader = new THREE.ObjectLoader();
            this.renderer = new THREE.WebGLRenderer({
                antialias: true
            });
            this.renderer.setClearColor(0xeeeeee);
            this.renderer.setPixelRatio(window.devicePixelRatio);
            // cast shadows
            this.renderer.shadowMap.enabled = true;
            // to antialias the shadow
            this.renderer.shadowMapSoft = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            
            var renderDivEl = $('#' + this.id + " #cayenn-renderarea");
            
            this.camera = this.loader.parse(this.threeObj.camera);
            this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
// 			this.camera.setViewOffset(renderDivEl.width())
            // this.camera.setViewOffset(this.width * 3, this.height, this.width * 1.4, 0, this.width, this.height);
            // this.camera.rotationAutoUpdate = true;
            
            this.scene = this.loader.parse(this.threeObj.scene);
            // this.scene.up.set(0,0,1);
            
            // rotate the MainGroup object to correct z orientation
            var mainGrp = this.scene.getObjectByName( "MainGroup" );
            mainGrp.rotation.x = 90 * Math.PI / 180;
            
            // slide the object down on z so that it's center is not the bottom
            // so pivoting in mini 3d viewer makes more sense
            // also, turn on shadows
            // var group = new THREE.Group();
            // var that = this;
            /*
            for (var ctr in this.scene.children) {
            // this.scene.traverse(function(obj) {
                var obj = this.scene.children[ctr];
                console.log("obj:", obj);
                if (obj.type == "AmbientLight") return;
                obj.castShadow = true;
                obj.receiveShadow = true;
                
                if (obj.name == "Scene") return;
                
                // group.add(obj);
                // this.scene.remove(obj);
                // obj.up.set(0,0,1);
                // var tempZ = obj.position.z;
                // obj.position.z = obj.position.y;
                // obj.position.y = tempZ;
                // obj.position.z += -20;
                console.log("traversed scene to obj:", obj);
            };
            */

            // group.children = this.scene.children;
            // this.scene.children = []; // wipe objects cuz moved to group
            // group.rotateX(90 * Math.PI / 180);
            // group.scale.set(10,1,1);
            // group.rotation.x = 90 * Math.PI / 180;
            // var axis = new THREE.Vector3(1,0,0);//tilted a bit on x and y - feel free to plug your different axis here
            //in your update/draw function
            // var rad = 90 * Math.PI / 180;;
            // group.rotateOnAxis(axis,rad);
            // group.updateMatrixWorld();
            // this.scene.add(group); 
            
            var axisHelper = new THREE.AxisHelper( 50 );
            // axisHelper.scale.set(10,10,10);
            // axisHelper.rotation.x = 90 * Math.PI / 180;
            console.log("axisHelper:", axisHelper);
            this.scene.add( axisHelper );

            var size = 100;
            var step = 10;
            
            var gridHelper = new THREE.GridHelper( size, step, 0x0000ff, 0x808080 );
            gridHelper.rotation.x = 90 * Math.PI / 180;
            gridHelper.material.opacity = 0.15;
            gridHelper.material.transparent = true;
            this.scene.add( gridHelper );
            
            /*
            // group.position.z = -42.5;
            
            group.updateMatrixWorld();
            // group.matrixWorldNeedsUpdate = true;
            // this.scene.matrixWorldNeedsUpdate = true;
            this.scene.updateMatrixWorld();
            */
            
            // move all objects down

            $(window).resize(this.onResize.bind(this));
            
            // attach to div area in HTML DOM
            var that = this;
            // setTimeout(function() {
                
                
                renderDivEl.append(that.renderer.domElement);
                // that.renderer.setSize(renderDivEl.width()/2 -25, renderDivEl.height()/2);
                // that.renderer.setSize(renderDivEl.width()/that.renderer.getPixelRatio(), renderDivEl.height()/that.renderer.getPixelRatio());
                that.renderer.setSize(renderDivEl.innerWidth(), renderDivEl.innerHeight());
                console.log("renderer size:", that.renderer.getSize());
                console.log("pixelRatio:", that.renderer.getPixelRatio());
                that.renderer.render(that.scene, that.camera);
    
                // Controls
                that.controls = new THREE.TrackballControls(that.camera, renderDivEl[0]);
                // that.controls = new THREE.TrackballControls(that.camera);
                that.controls.noPan = false;
                that.controls.noZoom = false;
                that.controls.dynamicDampingFactor = 0.99; //0.15;
                that.controls.rotateSpeed = 2.0;
                that.controls.zoomSpeed = 3.2;
				that.controls.panSpeed = 0.8;
				that.controls.staticMoving = true;
				// that.controls.target.set(0,0,-93);
				// this.camera.up = new THREE.Vector3(0,0,1);
                // this.camera.lookAt(new THREE.Vector3(0,0,43));
                // that.controls.target = new THREE.Vector3(0,0,43);
                //that.controls.target = new THREE.Vector3().addVectors(/*new line for readability*/
                //    new THREE.Vector3(0,0,-43), that.scene.children[0].getWorldDirection());
				that.controls.update();
				that.controls.reset();
				
				
				
				console.log("controls:", that.controls);
                renderDivEl[0].addEventListener( 'mousemove', that.onMouseOrTouch.bind(that) );
                renderDivEl[0].addEventListener( 'touchmove', that.onMouseOrTouch.bind(that) );
                renderDivEl[0].addEventListener('scroll', that.onScroll.bind(that) );
                renderDivEl[0].addEventListener("mousewheel", that.onScroll.bind(that) );
                renderDivEl[0].addEventListener("DOMMouseScroll", that.onScroll.bind(that) );
                // that.controls.addEventListener( 'start',
                that.controls.addEventListener( 'change', that.render.bind(that) );
                // that.controls.addEventListener( 'change', that.onMouseOrTouch.bind(that) );
                // $(window).trigger('resize');
                // setTimeout(that.render.bind(that), 100);
                that.render();
                
                this.viewExtents();
                $('#' + this.id + " .cayenn-viewextents").click(this.viewExtents.bind(this));
                
                // force window resize cuz we get artifacts
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            
            // }, 50);
            
            // setTimeout(function() {
                
            // }, 1000);
            
            /*
            // init the threejs stuff
            this.width = $('#com-chilipeppr-widget-touchplate .panel-body').width();
            this.height = 210;

            this.load(this.threeObj);
            //this.setSize( window.innerWidth, window.innerHeight );
            console.log("scene width:", this.width, "height:", this.height);
            this.setSize(this.width, this.height);
            //this.setSize( 140, 200);
            //this.scene.position.setX(width * -0.045);
            //this.play();
            $('#com-chilipeppr-widget-touchplate .panel-body').prepend(this.dom);
            $(window).resize(this.onresize.bind(this));
            //this.animate();
            */
            console.log("cayenn - done initting 3d view. renderer:", this.renderer, "scene:", this.scene);
        },
        viewExtents: function() {
            // use viewextents from 3d viewer
			var camera = this.controls.object;
            // camera.fov = 35; // 35mm
			// camera.focus = 0;
            // camera.aspect = 3.8;
            camera.up.set(0,0,1);
			camera.position.set(0,-100,100);
			var bbox = new THREE.BoundingBoxHelper( this.scene.getObjectByName("MainGroup"), 0xff0000 );
            bbox.update();
            // this.scene.add( bbox );
            console.log("bbox:", bbox);
			console.log("center of bbox:", bbox.box.center());
			var target = new THREE.Vector3(0,0,bbox.box.center().z);
			this.controls.target = target;
			// camera.updateProjectionMatrix();
			this.controls.update();
			console.log("trackball camera after tweak:", camera);
			this.render();    
        },
        onScroll: function(evt) {
            // console.log("got onscroll. evt:", evt);
            this.controls.update();
        },
        onMouseOrTouch: function(evt) {
            // console.log("got mouse or touch. evt:", evt);
            this.controls.update();
            // this.renderer.render(this.scene, this.camera);
        },
        render: function(evt) {
            this.renderer.render(this.scene, this.camera);
        },
        onResize: function(evt) {
            var renderDivEl = $('#' + this.id + " #cayenn-renderarea");
            this.renderer.setSize(renderDivEl.innerWidth(), renderDivEl.innerHeight());
            this.camera.aspect = renderDivEl.innerWidth() / renderDivEl.innerHeight(); //window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
            this.render();
        },
        activatePopovers: function() {
            $('#' + this.id + ' .cayenn-icon').popover({html: true});    
        },
        /**
         * Call this method from init to setup all the buttons when this widget
         * is first loaded. This basically attaches click events to your 
         * buttons. It also turns on all the bootstrap popovers by scanning
         * the entire DOM of the widget.
         */
        btnSetup: function() {

            // Chevron hide/show body
            var that = this;
            $('#' + this.id + ' .hidebody').click(function(evt) {
                console.log("hide/unhide body");
                if ($('#' + that.id + ' .panel-body').hasClass('hidden')) {
                    // it's hidden, unhide
                    that.showBody(evt);
                }
                else {
                    // hide
                    that.hideBody(evt);
                }
            });

            // Ask bootstrap to scan all the buttons in the widget to turn
            // on popover menus
            $('#' + this.id + ' .btn').popover({
                delay: 1000,
                animation: true,
                placement: "auto",
                trigger: "hover",
                container: 'body'
            });

            // Init Say Hello Button on Main Toolbar
            // We are inlining an anonymous method as the callback here
            // as opposed to a full callback method in the Hello Word 2
            // example further below. Notice we have to use "that" so 
            // that the this is set correctly inside the anonymous method
            $('#' + this.id + ' .btn-sayhello').click(function() {
                console.log("saying hello");
                // Make sure popover is immediately hidden
                $('#' + that.id + ' .btn-sayhello').popover("hide");
                // Show a flash msg
                chilipeppr.publish(
                    "/com-chilipeppr-elem-flashmsg/flashmsg",
                    "Hello Title",
                    "Hello World from widget " + that.id,
                    1000
                );
            });

            // Init Hello World 2 button on Tab 1. Notice the use
            // of the slick .bind(this) technique to correctly set "this"
            // when the callback is called
            $('#' + this.id + ' .btn-helloworld2').click(this.onHelloBtnClick.bind(this));

        },
        /**
         * onHelloBtnClick is an example of a button click event callback
         */
        onHelloBtnClick: function(evt) {
            console.log("saying hello 2 from btn in tab 1");
            chilipeppr.publish(
                '/com-chilipeppr-elem-flashmsg/flashmsg',
                "Hello 2 Title",
                "Hello World 2 from Tab 1 from widget " + this.id,
                2000 /* show for 2 second */
            );
        },
        /**
         * User options are available in this property for reference by your
         * methods. If any change is made on these options, please call
         * saveOptionsLocalStorage()
         */
        options: null,
        /**
         * Call this method on init to setup the UI by reading the user's
         * stored settings from localStorage and then adjust the UI to reflect
         * what the user wants.
         */
        setupUiFromLocalStorage: function() {

            // Read vals from localStorage. Make sure to use a unique
            // key specific to this widget so as not to overwrite other
            // widgets' options. By using this.id as the prefix of the
            // key we're safe that this will be unique.

            // Feel free to add your own keys inside the options 
            // object for your own items

            var options = localStorage.getItem(this.id + '-options');

            if (options) {
                options = $.parseJSON(options);
                console.log("just evaled options: ", options);
            }
            else {
                options = {
                    showBody: true,
                    tabShowing: 1,
                    customParam1: null,
                    customParam2: 1.0
                };
            }

            this.options = options;
            console.log("options:", options);

            // show/hide body
            if (options.showBody) {
                this.showBody();
            }
            else {
                this.hideBody();
            }

        },
        /**
         * When a user changes a value that is stored as an option setting, you
         * should call this method immediately so that on next load the value
         * is correctly set.
         */
        saveOptionsLocalStorage: function() {
            // You can add your own values to this.options to store them
            // along with some of the normal stuff like showBody
            var options = this.options;

            var optionsStr = JSON.stringify(options);
            console.log("saving options:", options, "json.stringify:", optionsStr);
            // store settings to localStorage
            localStorage.setItem(this.id + '-options', optionsStr);
        },
        /**
         * Show the body of the panel.
         * @param {jquery_event} evt - If you pass the event parameter in, we 
         * know it was clicked by the user and thus we store it for the next 
         * load so we can reset the user's preference. If you don't pass this 
         * value in we don't store the preference because it was likely code 
         * that sent in the param.
         */
        showBody: function(evt) {
            $('#' + this.id + ' .panel-body').removeClass('hidden');
            $('#' + this.id + ' .panel-footer').removeClass('hidden');
            $('#' + this.id + ' .hidebody span').addClass('glyphicon-chevron-up');
            $('#' + this.id + ' .hidebody span').removeClass('glyphicon-chevron-down');
            if (!(evt == null)) {
                this.options.showBody = true;
                this.saveOptionsLocalStorage();
            }
            // this will send an artificial event letting other widgets know to resize
            // themselves since this widget is now taking up more room since it's showing
            $(window).trigger("resize");
        },
        /**
         * Hide the body of the panel.
         * @param {jquery_event} evt - If you pass the event parameter in, we 
         * know it was clicked by the user and thus we store it for the next 
         * load so we can reset the user's preference. If you don't pass this 
         * value in we don't store the preference because it was likely code 
         * that sent in the param.
         */
        hideBody: function(evt) {
            $('#' + this.id + ' .panel-body').addClass('hidden');
            $('#' + this.id + ' .panel-footer').addClass('hidden');
            $('#' + this.id + ' .hidebody span').removeClass('glyphicon-chevron-up');
            $('#' + this.id + ' .hidebody span').addClass('glyphicon-chevron-down');
            if (!(evt == null)) {
                this.options.showBody = false;
                this.saveOptionsLocalStorage();
            }
            // this will send an artificial event letting other widgets know to resize
            // themselves since this widget is now taking up less room since it's hiding
            $(window).trigger("resize");
        },
        /**
         * This method loads the pubsubviewer widget which attaches to our 
         * upper right corner triangle menu and generates 3 menu items like
         * Pubsub Viewer, View Standalone, and Fork Widget. It also enables
         * the modal dialog that shows the documentation for this widget.
         * 
         * By using chilipeppr.load() we can ensure that the pubsubviewer widget
         * is only loaded and inlined once into the final ChiliPeppr workspace.
         * We are given back a reference to the instantiated singleton so its
         * not instantiated more than once. Then we call it's attachTo method
         * which creates the full pulldown menu for us and attaches the click
         * events.
         */
        forkSetup: function() {
            var topCssSelector = '#' + this.id;

            $(topCssSelector + ' .panel-title').popover({
                title: this.name,
                content: this.desc,
                html: true,
                delay: 1000,
                animation: true,
                trigger: 'hover',
                placement: 'auto'
            });

            var that = this;
            chilipeppr.load("http://fiddle.jshell.net/chilipeppr/zMbL9/show/light/", function() {
                require(['inline:com-chilipeppr-elem-pubsubviewer'], function(pubsubviewer) {
                    pubsubviewer.attachTo($(topCssSelector + ' .panel-heading .dropdown-menu'), that);
                });
            });

        },
        threeObj: {
        	"metadata": {
        		"type": "App"
        	},
        	"project": {
        		"gammaInput": false,
        		"gammaOutput": false,
        		"shadows": true,
        		"editable": false,
        		"vr": false
        	},
        	"camera": {
        		"metadata": {
        			"version": 4.4,
        			"type": "Object",
        			"generator": "Object3D.toJSON"
        		},
        		"object": {
        			"uuid": "A4EAC104-A843-45D6-8F9B-B812565158B5",
        			"type": "PerspectiveCamera",
        			"name": "Camera",
        			"matrix": [1,0,0,0,0,0.9945219159126282,0.10452846437692642,0,0,-0.10452846437692642,0.9945219159126282,0,0,35.914920806884766,119.48490905761719,1],
		            "fov": 50,
        			"zoom": 1,
        			"near": 0.1,
        			"far": 10000,
        			"focus": 10,
        			"aspect": 1.5364916773367479,
        			"filmGauge": 35,
        			"filmOffset": 0
        		}
        	},
        	"scene": {
        		"metadata": {
        			"version": 4.4,
        			"type": "Object",
        			"generator": "Object3D.toJSON"
        		},
        		"geometries": [
        			{
        				"uuid": "313D2FCE-B597-4976-9400-1E9B5156C5BA",
        				"type": "CylinderBufferGeometry",
        				"radiusTop": 0.4,
        				"radiusBottom": 0.4,
        				"height": 13,
        				"radialSegments": 10,
        				"heightSegments": 1,
        				"openEnded": false
        			},
        			{
        				"uuid": "C7B8C792-9617-4163-A285-AF2382C7D1B5",
        				"type": "CylinderBufferGeometry",
        				"radiusTop": 1.8,
        				"radiusBottom": 1.8,
        				"height": 5,
        				"radialSegments": 10,
        				"heightSegments": 1,
        				"openEnded": false
        			},
        			{
        				"uuid": "F47A3C33-18D1-4F59-8BD1-A085116BEB8A",
        				"type": "CylinderBufferGeometry",
        				"radiusTop": 2.8,
        				"radiusBottom": 1.8,
        				"height": 1.5,
        				"radialSegments": 10,
        				"heightSegments": 1,
        				"openEnded": false
        			},
        			{
        				"uuid": "45D91260-B761-4D93-AB4B-F8661A1F3CC7",
        				"type": "CylinderBufferGeometry",
        				"radiusTop": 2.8,
        				"radiusBottom": 2.8,
        				"height": 6,
        				"radialSegments": 10,
        				"heightSegments": 1,
        				"openEnded": false
        			},
        			{
        				"uuid": "C7F991DC-3BD0-4815-BE27-ECA6D44FB8F3",
        				"type": "CylinderBufferGeometry",
        				"radiusTop": 5.6,
        				"radiusBottom": 5.6,
        				"height": 10,
        				"radialSegments": 12,
        				"heightSegments": 1,
        				"openEnded": false
        			},
        			{
        				"uuid": "19093760-74AC-4C48-B2C3-50D494273B6D",
        				"type": "CylinderBufferGeometry",
        				"radiusTop": 2.8,
        				"radiusBottom": 2.8,
        				"height": 4.5,
        				"radialSegments": 10,
        				"heightSegments": 1,
        				"openEnded": false
        			},
        			{
        				"uuid": "BDA81259-0540-4230-873B-B912715F74E5",
        				"type": "BoxBufferGeometry",
        				"width": 21,
        				"height": 58,
        				"depth": 16,
        				"widthSegments": 0,
        				"heightSegments": 0,
        				"depthSegments": 0
        			},
        			{
        				"uuid": "69146E85-23AC-44C7-A8DA-58DE4BB47C44",
        				"type": "CylinderBufferGeometry",
        				"radiusTop": 14,
        				"radiusBottom": 14,
        				"height": 19,
        				"radialSegments": 10,
        				"heightSegments": 1,
        				"openEnded": false
        			},
        			{
        				"uuid": "B2BFDDBA-D165-4463-9380-FF46827CDDA0",
        				"type": "BoxBufferGeometry",
        				"width": 19,
        				"height": 93,
        				"depth": 16,
        				"widthSegments": 0,
        				"heightSegments": 0,
        				"depthSegments": 0
        			}],
        		"materials": [
        			{
        				"uuid": "41B1EB73-49F9-4B3E-8DAA-AD120E076A73",
        				"type": "MeshStandardMaterial",
        				"color": 16777215,
        				"roughness": 0.5,
        				"metalness": 0.5,
        				"emissive": 13185238,
        				"depthFunc": 3,
        				"depthTest": true,
        				"depthWrite": true,
        				"skinning": false,
        				"morphTargets": false
        			},
        			{
        				"uuid": "8CF283D4-3448-410D-B548-C52B3F7551DC",
        				"type": "MeshStandardMaterial",
        				"color": 16777215,
        				"roughness": 0.5,
        				"metalness": 0.5,
        				"emissive": 10461087,
        				"depthFunc": 3,
        				"depthTest": true,
        				"depthWrite": true,
        				"skinning": false,
        				"morphTargets": false
        			},
        			{
        				"uuid": "34E5426C-3D5E-4042-8173-489B2ED66FC3",
        				"type": "MeshStandardMaterial",
        				"color": 16777215,
        				"roughness": 0.5,
        				"metalness": 0.5,
        				"emissive": 2039785,
        				"depthFunc": 3,
        				"depthTest": true,
        				"depthWrite": true,
        				"skinning": false,
        				"morphTargets": false
        			},
        			{
        				"uuid": "75869065-DAD9-46E7-8CD4-CF2DF94C2022",
        				"type": "MeshStandardMaterial",
        				"color": 9211020,
        				"roughness": 0.5,
        				"metalness": 0.5,
        				"emissive": 0,
        				"depthFunc": 3,
        				"depthTest": true,
        				"depthWrite": true,
        				"skinning": false,
        				"morphTargets": false
        			},
        			{
        				"uuid": "D7575A61-E2ED-4853-A4D2-E14934C837CA",
        				"type": "MeshStandardMaterial",
        				"color": 16777215,
        				"roughness": 0,
        				"metalness": 0.5,
        				"emissive": 14803425,
        				"opacity": 0.58,
        				"transparent": true,
        				"depthFunc": 3,
        				"depthTest": true,
        				"depthWrite": true,
        				"skinning": false,
        				"morphTargets": false
        			},
        			{
        				"uuid": "9F71FC81-3D7E-4AA4-9954-FA83B163B57D",
        				"type": "MeshStandardMaterial",
        				"color": 8026746,
        				"roughness": 0.5,
        				"metalness": 0.5,
        				"emissive": 7895160,
        				"depthFunc": 3,
        				"depthTest": true,
        				"depthWrite": true,
        				"skinning": false,
        				"morphTargets": false
        			},
        			{
        				"uuid": "09ED9CF0-A53B-4C69-87BA-16CA57922E40",
        				"type": "MeshStandardMaterial",
        				"color": 16777215,
        				"roughness": 0.5,
        				"metalness": 0.5,
        				"emissive": 4144959,
        				"depthFunc": 3,
        				"depthTest": true,
        				"depthWrite": true,
        				"skinning": false,
        				"morphTargets": false
        			}],
        		"object": {
        			"uuid": "456CE677-ABE0-41B0-9CCE-D794EB9272FD",
        			"type": "Scene",
        			"name": "Scene",
        			"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
        			"children": [
        			    {
        			        "uuid": "123",
        			        "type": "Group",
        			        "name": "MainGroup",
        			        "children": [
        			            {
                					"uuid": "5DDD2887-0191-44A3-9B83-F0B8733C6F74",
                					"type": "Mesh",
                					"name": "Needle",
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,6.5,0,1],
                					"geometry": "313D2FCE-B597-4976-9400-1E9B5156C5BA",
                					"material": "41B1EB73-49F9-4B3E-8DAA-AD120E076A73"
                				},
                				{
                					"uuid": "C3E9EB5E-96BF-4738-B4F9-9C4BF20AE166",
                					"type": "Mesh",
                					"name": "Holder",
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,13,0,1],
                					"geometry": "C7B8C792-9617-4163-A285-AF2382C7D1B5",
                					"material": "8CF283D4-3448-410D-B548-C52B3F7551DC"
                				},
                				{
                					"uuid": "8E5DA9B1-24E6-4E50-AB3F-C702686FD7EF",
                					"type": "Mesh",
                					"name": "HolderExpand",
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,16,0,1],
                					"geometry": "F47A3C33-18D1-4F59-8BD1-A085116BEB8A",
                					"material": "8CF283D4-3448-410D-B548-C52B3F7551DC"
                				},
                				{
                					"uuid": "92D579DD-0FC2-4207-A054-E2761B4BCF39",
                					"type": "Mesh",
                					"name": "HolderTop",
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,19.5,0,1],
                					"geometry": "45D91260-B761-4D93-AB4B-F8661A1F3CC7",
                					"material": "8CF283D4-3448-410D-B548-C52B3F7551DC"
                				},
                				{
                					"uuid": "31D2B2E5-1457-432F-92EF-764CA2224BD1",
                					"type": "Mesh",
                					"name": "DMPLuer",
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,27.5,0,1],
                					"geometry": "C7F991DC-3BD0-4815-BE27-ECA6D44FB8F3",
                					"material": "34E5426C-3D5E-4042-8173-489B2ED66FC3"
                				},
                				{
                					"uuid": "78D63247-9442-4655-9946-A091F6009637",
                					"type": "SpotLight",
                					"name": "SpotLight 1",
                					"castShadow": true,
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,38.75918197631836,74.2023696899414,8.573958396911621,1],
                					"color": 16777215,
                					"intensity": 1,
                					"distance": 0,
                					"angle": 0.3141592653589793,
                					"decay": 1,
                					"penumbra": 0,
                					"shadow": {
                						"camera": {
                							"uuid": "AD0BC814-EEFE-41C2-A122-C1D166D74623",
                							"type": "PerspectiveCamera",
                							"fov": 36,
                							"zoom": 1,
                							"near": 0.5,
                							"far": 500,
                							"focus": 10,
                							"aspect": 1,
                							"filmGauge": 35,
                							"filmOffset": 0
                						}
                					}
                				},
                				{
                					"uuid": "F4B51BDA-4934-436C-B516-B933DF1DABF2",
                					"type": "AmbientLight",
                					"name": "AmbientLight 2",
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
                					"color": 16777062,
                					"intensity": 0.48
                				},
                				{
                					"uuid": "F10C10C4-E75A-4687-AEA8-99E2EFBB8961",
                					"type": "Mesh",
                					"name": "DMPPipe",
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,34.5,0,1],
                					"geometry": "19093760-74AC-4C48-B2C3-50D494273B6D",
                					"material": "75869065-DAD9-46E7-8CD4-CF2DF94C2022"
                				},
                				{
                					"uuid": "FA110EF3-2EBF-4111-93DE-0F474389BD48",
                					"type": "Mesh",
                					"name": "AugerBox",
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,2.401460886001587,65.5,0,1],
                					"geometry": "BDA81259-0540-4230-873B-B912715F74E5",
                					"material": "D7575A61-E2ED-4853-A4D2-E14934C837CA"
                				},
                				{
                					"uuid": "EF2F4793-BAF4-4FDD-B678-D49ED47003D9",
                					"type": "SpotLight",
                					"name": "SpotLight 6",
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,227.60926818847656,236.91976928710938,189.99232482910156,1],
                					"color": 12435686,
                					"intensity": 0.4,
                					"distance": 0,
                					"angle": 0.3141592653589793,
                					"decay": 1,
                					"penumbra": 0,
                					"shadow": {
                						"camera": {
                							"uuid": "D64984DC-5938-4AED-9C0E-E10D8D09BEC5",
                							"type": "PerspectiveCamera",
                							"fov": 50,
                							"zoom": 1,
                							"near": 0.5,
                							"far": 500,
                							"focus": 10,
                							"aspect": 1,
                							"filmGauge": 35,
                							"filmOffset": 0
                						}
                					}
                				},
                				{
                					"uuid": "509B7D44-6540-4394-9BE6-75BC63D3D71C",
                					"type": "Mesh",
                					"name": "Motor",
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,7.445764064788818,69.98239135742188,0,1],
                					"geometry": "69146E85-23AC-44C7-A8DA-58DE4BB47C44",
                					"material": "9F71FC81-3D7E-4AA4-9954-FA83B163B57D"
                				},
                				{
                					"uuid": "C4D1E40F-D2EC-48B4-9F9D-88F64A66B10B",
                					"type": "Mesh",
                					"name": "Box 6",
                					"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,-19.51814079284668,46.5,0,1],
                					"geometry": "B2BFDDBA-D165-4463-9380-FF46827CDDA0",
                					"material": "09ED9CF0-A53B-4C69-87BA-16CA57922E40"
                				}
        			            ]
        			    }
        				],
        			"background": 11184810
        		}
        	},
        	"scripts": {}
        }

    }
});