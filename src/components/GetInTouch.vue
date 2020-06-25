<template>
  <section
    id="get-in-touch"
    class="overflow-hidden"
  >
    <v-row
      class="contact white--text"
      no-gutters
    >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg')"
          height="100%"
        />
      </v-col>

      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <base-heading
          class="mb-5 black--text"
        >
          {{ $t('getInTouch') }}
        </base-heading>

        <v-sheet
          color="transparent"
          max-width="600"
        >
          <v-text-field
            color="white"
            label="Name"
            solo
            flat
          />

          <v-text-field
            color="white"
            label="Email"
            solo
            flat
          />

          <v-text-field
            color="white"
            label="Subject"
            solo
            flat
          />

          <v-textarea
            color="white"
            label="Message"
            solo
            flat
          />

          <base-btn>{{ $t('send') }}</base-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'GetInTouch',
  }
</script>
