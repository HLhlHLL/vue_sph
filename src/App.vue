<template>
  <div class="app-container">
    <Header v-show="this.$route.meta.show"></Header>
    <router-view></router-view>
    <Footer v-show="this.$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('getCategoryList')
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped></style>
