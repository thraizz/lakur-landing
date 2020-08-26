<template>
  <v-app>
    <core-app-bar absolute />
    <core-view
      :style="{background: $vuetify.theme.themes[theme].background}"
    />

    <core-footer />
  </v-app>
</template>

<script>
  require('@/assets/1.jpg')
  require('@/assets/2.jpg')
  require('@/assets/3.jpg')
  require('@/assets/4.jpg')
  require('@/assets/5.jpg')
  require('@/assets/6.jpg')
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
@import url('./style/main.scss');

$body-font-family: 'open sans,Arial,sans-serif';
$title-font: 'Arial';
.v-application {
  font-family: $body-font-family, sans-serif !important;
  text-align: left !important;
    .title {
      font-family: $title-font, sans-serif !important;
      text-align: left !important;
      font-style: bold;
    }
 }
 h3 {
   text-align: left !important;
 }
 h1 {
   text-align: left !important;
 }
</style>
