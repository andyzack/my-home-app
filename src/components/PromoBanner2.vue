<template>
    <div class="bg-secondary-gradient h-full rounded overflow-hidden shadow-lg relative px-6 py-4 flex justify-end align-baseline flex-col min-h-128">
      <h3 class="text-3xl text-white font-extrabold leading-none mb-3">{{ title }}</h3>
      <p class="text-base text-white">{{ description }}</p>
      <p class="pr-8 py-3 mt-3 mb-10">
        <ActionButton
          label='Learn more'
          textColor='white'
          borderColor='white'
          backgroundColor='white-color'
          textColorHover='text-secondary-color'
          borderColorHover='secondary-color'
          backgroundColorHover='white-color'
        />
      </p>
    </div>
</template>

<script>
import ActionButton from './ActionButton.vue'

export default {
  name: 'PromoBanner2',
  components: {
    ActionButton
  },
  props: {
    title: String,
    description: String
  }
}
</script>