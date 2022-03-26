fetch('https://apivlavahassane.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
      var RH=document.getElementById('RH');
      var originalcontent=`<div>
      <div class="icon"><i class="joelle"></i></div>
      <h4 class="title"><a href="">Lorem Ipsum</a></h4>
      <p class="description">hassane</p>
    </div>`;
   for(var i=0;i<json.length;i++){
      var Mycontent=document.createElement('div');
      var costumise=originalcontent;
      costumise=costumise.replace("Lorem Ipsum",json[i].title)
      costumise=costumise.replace("hassane",json[i].description)
      costumise=costumise.replace("joelle",json[i].icon)
      Mycontent.className='col-lg-4 col-md-6 icon-box';
      Mycontent.innerHTML=costumise;
      RH.appendChild(Mycontent);
   }
  })