$('#create-table-btn').on('click', () => {
    $('#createTableModal').modal();
})


$('#board').on('click', '.btn-values', function(e) {
    $('#selectDataModal').modal();
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
