// import Chart from 'chart.js/auto';

// import Chart from 'chart.js/auto';

document.addEventListener('DOMContentLoaded', function () {
    // Gráfico de barras x 0
    // Datos para las barras de progreso
    const labels = ['-30 ans', '30-49 ans', '50-65 ans', '+65 ans'];
    const data = {
        labels: labels,
        datasets: [{
            axis: 'y',
            label: 'ans',
            data: [1, 49, 42, 8],
            fill: false,
            backgroundColor: [
                '#16a873', // Verde color
            ],
            barThickness: 40,
            // borderColor: [
            //     '#16a873',
            // ],
            // borderWidth: 1
        }]
    };


    // Crear el gráfico de barras
    const ctx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                      display: false,
                    }
                }

            }
        }
    });

     //Gráfico de barras x 2
     const labels2 = ['0-9 salariés', '10-49 salariés', '50-250 salariés', '+250 salariés']
     const data2 = {
       labels: labels2,
       datasets: [{
          axis: 'y',
          label: 'salariés',
          data: [77, 7.9, 5.1, 1.1],
          fill: false,
          backgroundColor: [
              '#16a873',
          ],
          barThickness: 40,
           // borderColor: [
           //     '#16a873',
           // ],
           // borderWidth: 1
       }]
     };

    // Crear el gráfico de barras
    const ctx2 = document.getElementById('barChart2').getContext('2d');
    const barChart2 = new Chart(ctx2, {
        type: 'bar',
        data: data2,
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    display: false, // Oculta las líneas de la escala Y
                  }
                }

            }
        }
    });

    // Gráfico de barras verticales
    const labels3 = ['2018', '2019', '2020', '2022', '2021', '2023']
    const data3 = {
      labels: labels3,
      datasets: [{
          axis: 'y',
          label: 'salariés',
          data: [38, 40, 42, 45, 43, 49],
          fill: true,
          backgroundColor: ['#16a873'],
          barThickness: 20,
          // borderColor: [
          //     '#16a873',
          // ],
          // borderWidth: 1
      }]
    };

    const ctx3 = document.getElementById('barChart3').getContext('2d');
    const barChart3 = new Chart(ctx3, {
      type: 'bar',
      data: data3,
      options: {
        indexAxis: 'x',
        scales: {
          y: {
            min: 0,
            max: 50000,
            stepSize: 10000,
            ticks: {
              callback: function(value, index, values) {
                return (value / 1000) + 'k';
              }
            },
            grid: {
              display: false,
            }
          },
          y: {
            beginAtZero: true
          },
          x: {
            grid: {
              display: false, // Oculta las líneas de la escala Y
            }
          }
        }
      }
    });
});
