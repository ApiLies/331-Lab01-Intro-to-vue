const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
       const cart = ref([])
       const premium = ref(true)
       function updateCart(id){
        cart.value.push(id)
       }
       const cartSummary = computed(() => {
        const counts = {}
        for (const id of cart.value) {
            counts[id] = (counts[id] || 0) + 1
        }
        return counts
       })

       return {
        cart,
        premium,
        updateCart,
        cartSummary
       }
    }
})

app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.mount('#app')