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
        :label="$t('contact.name')"
        solo
        flat
      />

      <v-text-field
        :label="$t('contact.email')"
        solo
        flat
      />

      <v-text-field
        :label="$t('contact.subject')"
        solo
        flat
      />

      <v-textarea
        :label="$t('contact.message')"
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
