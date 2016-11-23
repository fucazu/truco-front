<template>
  <div>
    {{sala.nome}}

    <h4>Jogadores</h4>
    <button @click="darAsCartas()">Entrar</button>
    <ul>
      <li v-for="user in sala.users">
        {{ user.username }}
        {{ user.cards}}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      sala: {}
    }
  },
  sockets: {
    sala: function (sal) {
      this.sala = sal
      console.log('socket connected', sal)
    },
    darCartas: function (sal) {
      this.sala = sal
      console.log('socket connected', sal)
    }
  },
  methods: {
    darAsCartas: function () {
    //   let that = this
      this.$socket.emit('darCartas', this.sala.id /* , function (sal) {
        that.sala = sal
      } */)
    }
  },
  created () {
    let id = this.$route.params.id
    let that = this
    this.$socket.emit('sala', id, function (value) {
      console.log('id: ', id, value)
      that.sala = value
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