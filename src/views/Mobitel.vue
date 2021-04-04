<template>
  <div class="container-fluid">
    
   <br> 

    <div class="row">
    
    <div class="col-lg-3">
        <p class="natrag-m"><router-link class="rl" to="/" >Natrag</router-link></p>
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

<style>

/* Grid */

.col-lg-1{
  
  background-color: #f8f9fa;
  margin:auto;
  width:420px;
  height:282px;
  
  }

.col-lg-6{
  
  background-color: #f8f9fa;
  padding:0px;
  margin-bottom: 12px;
  width:650px;
  }

.col-lg-3{
  
  background-color: #f8f9fa;
  border: solid aqua;
  border-width: 0px 3px 0px;
  padding:15px;
}


.col-lg-9{
  
  border:solid aqua;
  border-width: 0px 3px 0px;
  background-color: #f8f9fa;
  padding:15px;
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

.naslov{
  
  background-color: white;
  border-color:lightgray;
  border-style: solid;
  border-width: 1px;
  width:300px;
  padding:5px;
  margin:auto;
  float:left;
  margin-left:35px;
  margin-top:10px;
  }


.s-prema{
  
  background-color: white;
  border-color:lightgray;
  border-style: solid;
  border-width: 1px;
  width:150px;
  margin:auto;
  float:right;
  margin-right:40px;
  margin-top:10px;
  }

/* Filter */

/* reset our lists to remove bullet points and padding */

.col-lg-1,
.podlista {
  list-style: none;
  padding: 0px;
  margin: auto;
  width:400px;
  
}


/* make ALL links (main and submenu) have padding and background color */


.col-lg-1 label {
  display: block;
  background-color: white;
  border-color:lightgray;
  border-style: solid;
  border-width: 1px;
  text-decoration: none;
  padding: 10px;
  color: #000;
  
}

.col-lg-1 input {
  display: none;
}


/* add hover behaviour */

.col-lg-1 li:hover {
  background-color: #C5C5C5;
  
}


.col-lg-1 :checked+.podlista {
  display: block;
  max-height: 200px;
  
}

.podlista li:hover {
  background-color: rgb(143, 208, 228);
  
}


.podlista {
  overflow: hidden;
  max-height: 0;
  transition-property: height;
  width:auto;
}





</style>