<template>
  <div class="home">
      <logo />
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8"></div>
        </div>
  </div>

  </template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  name: 'pregled-PC',
  components: {
    Logo,
  },
};
</script>

<style>
.col-sm-2{
  border-style:solid;
  height:500px;
}
.col-sm-8{
   border-style:solid;
}

</style>