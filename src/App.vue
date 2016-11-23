<template>
  <div class="hello">
      <input v-model="username" placeholder="Digite um username">
    <button @click="entrar()">Entrar</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: null
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (val) {
      console.log('this method fired by socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    entrar: function () {
      let router = this.$router
      this.$socket.emit('entrar', this.username, function (callb) {
        console.log('callb: ', callb)
        router.push('/inicio')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>