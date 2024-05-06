import { ProductCard } from "./components/ProductCard.js"

const { createApp } = Vue

createApp({
  components: {
    "product-card": ProductCard
  },
  data(){
    return {
      itemList: [],
      buyList: [],
      numberOfLike: 0,
      totalPrice: 0,
    }
  },
  methods: {
    likeclicked(id) {
      const product = this.itemList.find((product) => product.id == id);
      if (product.like == false) {
        product.like = true
        this.numberOfLike++
      } else {
        product.like = false
        this.numberOfLike--
      }
    },
    buyclicked(id) {
      const product = this.itemList.find((product) => product.id == id);
      const buyItemExist = this.buyList.find((item) => item.id == id);
      if (buyItemExist == null) {
        this.buyList.push({id: product.id});
      }
      product.number ++
      this.initBuyList();
    },
    increase(id) {
      const product = this.itemList.find((product) => product.id == id);
      product.number ++
      this.initBuyList();
    },
    decrease(id) {
      const product = this.itemList.find((product) => product.id == id);
      const itemIndex = this.buyList.findIndex((item) => item.id == id);
      product.number --
      if(product.number <= 0) {
        this.buyList.splice(itemIndex, 1);
      }
      this.initBuyList();
    },
    removeItem(id) {
      const product = this.itemList.find((product) => product.id == id);
      const itemIndex = this.buyList.findIndex((item) => item.id == id);
      this.buyList.splice(itemIndex, 1);
      product.number = 0
      this.initBuyList();
    },
    initBuyList() {
      let price = 0;
      this.buyList.forEach(item => {
        price += this.itemList[item.id].price * this.itemList[item.id].number;
      });
      this.totalPrice = price;
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