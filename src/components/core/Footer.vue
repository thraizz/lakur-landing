<template>
  <v-footer>
    <v-dialog v-model="impressum">
      <impressum />
    </v-dialog>
    <v-row>
      <v-col cols="12">
        <base-text>
          All pictures come from Pawel Czerwinski and are used with consent. <br>
          Checkout his work at <a>https://unsplash.com/@pawel_czerwinski</a>
        </base-text>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="5" />
      <v-col cols="5">
        <p><a @click="impressum = true">Impressum</a></p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'CoreFooter',

    components: {
      Impressum: () => import('@/components/core/Impressum.vue'),
    },
    data () {
      return {
        impressum: false,
      }
    },
  }
</script>
<style>
a {
  color: red;
}
a.hover {
  color: blue;
}

</style>
