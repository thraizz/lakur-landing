<template>
  <section-container
    id="get-in-touch"
    class="overflow-hidden"
    position="right"
    image="pawel-czerwinski-OOFSqPWjCt0-unsplash.62f51bb9.jpg"
  >
    <base-heading>
      {{ $t('getInTouch') }}
    </base-heading>

    <v-sheet
      color="transparent"
    >
      <v-text-field
        label="Name"
        solo
        flat
      />

      <v-text-field
        label="Email"
        solo
        flat
      />

      <v-text-field
        label="Subject"
        solo
        flat
      />

      <v-textarea
        label="Message"
        solo
        flat
      />

      <base-btn>{{ $t('send') }}</base-btn>
    </v-sheet>
  </section-container>
</template>

<script>
  import SectionContainer from '@/components/base/SectionContainer.vue'

  export default {
    name: 'GetInTouch',
    components: { SectionContainer },
  }
</script>
