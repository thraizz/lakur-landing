<template>
  <div>
    <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 4)"
      :key="i"
      fab
      class="ma-2"
      color="info"
      :small="!large"
      :href="item.href"
    >
      <v-icon
        dark
        v-text="item.icon"
      />
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          name: 'Email',
          icon: 'mdi-email',
          href: 'mailto:schueleraron@lakur.tech',
        },
        {
          name: 'Xing',
          icon: 'mdi-xing',
          href: 'https://www.xing.com/profile/Aron_Schueler/cv',
        },
        {
          name: 'Twitch',
          icon: 'mdi-twitch',
          href: 'https://www.twitch.tv/thra1zz',
        },
      ],
    }),
  }
</script>
