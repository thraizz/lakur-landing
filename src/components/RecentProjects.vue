<template>
  <section-container
    id="recent-projects"
    position="left"
    image="mr-karl-LsaEZ3Woqd4-unsplash.bace1419.jpg"
  >
    <base-heading>
      {{ $t('recentProjects') }}
    </base-heading>
    <template v-for="(text,i) in $t('recentProjectsText').split('+')">
      <base-text
        :key="i"
      >
        {{ text }}
      </base-text>
    </template>

    <div>
      <v-card
        v-for="(project, i) in Object.values(projects)"
        :key="i"
        class="mb-4 mx-auto text-left"
        color="rgb(1, 1, 1, 0.7)"
        max-height="300"
        max-width="600"
      >
        <div :style="{display: 'flex'}">
          <a
            class="pa-2"
            :href="project.href"
          >
            <v-img
              max-height="200"
              max-width="200"
              :src="require(`@/assets/${project.img}`)"
            />
          </a>
          <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
            {{ $t(project.text) }}
          </v-card-text>
        </div>
      </v-card>
    </div>
  </section-container>
</template>

<script>
  import SectionContainer from '@/components/base/SectionContainer.vue'

  export default {
    name: 'RecentProjects',
    components: {
      SectionContainer,
    },
    data: () => ({
      projects: {
        bareos: {
          img: 'bareos-full-logo.png',
          text: 'projects.bareos',
          href: 'https://github.com/bareos/bareos-webui',
          title: 'Bareos',
        },
        finau: {
          img: 'finau.png',
          text: 'projects.finau',
          href: 'https://finau.de',
          title: 'Finaui',
        },
      },
    }),
  }
</script>
