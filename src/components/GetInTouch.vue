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
        v-model="name"
        :label="$t('contact.name')"
        solo
        flat
      />

      <v-text-field
        v-model="email"
        :label="$t('contact.email')"
        solo
        flat
      />

      <v-text-field
        v-model="subject"
        :label="$t('contact.subject')"
        solo
        flat
      />

      <v-textarea
        v-model="content"
        :label="$t('contact.message')"
        solo
        flat
      />

      <base-btn @click="sendForm">
        {{ $t('send') }}
      </base-btn>
    </v-sheet>
  </section-container>
</template>

<script>
  import SectionContainer from '@/components/base/SectionContainer.vue'
  import axios from 'axios'

  export default {
    name: 'GetInTouch',
    components: { SectionContainer },
    data: function () {
      return ({
        name: '',
        email: '',
        subject: '',
        content: '',
      })
    },
    methods: {
      sendForm () {
        axios.post('https://lakur.tech:6435/contact', { params: { name: this.name, email: this.email, subject: this.subject, content: this.content } })
      },
    },
  }
</script>
