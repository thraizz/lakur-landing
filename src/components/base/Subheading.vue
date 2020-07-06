<template>
  <component
    :is="tag"
    :class="this.$vuetify.breakpoint.xsOnly ? 'pa-0 pt-4' : 'pa-2'"
  >
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'BaseSubheading',

    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
  }
</script>
