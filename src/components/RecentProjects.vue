<template>
  <section
    id="recent-projects"
    class="overflow-hidden justify-center"
  >
    <v-row
      no-gutters
      class="justify-center projects"
    >
      <v-col
        class="justify-center black--text text-center pa-5"
        cols="12"
        md="6"
      >
        <base-heading
          class="mb-5"
        >
          {{ $t('recentProjects') }}
        </base-heading>
        <template v-for="(text,i) in $t('recentProjectsText').split('+')">
          <base-text
            :key="i"
            class="ma-0 pa-0"
          >
            {{ text }}
          </base-text>
        </template>

        <v-card
          color="#1b1a18"
          class="text-center"
          style="display: inline-flex"
          max-width="600"
        >
          <v-container>
            <v-card
              v-for="(project, i) in Object.values(projects)"
              :key="i"
              class="mb-2 mx-auto justify-center text-left"
              color="#212e3b"
              max-height="300"
            >
              <v-row
                v-if="$vuetify.breakpoint.smAndUp"
                dense
              >
                <v-col
                  md="6"
                  class="pa-4"
                >
                  <a :href="project.href">
                    <v-img
                      max-height="250"
                      max-width="250"
                      :src="require(`@/assets/${project.img}`)"
                    />
                  </a>
                </v-col>
                <v-col
                  md="6"
                  class="pa-4"
                >
                  <base-text v-if="$vuetify.breakpoint.mdAndUp">
                    {{ $t(project.text) }}
                  </base-text>
                </v-col>
              </v-row>
              <div v-else>
                <v-img
                  :src="require('@/assets/mr-karl-LsaEZ3Woqd4-unsplash.jpg')"
                  height="100%"
                />
                <v-card-title to="www.example.com">
                  {{ project.title }}
                </v-card-title>
              </div>
            </v-card>
          </v-container>
        </v-card>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/mr-karl-LsaEZ3Woqd4-unsplash.jpg')"
          height="100%"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'RecentProjects',

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
