<template>
  <div id="app">

    <!-- HEADER COMPONENT -->
    <Header title="Packages" />

    <!-- BODY CONTAINER -->
    <div class="container">
      <div class="px-2 py-4 mb-10">

        <!-- SubTitle -->
        <p class="text-near-gray-700 font-normal text-base text-left lg:text-center px-4 pt-2 pb-4 lg:py-10 max-w-4xl mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore repudiandae, eum repellat ab beatae consequuntur commodi excepturi obcaecati ducimus pariatur iusto aliquam sit facere. Dicta natus modi nihil ratione saepe?</p>

        <!-- SearchResults -->
        <div class="flex flex-wrap justify-between items-center mb-5 mx-3">
          <div class="text-secondary-color font-bold">{{filteredHomes.length}} Packages</div>
          <div class="relative">
            <label class="absolute text-indent-hidden">Search</label>
            <input type="text" class="bg-near-gray-100 focus:outline-none opacity-50 focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 block w-full appearance-none leading-normal near-gray-700" v-model="search" placeholder="Search">
            <i class="block text-secondary-color font-normal absolute right-0 top-0 p-1 pointer-events-none">
              <IconZoom fill="#636569" class="fill-secondary-color w-8 h-auto" />
            </i>
          </div>
        </div>

        <!-- SEARCHAVAILABILITY //START -->
        <div class="flex flex-wrap -mx-4 px-3 lg:px-0">

          <!-- CARDS COMPONENT -->
          <Cards v-for="(home, key) in filteredHomes"
            :key="home.id"
            :name="home.name"
            :address="home.address"
            :price="home.price"
            :bedrooms="home.bedrooms"
            :bathrooms="home.bathrooms"
            :garages="home.garages"
            :image="home.image"
            :frontage="home.frontage"
            :special="home.special"
            :featured="home.featured"
            :xkey="key"
            :xlength="filteredHomes.length"
          />
          <div v-if="filteredHomes.length < 4" class="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
            <PromoBanner1 title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis repudiandae nostrum. Nostrum ipsum iusto qui, perspiciatis veniam fugit dolorem libero, vitae similique, quasi a officiis quia! Alias, sed vitae!" />
          </div>
        </div>
        <!-- SEARCHAVAILABILITY //END -->

      </div>
    </div>
<a href="#" class="hidden px-8 py-3 rounded-full border-2 border-solid tracking-wider font-semibold text-sm mr-2 text-white border-primary-color bg-primary-color hover:text-white hover:border-secondary-color hover:bg-secondary-color">  </a>
<a href="#" class="hidden px-8 py-3 rounded-full border-2 border-solid tracking-wider font-semibold text-sm mr-2 text-primary-color border-primary-color bg-white-color hover:text-text-secondary-color hover:border-secondary-color hover:bg-white-color">  </a>
<a href="#" class="hidden px-8 py-3 rounded-full border-2 border-solid tracking-wider font-semibold text-sm mr-2 text-white border-white bg-white-color hover:text-text-secondary-color hover:border-secondary-color hover:bg-white-color">  </a>
<a href="#" class="hidden px-8 py-3 rounded-full border-2 border-solid tracking-wider font-semibold text-sm mr-2 text-white border-white bg-white-color hover:text-text-secondary-color hover:border-primary-color hover:bg-white-color"></a>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Cards from './components/Cards.vue'
import PromoBanner1 from './components/PromoBanner1.vue'
import IconZoom from './assets/icons/zoom.svg?inline'

export default {
  name: 'App',
  components: {
    Header,
    Cards,
    PromoBanner1,
    IconZoom
  },
  data() {
    return {
      homes: [],
      search: ''
    };
  },
  created() {
    fetch('//workhouseadvertising.com.au/test-data/endpoint.php')
      .then(response => response.json())
      .then(data => (this.homes = data));
  },
  computed: {
    filteredHomes: function() {
      return this.homes.filter((home) => {
        return home.name.toLowerCase().match(this.search.toLowerCase());
      })
    }
  }
}
</script>