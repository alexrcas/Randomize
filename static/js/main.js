$('#create-table-btn').on('click', () => {
    $('#createTableModal').modal();
})

$('#add-table-btn').on('click', () => {
    createTable();
    $('.draggable').draggabilly({
        containment: '#board'
    });
    $('#createTableModal').modal('hide');
})

$('#board').on('click', '.btn-values', function(e) {
    console.log($(this).parent())
})


let createTable = table => {

    $('#board').append(
        `              <table class="border draggable">
        <tr>
          <th>Alumnos</th>
        </tr>
        <td><input type="text"></td>
        <td>
            <select>
                <option>VARCHAR</option>
                <option>INT</option>
            </select>
        </td>
        <td>
        <button class="btn btn-light btn-values">Valores</button>
        </td>
      </tr>
      </table>`
        )
}
