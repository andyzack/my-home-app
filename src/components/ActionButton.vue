<template>
  <a href="#" class="inline-block px-8 py-3 rounded-full border-2 border-solid tracking-wider font-semibold text-sm mr-2" :class="[
    'text-'+textColor,
    'border-'+borderColor,
    'bg-'+backgroundColor,
    'hover:text-'+textColorHover,
    'hover:border-'+borderColorHover,
    'hover:bg-'+backgroundColorHover,
  ]">
    {{ label }}
  </a>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    label: String,
    textColor: String,
    borderColor: String,
    backgroundColor: String,
    textColorHover: String,
    borderColorHover: String,
    backgroundColorHover: String,
  }
}
</script>