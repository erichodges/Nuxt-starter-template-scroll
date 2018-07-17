<template>
  <vue-headroom>
    <header class="dark">
      <nav role="navigation">
        <ul class="ul-nav">
          <li class="li-logo">
            <img src="~/assets/images/bulma-logo.png" alt=" Logo" class="logo">
          </li>
          <li class="li-user-nav">
            <a class="a" href="#" v-scroll-to="'#section-2'">Products</a>
            <div>
              <ul>
                <li><a href="#">widget 1</a></li>
                <li><a href="#">widget 2</a></li>
                <li><a href="#">widget 3</a></li>
              
              </ul>
            </div>
          </li>

          <li class="li-user-nav">
            <a class="a" href="#" v-scroll-to="'#section-3'">
            About</a>
          </li>

          <li class="li-user-nav">
            <a class="a" href="#" v-scroll-to="'#section-4'">
            Contact</a>
          </li>  
          <li>
            <a href="javascript:void(0);" class="ic menu">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </a>
            <a href="javascript:void(0);" class="ic close"></a>
            <ul class="main-nav">
              <li class="text">yo dude</li>
              <li class="text">dude</li>
              
              <li class="text">yo</li>
              <li class="text">dude</li>
              
              <li class="text">yo</li>
              <li class="text">dude</li>
              
            </ul>           
          </li>
          
          <li class="nav-spacer-right"> </li>
        </ul>
      </nav>
    </header>
  </vue-headroom>
</template>

<script>

</script>

<style lang="scss" scoped>
.text {
  font-size: 2rem;
  color: #fff;
  padding-left: 1.5rem;
}
nav {
  overflow: hidden;
  display: block;  
}

.ul-nav {
  display: flex;
  padding: 0;
  list-style: none;
  align-items: center;
  justify-content: space-between;
}

.li-logo {
  margin-right: auto;
  
}

.a {
  // text-decoration-line: unset;
  text-decoration-line: none;
  
}

.logo-box {
  display: flex;
  // justify-content: flex-start;
  align-items: center;

}

.logo {
  // height: 3.25rem;
  width: 18%;
  height: 18%;
  
  margin-left: 2.5rem;  
}

.nav-spacer-right {
  padding-right: 4rem;
  height: 1rem;
}


.nav-chevron {
  
  &:hover {
    fill: #fff;
  }
}

nav ul {
  margin: 0;
  padding: 0;

  list-style-type: none;
  // transition: 0.2s;
  
}

.li-user-nav {
  font-family: Roboto, sans-serif; 
  color: rgb(192, 190, 190);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;  
  padding: 2rem;
  text-decoration: none;
  text-decoration-line: none;

   @media only screen and (max-width: 56.25em) {
     visibility: hidden;    
   } 
}

nav ul li {
  display: inline-block;
  list-style-type: none;
  
  // transition: all 0.2s; 
 }

nav > ul > li > a > .caret {
  border-top: 4px solid $color-grey-light-1;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  content: "";
  display: inline-block;
  height: 0;
  width: 0;
  vertical-align: middle;

  -webkit-transition: color 0.1s linear;
  -moz-transition: color 0.1s linear;
  -o-transition: color 0.1s linear;
    transition: color 0.1s linear; 
}

nav > ul > li > a {
    text-decoration: none;
  }

nav > ul > li:hover {
  background-color: transparent;
}

nav > ul > li:hover > a {
  color: rgb( 255, 255, 255 );
}

nav > ul > li:hover > a > .caret {
  border-top-color: rgb( 255, 255, 255 );
}

nav > ul > li > div {
  background-color: transparent;
  border-top: 0;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.055);
  display: none;
  margin: 0;
  opacity: 0;
  position: absolute;
  width: 165px;
  visibility: hidden;
  transition: opacity 0.2s;

  padding-top: 1rem;
}

 nav > ul > li:hover > div {
  display: block;
  opacity: 1;
  visibility: visible;

  
}

nav > ul > li > div ul > li {
  display: block;
  padding-left: .5rem;
  padding-bottom: 1rem;
  font-weight: 300;
}

