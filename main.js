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
    const details = ref([
      '50% cotton' , '30% wool' , '20% polyester'
    ])
    const variants = ref([
      {id : 2234 , color : 'green'} , {id : 2335 , color: 'blue'}
    ])
    return{
      product , description , image , link , inStock , inventory , details , variants
 }

}).mount('#app')