<template>
  <section-container
    id="welcome"
    class="overflow-hidden"
    color="white"
    image="5.jpg"
    position="right"
  >
    <base-heading class="mt-8 mb-8">
      {{ $t('welcome') }}
    </base-heading>
    <h3 class="pa-2 ma-0">
      {{ $t('aboutMe') }}:
    </h3>
    <list>
      <template v-for="(sentence, i) in $t('baseText')">
        <base-text
          :key="i"
          left
        >
          {{ sentence }}
        </base-text>
      </template>
    </list>
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
