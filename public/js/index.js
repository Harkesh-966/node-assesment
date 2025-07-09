function showModal(message) {
    $('#modalMessage').html(message);
    $('#alertModal').modal('show');
}

$('#saveBtn').on('click', function() {
    const address = $('#address').val();
    const lat = $('#lat').val();
    const lng = $('#lng').val();
    const weather_json = $('#weather_json').val();
    if (!address.trim()) {
        showModal('Address should be mandatory!');
        return;
    }
    $.post('/save', { address, lat, lng, weather_json }, function(resp) {
        if (resp.success) {
            showModal('Saved to DB Successfully!');
        } else if (resp.error) {
            showModal(resp.error);
        }
    });
});

$('#dynamicBtn').on('click', function() {
    $.get('/add-element', function(resp) {
        $('#dynamicDiv').append(resp.html);
    });
});
