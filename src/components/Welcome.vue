<template>
  <section
    id="welcome"
    class="overflow-hidden"
    color="white"
  >
    <v-row no-gutters>
      <div class="image-container">
        <div
          height="100vh"
          width="100vw"
          class="parallax"
        >
          <div class="box" />
          <div class="centered">
            <base-heading class="mb-8">
              {{ $t('welcome') }}
            </base-heading>
            <h3 class="pa-2 ma-0">
              {{ $t('aboutMe') }}:
            </h3>
            <template v-for="(sentence, i) in $t('baseText').split('+')">
              <base-text
                :key="i"
                class="ma-0"
              >
                {{ sentence }}
              </base-text>
            </template>
            <base-text>
              {{ $t('baseTextWelcome') }}
            </base-text>
          </div>
        </div>
      </div>
    </v-row>
  </section>
</template>

<style>
.container {
  position: relative;
  text-align: center;
  opacity: 100 !important;
}
.centered {
  position: absolute;
  right: 10%;
  top: 10%;
}

.box {
    padding: 10px;
    display: block;
    background-color: black;
    opacity: 0.4;
    position: absolute;
    color: white;
    top: 0;
    height: 100vh;
    width: 50vw;
    right: 0;
}
.parallax {
  /* The image used */
  background-image: url("../assets/jeremy-bishop-rqWoB4LFgmc-unsplash.jpg");

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
