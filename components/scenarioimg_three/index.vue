<template>
  <div class="scenariimg_div">
    <div class="pc_show">
      <div class="glo_width_percent margin_auto padding_bottom_60_px padding_top_70_px">
        <img
          src="../../static/img/scenario/scenario-1.png"
          class="width_100"
          alt
        >
        <div class="display_flex flex_jusify_space margin_top_1">
          <div class="text_center flex_1">普通测试工具无法满足复杂的金融业务场景</div>
          <div class="text_center flex_1">自建自动化测试工具耗时长，成本高</div>
          <div class="text_center flex_1">用户反馈问题无法准确定位复现</div>
        </div>
      </div>
    </div>
    <test-points :data-points='points'></test-points>
  </div>
</template>

<script>
import testPoints from "../test_points";
export default {
  components: {
    testPoints
  },
  data() {
    return {
      points: {
        imgSrc: "/img/scenario_phone/cjzc.png",
        list: [
          "普通测试工具无法满足复杂的金融业务场景",
          "自建自动化测试工具耗时长，成本高",
          "用户反馈问题无法准确定位复现"
        ]
      }
    };
  }
};
</script>
<style lang='less'>
</style>