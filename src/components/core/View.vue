<template>
  <div>
    <welcome :style="{top: '0vh'}" />
    <recent-projects :style="{top: '100vh'}" />
    <get-in-touch :style="{top: '200vh'}" />
  </div>
</template>

<script>
  export default {
    name: 'CoreView',

    components: {
      GetInTouch: () => import('@/components/GetInTouch'),
      RecentProjects: () => import('@/components/RecentProjects'),
      Welcome: () => import('@/components/Welcome'),
    },
  }
</script>
