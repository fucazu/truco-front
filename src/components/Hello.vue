<template>
  <div class="hello">
    <ul>
      <li v-for="sala in salas">
        <router-link :to="{ name: 'sala', params: { id: sala.id }}">{{ sala.nome }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      salas: []
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    }
  },
  methods: {
    entrar: function () {
      this.$socket.emit('entrar', 'batatataaaaa', function (callb) {
        console.log('callb: ', callb)
      })
    }
  },
  created () {
    let that = this
    this.$socket.emit('listarCanais', function (values) {
      that.salas = values
    })
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