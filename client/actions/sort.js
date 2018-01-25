$( ()=> {
  $('#submitBtn').on('click', function() {
    const text = $('#inputString').val();
    const payload = {'input': text};
    console.log(payload);

    const myInit = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: new Headers({
        'Content-type': 'application/json',
        'Accept': 'application/json'
      })
    };

    fetch('http://localhost:3000/sort', myInit)
      .then(res => res.json())
      .then( (response) => {
        const table = document.getElementById('output');
        const newRow = table.insertRow(1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);

        cell1.innerHTML = response.input;
        cell2.innerHTML = response.sorted;
      });
  });
}) 