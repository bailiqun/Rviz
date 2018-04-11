

Communication = function ( editor ) {

	var editor = editor;
	var scene = editor.scene;
	var config = editor.config;
    var signals = editor.signals;
    //var socket = io('http://localhost');

	var x = 0;
    var timer = window.setInterval(function() {
        x += 0.1;
        var y = 100 * Math.sin(x*0.1);
        signals.robotPoseChanged.dispatch({position: {x: x, y: 1, z: 0}, orientation: {x: 0, y: 0, z: 0, w: 1}});
        scene.traverse(function (child) {
            if (child.uuid === editor.uuid.robot) {

                child.position.x = x;
                child.position.z = y;
                signals.cameraChanged.dispatch();

            }
        });
        }, 50);

    // ros

    // var ros = new ROSLIB.Ros();
    //
    // ros.on('error', function(error) {
		// console.log(error);
    //     signals.connectChanged.dispatch('error');
    // });
    //
    // ros.on('connection', function() {
		// console.log('connect');
    //     signals.connectChanged.dispatch('connected');
    // });
    //
    // ros.connect('ws://192.168.31.121:8899');
    //
    //
    // // socket.io
    //
    // socket.on('news', function (data) {
    //     console.log(data);
    //     socket.emit('my other event', { my: 'data' });
    // });

};

Communication.prototype = {

	update: function ( cmd, optionalName ) {

    }

};
