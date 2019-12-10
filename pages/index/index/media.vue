<template>
    <div>
        <media-head
            ref="media_head"
            :class="{transition_back:scroll_most_value + (inner_height)> show_arr[0]}"
        ></media-head>
        <media-map
            ref="media_map"
            :class="{transition_back:scroll_most_value + (inner_height)> show_arr[1]}"
        ></media-map>
        <product-display
            ref="media_pro"
            :class="{transition_back:scroll_most_value + (inner_height)> show_arr[2]}"
        ></product-display>
        <third-testing
            ref="media_test"
            :class="{transition_back:scroll_most_value + (inner_height)> show_arr[3]}"
        ></third-testing>
        <regiest class="transparent" style="background:rgb(250, 250, 252)"></regiest>
        <div class="regiest_sub"></div>
    </div>
</template>

<script>
import mediaHead from "../../../components/media_head";
import mediaMap from "../../../components/media_map";
import productDisplay from "../../../components/product_display";
import thirdTesting from "../../../components/third_testing";
import regiest from "../../../components/regiest";
import bus from "../../../util/bus";
export default {
    head() {
        return {
            title: "TBmedia - 头部媒体投放解决方案",
            meta: [
                { name: 'keyword', content: '一站式效果营销解决方案，TBmedia，海外广告平台，海外移动营销，海外应用推广，海外品牌推广，Facebook广告投放，Google广告投放，海外媒体投放，用户获取，海外广告投放平台' },
                { name: 'description', content: 'TBmedia，借助全球顶级的移动媒体资源，助您轻松找到高质量用户，实现高效用户增长 合作媒体包括Facebook Google等头部媒体、专注为出海开发者拓展全球影响力和获取高价值用户，提供一站式效果整合营销解决方案' }
            ]
        };
    },
    data() {
        return {
            show_arr: [],
            inner_height: 0,
            scroll_most_value: 0
        };
    },
    components: {
        mediaHead,
        mediaMap,
        productDisplay,
        thirdTesting,
        regiest
        // appFooter
    },
    mounted() {
        this.whatchScroll();
        this.sortModuleOffset();
        this.$nextTick(() => {
            this.inner_height = this.$store.getters.getInnerHeight / 2;
        });
        this.$jquery(".scroll_box").animate({ scrollTop: 0 }, 0);
    },
    methods: {
        sortModuleOffset() {
            this.show_arr = [
                this.$refs.media_head.$el.offsetTop,
                this.$refs.media_map.$el.offsetTop,
                this.$refs.media_pro.$el.offsetTop,
                this.$refs.media_test.$el.offsetTop
            ];
        },
        whatchScroll() {
            bus.$on("windowScroll", v => {
                if (v > this.scroll_most_value) {
                    this.scroll_most_value = v;
                }
            });
        }
    }
};
</script>
<style lang='less'>
@import "../../../assets/css/glo";
.regiest_sub {
    height: 150px;
    background: #ddd;
    background: @gray_font;
    margin-top: -150px;
}
</style>