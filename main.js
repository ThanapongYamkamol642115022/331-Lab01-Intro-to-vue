// const product = 'Socks'
const {createApp, ref} = Vue

createApp({
  setup(){
    const product = ref('socks')
    return{
      product
    }
 }

}).mount('#app')