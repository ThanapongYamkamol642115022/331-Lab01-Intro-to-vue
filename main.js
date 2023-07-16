// const product = 'Socks'
const {createApp, ref, computed } = Vue

createApp({
  setup(){
    const product = ref('boots')
    const brand = ref('SE 331')
    // const description = ref('this is a good boots for traveler!')
    // const image = ref('./assets/images/socks_green.jpg')
    const link = ref("https://www.camt.cmu.ac.th/");
    // const inStock = ref(true)
    const inventory = ref(100)
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
      { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0 }
    ]);
    const selectVariant = ref(0)
    const sizes = ref([
      { id: 1, size: "S" },
      { id: 2, size: "M" },
      { id: 3, size: "L" },
    ]);
    const cart = ref(0)
    function addToCart(){
      cart.value +=1
    }

    const title = computed(() =>{
      return brand.value + ' ' + product.value
    })
    function updateImage(variantImage){
      image.value = variantImage
    }
    
    function changeInStock(){
      inStock.value = !inStock.value;
    }

    function updateVariant(index){
      selectVariant.value = index;
    }

    const image = computed(() =>{
      return variants.value[selectVariant.value].image
    })

    const inStock = computed(() =>{
      return variants.value[selectVariant.value].quantity
    })

    return{
      // product , 
      image , 
      link , 
      inStock , 
      inventory , 
      details , 
      variants , 
      sizes , 
      cart , 
      addToCart , 
      updateImage , 
      changeInStock ,
      title
      // brand
    }
 }

}).mount('#app')