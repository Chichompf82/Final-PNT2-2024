<template>

  <section class="src-componentes-respuestas">
      <div class="jumbotron">
        <h2>Respuestas</h2>
        <br>
  
        <div class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Numero de pregunta</th>
              <th>Respuesta</th>
            </tr>
            <tr>
              <td>1</td>
              <td>c</td>
            </tr>
            <tr>
              <td>2</td>
              <td>b</td>
            </tr>
            <tr>
              <td>3</td>
              <td>c</td>
            </tr>
            <tr>
              <td>4</td>
              <td>a</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  
  </template>
  
  <script>
  
    export default  {
      name: 'src-componentes-respuestas',
      props: [],
      mounted () {
  
      },
      data () {
        return {
  
        }
      },
      methods: {
  
      },
      computed: {
  
      }
  }
  
  
  </script>
  
  <style scoped lang="css">
    .jumbotron {
      background-color: rgb(220, 10, 10);
      color: white;
    }
  </style>
  