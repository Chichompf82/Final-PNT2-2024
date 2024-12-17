<template>
  <section class="src-componentes-conversor">
    <div class="jumbotron">
      <h2>Conversor de temperatura</h2>
      <hr>
      <br>
      <form>

        <!-- Ingreso temperatura en °C -->
        <div class="form-group">
          <label>ingrese temperatura °c</label>
          <input 
            type="text" 
            class="form-control" 
            v-model ="centigrados"
          >
        </div>
      </form>
      <br>
      <hr>

        <h5>Conv Temperatura °F: <span :style="{color: getColor(centigrados)}">{{ conversor.farenheit }}</span></h5>
        <br>
        <h5>Conv Temperatura °K: <span :style="{color: getColor(centigrados)}">{{ conversor.kelvin }}</span></h5>
    </div>

    <hr>
    <br>
    <div id="respuesta" class="jumbotron">
      <h2>Respuestas</h2>
      <p>1: c - 2: b - 3: c - 4: a </p>
    </div>
  </section>
</template>

<script>

  export default  {
    name: 'src-componentes-conversor',
    props: [],
    mounted () {

    },
    data () {
      return {
        centigrados : '',
        farenheit : '',
        kelvin: ''
      }
    },
    methods: {
      getColor(centigrados) {
        if(isNaN(centigrados)) return ''
        else if(centigrados <= 0) return 'blue'
        else if(centigrados >= 0 && centigrados < 15) return 'magenta'
        else return 'red'
      }
    },
    computed: {
      conversor() {
        let farenheit = !isNaN(this.centigrados) && this.centigrados? (Number(this.centigrados) * 9/5) + 32 : ''
        let kelvin = !isNaN(this.centigrados) && this.centigrados? Number(this.centigrados) + 273.15 : ''
        return {
          farenheit,
          kelvin
        }
      }
    

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: white;
    color:blue;
  }

  hr {
    background-color: #eee;
  }

  label {
      text-transform: capitalize;
      font-size: 30px;
  }

  #respuesta{
    background-color:rgb(205, 235, 109)
  }

  p{
    font-size: 25px;
  }




</style>
