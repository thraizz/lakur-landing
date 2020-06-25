<template>
  <section
    id="welcome"
    class="overflow-hidden"
    color="white"
  >
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/jeremy-bishop-rqWoB4LFgmc-unsplash.jpg')"
          height="100vh"
        />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            md="6"
          >
            <base-heading class="mt-12">
              {{ $t('welcome') }}
            </base-heading>
            <h3>{{ $t('aboutMe') }}:</h3>
            <template v-for="(sentence, i) in $t('baseText').split('+')">
              <base-text :key="i">
                {{ sentence }}
              </base-text>
            </template>
            <base-text>
              {{ $t('baseTextWelcome') }}
            </base-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>
