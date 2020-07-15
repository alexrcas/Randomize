$('#add-field-btn').on('click', () => {
    $('#fieldName').val('');
})

$('#add-table-btn').on('click', () => {
    createTable();
    $('.draggable').draggabilly({
        containment: '#board'
    });
    $('#createTableModal').modal('hide');
})