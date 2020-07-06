<template>
  <p
    :class="this.$vuetify.breakpoint.xsOnly ? 'pa-0' : 'pl-2 pr-2'"
    style="line-height: 1.7 !important;"
  >
    <slot />
  </p>
</template>

<script>
  export default {
    name: 'BaseText',
  }
</script>
