var socket = io()

socket.on('connect', function () {
    console.log('Connected to Server')  
})

socket.on('newMessage', function(message) {
    console.log('newMessage: ', message)
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`)

    jQuery('#messages').append(li)
})

socket.on('disconnect', function () {
    console.log('Disconnected from Server')
})

socket.on('newLocationMessage', function (message) {
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My Current Location</a>');

    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);

    jQuery('#messages').append(li);
})

jQuery('#message-form').on('submit', function (event) {
    event.preventDefault();

    var messageTextbox = jQuery('[name=message]')

    socket.emit('createMessage', {
        from: 'User',
        text: messageTextbox.val()
    }, function () {
        messageTextbox.val('')
    })
})

var locationButton = jQuery('#send-location');

locationButton.on('click', function () {
    if (!navigator.geolocation) {
        return alert('Geolocation not Supported by your Browser')
    }

    locationButton.attr('disabled', 'disabled').text('Sending...')

    navigator.geolocation.getCurrentPosition(function (position) {
        locationButton.removeAttr('disabled').text('Send Location');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }, function () {
        locationButton.removeAttr('disabled').text('Send Location')
        alert('Unable to Fetch Location');
    })
})