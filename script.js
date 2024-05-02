const { createApp } = Vue

createApp({
  data(){
    return {
      message: 'Hello World'
    }
  },
  mounted(){
    console.log('mounted');
  }
}).mount('#app')