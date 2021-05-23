<template>
  <v-col xs="12" sm="6" lg="4">
    <v-card class="mt-3">
      <h2 class="font-weight-light text-center py-3">Bolillas</h2>

      <v-progress-linear
      v-if="load"
        indeterminate
        color="accent"
      ></v-progress-linear>

      <v-list v-else>
        <v-list-group
          v-for="item in bolillasInfo"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.id"
          >
            <v-list-item-content>
              <div class="d-flex justify-start align-center">
              <v-list-item-title v-text="child.id"></v-list-item-title>
              <caption class="font-weight-light mr-3 secondary--text">{{ bolillas[child.number].frequency }}</caption>
              <v-btn
                class="mx-2"
                fab
                dark
                x-small
                color="success"
                @click="setFrequency({id: child.id, number: child.number, frequency: bolillas[child.number].frequency})"
              >
                <v-icon dark>add</v-icon>
              </v-btn>
              </div>

            </v-list-item-content>
          </v-list-item>
        </v-list-group>

      </v-list>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      bolillasInfo: [
        {
          icon: 'filter_none',
          active: false,
          items: [
             { id: '01', number: 0 },
             { id: '02', number: 1 },
             { id: '03', number: 2 },
             { id: '04', number: 3 },
             { id: '05', number: 4 },
             { id: '06', number: 5 },
             { id: '07', number: 6 },
             { id: '08', number: 7 },
             { id: '09', number: 8 }
          ],
          title: 'Un dígito'
        },
        {
          icon: 'filter_1',
          active: false,
          items: [
             { id: '10', number: 9  },
             { id: '11', number: 10  },
             { id: '12', number: 11  },
             { id: '13', number: 12  },
             { id: '14', number: 13  },
             { id: '15', number: 14  },
             { id: '16', number: 15  },
             { id: '17', number: 16  },
             { id: '18', number: 17  },
             { id: '19', number: 18  }
          ],
          title: 'Diez'
        },
        {
          icon: 'filter_2',
          active: false,
          items: [
             { id: '20', number: 19 },
             { id: '21', number: 20 },
             { id: '22', number: 21 },
             { id: '23', number: 22 },
             { id: '24', number: 23 },
             { id: '25', number: 24 },
             { id: '26', number: 25 },
             { id: '27', number: 26 },
             { id: '28', number: 27 },
             { id: '29', number: 28 }
          ],
          title: 'Veinte'
        },
        {
          icon: 'filter_3',
          active: false,
          items: [
             { id: '30', number: 29 },
             { id: '31', number: 30 },
             { id: '32', number: 31 },
             { id: '33', number: 32 },
             { id: '34', number: 33 },
             { id: '35', number: 34 },
             { id: '36', number: 35 },
             { id: '37', number: 36 },
             { id: '38', number: 37 },
             { id: '39', number: 38 }
          ],
          title: 'Treinta'
        },
        {
          icon: 'filter_4',
          active: false,
          items: [
             { id: '40', number: 39 },
             { id: '41', number: 40 },
             { id: '42', number: 41 },
             { id: '43', number: 42 },
             { id: '44', number: 43 },
             { id: '45', number: 44 },
             { id: '46', number: 45 },
             { id: '47', number: 46 },
             { id: '48', number: 47 },
             { id: '49', number: 48 }
          ],
          title: 'Cuarenta'
        },
        {
          icon: 'filter_5',
          active: false,
          items: [
             { id: '50', number: 49 },
             { id: '51', number: 50 },
             { id: '52', number: 51 },
             { id: '53', number: 52 },
             { id: '54', number: 53 },
             { id: '55', number: 54 },
             { id: '56', number: 55 },
             { id: '57', number: 56 },
             { id: '58', number: 57 },
             { id: '59', number: 58 }
          ],
          title: 'Cincuenta'
        },
        {
          icon: 'filter_6',
          active: false,
          items: [
             { id: '60', number: 59 },
             { id: '61', number: 60 },
             { id: '62', number: 61 },
             { id: '63', number: 62 },
             { id: '64', number: 63 },
             { id: '65', number: 64 },
             { id: '66', number: 65 },
             { id: '67', number: 66 },
             { id: '68', number: 67 },
             { id: '69', number: 68 }
          ],
          title: 'Sesenta'
        },
        {
          icon: 'filter_7',
          active: false,
          items: [
             { id: '70', number: 69 },
             { id: '71', number: 70 },
             { id: '72', number: 71 },
             { id: '73', number: 72 },
             { id: '74', number: 73 },
             { id: '75', number: 74 },
             { id: '76', number: 75 },
             { id: '77', number: 76 },
             { id: '78', number: 77 },
             { id: '79', number: 78 }
          ],
          title: 'Setenta'
        },
        {
          icon: 'filter_8',
          active: false,
          items: [
             { id: '80', number: 79 },
             { id: '81', number: 80 },
             { id: '82', number: 81 },
             { id: '83', number: 82 },
             { id: '84', number: 83 },
             { id: '85', number: 84 },
             { id: '86', number: 85 },
             { id: '87', number: 86 },
             { id: '88', number: 87 },
             { id: '89', number: 88 }
          ],
          title: 'Ochenta'
        },
        {
          icon: 'filter_9',
          active: false,
          items: [
             { id: '90', number: 89 }
          ],
          title: 'Noventa'
        }
      ]
    }
  },
  created() {
    this.getBolillas()
  },
  methods: {
    ...mapActions(['setFrequency', 'getBolillas'])
  },
  computed: {
    ...mapState(['bolillas', 'load'])
  }
}
</script>