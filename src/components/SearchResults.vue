import '@/assets/css/tailwind.css'

<template>
          <div class="w-1/3 px-4 py-4">
            <!-- CARDS START -->
            {{name}}
            <div class="bg-white h-full rounded overflow-hidden shadow-lg relative">
              <div class="wkh-banner wkh-specials bg-secondary-gradient absolute left-0 top-0 px-6 py-3 text-white font-bold">Special Package</div>
              <div class="wkh-banner wkh-featured bg-primary-gradient absolute left-0 top-0 px-6 py-3 text-white font-bold">Featured</div>
              <div class="wkh-favourite absolute right-0 top-0 text-secondary-color text-3xl mr-4">&lt;3</div>
              <img class="w-full" src="https://workhouseadvertising.com.au/test-data/images/1.jpg" alt="The Eastwood">
              <div class="px-6 py-4">
                <div class="font-extrabold text-2xl text-primary-color leading-tight mb-2">The Eastwood</div>
                <p class="text-gray-700 text-base">
                  Northbridge, W.A.
                </p>
                <p class="text-gray-700 text-base font-bold">
                  From $209,900*
                </p>
              </div>
              <div class="px-6 pb-4">
                <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 text-center mr-2">
                  <i class="block text-secondary-color font-normal">#bed</i>
                  4
                </span>
                <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 text-center mr-2">
                  <i class="block text-secondary-color font-normal">#bath</i>
                  2
                </span>
                <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 text-center nr-2">
                  <i class="block text-secondary-color font-normal">#garage</i>
                  2
                </span>
                <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 text-center">
                  <i class="block text-secondary-color font-normal">#fromtage</i>
                  15m
                </span>
              </div>
              <div class="px-6 pb-8">
                <a href="#" class="inline-block px-8 py-3 rounded-full border-2 border-solid border-primary-color bg-primary-color text-white tracking-wider font-semibold text-sm mr-2">
                  Enquire
                </a>
                <a href="#" class="inline-block px-8 py-3 rounded-full border-2 border-solid border-primary-color bg-white-color text-primary-color tracking-wider font-semibold text-sm">
                  Floorplan
                </a>
              </div>
            </div>
            <!-- CARDS END -->
          </div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: {
    name: String
  }
}
</script>