const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        const inventory = ref(100)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green'},
            {id: 2235, color: 'blue'},
        ])
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        
        return {
            product,
            image,
            inStock,
            inventory,
            details,
            variants,
            sizes
        }
    }//Step 5.5

}).mount('#app')