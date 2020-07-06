<template>
  <section-container
    id="welcome"
    class="overflow-hidden"
    color="white"
    image="pawel-czerwinski-zfKL3GEICzc-unsplash.63f506ae.jpg"
    position="right"
  >
    <base-heading class="mt-8 mb-8">
      {{ $t('welcome') }}
    </base-heading>
    <h3 class="pa-2 ma-0">
      {{ $t('aboutMe') }}:
    </h3>
    <template v-for="(sentence, i) in $t('baseText').split('+')">
      <base-text
        :key="i"
        class="ma-0 pr-4 pl-4"
      >
        {{ sentence }}
      </base-text>
    </template>
    <v-btn
      icon
      absolute
      :style="{top: '90vh'}"
      bottom
    >
      <v-icon>
        mdi-chevron-down
      </v-icon>
    </v-btn>
  </section-container>
</template>

<script>
  import SectionContainer from '@/components/base/SectionContainer.vue'
  export default {
    components: { SectionContainer },

  }
</script>
