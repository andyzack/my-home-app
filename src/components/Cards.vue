<template>
  <div v-if="(xkey+1) % 5" class="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
    <!-- CARDS START -->
    <div class="bg-white h-full rounded overflow-hidden shadow-lg relative min-h-128">
      <div v-if="special" class="wkh-banner wkh-specials bg-secondary-gradient absolute left-0 top-0 px-6 py-3 text-white font-bold">Special Package</div>
      <div v-if="featured" class="wkh-banner wkh-featured bg-primary-gradient absolute left-0 top-0 px-6 py-3 text-white font-bold">Featured</div>
      <div class="wkh-favourite absolute right-0 top-0 m-2 text-secondary-color hover:text-primary-color text-3xl">
        <component v-bind:is="component" fill="#00A7E1" class="w-10 h-auto" @click="myFavourite" :class="{'active': isActive}" />
      </div>
      <div class=" bg-near-gray-100">
        <img class="w-full lg:h-64 object-cover object-center" :src="image" :alt="name" />
      </div>
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
        <span class="inline-block text-sm font-semibold text-gray-700 text-center mr-2">
          <i class="block text-secondary-color font-normal relative pr-1">
            <IconBed fill="#00A7E1" class="fill-secondary-color w-12 h-auto" />
          </i>
          {{bedrooms}}
        </span>
        <span class="inline-block text-sm font-semibold text-gray-700 text-center mr-2">
          <i class="block text-secondary-color font-normal relative pr-1">
            <IconBath fill="#00A7E1" class="fill-secondary-color w-12 h-auto" />
          </i>
          {{bathrooms}}
        </span>
        <span class="inline-block text-sm font-semibold text-gray-700 text-center mr-2">
          <i class="block text-secondary-color font-normal relative pr-1">
            <IconCar fill="#00A7E1" class="fill-secondary-color w-12 h-auto" />
          </i>
          {{garages}}
        </span>
        <span class="inline-block text-sm font-semibold text-gray-700 text-center">
          <i class="block text-secondary-color font-normal relative">
            <IconLotWidth fill="#00A7E1" class="fill-secondary-color w-12 h-auto" />
          </i>
          {{frontage}}
        </span>
      </div>
      <div class="px-6 pb-8">
        <ActionButton
          label='Enquire'
          textColor='white'
          borderColor='primary-color'
          backgroundColor='primary-color'
          textColorHover='white'
          borderColorHover='secondary-color'
          backgroundColorHover='secondary-color'
        />
        <ActionButton
          label='Floorplan'
          textColor='primary-color'
          borderColor='primary-color'
          backgroundColor='white-color'
          textColorHover='text-secondary-color'
          borderColorHover='secondary-color'
          backgroundColorHover='white-color'
        />
      </div>
    </div>
    <!-- CARDS END -->
  </div>
  <div v-else class="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
    <PromoBanner1 v-if="(((xkey+1)/5)%2)" title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis repudiandae nostrum. Nostrum ipsum iusto qui, perspiciatis veniam fugit dolorem libero, vitae similique, quasi a officiis quia! Alias, sed vitae!" />
    <PromoBanner2 v-else title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis repudiandae nostrum. Nostrum ipsum iusto qui, perspiciatis veniam fugit dolorem libero, vitae similique, quasi a officiis quia! Alias, sed vitae!" />
  </div>
</template>

<script>
import IconBed from '../assets/icons/bed.svg?inline'
import IconBath from '../assets/icons/bath.svg?inline'
import IconCar from '../assets/icons/car.svg?inline'
import IconLotWidth from '../assets/icons/lot-width.svg?inline'
import IconFavourite from '../assets/icons/favourite.svg?inline'
import IconFavourited from '../assets/icons/favourited.svg?inline'
import PromoBanner1 from './PromoBanner1.vue'
import PromoBanner2 from './PromoBanner2.vue'
import ActionButton from './ActionButton.vue'

export default {
  name: 'Card',
  components: {
    IconBed,
    IconBath,
    IconCar,
    IconLotWidth,
    IconFavourite,
    IconFavourited,
    PromoBanner1,
    PromoBanner2,
    ActionButton
  },
  props: {
    name: String,
    address: String,
    price: String,
    bedrooms: Number,
    bathrooms: Number,
    garages: Number,
    image: String,
    frontage: Number,
    special: Boolean,
    featured: Boolean,
    xindex: Number,
    xkey: Number,
    xlength: Number,
    label: String,
    textColor: String,
    borderColor: String,
    backgroundColor: String,
    HovertextColor: String,
    borderColorHover: String,
    backgroundColorHover: String,
  },
  data() {
    return {
      isActive: false,
      component: "IconFavourite"
    };
  },
  methods: {
    myFavourite: function() {
      this.isActive = !this.isActive
      if (this.component === IconFavourited) {
        this.component = IconFavourite;
      } else {
        this.component = IconFavourited;
      }
    },
  }
}
</script>