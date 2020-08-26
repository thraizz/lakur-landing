<template>
  <v-footer
    absolute
    padless
  >
    <v-dialog v-model="datenschutz">
      <datenschutz />
    </v-dialog>
    <v-dialog v-model="impressum">
      <impressum />
    </v-dialog>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="ml-12"
        cols="7"
      >
        <base-text>
          Graphics by <a href="https://unsplash.com/@pawel_czerwinski">Pawel Czerwinski</a> on <a href="https://unsplash.com/">Unsplash</a>.
        </base-text>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="3"
        class="mr-4"
      >
        <base-text>
          <a
            :style="{'text-decoration': 'underline'}"
            @click="datenschutz = true"
          >Datenschutz</a>
        </base-text>
      </v-col>
      <v-col
        cols="3"
        class="mr-12"
      >
        <base-text>
          <a
            :style="{'text-decoration': 'underline'}"
            @click="impressum = true"
          >Impressum</a>
        </base-text>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'CoreFooter',

    components: {
      Impressum: () => import('@/components/core/Impressum.vue'),
      Datenschutz: () => import('@/components/core/Datenschutz.vue'),
    },
    data () {
      return {
        impressum: false,
        datenschutz: false,
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
