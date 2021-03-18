<template>
<div class="container-md-2">
  <br>
  <h1>Odabir specifikacije za CPU</h1>
  <br>
  <OdabirS />
  
</div>  
</template>

<script>
import OdabirS from '@/components/OdabirS'
export default {
  name: 'CPU',
  components:{
      OdabirS

  }
}
</script>

<style>

.container-md-2{
background-color:white;
margin: 20px 0px 0px 0px;
height:700px;
border-color:black;
border-style:solid;
}



</style>