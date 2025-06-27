const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const productLink = ref('www.camtcmu.ac.th')
        return {
            product,
            image,
            productLink
        }
    }   //step 3.6

}).mount('#app')