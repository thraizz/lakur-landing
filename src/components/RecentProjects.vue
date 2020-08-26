<template>
  <section-container
    id="recent-projects"
    position="left"
    image="2.jpg"
  >
    <base-heading class="mt-8 mb-8">
      {{ $t('recentProjects') }}
    </base-heading>
    <base-text>
      {{ $t('recentProjectsText') }}
    </base-text>

    <v-card
      v-for="(project, i) in Object.values(projects)"
      :key="i"
      :href="project.href"
      class="mb-4 mx-auto text-left"
      color="rgb(1, 1, 1, 0.7)"
      max-width="600px"
    >
      <div :style="{display: 'flex'}">
        <a
          v-if="project.img"
          class="pa-2"
          :href="project.href"
          height="200px"
          width="200px"
        >
          <div
            v-if="$vuetify.breakpoint.mdAndUp"
            :style="{display: 'block', height: '200px', width: '200px'}"
          >
            <v-img
              class="center"
              :src="require(`@/assets/${project.img}`)"
            />
          </div>
        </a>
        <div class="center">
          <base-subheading tag="h3">
            {{ project.title }}
          </base-subheading>
          <base-text>
            {{ $t(project.text) }}
          </base-text>
        </div>
      </div>
    </v-card>
  </section-container>
</template>

<script>
  import SectionContainer from '@/components/base/SectionContainer.vue'
  export default {
    name: 'RecentProjects',
    components: {
      SectionContainer,
    },
    computed: {
      projects: () => ({
        bareos: {
          img: 'bareos_logo.svg',
          text: 'projects.bareos',
          href: 'https://github.com/bareos/bareos-webui',
          title: 'Bareos',
        },
        finau: {
          img: 'finau.svg',
          text: 'projects.finau',
          href: 'https://finau.de',
          title: 'Finau',
        },
        blog: {
          text: 'projects.blog',
          href: 'https://blog.lakur.tech',
          title: 'Blog',
        },
      }),
    },
  }
</script>
<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
