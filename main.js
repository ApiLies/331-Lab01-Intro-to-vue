const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const productDescription = ref('Worn to protect feet')
        return {
            product,
            productDescription
        }
    } //STEP 2.5

}).mount('#app')