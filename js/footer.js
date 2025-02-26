class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer>
    <img style="display:block;" src="images/logos/tear_footer.jpg" width="100%">
    <div id="footercontent">

      <img src="images/logos/logo_stacked_blue.png" width="80px" style="padding-bottom: 10px;">
      
      <nav id="footertext">
        <ul>
          <li><a href="index.html" class="footerlink">Work</a></li>
          <li ><a href="aboutme.html" class="footerlink">About Me</a></li>
        </ul>
        <a href="https://www.instagram.com/camdyndesign/" target="_blank">
          <div id="social"><div class="footersocialicon" id="instagram"></div>
        </a>
       <a href="mailto: camdyndesign@gmail.com" target="_blank">
         <div class="footersocialicon" id="email"> 
       </div>
      </a> </div>
      </nav>

    <div id="copyright">
      <h5>© 2025 Camdyn Davis Design</h5>
      <h6>designed and coded with care</h6></div>

  </div>
  </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);