<template>
  <section
    :id="id"
    class="overflow-hidden"
    color="white"
  >
    <v-row v-if="!$vuetify.breakpoint.xsOnly">
      <div class="image-container">
        <div
          class="parallax"
          :style="{ 'background-image': filename }"
        >
          <div :class="box">
            <div :class="text">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </v-row>
    <div
      v-else
      class="parallax"
      :style="{ 'background-image': parallaxStyle }"
    >
      <div
        :class="text + ' pa-2'"
      >
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      id: String,
      image: String,
      position: String,
    },
    computed: {
      filename () {
        return 'url(/img/' + this.image + ')'
      },
      box () {
        if (this.position === 'left') {
          return 'leftbox'
        }
        return 'rightbox'
      },
      text () {
        if (this.position === 'left') {
          return 'lefttext'
        }
        return 'righttext'
      },
      parallaxStyle () {
        return 'linear-gradient(to bottom, rgba(30, 30, 30, 0.6), rgba(255, 215, 233, 0.05)), url(/img/' + this.image + ')'
      },
    },
  }
</script>

<style>

.rightbox {
  background-color: rgba(1, 1, 1, 0.5);
  position: relative;
  height: 100vh;
  width: 50vw;
  left: 50vw;
  padding-right: 50px;
  padding-left: 50px;
  justify-content: center;
}

.righttext {
  text-align: center;
  padding-top: 30vh;
}

.leftbox {
  background-color: rgba(1, 1, 1, 0.5);
  position: absolute;
  height: 100vh;
  width: 50vw;
  padding-right: 50px;
  padding-left: 50px;
}

.lefttext {
  text-align: center;
  padding-top: 10vh;
}

.parallax {
  /* The image used */

  /* Full height */
  height: 100vh;
  width: 100vw;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>
