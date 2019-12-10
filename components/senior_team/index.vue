<template>
    <div class="team_div">
        <div class="pc_show">
            <div class="team_box position_relative" style="margin-bottom:120px;">
                <div class="overflow_hidden">
                    <img
                        src="../../static/img/fbs/2.png"
                        class="float_right width_40 transform_duration15 transilateX3"
                        alt
                    >
                    <div class="left_text">
                        <img
                            src="../../static/img/fbs/6.png"
                            class="transform_duration15 transilateX-2"
                            style="width:60px;"
                            alt
                        >
                        <div
                            class="text_left font_weight_600 h1_font margin_top_10 transform_duration1 transilateY2 margin_bottom_1"
                        >{{ this.showcp ? "Numerous content partners from the fields of games, entertainment, film and television，advertising, etc." : $t('words.dedicated_team_with')}}</div>
                        <div class="sub_title transform_duration2 transilateY3" v-if="!showcp">
                            <span>{{$t('words.Turn_your_tra')}}</span>
                            <br>
                            <span>{{$t('words.Premium_ads_hel')}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="phone_show margin_bottom_3 margin_top_20">
            <div>
                <div class="overflow_hidden">
                    <img
                        src="../../static/img/fbs/2.png"
                        class="width_90 float_right transform_duration15 transilateX2"
                        alt
                    >
                </div>

                <div class="text_center margin_top_20 transform_duration1 transilateY2">
                    <div class="mobile_h3_font ">{{$t('words.dedicated_team_with')}}</div>
                    <div class="mobile_sub_title margin_top_10  line-height_20">
                        {{$t('words.Turn_your_tra')}}
                        <br>{{$t('words.Premium_ads_hel')}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import modelDesc from "../model_desc";
export default {
    props: {
        showDocument: {
            type: Boolean,
            default: false
        }
    },
    components: {
        modelDesc
    },
    computed:{
        showcp:function(){
            return this.$store.state.lang == 'e_n'
        }
    },
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
</style>