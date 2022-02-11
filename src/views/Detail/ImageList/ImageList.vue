<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, index) in skuImageList" :key="img.id">
        <img :src="img.imgUrl" :class="{ active: currIndex === index }" @click="changeCurrImg(index, img.imgUrl)" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'ImageList',
  props: ['skuImageList'],
  data() {
    return {
      currIndex: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      const mySwiper = new Swiper(this.$refs.mySwiper, {
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
      mySwiper.a = ''
    })
  },
  methods: {
    changeCurrImg(index, imgUrl) {
      this.currIndex = index
      // 通过事件总线将当前点击的图片地址发送给 Zoom 组件
      this.$bus.$emit('changeImg', imgUrl)
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
