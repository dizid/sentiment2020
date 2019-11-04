import {Bar, mixins} from 'vue-chartjs'

export default {
    extends: Bar,
    mixins: [mixins.reactiveProp],
   // props: ['chartData', 'options'], // Error: props options is already defined (in data)
   props: ['chartData'],
    data() {
        return {
            options: { //Chart.js options
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.chartdata, this.options)
    }

}