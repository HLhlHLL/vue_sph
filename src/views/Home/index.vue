<template>
  <div class="home-container">
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer'
import Recommend from '@/views/Home/Recommend'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Like'
import Floor from '@/views/Home/Floor'
import Brand from '@/views/Home/Brand'
export default {
  name: 'Home',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped></style>
