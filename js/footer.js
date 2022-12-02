class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer>
  <div id="footerlogo">
    <a href="index.html">
    <img  src="images/logos/logo_stacked_white.png" width=150px> 
  </a>
  </div>
  <div id="footercolor">
  <div id="footerbar">
  <nav id="footertext">
    <ul>
      <li><a href="work.html" class="footerlink">Work</a></li>
      <li ><a href="aboutme.html" class="footerlink">About Me</a></li>
    </ul>
    <br>
    <a href="https://www.instagram.com/camdyndesign/" target="_blank">
      <div id="social"><div class="footersocialicon" id="instagram"></div>
    </a>
   <a href="mailto: camdyndesign@gmail.com" target="_blank">
     <div class="footersocialicon" id="email"> 
   </div>
  </a> </div>
  </nav>
</div>
</div>
<div id="copyright">© 2022 CAMDYN DAVIS</div>
</footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
