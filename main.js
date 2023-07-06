// const product = 'Socks'
const {createApp, ref} = Vue

createApp({
  setup(){
    const product = ref('boots')
    const description = ref('this is a good boots for traveler!')
    return{
      product , description
    }
 }

}).mount('#app')