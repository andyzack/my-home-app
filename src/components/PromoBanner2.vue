<template>
    <div class="bg-secondary-gradient h-full rounded overflow-hidden shadow-lg relative px-6 py-4 flex justify-end align-baseline flex-col min-h-128">
      <h3 class="text-3xl text-white font-extrabold leading-none mb-3">{{ title }}</h3>
      <p class="text-base text-white">{{ description }}</p>
      <p>
        <a href="#" class="inline-block px-8 py-3 mt-3 mb-12 w-auto text-center rounded-full border-2 border-solid border-white hover:border-primary-color bg-white-color text-white hover:text-primary-color tracking-wider font-semibold text-sm">
        Learn more
      </a>
      </p>
    </div>
</template>

<script>
export default {
  name: 'PromoBanner2',
  props: {
    title: String,
    description: String
  }
}
</script>