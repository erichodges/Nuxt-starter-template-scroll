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
            <!-- <input type="checkbox" id="ham-checkbox" @click="show = !show">            -->
            <input type="checkbox" id="ham-checkbox" @click="$store.commit('sidebar/toggle')">
              <label for="ham-checkbox" class="ic menu burger">
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
              </label>

            <!-- <div v-if="sideNavOpen">
            <ul class="main-nav">
            
              <li class="text">yo dude</li>
              <li class="text">dude</li>
              
              <li class="text">yo</li>
              <li class="text">dude</li>
              
              <li class="text">yo</li>
              <li class="text">dude</li>
              <ul class="dimmer"></ul>  
            </ul>             
            </div> -->

          </li>
          <transition name="sidenav-fade">
            <div class="sidenav" v-if="$store.state.sidebar.opened">
              <ul>
                <li class="sidenav-li">
                  Products
                </li>
              </ul>
            </div>
          </transition>

          <li class="nav-spacer-right"> </li>
        </ul>
      </nav>
    </header>
  </vue-headroom>
  
</template>

<script>
  // export default {
  //   data() {
  //     return {
  //       sideNavOpen: false
  //     }
  //   },

  //   methods: {
  //     toggle () {
  //       this.sideNavOpen = !this.sideNavOpen;
  //     }
  //   }
  // }
  

</script>

<style lang="scss" scoped>
.sidenav-li {
  color: #fff;
}

#ham-checkbox {
  cursor: pointer;
  display: none;
  visibility: hidden;
}

#ham-checkbox:checked ~ .burger .line-1 {
  transform: rotate(45deg); 
  margin-top: 6px;
}

#ham-checkbox:checked ~ .burger .line-2 {
  opacity: 0;
}

#ham-checkbox:checked ~ .burger .line-3 {
  transform: rotate(-45deg); 
  margin-top: -16px;
}


.burger {
  z-index: 20;
}

.sidenav {  
  position: fixed;  
  top: 0px;
  right: 1rem;
  height: 50rem;
  background: black;
  width: 30rem;
  z-index: -10;
}

.sidenav-fade-enter {
  opacity: 0;
}

.sidenav-fade-enter-active {
  transition: opacity .4s;
}

.sidenav-fade-leave-active {
  transition: opacity .4s;
  opacity: 0;
}

.lock {
  overflow: hidden;
}

.page-wrap {
  height: 100vh;
}

.page {
  height: 2000px;
  
  &:first-of-type {
    background: blue;
  }
  
  &:nth-of-type(2) {
    background: red;
  }
  
  &:nth-of-type(3) {
    background: green;
  }
}



button {
  position: fixed;
  top: 16px;
  right: 16px;
}


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
  height: 3.25rem;

  margin-left: 2.5rem;  
}

.nav-spacer-right {
  padding-right: 4rem;
  height: 1rem;
}


// .nav-chevron {
  
//   &:hover {
//     fill: #fff;
//   }
// }

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
  
 }


nav > ul > li > a {
    text-decoration: none;
  }

nav > ul > li:hover {
  background-color: transparent;
}

// nav > ul > li:hover > a {
//   color: rgb( 255, 255, 255 );
// }

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

//This was causing the sidenav to show on hover
//  nav > ul > li:hover > div {
//   display: block;
//   opacity: 1;
//   visibility: visible;

  
// }

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

// .sub-menu-head { margin: 10px 0; }
// .banners-area { margin-top: 20px; padding-top: 15px; }


@media only screen and (max-width:900px) {
  
  // .sub-menu-head { color:orange; }
  .ic.menu { 
    display: block;
    
  }

  //Controls for Dark/Light theme of Hamburger
  header.dark .ic.menu .line { background-color: #fff; } 
  header.light .line { background-color: #000; }

  .ic.menu .line {
    
    transition: 0.4s ease 0s;    
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
  .ic.menu:focus ~ .ic.close { 
    opacity: 1; 
    z-index : 21;  
    outline: none;      
  }
  
  // .ic.menu:hover, 
  // .ic.menu:focus { opacity: 1; }
  

  nav { background-color: transparent; }
  
  ul.dimmer {
      height: 100vh;
      width: 100vw;
      background-color: rgba($color-black, .6);
      position: fixed;
      top: 0;
      left: 0;
      z-index: -100;
   }
}

// .ham_menu {
//   position: fixed;
//   top: 0;
//   right: 0;
//   height: 40rem;
//   background: black;
//   width: 30rem;
//   z-index: 10;
// }

</style>
