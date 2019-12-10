<template>
  <div class="scenarioS glo_gry">
    <div class="margin_auto center_ back_white padding_top_30">
      <div
        class="display_flex margin_bottom_3"
        v-for="v in pageData"
        :key="v.desc"
      >
        <div class="width_30 flex_center display_flex flex_align_center">
          <img
            class="width_60"
            :src="v.img"
          >
        </div>
        <div class="width_60">
          <div class="title font_size_14px">
            {{v.title}}
          </div>
          <div
            style="line-height:26px;"
            v-html='v.desc'
          >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if='isCompatibility'
      class="padding_top_20 center_ margin_top_1 margin_auto back_white padding_bottom_20"
    >
      <div class="text_center font_size_15px margin_bottom_1">
        服务流程
      </div>
      <div class="width_90 margin_auto">
        <img
          src="/img/compatibility/jr-06.png"
          class="width_100"
        >
      </div>
    </div>
    <div class="padding_top_20 center_ margin_top_1 margin_auto back_white padding_bottom_20">
      <div class="text_center font_size_15px margin_bottom_1">
        他们正在使用TestBird提高APP质量
      </div>
      <div class="width_90 margin_auto">
        <img
          src="../../static/img/scenario_phone/cj-8.png"
          class="width_100"
        >
      </div>
    </div>
    <div class="margin_top_10 position_relative">
      <div class="white pcs text_center">
        如需测试，请联系我们相关负责人了解测试详情
      </div>
      <img
        src="../../static/img/solution_mobile_game/foot_lianxi.png"
        class="width_100"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["page-data", "is-compatibility"]
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.scenarioS {
  .center_ {
    width: 96%;
    border: 1px solid #ddd;
    border-radius: 2px;
    &.margin_top_1 {
      margin-top: 2%;
    }
  }
  .title {
    color: @app_blue;
  }
}
</style>