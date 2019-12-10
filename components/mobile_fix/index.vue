<template>
    <div class="mobile_fix_box">
        <div class="pc_show">
          

            <div class="overflow_hidden mobile_fix">
                <div class="mobile_box position_relative">
                    <img
                        src="../../static/img/games2background/back3.png"
                        class="width_100 transilateX-2 transform_duration15"
                        alt
                    >
                    <div
                        class="glo_width_percent height_100 pcs flex_align_center flex_jusify_space display_flex"
                    >
                        <div class="flex_1">
                            <img
                                src="../../static/img/products/7.png"
                                class="width_100 transform_duration2 transilateX-3"
                                alt
                            >
                        </div>
                        <div class="flex_1 transform_duration15 transilateY3">
                            <div class="float_right">
                                <h2 class="h1_font" style="margin-bottom: 30px">{{ showcp ? "Content Provider" : $t('words.testing_solution')}}</h2>
                                <div v-if="showcp">
                                    Thousands of high-quality licensed contents: Games, Adult Video, Funny Video,Fitness Video,etc.
                                    <div style="margin-top:62px;">
                                        <app-button button-text="Healthy Life" @click.native="nuxtLinkJump('http://healthy-life-now.net/?lang=en&phone=66662587&from=success', true)"></app-button>
                                        <app-button button-text="Secret Garden" class="margin_left_10" @click.native="nuxtLinkJump('http://secretsgarden.net/?op=x&phone=00306972900548&from=success', true)"></app-button>
                                        <app-button button-text="Game Park" class="margin_left_10" @click.native="nuxtLinkJump('http://game-park.net/?lang=pt&op=x&phone=00306972900548&from=success', true)"></app-button>... ...
                                    </div>
                                </div>
                                <div v-else class="sub_title">{{$t('words.testing_platform')}}
                                    <br>{{$t('words.testing_system')}} 
                                    <br>{{$t('words.mobile_applications1')}} 
                                    <br>{{$t('words.mobile_internet')}} 
                                    <div style="margin-top:62px;">
                                        <app-button :button-text="$t('words.financial_sector')" @click.native="nuxtLinkJump('/solution-financial')"></app-button>
                                        <app-button :button-text="$t('words.mobile_game')" style="margin-left:30px;" @click.native="nuxtLinkJump('/solution-mobile-game')"></app-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="phone_show width_95 margin_top_4 margin_auto">
            <!-- games的box -->
            <div class="position_relative">
                <img src="../../static/img/index_mobile/overseas-bg-02.png" class="width_100" alt>
                <img src="../../static/img/index_mobile/overseas-img-02.png" class="width_90 pcs" alt>
            </div>
            <!-- text -->
            <div class="mobile_h3_font classmobile_oversea_title text_center">{{$t('words.testing_solution')}} </div>
            <div class="mobile_sub_title game_desc width_80 margin_auto margin_top_20 text_center">
                {{$t('words.testing_platform')}} 
                {{$t('words.testing_system')}} 
                {{$t('words.mobile_applications1')}} 
                {{$t('words.mobile_internet')}}  
            </div>
            <div class="margin_top_20 width_80 margin_auto display_flex flex_jusify_space">
                <app-button :button-text="$t('words.financial_sector')" @click.native="nuxtLinkJump('/solution-financial')"></app-button>
                <app-button :button-text="$t('words.mobile_game')" @click.native="nuxtLinkJump('/solution-mobile-game')"></app-button>
            </div>
        </div>
    </div>
</template>

<script>
import bus from "../../util/bus";
import appButton from "../../components/button";

export default {
    props: {
        showDocument: {
            type: Boolean,
            default: false
        }
    },
    components: {
        appButton
    },
    computed:{
        showcp(){
            return this.$store.state.lang == 'e_n'
        },
    },
    mounted() {
        // this.whatchScroll();
    },
    methods: {
        // whatchScroll(){
        //     bus.$on('windowScroll',(v)=>{
        //         console.log("我滚到这里来了"+v);
        //     })
        // }
    }
};
</script>
<style lang='less'>
.mobile_box {
    margin-top: 140px;
}
.mobile_fix_box {
    .phone_show {
        .game_desc {
            line-height: 24px;
        }
        .classmobile_oversea_title {
            margin-top: 60px;
        }
    }
}
</style>