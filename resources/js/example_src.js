'use strict';

var StylieNotification = require('../../index'),
	// classie = require('classie'),
	notification1,
	modalButtonContainer;

var openModalButtonHandler = function (e) {
	// create the notification
	var notification = new StylieNotification({
		message: '<p>This is just a simple notice. Everything is in order and this is a <a href="#">simple link</a>.</p>',
		ttl: 5000,
		layout: e.target.getAttribute('data-layout'), //'bar',
		effect: e.target.getAttribute('data-effect'), //'exploader',
		type: e.target.getAttribute('data-type'), //'notice', // notice, warning, error or success
		onClose: function () {
			// bttn.disabled = false;
		}
	});

	// show the notification
	notification.show();
	window.notification1 = notification1;

};

window.addEventListener('load', function () {
	modalButtonContainer = document.querySelector('#td-notification-buttons');
	modalButtonContainer.addEventListener('click', openModalButtonHandler, false);

}, false);
