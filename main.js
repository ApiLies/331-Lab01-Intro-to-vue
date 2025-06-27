const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(false)
        return {
            product,
            image,
            inStock,
            inventory,
            onSale
        }
    }//Step 4.9 

}).mount('#app')