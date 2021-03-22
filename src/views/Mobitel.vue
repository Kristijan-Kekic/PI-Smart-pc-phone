<template>
  <div class="container">
    <div class="row">
    <div class="col">Filter
    <ul class="list-group">
  <li class="list-group-item">Preference</li>
  <li class="list-group-item">Kamera</li>
  <li class="list-group-item">Performance</li>
  <li class="list-group-item">Cijena</li>
  <li class="list-group-item">Baterija</li>
  <li class="list-group-item">Ekran</li>
</ul>
    
    

    </div>
    
    <div class="col-7">
    <div class="box">Samsung</div>
    <div class="box">iPhone</div>
    <div class="box">Huawei</div>
    <div class="box">Samsung</div>
    <div class="box">Huawei</div>
    
    
    </div>
    

    
    </div>      
  </div>

  </template>

<script>
  function filterObjekt(c){
    var x,i;
    x=document.getElementByClassName("box");
    if(c=="sve") c=="";
    for(i=0; i < x.length; i++){
      removeClass(x[i], "prikazi");
      if(x[i].className.indexOf(c) > -1) dodajObjekt(x[i], "prikazi")
    }
  }

function dodajObjekt(element, ime){
  var i, polje1, polje2;
  polje1 = element.className.split(" ");
  polje2 = name.split(" ");
  for(i=0; i<polje2.length; i++){
    if(polje1.indexOf(polje2[i]) == -1){
      element.className == " " + polje2[i];
    }
  }
}

function makniObjekt(element, ime){
  var i, polje1, polje2;
  polje1 = element.className.split(" ");
  polje2 = name.split(" ");
  for(i=0; i<polje2.length; i++){
    while(polje1.indexOf(polje2[i]) > -1){
      polje1.splice(polje1.indexOf(polje2[i]),1);
    }
    }
  element.className = polje1.join(" ");
  }




</script>

<style>

.box{
  margin: 10px;
  width:150px;
  height:100px;
  border-style:solid;
}

.col{
  border-style:solid;
  height:750px;
  
}
.col-7{
  border-style:solid;
  width:900px;

  }


</style>