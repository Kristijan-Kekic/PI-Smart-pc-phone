<template>
<div class="container-md-2">
  <br>
  <h1>Odabir specifikacije za RAM</h1>
  <br>
  <OdabirS />
  
  
  </div>  

</template>

<script>
import OdabirS from '@/components/OdabirS'
export default {
  name: 'RAM',
  components:{
      OdabirS

  }
}
</script>

<style scoped>

.container-md-2{
background-color: #f8f9fa;
margin: 20px 0px 0px 0px;
height:700px;
box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747);
border: 1px solid lightgrey;
}

</style>