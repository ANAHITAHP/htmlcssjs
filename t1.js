document.getElementById('createTable').addEventListener('click', function() {
  const rows = parseInt(document.getElementById('rows').value);
  const columns = parseInt(document.getElementById('columns').value);


  if (isNaN(rows) || isNaN(columns) || rows < 1 || columns < 1) {
      alert('لطفا تعداد ردیف‌ها و ستون‌ها را به درستی وارد کنید.');
      return;
  }

  const table = document.createElement('table');


  const headerRow = document.createElement('tr');
  for (let j = 0; j < columns; j++) {
      const headerCell = document.createElement('th');
      headerCell.textContent = `Column ${j + 1}`; 
      headerRow.appendChild(headerCell);
  }
  table.appendChild(headerRow); 

  
  for (let i = 0; i < rows; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < columns; j++) {
          const cell = document.createElement('td');
          cell.textContent = `ردیف ${i + 1}، ستون ${j + 1}`;
          row.appendChild(cell);
      }
      table.appendChild(row);
  }


  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = ''; 
  tableContainer.appendChild(table); 
});