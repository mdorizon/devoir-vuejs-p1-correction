export const ProductCard = {
  props: {
    id: Number,
    price: Number,
    src: String,
    name: String,
    like: Boolean,
    number: Number,
    likeclicked: Function,
    buyclicked: Function,
  },
  template: `
    <div class="card" :key="id">
      <img :src="src" :alt="name + id">
      <span class="price">{{ price }} €</span>
      <div>
        <button class="btn btn-primary" @click="$emit('likeclicked', id)">
          <i class="fa-regular fa-heart" v-if="this.like == false"></i>
          <i class="fa-solid fa-heart liked" v-if="this.like == true"></i>
        </button>
        <button class="btn btn-secondary" @click="$emit('buyclicked', id)">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  `
}