<template>
  <div
    class="phone_show padding_top_20 padding_bottom_20"
    style="background:rgba(246, 247, 248, 1.0)"
  >
    <div class="width_90 margin_auto display_flex test-points">
      <div class="width_40">
        <img
          :src="dataPoints.imgSrc"
          class="width_100"
        >
      </div>
      <div class="width_60 box_szing padding_left_40px">
        <div class="font_size_16px margin_bottom_1">
          测试痛点
        </div>
        <ul
          class="font_size_14px"
          style="list-style-type:disc;letter-spacing: 0;"
        >
          <template v-for='item in dataPoints.list'>
            <li
              :key='item'
              class="margin_bottom_1"
            >
              {{item}}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataPoints"]
};
</script>
<style lang='less' scoped>
.test-points.display_flex {
  align-items: center;
  .width_40 {
    min-width: 80px;
    max-width: 120px;
  }
  .width_60 {
    flex: 1;
  }
}

li.margin_bottom_1:last-of-type {
  margin-bottom: 0;
}
</style>