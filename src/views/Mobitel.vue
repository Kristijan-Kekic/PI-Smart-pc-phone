<template>
  <div class="container">
    <div class="row">
    <div class="col-1-sm">
      <div class="div1"><router-link class="rl" to="/">Natrag</router-link></div>
    <div class="div2">Filter</div>
    <ul class="list-group">
  <li class="list-group-item">Preference</li>
  <li class="list-group-item">Kamera</li>
  <li class="list-group-item">Performance</li>
  <li class="list-group-item">Cijena</li>
  <li class="list-group-item">Baterija</li>
  <li class="list-group-item">Ekran</li>
</ul>
    
    

    </div>
    
    <div class="col-7-sm">
      <div class="col-5-sm">
        <p class="div3">Sortiraj prema:</p>
      </div>
      <div class="row align-items-start" style="margin: 50px 0px 0px 10px">
       
        <proizvod />
        
      </div>    

      <div class="row">
      <proizvod />
    
        </div>
    
    </div>
    
     </div>      
  </div>

  </template>

<script>
import Proizvod from '@/components/Proizvod.vue'
export default {
  name: 'Mobitel',
  components:{
      Proizvod,
    

  }
}
</script>

<style>

.row{
  margin:10px;
}

.col-1-sm{
  
  background-color: #f8f9fa;
  height:750px;
  margin: 0px 10px 0px 0px;
  padding:15px;
  width:300px;

}
.col-7-sm{
  
  background-color: #f8f9fa;
  width:900px;

  }

.col-5-sm{
  margin:10px;
}

  .list-group{
  border-color:lightgray;
  border-style: solid;
  border-width: 1px;
  }

.div1{
  font-size: 20px;
  padding:5px;
  margin:0px 0px 10px 0px;
  background-color: white;
  border-color:lightgray;
  border-style: solid;
  border-width: 1px;
  
  }

.div2{
  font-size: 20px;
  padding:5px;
  border-color:lightgray;
  border-style: solid;
  border-width: 1px;
}

.div3{
  float:right;
  background-color: white;
  border-color:lightgray;
  border-style: solid;
  border-width: 1px;
  width:300px;
  text-align: left;
  
}


</style>