<template>
  <div class="container-fluid py-4">
    
    <div class="row justify-content-center">
      <div class="col-lg-2" style="box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747); background-color: #f8f9fa; border-width: 0px 3px 0px; padding:15px; margin-right:5px;">
        <div class="row">
             
              <div class="col-lg-3">
              <Natrag />
              </div>  
         </div>


            <div class="row">
              <div class="col-lg-12">
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

            </div>

      </div>

    <div class="col-lg-9" style="box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747); border-width: 0px 3px 0px; background-color: #f8f9fa; margin-left:5px;">

            <div class="row">
            
            <div class="col-lg-12">
          
            <div class="row">
                  <div class="col-lg" style="margin-left:45px;">
                  <p class="naslov">Mobiteli na raspolaganju</p>    
                  </div>

                    <div class="col-lg"></div>

                    <div class="col-lg" style="margin-right:50px;">
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

              <div class="col-lg-12" style="margin-bottom:15px;">
                  <div class="row justify-content-center">
                   

                      <proizvod />
                      <proizvod />
                      <proizvod />
                      <proizvod />
                      
                      
                  </div>  

                  <div class="row justify-content-center">
          
                   

                      <proizvod />
                      <proizvod />
                      <proizvod />
                      <proizvod />
                      
                          

                    </div>

                  <div class="row justify-content-center">
                   

                      <proizvod />
                      <proizvod />
                      <proizvod />
                      <proizvod />
                      
                      
                  </div>  

              </div>   

              </div>

          

    </div>

  </div>

</div>      
  
  

  

  </template>

<script>
import Proizvod from '@/components/Proizvod.vue'
import Natrag from '@/components/Natrag.vue'
export default {
  name: 'Mobitel',
  components:{
      Proizvod,
      Natrag,
  },
  methods:{

    


  }
}
    
</script>

<style scoped src="@/assets/css/Mobiteli.css"></style>