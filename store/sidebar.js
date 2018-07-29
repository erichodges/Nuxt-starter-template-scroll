export const state = () => ({
  opened: false
});

export const mutations = {
  toggle(state) { state.opened = !state.opened}
}

export const actions = {
  toggle({state, commit}) {
    if(state.opened){
      document.getElementsByTagName("html")[0].setAttribute('style', 'overflow-y: hidden !important');  
      
    }else{
      document.getElementsByTagName("html")[0].style.overflowY = "";
      
      }
    }
}

// console.log(state.opened);

// export const actions = {
//   toggle({state, commit}) {
//     if(state.opened){
//       document.getElementsByTagName("html")[0].setAttribute('style', 'overflow-y: hidden !important');      
      
//     }else{
//       document.getElementsByTagName("html")[0].style.overflowY = "";
      
//       }
//     }
// }