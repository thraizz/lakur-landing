<template>
  <v-app>
    <core-app-bar />

    <core-view
      :style="{background: $vuetify.theme.themes[theme].background}"
    />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreView: () => import('@/components/core/View'),
    },

    data () {
      return {
        style: {
          background: 'primary',
        },
      }
    },
    computed: {
      theme () {
        return this.$vuetify.theme.dark ? 'dark' : 'light'
      },
    },
  }
</script>
<style lang="scss">

$body-font-family: 'open sans,Arial,sans-serif';
$title-font: 'Arial';
.v-application {
   font-family: $body-font-family, sans-serif !important;
    .title {
       font-family: $title-font, sans-serif !important;
       font-style: bold;
    }
 }
</style>
