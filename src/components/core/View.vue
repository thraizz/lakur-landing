<template>
  <div>
    <welcome />

    <recent-projects />

    <get-in-touch />
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
