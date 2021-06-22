<template>
  <div id="row">
  <br>
  <form id="filterCPU" class="col">
      <input v-model="store.CPUFilter" class="form-control-mr-sm-2" type="search" placeholder="Npr. intel, amd"/>
      </form>
  <br>
    <span>Odabrani filter: {{ store.CPUFilter }}</span>
  <br>
    <select v-model="selected.CPU">
      <input v-model="store.CPUFilter" class="form-control-mr-sm-2" type="search" placeholder="Npr. intel, amd"/>
      <option v-bind:value="{id: CPU.id, name: CPU.name, cijena: CPU.cijena, snaga: CPU.snaga}" v-for="CPU in filter" :key=CPU.id> {{ CPU.name }}</option>
    </select>
  <pre>Cijena: {{ selected.CPU.cijena }}</pre>
  
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'Wishlist',
  data() { 
    return {
    store,
    picked: '',
    selected: {
      CPU: {
        id: 1,
        name: 'all'
      }
    },
    
    CPUS: [
      {id: 1, name: 'amd 2222', cijena: 3000, snaga: 50},
      {id: 2, name: 'nvidia 1080', cijena: 4000, snaga: 70},
      {id: 3, name: 'amd 550', cijena: 5000, snaga: 80},
      {id: 4, name: 'amd 5520', cijena: 6000, snaga: 100} 
    ]
  }
  },
  computed: {
    filter() {
      return this.CPUZ(this.CPUS)
    }

  },
  methods: {
    CPUZ: function(CPUS) {
    let cpuf = (this.store.CPUFilter).toLowerCase();
    return CPUS.filter(cpu => cpu.name.indexOf(cpuf) >= 0);
  },
  },
}
</script>