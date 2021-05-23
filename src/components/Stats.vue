<template>
  <v-col xs="12" sm="8" md="6" xl="4">
    <v-card class="mt-3">
      <div>
        <apexchart width="100%" height="1200" type="bar" :options="chartOptions" :series="series"></apexchart>
      </div>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
       chartOptions: {
          chart: {
            id: 'chart-bingomax',
          },
          xaxis: {
            categories: this.setCategories()
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
        },
        series: [{
          name: 'Frecuencia',
          data: []
        }]
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setCategories() {
      const categories = []
      for (let index = 1; index <= 9; index++) {
        categories.push(`0${index}`)
      }
      for (let index = 10; index <= 90; index++) {
        categories.push(`${index}`)
      }
      return categories
    },
    setData() {
      const data = []
      for (let index = 0; index < 90; index++) {
        let frequency = this.bolillas[index].frequency
        data.push(frequency)
      }
      this.series = [{
        name: 'Frecuencia',
        data: data
      }]
    }
  },
  computed: {
    ...mapState(['bolillas'])
  }
}
</script>