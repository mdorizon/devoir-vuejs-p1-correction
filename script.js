import { ProductCard } from "./components/ProductCard.js"

const { createApp } = Vue

createApp({
  components: {
    "product-card": ProductCard
  },
  data(){
    return {
      itemList: []
    }
  },
  mounted(){
    fetch('products.json')
      .then(res => res.json())
      .then(data => {
        this.itemList = data
      })
  }
}).mount('#app')