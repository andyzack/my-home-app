<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
    <!-- CARDS START -->
    <div class="bg-white h-full rounded overflow-hidden shadow-lg relative">
      <div v-if="special" class="wkh-banner wkh-specials bg-secondary-gradient absolute left-0 top-0 px-6 py-3 text-white font-bold">Special Package</div>
      <div v-if="featured" class="wkh-banner wkh-featured bg-primary-gradient absolute left-0 top-0 px-6 py-3 text-white font-bold">Featured</div>
      <div class="wkh-favourite absolute right-0 top-0 m-3 text-secondary-color hover:text-primary-color text-3xl"><img alt="favourite" src="../assets/icons/favourite.svg" class="w-8"></div>
      <img class="w-full" :src="image" :alt="name" />
      <div class="px-6 py-4">
        <div class="font-extrabold text-2xl text-primary-color leading-tight mb-2">{{name}}</div>
        <p class="text-gray-700 text-base">
          {{address}}
        </p>
        <p class="text-gray-700 text-base font-bold">
          From {{price}}*
        </p>
      </div>
      <div class="px-6 pb-4">
        <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 text-center mr-2">
          <i class="block text-secondary-color font-normal"><img alt="favourite" src="../assets/icons/bed.svg" class="w-8"></i>
          {{bedrooms}}
        </span>
        <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 text-center mr-2">
          <i class="block text-secondary-color font-normal"><img alt="favourite" src="../assets/icons/bath.svg" class="w-8"></i>
          {{bathrooms}}
        </span>
        <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 text-center nr-2">
          <i class="block text-secondary-color font-normal"><img alt="favourite" src="../assets/icons/car.svg" class="w-8"></i>
          {{garages}}
        </span>
        <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 text-center">
          <i class="block text-secondary-color font-normal"><img alt="favourite" src="../assets/icons/lot-width.svg" class="w-8 text-secondary-color"></i>
          {{frontage}}
        </span>
      </div>
      <div class="px-6 pb-8">
        <a href="#" class="inline-block px-8 py-3 rounded-full border-2 border-solid border-primary-color hover:border-secondary-color bg-primary-color hover:bg-secondary-color text-white tracking-wider font-semibold text-sm mr-2">
          Enquire
        </a>
        <a href="#" class="inline-block px-8 py-3 rounded-full border-2 border-solid border-primary-color hover:border-secondary-color bg-white-color text-primary-color hover:text-secondary-color tracking-wider font-semibold text-sm">
          Floorplan
        </a>
      </div>
    </div>
    <!-- CARDS END -->
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: String,
    address: String,
    price: String,
    bedrooms: String,
    bathrooms: String,
    garages: String,
    image: String,
    frontage: String,
    special: String,
    featured: String,
  }
}
</script>