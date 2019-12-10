<template>
    <div>
        <pub-head ref="pub_head" :class="{transition_back:scroll_most_value + (inner_height)> show_arr[0]}"></pub-head>
        <all-day
            class="superimposed"
            ref="superimposed"
            :class="{transition_back:scroll_most_value + (inner_height)> show_arr[1]}"
        ></all-day>
        <senior-team
            ref="senior_team"
            :class="{transition_back:scroll_most_value + (inner_height)> show_arr[2]}"
        ></senior-team>
        <regiest
            class="transparent"
            ref="regiest"
            :class="{transition_back:scroll_most_value + (inner_height)> show_arr[3]}"
        ></regiest>
        <div class="regiest_sub"></div>
    </div>
</template>

<script>
import pubHead from "../../../components/pub_head";
import allDay from "../../../components/all_day";
import seniorTeam from "../../../components/senior_team";
import regiest from "../../../components/regiest";
import bus from "../../../util/bus";
export default {
    head(){
        return {
            title:"TB 网盟 – 将您的优质流量轻松变现",
            meta: [
                { name: 'keyword', content: '网盟，Network，CPA，CPI、CPL，流量采买，流量变现，广告变现，一站式效果营销解决方案，优质流量，广告交易平台' },
                { name: 'description', content: '通过我们自主研发的流量变现平台，发布商可根据提供的优质广告触达用户，让自有流量变为现实收益。' }
            ]
        }
    },
    components: {
        pubHead,
        allDay,
        seniorTeam,
        regiest,
    },
    data() {
        return {
            show_arr: [],
            inner_height: 0,
            scroll_most_value: 0
        };
    },
    mounted() {
        this.whatchScroll();
        this.sortModuleOffset();
        this.$nextTick(() => {
            this.inner_height = this.$store.getters.getInnerHeight / 2;
            
        });
        this.$jquery('.scroll_box').animate({ scrollTop: 0 }, 0);

    },
    methods: {
        sortModuleOffset() {
            this.show_arr = [
                this.$refs.pub_head.$el.offsetTop,
                this.$refs.superimposed.$el.offsetTop,
                this.$refs.senior_team.$el.offsetTop,
                this.$refs.regiest.$el.offsetTop-100
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
 
</style>