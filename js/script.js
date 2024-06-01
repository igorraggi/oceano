document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('plasticPollutionChart')) {
        const ctxPlasticPollution = document.getElementById('plasticPollutionChart').getContext('2d');
        const plasticPollutionChart = new Chart(ctxPlasticPollution, {
            type: 'line',
            data: {
                labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
                datasets: [{
                    label: 'Milhões de toneladas de plástico',
                    data: [8, 10, 12, 15, 18, 20, 22],
                    borderColor: '#00796b',
                    backgroundColor: 'rgba(0, 121, 107, 0.5)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Poluição Plástica ao Longo dos Anos'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.raw + ' milhões de toneladas';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    if (document.getElementById('marineProtectedAreasChart')) {
        // Gráfico de Tamanho dos Oceanos
        const ctxSize = document.getElementById('marineProtectedAreasChart').getContext('2d');
        const oceanSizeChart = new Chart(ctxSize, {
            type: 'bar',
            data: {
                labels: ['Pacífico', 'Atlântico', 'Índico', 'Antártico', 'Ártico'],
                datasets: [{
                    label: 'Área em Milhões de Milhas Quadradas',
                    data: [63, 41, 27, 7.8, 5.4],
                    backgroundColor: ['#1E88E5', '#43A047', '#FB8C00', '#E53935', '#8E24AA'],
                    borderColor: ['#1565C0', '#2E7D32', '#EF6C00', '#C62828', '#6A1B9A'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Tamanho dos Oceanos'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });