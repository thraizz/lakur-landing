<template>
  <section-container
    id="welcome"
    class="overflow-hidden"
    color="white"
    image="jeremy-bishop-rqWoB4LFgmc-unsplash.eb1ac5a6.jpg"
    position="right"
  >
    <base-heading class="mb-8">
      {{ $t('welcome') }}
    </base-heading>
    <h3 class="pa-2 ma-0">
      {{ $t('aboutMe') }}:
    </h3>
    <template v-for="(sentence, i) in $t('baseText').split('+')">
      <base-text
        :key="i"
        class="ma-0"
      >
        {{ sentence }}
      </base-text>
    </template>
    <base-text>
      {{ $t('baseTextWelcome') }}
    </base-text>
  </section-container>
</template>

<script>
  import SectionContainer from '@/components/base/SectionContainer.vue'
  export default {
    components: { SectionContainer },

  }
</script>
