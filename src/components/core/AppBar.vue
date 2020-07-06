<template>
  <v-app-bar
    v-scroll="onScroll"
    color="transparent"
    fixed
    flat
  >
    <v-slide-x-transition>
      <v-img
        v-if="showLogo"
        :src="require('@/assets/logo.svg')"
        class="shrink"
        contain
      />
    </v-slide-x-transition>

    <v-spacer />
    <v-slide-x-reverse-transition>
      <social-media
        v-if="isScrolling || !$vuetify.breakpoint.xsOnly"
        :src="require('@/assets/logo.svg')"
        class="shrink pl-0"
        contain
        height="50"
      />
    </v-slide-x-reverse-transition>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'CoreAppBar',

    components: {
      SocialMedia: () => import('@/components/SocialMedia'),
    },

    data: () => ({
      showLogo: false,
      isScrolling: false,
    }),
    computed: {
      logoWidth () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '100px'
          case 'sm': return '400px'
          case 'md': return '500px'
          case 'lg': return '600px'
          case 'xl': return '800px'
          default: return '200px'
        }
      },
    },

    methods: {
      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200 && !this.$vuetify.breakpoint.xsOnly
      },
    },
  }
</script>
