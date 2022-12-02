class Div extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <style>

      #myBtnContainer{
        text-align: center;
        margin: auto;
        width: 95%;
      }
      
      .filterDiv {
        float: left;
        color: #ffffff;
        width: 48%;
        height: 400px;
        text-align: center;
        display: none;
        align-items: center;
        margin: 0.5vw;
      }
      
      .show {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }
      
      .container {
        overflow: hidden;
        width:80%;
        max-width: 1800px;
        margin:auto;
        margin-top: 5px;
      }
      
      .btn {
        border: none;
        outline: none;
        font-family: poppins, sans-serif;
        font-weight:400;
        font-size: 15px;
        padding: 3px 0px;
        padding-top: 0px;
        margin-right:15px;
        margin-left:15px;
        margin-bottom:10px; */
        letter-spacing: 0.15em;
        color: #2c3843;
        background-color: #ffffff00;
        text-transform: uppercase;
        border-bottom:2px solid #ffffff00;;
      }
      
      .btn:hover {
        text-decoration: none;
        color:#2c3843;
        background-color: #ffffff00;
        border-bottom: 2px solid #2c3843;
        cursor: pointer;
      }
      
      .btn.active {
        text-decoration: none;
        color:#2c3843;
        background-color: #ffffff00;
        border-bottom: 2px solid #2c3843;
      }
      
      
      #portraitofahometown{
        background-image: url(images/projects/thumbnails/portraitofahometown.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
      }
      
      #determinedgreen{
        background-image: url(images/projects/thumbnails/determinedgreen.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
      }
      
      #atlasofemotions{
        background-image: url(images/projects/thumbnails/atlasofemotions.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
      }
      
      #innovationbydesign{
        background-image: url(images/projects/thumbnails/innovationbydesign.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
      }
      
      #mtumcwebsite{
        background-image: url(images/projects/thumbnails/mtumcwebsite.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
      }
      
      #secondfloor{
        background-image: url(images/projects/thumbnails/2ndfloor.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
      }
      
      #stayingathome{
        background-image: url(images/projects/thumbnails/stayingathome.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
      }
      
      #travelo{
        background-image: url(images/projects/thumbnails/travelosocialmedia.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
      }
      
      .overlaytext{
        margin: auto;
        height: 100%;
        width: 100%;
        background-color: #ffffffd5;
        color: #2c3843;
        vertical-align:middle;
        line-height: 1.5;
        opacity: 0;
        display: flex;
        justify-content: center;
        transition-duration: 0.3s;
        transition-timing-function: ease-in;
      }
      
      .verticalcenter{
        margin: auto;
      }
      
      .filterDiv:hover {
        background-color: white;
        transition: 0.5s ease;
      }
      .filterDiv:hover .overlaytext{
        opacity: 1;
      }

      @media (max-width: 800px) {

        .container{
          width: 90%;
        }
      
        .btn{
          font-size: 12px;
          border: none;
          outline: none;
          margin-right:5px;
          margin-left:5px;
          }
      
        .filterDiv { 
          width: 100%;
          height: 50vw;
          margin: 5px;
        }
      
      }
      </style>

      
<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> All Projects</button>
  <button class="btn" onclick="filterSelection('interactive')"> Web Design</button>
  <button class="btn" onclick="filterSelection('branding')"> Branding</button>
  <button class="btn" onclick="filterSelection('book')"> Books</button>
  <button class="btn" onclick="filterSelection('illustration')"> Illustration</button>
</div>

<div class="container">

  <a href="portraitofahometown.html">
  <div class="filterDiv interactive" id="portraitofahometown">
    <div class="overlaytext">
      <div class="verticalcenter">
      <h5>2022</h5>
      <h2>Portrait of a Hometown</h2>
      <h6>web design</h6>
  </div></div></div></a>

  <a href="determinedgreen.html">
  <div class="filterDiv interactive"id="determinedgreen">
    <div class="overlaytext">
      <div class="verticalcenter">
      <h5>2021</h5>
      <h2>Determined Green</h2>
      <h6>app design</h6>
  </div></div></div></a>

  <a href="atlasofemotions.html">
  <div class="filterDiv book illustration"id="atlasofemotions">
    <div class="overlaytext">
      <div class="verticalcenter">
      <h5>2021</h5>
      <h2>Atlas of Emotions</h2>
      <h6>book</h6>
  </div></div></div></a>

  <a href="innovationbydesign.html">
  <div class="filterDiv book"id="innovationbydesign">
    <div class="overlaytext">
      <div class="verticalcenter">
      <h5>2020</h5>
      <h2>Innovation By Design</h2>
      <h6>book</h6>
  </div></div></div></a>

  <a href="mtumcwebsite.html">
    <div class="filterDiv interactive"id="mtumcwebsite">
      <div class="overlaytext">
        <div class="verticalcenter">
        <h5>2021-2022</h5>
        <h2>MTUMC Website</h2>
        <h6>interactive</h6>
    </div></div></div></a>

  <a href="secondfloor.html">
  <div class="filterDiv branding"id="secondfloor">
    <div class="overlaytext">
      <div class="verticalcenter">
      <h5>2021</h5>
      <h2>Selections from the 2nd Floor Exhibition</h2>
      <h6>branding</h6>
  </div></div></div></a>

  <a href="stayingathome.html">
  <div class="filterDiv book illustration"id="stayingathome">
    <div class="overlaytext">
      <div class="verticalcenter">
      <h5>2020</h5>
      <h2>Staying At Home</h2>
      <h6>book</h6>
  </div></div></div></a>

  <a href="travelo.html">
  <div class="filterDiv brandingid="travelo">
    <div class="overlaytext">
      <div class="verticalcenter">
        <h5>2021</h5>
        <h2>Travelo Social Media</h2>
        <h6>branding</h6>
  </div></div></div></a>
</div>

<script>
  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  </script>
      `;
    }
  }
  
  customElements.define('work-component', Div);
