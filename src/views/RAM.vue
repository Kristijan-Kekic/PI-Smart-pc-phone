<template>
<div class="container-fluid py-4">
    <div class="row justify-content-center">
          <div class="col-lg-10">
           
            <div class="col-lg-5">
              <h2>Odabir specifikacije za RAM</h2>
              </div>
          
            <div class="col-lg-6">
              
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>Odaberi</option>
                </select>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>Odaberi</option>
                </select>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>Odaberi</option>
                </select> 
              
                <button class="button" type="button">Potvrda odabira</button>
            <br>
            <Natrag />
            <div>Trebas pomoć?</div>      
            
            </div>
    
       

        </div>
    </div>
  
  </div>  

</template>

<script>
import Natrag from '@/components/Natrag.vue'
export default {
  name: 'RAM',
  components:{
      Natrag
  }
}
</script>

<style scoped>

.col-lg-5{


margin:auto;
padding:15px;
}

.col-lg-6{
background-color:rgb(114, 218, 236);
box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747);
padding:50px;
margin:auto;
border: 1px solid lightgrey;
margin-bottom: 100px;
margin-top: 20px;
}

.col-lg-10{
  background-color: #f8f9fa;

box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747);
border: 1px solid lightgrey;
}

.button {
 background-color:rgb(36, 114, 160);
  border-color:rgb(55, 144, 196) ;
  color: #FFFFFF;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 250px;
  margin: 5px;
}

</style>