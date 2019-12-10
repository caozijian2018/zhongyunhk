<template>
    <div>
        <net-head ref="net_head" :class="{transition_back:scroll_most_value + (inner_height)> show_arr[0]}"  ></net-head>
        <net-map ref="net_map" :class="{transition_back:scroll_most_value + (inner_height)> show_arr[1]}"></net-map>
        <net-channal ref="net_channal" :class="{transition_back:scroll_most_value + (inner_height)> show_arr[2]}"></net-channal>
        <consolidated-traffic ref="net_traffic"  :class="{transition_back:scroll_most_value + (inner_height)> show_arr[3]}"></consolidated-traffic>
        <regiest
            class="transparent margin_top_20"
        ></regiest>
        <div class="regiest_sub pc_show"></div>
    </div>
</template>

<script>
import netHead from "../../../components/net_head";
import netMap from "../../../components/net_map";
import consolidatedTraffic from "../../../components/consolidated_traffic";
import netChannal from "../../../components/net_channal";
import regiest from "../../../components/regiest";
import bus from "../../../util/bus";
export default {
    head(){
        return {
            title:"TB 网盟 - 全网流量聚合营销解决方案",
            meta: [
                { name: 'keyword', content: '网盟，Network，CPA，CPI、CPL，流量采买，流量变现，广告变现，一站式效果营销解决方案，优质流量，广告交易平台' },
                { name: 'description', content: '拥有高质量自有流量，网盟流量，覆盖全网效果流量渠道。以CPA、CPI、CPL为主要结算方式，服务于数百家广告主。提供API等多种媒体接入方式，高效获取真实用户。' }
            ]
        }
    },
    data(){
        return{
            show_arr: [],
            inner_height: 0,
            scroll_most_value: 0
        }
    },
    components: {
        netHead,
        netMap,
        consolidatedTraffic,
        regiest,
        netChannal
    },
    mounted(){
         this.whatchScroll();
        this.sortModuleOffset();
        this.$nextTick(() => {
            this.inner_height = this.$store.getters.getInnerHeight / 2;
        });
        this.$jquery('.scroll_box').animate({ scrollTop: 0 }, 0);

    },
    methods:{
        sortModuleOffset() {
            this.show_arr = [
                this.$refs.net_head.$el.offsetTop,
                this.$refs.net_map.$el.offsetTop,
                this.$refs.net_channal.$el.offsetTop,
                this.$refs.net_traffic.$el.offsetTop
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
@import "../../../assets/css/network.css";

.regiest_sub {
    height: 150px;
    background: #ddd;
    background: @gray_font;
    margin-top: -150px;
}
</style>