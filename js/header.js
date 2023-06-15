class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>
      <div id="navbar">
      <a href="index.html">
        <img id="navlogo" style="padding:10px;padding-left:20px" src="images/logos/logo_navy.png" height=50px>
      </a>
      <nav class="nav-collapse">
        <ul>
          <li><a href="work-all.html">Work</a></li>
          <br class="br-on-mobile">
          <li><a href="aboutme.html">About Me</a></li>
          <br class="br-on-mobile">
          <li class="socialnav"><a href="https://www.instagram.com/camdyndesign/" target="_blank">
            <div class="navsocialicon" id="instagram"></div></a></li>
          <li class="socialnav"><a href="mailto: camdyndesign@gmail.com" target="_blank">
            <div class="navsocialicon" id="email"></div></a></li>
        </ul>
      </nav>
    </div>
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);