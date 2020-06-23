<template>
  <div id="app">

    <!-- HEADER COMPONENT -->
    <Header title="Packages" />

    <!-- BODY CONTAINER -->
    <div class="container">
      <div class="px-2 py-4 mb-10">

        <!-- SubTitle -->
        <p class="text-near-gray-700 font-normal text-base text-center px-4 py-10 max-w-4xl mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore repudiandae, eum repellat ab beatae consequuntur commodi excepturi obcaecati ducimus pariatur iusto aliquam sit facere. Dicta natus modi nihil ratione saepe?</p>

        <!-- SearchResults -->
        <div class="flex flex-wrap justify-between items-center mb-5">
          <div class="text-secondary-color font-bold">{{filteredHomes.length}} Packages</div>
          <div>
            <input type="text" class="bg-near-gray-100 focus:outline-none opacity-50 focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 block w-full appearance-none leading-normal near-gray-700" v-model="search" placeholder="Search">
          </div>
        </div>

        <!-- SEARCHAVAILABILITY //START -->
        <div class="flex flex-wrap -mx-4">

          <!-- CARDS COMPONENT -->
          <Cards v-for="home in filteredHomes"
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
          />
        </div>
        <!-- SEARCHAVAILABILITY //END -->

      </div>
    </div>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Cards from './components/Cards.vue'

export default {
  name: 'App',
  components: {
    Header,
    Cards
  },
  data() {
    return {
      homes: [],
      search: ''
    };
  },
  created() {
    fetch('homes.json')
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