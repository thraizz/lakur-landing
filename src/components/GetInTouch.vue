<template>
  <section-container
    id="get-in-touch"
    class="overflow-hidden"
    position="right"
    image="4.jpg"
  >
    <base-heading>
      {{ $t('getInTouch') }}
    </base-heading>

    <v-sheet
      color="transparent"
    >
      <v-text-field
        v-model="name"
        :loading="sending"
        :disabled="sending"
        :label="$t('contact.name')"
        solo
        flat
      />

      <v-text-field
        v-model="email"
        :loading="sending"
        :disabled="sending"
        :label="$t('contact.email')"
        solo
        flat
      />

      <v-text-field
        v-model="subject"
        :disabled="sending"
        :loading="sending"
        :label="$t('contact.subject')"
        solo
        flat
      />

      <v-textarea
        v-model="content"
        dark
        :loading="sending"
        :disabled="sending"
        :label="$t('contact.message')"
        solo
        flat
      />

      <base-btn @click="sendForm">
        {{ $t('send') }}
      </base-btn>
      <v-snackbar
        v-model="sent"
        color="info black--text"
      >
        {{ $t('sent') }}

        <v-btn
          color="black--text"
          icon
          @click="sent = false"
        >
          <v-icon
            color="black"
          >
            mdi-close
          </v-icon>
        </v-btn>
      </v-snackbar>
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
        sending: false,
        sent: false,
      })
    },
    methods: {
      sendForm () {
        if (!window.webpackHotUpdate) {
          axios.post('https://lakur.tech/contact', { params: { name: this.name, email: this.email, subject: this.subject, content: this.content } })
        }
        this.sending = true
        var t = this
        setTimeout(() => {
          t.sending = false
          this.sent = true
          setTimeout(() => {
            t.sent = false
          }, 2000)
        }, 1000)
      },
    },
  }
</script>
