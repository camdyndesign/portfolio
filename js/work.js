class Div extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <style>
      
      #btnContainer{
        text-align: center;
        margin: auto;
        max-width: 95%;
      }
      
      button {
        border: none;
        outline: none;
        font-family: poppins, sans-serif;
        font-weight:400;
        font-size: 15px;
        padding: 3px 0px;
        padding-top: 0px;
        margin-right:15px;
        margin-left:15px;
        margin-bottom:10px;
        letter-spacing: 0.15em;
        color: #2c3843;
        background-color: #ffffff00;
        text-transform: uppercase;
        border-bottom:2px solid #ffffff00;
      }
      
      button:hover {
        text-decoration: none;
        color:#2c3843;
        background-color: #ffffff00;
        border-bottom: 2px solid #2c3843;
        cursor: pointer;
      }
      
      button.active {
        text-decoration: none;
        color:#2c3843;
        background-color: #ffffff00;
        border-bottom: 2px solid #2c3843;
      }
      
      .grid-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 20px;
        overflow: hidden;
        width:80%;
        max-width: 1800px;
        margin: auto;
        margin-top: 10px;
      }
      
      .filterDiv {
        color: #2c3843;
        text-align: center;
        align-items: center;
        /* margin: 0.5vw; */
      }
      
      #image{
        aspect-ratio: 16/9;
        overflow: hidden;
      }
      
      .filterDiv img{
        text-align: center;
        margin: auto;
        margin-top: 0px;
        margin-bottom: 0px;
        width: 100%;
        object-fit: cover;
        display: inline-block;
      }
      
      .filterDiv:hover img{
        transform: scale(1.1);
        transition: 0.5s ease;
      }
      
      .filtertext{
        text-align: left;
        padding:20px 0px 10px;
        height: max-content;
        overflow: hidden;
      }
      
      @media (max-width: 800px) {
      
      .grid-wrapper{
        width: 90%;
        grid-template-columns: 1fr;
      }
      
      button{
        font-size: 12px;
        outline: none;
        margin-right:5px;
        margin-left:5px;
        padding-bottom: 3px;
        border-bottom:2px solid #ffffff00;
        }
      
      }
      </style>

  <div id="btnContainer">
    <button id="all">All</button>
    <button id="web">Web Design</button>
    <button id="branding">Branding</button>
    <button id="print">Print</button>
    <button id="animation">Animation</button>
</div>
  
<div class="container"  id="grid-container">

<div class="row">

        <div class="grid-wrapper">
                <div class="grid-item all branding web">
                  <a href="partyofone.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects8.jpg"></div>
                      <div class="filtertext">
                        <h2>Party of One Meal Kit</h2>
                        <h6>Brand identity and website for a start up meal kit delivery service.</h6>
                      </div></div>
                  </a>
                </div>

                <div class="grid-item all web">
                  <a href="portraitofahometown.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects9.jpg"></div>
                      <div class="filtertext">
                        <h2>Portrait of a Hometown</h2>
                        <h6>A website exploring narratives of my hometown of Winston&#8209;Salem, North Carolina.</h6>
                      </div></div>
                  </a>
                </div>

                <div class="grid-item all animation">
                  <a href="bookmark.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects3.jpg"></div>
                      <div class="filtertext">
                        <h2>How to Use a Bookmark</h2>
                        <h6>An animated video about the importance of using a bookmark.</h6>
                      </div></div>
                  </a>
                </div>

                <div class="grid-item all branding">
                  <a href="secondfloor.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects.jpg"></div>
                      <div class="filtertext">
                        <h2>Selections from the 2nd Floor</h2>
                        <h6>Branding proposal exploring a playful and fun approach to an exhibition</h6>
                      </div></div>
                  </a>
                </div>

                <div class="grid-item all branding">
                  <a href="wiredmountain.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects13.jpg"></div>
                      <div class="filtertext">
                        <h2>Wired Mountain Electrical Services</h2>
                        <h6>A brand identity for an electrician that provides sustainable electrical repairs, retrofits, and maintenance.</h6>
                      </div></div>
                  </a>
                </div>

                <div class="grid-item all web">
                  <a href="determinedgreen.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects4.jpg"></div>
                      <div class="filtertext">
                        <h2>Determined Green</h2>
                        <h6>App design that promotes energy conservation.</h6>
                      </div></div>
                  </a>
                </div>
              
                <div class="grid-item all print">
                  <a href="stayingathome.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects10.jpg"></div>
                      <div class="filtertext">
                        <h2>Staying At Home</h2>
                        <h6>A zine based on entries gathered at the beginning of the 2020 COVID-19 Pandemic.</h6>
                      </div></div>
                  </a>
                </div>

                <div class="grid-item all branding">
                  <a href="tjdeli.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects11.jpg"></div>
                      <div class="filtertext">
                        <h2>TJ's Deli</h2>
                        <h6>A concept brand identity for a deli and grill in Winston&#8209;Salem, North Carolina.</h6>
                      </div></div>
                  </a>
                </div>

                <div class="grid-item all print">
                  <a href="innovationbydesign.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects5.jpg"></div>
                      <div class="filtertext">
                        <h2>Innovation By Design</h2>
                        <h6>Book based on articles from Fast Company's Innovation By Design Category.</h6>
                      </div></div>
                  </a>
                </div>
                
                <div class="grid-item all web">
                  <a href="mtumcwebsite.html">
                    <div class="filterDiv">
                      <div>
                      <div id="image"><img src="images/thumbnails/projects7.jpg"></div>
                      <div class="filtertext">
                        <h2>MTUMC Website</h2>
                        <h6>A redesign of Mount Tabor United Methodist Church's website.</h6>
                      </div></div>
                    </div>
                  </a>
                </div>
                
                <div class="grid-item all branding">
                  <a href="travelo.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects12.jpg"></div>
                      <div class="filtertext">
                        <h2>Travelo</h2>
                        <h6> A brand identity and social media graphics for a travel company that caters towards friend groups.</h6>
                      </div></div>
                  </a>
                </div>

                <div class="grid-item all animation">
                  <a href="kinetictype.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects6.jpg"></div>
                      <div class="filtertext">
                        <h2>On the Steps of the FBI</h2>
                        <h6>An animation based on a scene from Season 4, Episode 12 of Criminal Minds.</h6>
                      </div></div>
                  </a>
                </div>

                <div class="grid-item all print">
                  <a href="atlasofemotions.html">
                    <div class="filterDiv">
                      <div id="image"><img src="images/thumbnails/projects2.jpg"></div>
                      <div class="filtertext">
                        <h2>Atlas of Emotions</h2>
                        <h6>A book exploring six emotions and the categorization of emotional intensity.</h6>
                      </div></div>
                  </a>
                </div>

            </div>

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
    $( document ).ready(function() {

$('#all').on("click", function() {
     $('.grid-item').show();
 });

$('#web').on("click", function() {
      $('.grid-item').hide();
      $('.web').show();
 });

 $('#branding').on("click", function() {
      $('.grid-item').hide();
      $('.branding').show();
 });

 $('#print').on("click", function() {
      $('.grid-item').hide();
      $('.print').show();
 });

 $('#animation').on("click", function() {
      $('.grid-item').hide();
      $('.animation').show();
 });

});


  </script>

      `;
    }
  }
  
  customElements.define('work-component', Div);
