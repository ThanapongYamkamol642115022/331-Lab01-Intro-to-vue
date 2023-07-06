// const product = 'Socks'
const {createApp, ref} = Vue

createApp({
  setup(){
    const product = ref('boots')
    const description = ref('this is a good boots for traveler!')
    const image = ref('./assets/images/socks_green.jpg')
    return{
      product , description , image
    }
 }

}).mount('#app')