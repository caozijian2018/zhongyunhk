<template>
    <div class="advertiser" style="margin-top:-50px">
        <adv-head ref="adv_head" :class="{transition_back: scroll_most_value + (inner_height)> show_arr[0]}"></adv-head>
        <media-delivery ref="media_delivery" :class="{transition_back: scroll_most_value + (inner_height)> show_arr[1]}"></media-delivery>
        <network-solution ref="network_solution" :class="{transition_back: scroll_most_value + (inner_height)> show_arr[2]}"></network-solution>
        <regiest class="marign_top-4 blue"  ref="regiest" :class="{transition_back: scroll_most_value + (inner_height)> show_arr[3]}"></regiest>
        <!-- <app-footer></app-footer> -->
    </div>
</template>

<script>
import advHead from "../../../components/adv_head";
import mediaDelivery from "../../../components/media_delivery";
import networkSolution from "../../../components/network_solution";
import regiest from "../../../components/regiest";
// import appFooter from "../../../components/app_footer";
import bus from "../../../util/bus";
export default {
    head(){
        return {
            title:"一站式海外营销服务商 - TBmedia 、TB 网盟",
            meta: [
                { name: 'keyword', content: '一站式效果营销解决方案，TBmedia，TB 网盟，TB Network，海外广告平台，海外移动营销，海外应用推广，海外品牌推广，Facebook广告投放，Google广告投放，海外媒体投放，用户获取，海外广告投放平台，流量采买，流量变现，广告变现，' },
                { name: 'description', content: '数据驱动的全媒体立体营销平台，覆盖超过200个国家和地区。以效果为导向，为广告主获取来自全球的规模化高质量用户。' }
            ]
        }
    },
    components: {
        advHead,
        mediaDelivery,
        networkSolution,
        regiest,
        // appFooter
    },
    mounted() {
        this.whatchScroll();
        this.sortModuleOffset();
        this.$nextTick(() => {
            this.inner_height = this.$store.getters.getInnerHeight / 2;
        });
        this.$jquery('.scroll_box').animate({ scrollTop: 0 }, 0);

    },
    data(){
        return {
            show_arr:[],
            inner_height:0,
            scroll_most_value:0,
        }
    },
    methods: {
        sortModuleOffset() {
            this.show_arr = [
                this.$refs.adv_head.$el.offsetTop,
                this.$refs.media_delivery.$el.offsetTop,
                this.$refs.network_solution.$el.offsetTop,
                this.$refs.regiest.$el.offsetTop
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
.advertiser {
    background: rgba(250, 250, 252, 1);
    .marign_top-4 {
        margin-top: -4px;
    }
}
</style>