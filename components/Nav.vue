<template>

    
    <header class="dark">
      <nav role="navigation">
        <a href="javascript:void(0);" class="ic menu">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </a>
        <a href="javascript:void(0);" class="ic close"></a>
        <ul class="main-nav">
        </ul> 
      </nav>
      
     
  </header>  

  
</template>

<script>

</script>

<style lang="scss" scoped>



// Nav Hamburger from:
// https://codepen.io/ahsanrathore/pen/wMRwpZ?editors=1100

.ic {
  position: fixed; 
  cursor: pointer;
  display: inline-block;
  right: 25px;
  width: 26px;
  height: 24px;
  text-align: center;
  top:0px;
  outline: none;
}

.ic.close { 
  opacity: 0; 
  font-size: 0px; 
  font-weight: 300; 
  color: #fff;
  top:8px;
  height:40px;
  display: block;
  outline: none;
}

/* Hamburger*/
.ic.menu { top: 25px; z-index : 20; }

.ic.menu .line { 
  height: 2px; 
  width: 100%; 
  display: block; 
  margin-bottom: 6px; 
}
.ic.menu .line-last-child { margin-bottom: 0px;  }

.sub-menu-head { margin: 10px 0; }
.banners-area { margin-top: 20px; padding-top: 15px; }


@media only screen and (max-width:900px) {
  .sub-menu-head { color:orange; }
  .ic.menu { display: block; }
  header.dark .ic.menu .line { background-color: #fff; } 
  header.light .ic.menu .line { background-color: #000; }
  .ic.menu .line {
    transition: all 0.4s ease 0s;
    transform: rotate(0deg);
    transform-origin: center center;
  }
  .ic.menu:focus .line { background-color: #fff !important; }
  
  // Rotate Hamburger
  .ic.menu:focus .line:nth-child(1) {     
    transform: rotate(45deg); 
    margin-top: 6px;
  }
  
  .ic.menu:focus .line:nth-child(2) {
    opacity: 0;
  }

  .ic.menu:focus .line:nth-child(3) { 
    transform: rotate(-45deg); 
    margin-top: -16px;
  }

  .ic.menu:focus{ outline: none; }
  .ic.menu:focus ~ .ic.close { opacity: 1; z-index : 21;  outline: none;  }
  
  .ic.menu:hover, 
  .ic.menu:focus { opacity: 1; }
  

  nav { background-color: transparent; }
  
 /* Slide Out Menu (Main Menu for Handheld Devices)  */
  ul.main-nav {
    z-index:2; 
    padding: 50px 0;
    position: fixed;
    right: 0px;
    top: 0px;
    width: 0px;
    background-color:rgba(0,0,0,1);
    height: 100%;
    overflow: auto;
    /*CSS animation applied : Slide from Right*/
    transition-property: background, width;

    transition-duration: 0.6s;
  }
  
  .ic.menu:focus ~ .main-nav { width: 300px; background-color:rgba(0,0,0,1); }
  
  ul.main-nav > * { 
    transition-property: opacity;
    transition-duration: 0.4s;
    opacity: 0;
  }
  .ic.menu:focus ~ .main-nav > * {opacity: 1;}
  
  ul.main-nav > li > a:after {display: none;}
  ul.main-nav > li:first-child { border-radius: 0px; }
  ul.main-nav > li {
    display: block;
    border-bottom: 1px solid #444;
  }
  
  ul.main-nav > li ul.sub-menu-lists > li a { color: #eee; font-size: 14px; }
  .sub-menu-head { font-size: 16px;}
  ul.main-nav > li:hover { background-color: transparent;  }
  ul.main-nav > li:hover > a {color: #fff; text-decoration: none; font-weight: 600;}
 .ic.menu:focus ~ ul.main-nav > li > div.sub-menu-block {
    border-left: 0px solid #ccc;
    border-right: 0px solid #ccc;
    border-bottom: 0px solid #ccc;
    position: relative;
    visibility: visible;
    opacity: 1.0;
  }
  
  .sub-menu-block { padding: 0 30px; }
  .banners-area { padding-bottom: 0px;  }
  .banners-area div { margin-bottom: 15px;  }
  .banners-area { border-top: 1px solid #444; }
}

@media only screen and (min-width: 900px) {
  .ic.menu { display: none; }
  /* Main Menu for Desktop Devices  */
  ul.main-nav { display: block; position: relative; }
  .sub-menu-block { padding: 15px; }
  
  /* Sub Menu */
  ul.main-nav > li > div.sub-menu-block { 
  visibility: hidden;
  background-color: #f9f9f9;
  position: absolute;
  margin-top: 0px;
  width: 100%;
  color: #333;
  left: 0;
  box-sizing: border-box;
  z-index : 3;
  font-size: 16px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  opacity: 0;
    
  /*CSS animation applied for sub menu : Slide from Top */
  transition: all 0.4s ease 0s;
  transform: rotateX(90deg);
  transform-origin: top center;
  
  }
  
  ul.main-nav > li:hover > div.sub-menu-block{ 
    background-color: #f9f9f9; 
    visibility: visible;
    opacity: 1;
    transform: rotateX(0deg);
  }
  
  ul.main-nav > li > div.sub-menu-block > * {
    transition-property: opacity;
    transition-duration: 0.4s;
    opacity: 0;
  }
  
  ul.main-nav > li:hover > div.sub-menu-block > * {
    opacity: 1;
  }
  
  .sub-menu-head { font-size: 20px;}
  

  
  /* List Separator: Inner Border */
  ul.main-nav > li > a:after {
    content: '';
    width: 1px;
    height: 62px;
    position: absolute;
    right:0px;
    top: 0px;
    z-index : 2;
  }
   
}


</style>
