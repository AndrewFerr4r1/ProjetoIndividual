window.onload = obterDadosGrafico()
window.onload = obterDadosGrafico2()

function obterDadosGrafico() {


    fetch(`/usuarios/puxarVoto`, { cache: "no-store" })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log("Dados recebidos: ", resposta);
                    resposta.reverse();

                    plotarGrafico(resposta);
                });
            } else {
                console.error("Nenhum dado encontrado ou erro na API");
            }
        })
        .catch(function (error) {
            console.error(
                `Erro na obtenção dos dados p/ gráfico: ${error.message}`
            );
        });
}
function plotarGrafico(resposta) {
    console.log('iniciando plotagem do gráfico...');

    var dados = {
        labels: ['chinese taipe', 'Vietnam', 'Inglaterra', 'Turquia', 'Tailândia', 'Coreia do sul', 'Japão', 'Indonêsia', 'Alemanha'
            , 'Finlândia', 'China', 'Australia', 'Eua', 'Argentina', 'Canada', 'Brasil'],
        datasets: [
            {
                label: 'Quantidade de votos',
                backgroundColor: '#32b9cd8f',
                data: []
            },
        ]
    };

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        if (registro.time == "Brasil") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Canada") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Argentina") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Eua") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Australia") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "China") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Finlandia") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Alemanha") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Indonesia") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Japão") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Coreia do sul") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Tailândia") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Turquia") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Inglaterra") {
            dados.datasets[0].data.push(registro.voto);
        } else if (registro.time == "Vietnam") {
            dados.datasets[0].data.push(registro.voto);
        } else {
            dados.datasets[0].data.push(registro.voto);
        }
        // dados.labels.data.push(registro.nome);
    }

    console.log(JSON.stringify(dados));

    var ctx = document.getElementById("grafico1").getContext('2d');
    window.grafico_linha = Chart.Bar(ctx, {
        data: dados,
        options: {
            responsive: true,
            animation: { duration: 500 },
            hoverMode: 'index',
            stacked: false,
            title: {
                display: false,
                text: 'Dados capturados'
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                    ticks: {
                        beginAtZero: true,
                        max: 30,
                        min: 0
                    }
                }, {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    id: 'y-umidade',
                    ticks: {
                        beginAtZero: true,
                        max: 30,
                        min: 0
                    },

                    gridLines: {
                        drawOnChartArea: false,
                    },
                }],
            }
        }
    });
}

function obterDadosGrafico2() {


    fetch(`/mapa/puxarQuantidadeMapasFavoritos`, { cache: "no-store" })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log("Dados recebidos: ", resposta);
                    resposta.reverse();

                    plotarGrafico2(resposta);
                });
            } else {
                console.error("Nenhum dado encontrado ou erro na API");
            }
        })
        .catch(function (error) {
            console.error(
                `Erro na obtenção dos dados p/ gráfico: ${error.message}`
            );
        });
}
function plotarGrafico2(resposta) {
    console.log('iniciando plotagem do gráfico2...');

    var dados2 = {
        labels: ['Taego', 'Vikendi', 'Sanhok', 'Miramar', 'Erangel'],
        datasets: [
            {
                label: 'Quantidade de vezes que os mapas foram escolhidos como favoritos',
                backgroundColor: '#32b9cd8f',
                data: []
            },
        ]
    };

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        if (registro.mapa == "Erangel") {
            dados2.datasets[0].data.push(registro.qtdMapa);
        } else if (registro.mapa == "Miramar") {
            dados2.datasets[0].data.push(registro.qtdMapa);
        } else if (registro.mapa == "Sanhok") {
            dados2.datasets[0].data.push(registro.qtdMapa);
        } else if (registro.mapa == "Vikendi") {
            dados2.datasets[0].data.push(registro.qtdMapa);
        } else {
            dados2.datasets[0].data.push(registro.qtdMapa);
        }
    }

    console.log(JSON.stringify(dados2));

    var graficoDois = document.getElementById("grafico2").getContext('2d');
    window.grafico_linha2 = Chart.Bar(graficoDois, {
        data: dados2,
        options: {
            responsive: true,
            animation: { duration: 500 },
            hoverMode: 'index',
            stacked: false,
            title: {
                display: false,
                text: 'Dados capturados'
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                    ticks: {
                        beginAtZero: true,
                        max: 30,
                        min: 0
                    }
                }, {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    id: 'y-umidade',
                    ticks: {
                        beginAtZero: true,
                        max: 30,
                        min: 0
                    },

                    gridLines: {
                        drawOnChartArea: false,
                    },
                }],
            }
        }
    });
}