// Fetch data from the URL
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
  .then(response => response.json()) // Parse the data as JSON
  .then(data => {
    // Filter the features array for earthquakes with a magnitude greater than 5
    const earthquakesAbove5 = data.features.filter(feature => feature.properties.mag > 5);
    earthquakesAbove5.sort((a, b) => a.properties.mag - b.properties.mag);

    // Select the table body
    const tableBody = document.querySelector('#earthquakes-table tbody');

    // Iterate over the earthquakes
    earthquakesAbove5.forEach(earthquake => {
      // Create a new table row and cells
      const row = document.createElement('tr');
      const magnitudeCell = document.createElement('td');
      const locationCell = document.createElement('td');
      const timeCell = document.createElement('td');

      // Set the cell text
      magnitudeCell.textContent = earthquake.properties.mag;
      locationCell.textContent = earthquake.properties.place;
      timeCell.textContent = new Date(earthquake.properties.time).toLocaleString();

      // Add the cells to the row
      row.appendChild(magnitudeCell);
      row.appendChild(locationCell);
      row.appendChild(timeCell);

      // Add the row to the table body
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error:', error)); // Log any errors