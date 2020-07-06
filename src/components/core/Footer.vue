<template>
  <v-footer
    height="82"
    class="justify-center"
  >
    <div :style="{display: 'flex'}">
      <base-text>
        All pictures come from Pawel Czerwinski and are used with consent. <br>
        Checkout his work at <a>https://unsplash.com/@pawel_czerwinski</a>
      </base-text>
      <social-media large />
    </div>
  </v-footer>
</template>

<script>
  export default {
    name: 'CoreFooter',

    components: {
      SocialMedia: () => import('@/components/SocialMedia'),
    },
  }
</script>
<style>
a {
  text-decoration: underline !important;
}

</style>
