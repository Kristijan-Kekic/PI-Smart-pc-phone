<template>
  <div class="container-fluid">
    
    <br>

    <div class="row">
    
    <div class="col-lg-3">
        <p class="natrag-m"><router-link class="rl" to="/" >Natrag</router-link></p>
    </div>  

        <div class="col-lg-9">
       

          <div class="s-prema">
           <select class="form-select" aria-label="Default select example">
              <option selected>Sortiraj prema:</option>
              <option value="1">Uzlazno</option>
              <option value="2">Silazno</option>
            
            </select>
          </div>



      </div>
    </div>
    
    <div class="row">
          <div class="col-lg-3">
             <div class="filter">Filter</div>
                <ul class="list-group">
                  <li class="list-group-item">Preference</li>
                  <li class="list-group-item">Kamera</li>
                  <li class="list-group-item">Performance</li>
                  <li class="list-group-item">Cijena</li>
                  <li class="list-group-item">Baterija</li>
                  <li class="list-group-item">Ekran</li>
                </ul>
          
          

          </div>
          
          <div class="col-lg-9">
              <div class="row">
                <div class="col-lg"> 

                  <proizvod />
                  <br>
                  <proizvod />     

                </div>

                <div class="col-lg">
                
                <proizvod />
                <br>
                <proizvod />            
                
                </div>
                
                <div class="col-lg">

                <proizvod /> 
                <br>
                <proizvod />    

                </div>

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


.col-lg{
  
  background-color: #f8f9fa;
  height : 800px;
  
  

  }

.col-lg-3{
  
  background-color: #f8f9fa;
  border: solid aqua;
  border-width: 0px 7px 0px;
  padding:15px;
}


.col-lg-9{
  
  border:solid aqua;
  border-width: 0px 7px 0px;
  background-color: #f8f9fa;
  padding:15px;


  }

 .list-group{
  border-color:lightgray;
  border-style: solid;
  border-width: 1px;
  }


.filter{
  background-color: white;
  border-color:lightgray;
  border-style: solid;
  border-width: 1px;
}  

.natrag-m{
  font-size: 20px;
  background-color: white;
  border-color:lightgray;
  border-style: solid;
  border-width: 1px;
  width:200px;
  margin:auto;
    
  }

.s-prema{
  
  background-color: white;
  border-color:lightgray;
  border-style: solid;
  border-width: 1px;
  width:150px;
  text-align: left;
  margin:auto;
}


</style>