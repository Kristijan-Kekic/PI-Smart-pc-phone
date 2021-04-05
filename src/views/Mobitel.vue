<template>
  <div class="container-fluid">
    
   <br> 

    <div class="row">
    
          <div class="col-lg-3">
              <p class="natrag-m"><router-link class="rl" to="/"><img src="../assets/ikone/arrow-left.svg" width="20" height="20" style="margin-bottom:5px;"> Natrag</router-link></p>
          </div>  

        

              <div class="col-lg-9">
          
            <div class="row">
                  <div class="col-lg">
                  <p class="naslov">Mobiteli na raspolaganju</p>    
                  </div>

                    <div class="col-lg"></div>

                    <div class="col-lg">
                    <div class="s-prema">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Sortiraj prema:</option>
                        <option value="1">Uzlazno</option>
                        <option value="2">Silazno</option>
                      
                      </select>
                    </div>
                    </div>
              </div>


            </div>
    </div>
    
    <div class="row">
              <div class="col-lg-3">
                  <div class="row"> 
                                  
                    <ul class="col-lg-1">
                        <li class="list-group-item">Filter</li>
                        <li><label for="preference">Preference</label><input type="checkbox" id="preference">
                          <ul class="podlista">
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">2</li>
                            <li class="list-group-item">3</li>
                          </ul>
                        </li>

                        <li><label for="kamera">Kamera</label><input type="checkbox" id="kamera">
                          <ul class="podlista">
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">2</li>
                            <li class="list-group-item">3</li>
                          </ul>
                        </li>

                        <li><label for="performance">Performance</label><input type="checkbox" id="performance">
                          <ul class="podlista">
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">2</li>
                            <li class="list-group-item">3</li>
                          </ul>
                        </li>
                      
                        <li><label for="cijena">Cijena</label><input type="checkbox" id="cijena">
                          <ul class="podlista">
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">2</li>
                            <li class="list-group-item">3</li>
                          </ul>
                        </li>

                        <li><label for="baterija">Baterija</label><input type="checkbox" id="baterija">
                          <ul class="podlista">
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">2</li>
                            <li class="list-group-item">3</li>
                          </ul>
                        </li>

                        <li><label for="ekran">Ekran</label><input type="checkbox" id="ekran">
                          <ul class="podlista">
                            <li class="list-group-item">1</li>
                            <li class="list-group-item">2</li>
                            <li class="list-group-item">3</li>
                          </ul>
                        </li>

                      </ul>
                  </div>  
              


              </div>
              



              <div class="col-lg-9">
                  <div class="row justify-content-center">
                    <div class="col-lg-6"> 

                      <proizvod />
                      <proizvod />
                          

                    </div>

                  <div class="col-lg-6"> 

                      <proizvod />
                      <proizvod />
                          

                    </div>

                

                  </div>  

                  <div class="row justify-content-center">
          
                    <div class="col-lg-6"> 

                      <proizvod />
                      <proizvod />
                          

                    </div>

                <div class="col-lg-6"> 

                      <proizvod />
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

<style scoped src="@/assets/css/Mobiteli.css"></style>