nav > ul > li > div ul > li > a {
  color: $color-grey-light-1;
  display: block;
  
  text-decoration: none;

  
}

nav > ul > li > div ul > li:hover > a {
  color: #fff;
}

.a {
  color: $color-grey-light-1;

  > nav-chevron:hover {
    fill: #fff
  }
}

//////////////////////
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
.ic.menu { top: 2rem; z-index : 20; }

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
    // transition: 0.4s ease 0s;
    // transform: rotate(0deg);
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
    height: 100vh;
  }
  
  .ic.menu:focus ~ .main-nav { 
    width: 300px; background-color:rgba(0,0,0,1);
    height: 100vh;

  }
  
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
  
  // .sub-menu-block { padding: 0 30px; }
  // .banners-area { padding-bottom: 0px;  }
  // .banners-area div { margin-bottom: 15px;  }
  // .banners-area { border-top: 1px solid #444; }
}

@media only screen and (min-width: 900px) {
  .main-nav {
    visibility: hidden;
    width: 0;
    height: 0;
  }
}


// @media only screen and (min-width: 900px) {
//   .ic.menu { display: none; }
//   /* Main Menu for Desktop Devices  */
//   ul.main-nav { display: block; position: relative; }
//   .sub-menu-block { padding: 15px; }
  
//   /* Sub Menu */
//   ul.main-nav > li > div.sub-menu-block { 
//   visibility: hidden;
//   background-color: #f9f9f9;
//   position: absolute;
//   margin-top: 0px;
//   width: 100%;
//   color: #333;
//   left: 0;
//   box-sizing: border-box;
//   z-index : 3;
//   font-size: 16px;
//   border-left: 1px solid #ccc;
//   border-right: 1px solid #ccc;
//   border-bottom: 1px solid #ccc;
//   opacity: 0;
    
//   /*CSS animation applied for sub menu : Slide from Top */
//   transition: all 0.4s ease 0s;
//   transform: rotateX(90deg);
//   transform-origin: top center;
  
//   }
  
//   ul.main-nav > li:hover > div.sub-menu-block{ 
//     background-color: #f9f9f9; 
//     visibility: visible;
//     opacity: 1;
//     transform: rotateX(0deg);
//   }
  
//   ul.main-nav > li > div.sub-menu-block > * {
//     transition-property: opacity;
//     transition-duration: 0.4s;
//     opacity: 0;
//   }
  
//   ul.main-nav > li:hover > div.sub-menu-block > * {
//     opacity: 1;
//   }
  
//   .sub-menu-head { font-size: 20px;}
  

  
//   /* List Separator: Inner Border */
//   ul.main-nav > li > a:after {
//     content: '';
//     width: 1px;
//     height: 62px;
//     position: absolute;
//     right:0px;
//     top: 0px;
//     z-index : 2;
//   }
   
// }


// //////////////////
// // OLD HAMBURGER

// .hamburger {
//    cursor: pointer;
//    padding: 0rem;
//    visibility: hidden;
//    width: 0;
//    height: 0;

//   &__checkbox {
//     display: none;
//   }

//   &__icon {
//     position: relative;
    
//     margin-top: 1rem;
    
//     &,
//     &::before,
//     &::after {
//       width: 2.5rem;
//       height: 2px;
//       background-color: #fff;
//       display: inline-block;
//     }

//     &::before,
//     &::after {
//       content: "";
       
//       position: absolute;
//       left: 0;
//       transition: all .3s;
//     }

//     &::before { top: -.8rem; }
//     &::after { bottom: -.8rem; }

//   }
//     &__button {
//       cursor: pointer;
//     }

//   &__checkbox:checked + &__button &__icon {
//     background-color: transparent;
//   }

//   &__checkbox:checked + &__button &__icon::before {
//     top: 0;
//     transform: rotate(45deg);
//   }  

//   &__checkbox:checked + &__button &__icon::after {
//     top: 0;
//     transform: rotate(-45deg);
//   } 
  
//   @media only screen and (max-width: 900px) { 
//     visibility: visible;
//     width: 2.5rem;
//     height: 2.5rem;

//   }

// }

</style>
