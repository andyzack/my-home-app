<template>
  <div class="text-5xl-2 font-bold text-center text-white bg-primary-gradient pt-32 pb-16 py-12 -rotate-45">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>