const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [{
        label: 'Classes Appointed to Teacher per Day',
        data: [12, 9, 13, 11, 12, 10],
        backgroundColor:[
            'rgba(255,99,132,0.3)',
            'rgba(54,162,232,0.3)',
            'rgba(255,206,86,0.3)',
            'rgba(75,192,192,0.3)',
            'rgba(153,102,255,0.3)',
            'rgba(255,159,64,0.3)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      indexAxis: 'y',
    }
  });