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
border-color:#f8f9fa;
  border-style: solid;
  border-width: 1px;
}

</style>