<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2">
              <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" @click="toSearch">
                <h3 @mouseenter="getCurIndex(index)" :class="{ cur: index === curIndex }">
                  <a href="javascript:;" :data-categoryName="c1.categoryName" :data-c1Id="c1.categoryId">{{ c1.categoryName }}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a href="javascript:;" :data-categoryName="c2.categoryName" :data-c2Id="c2.categoryId">{{ c2.categoryName }}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a href="javascript:;" :data-categoryName="c3.categoryName" :data-c3Id="c3.categoryId">{{ c3.categoryName }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import throttle from 'lodash/throttle'
export default {
  name: 'TypeNav',
  data() {
    return {
      curIndex: -1,
      isShow: true
    }
  },
  mounted() {
    // 挂载组件时判断所在路径
    if (this.$route.path !== '/home') {
      // 隐藏分类列表
      this.isShow = false
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList
    })
  },
  methods: {
    // 给三级联动添加节流
    getCurIndex: throttle(function (index) {
      this.curIndex = index
    }, 50),
    // 跳转到搜索页
    toSearch(e) {
      // 通过自定义属性判断节点并传参
      const element = e.target
      // 判断点击的是不是 a 标签
      const { categoryname, c1id, c2id, c3id } = element.dataset
      if (categoryname) {
        const location = { name: 'search' }
        const query = { categoryName: categoryname }
        // 判断点击的是几级标签
        if (c1id) {
          query.category1Id = c1id
        } else if (c2id) {
          query.category2Id = c2id
        } else if (c3id) {
          query.category3Id = c3id
        }
        // 判断是否带有 params 参数
        if (this.$route.params) {
          location.params = this.$route.params
        }
        location.query = query
        this.$router.push(location)
      }
    },
    // 判断分类列表显示或隐藏
    enterShow() {
      this.isShow = true
    },
    leaveShow() {
      this.curIndex = -1
      if (this.$route.path !== '/home') {
        this.isShow = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    a {
      text-decoration: none;
    }

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }

    .sort-enter {
      height: 0;
    }
    .sort-enter-to {
      height: 461px;
    }
    .sort-enter-active {
      transition: 0.3s linear;
    }
  }
}
</style>
