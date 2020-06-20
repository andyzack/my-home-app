import '@/assets/css/tailwind.css'

<template>
  <div class="text-4xl font-bold text-center bg-purple-600 text-white sm:bg-green-600 md:bg-blue-600 ms:text:yellow lg:bg-red-600 xl:bg-orange-600 px-8 py-12">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
