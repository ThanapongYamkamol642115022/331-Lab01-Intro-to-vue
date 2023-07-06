// const product = 'Socks'
const {createApp, ref} = Vue

createApp({
  setup(){
    const product = ref('boots')
    const description = ref('this is a good boots for traveler!')
    const image = ref('./assets/images/socks_green.jpg')
    const link = ref("https://www.camt.cmu.ac.th/");
    const inStock = ref(true)
    const inventory = ref(100)
    return{
      product , description , image , link , inStock , inventory
    }
 }

}).mount('#app')