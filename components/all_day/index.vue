<template>
    <div class="all_div">
        <div class="pc_show">
            <div class="hour24_box position_relative" style="margin-top:-130px;">
                <div>
                    <img
                        src="../../static/img/fbs/3.png"
                        class="width_40 transform_duration15 transilateX-2"
                        alt
                    >
                    <div class="right_text transform_duration15 transilateX3">
                        <img src="../../static/img/fbs/7.png" style="width:60px;" alt>
                        <div
                            class="text_left font_weight_600 h1_font margin_top_10 margin_bottom_1"
                        >{{this.showcp ? "Professional content production team" : $t('words.hours_profe')}}</div>
                        <div class="sub_title">
                            <div v-if="showcp">
                                Professional photographers regularly update the video library，cover more than 12 languages
                            </div>
                            <div v-else>
                                <span>{{$t('words.provide_you_with')}}</span>
                                <br>
                                <span>{{$t('words.ersonalized_se')}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="phone_show margin_top_20">
            <div>
                <img
                    src="../../static/img/fbs/3.png"
                    class="width_90 transform_duration15 transilateX-2"
                    alt
                >
                <div class="text_center margin_top_20 transform_duration1 transilateY2">
                    <div class="mobile_h3_font">
                        {{this.showcp ? "Professional content production team" : $t('words.hours_profe')}}
                    </div>
                    <div class="mobile_sub_title margin_top_10 line-height_20">
                        <div v-if="showcp">
                            Professional photographers regularly update the video library，cover more than 12 languages
                        </div>
                            <div v-else>
                                <span>{{$t('words.provide_you_with')}}</span>
                                <br>
                                <span>{{$t('words.ersonalized_se')}}</span>
                        </div>
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
.hour24_box {
    .right_text {
        position: absolute;
        right: 400px;
        top: 40%;
    }
}
</style>