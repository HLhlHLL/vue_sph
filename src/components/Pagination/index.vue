<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="$emit('getCurPage', pageNo - 1)">上一页</button>
    <button v-if="startAndEnd.start > 1" @click="$emit('getCurPage', 1)" :class="{ active: pageNo === 1 }">1</button>
    <button v-if="startAndEnd.start > 2">···</button>

    <span v-for="page in startAndEnd.end" :key="page">
      <button v-if="page > startAndEnd.end - continues" @click="$emit('getCurPage', page)" :class="{ active: pageNo === page }">{{ page }}</button>
    </span>

    <button v-if="startAndEnd.end < totalPage - 1">···</button>
    <button v-if="startAndEnd.end < totalPage" @click="$emit('getCurPage', totalPage)" :class="{ active: pageNo === totalPage }">
      {{ totalPage }}
    </button>
    <button :disabled="pageNo === totalPage" @click="$emit('getCurPage', pageNo + 1)">下一页</button>

    <button style="margin-left: 30px">共{{ total }}条</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pageSize', 'pageNo', 'total', 'continues'],
  computed: {
    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    // 分页按钮起始和结束索引
    startAndEnd() {
      const { totalPage, pageNo, continues } = this
      let start = 0
      let end = 0
      start = pageNo - Math.floor(continues / 2)
      end = pageNo + Math.floor(continues / 2)
      if (start < 1) {
        start = 1
        end = continues
      }
      if (end > totalPage) {
        end = totalPage
        start = totalPage - continues
      }
      return { start, end }
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
