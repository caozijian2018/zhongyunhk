<template>
    <div class="team_box_box">
        <div class="pc_show">
            <div class="team_box position_relative margin_bottom_3">
                <div class="overflow_hidden">
                    <img
                        src="../../static/img/network/7.png"
                        class="float_right width_40 transform_duration15 transilateX1"
                    >
                    <div class="left_text width_25">
                        <img
                            src="../../static/img/fbs/6.png"
                            class="transform_duration15 transilateX-1"
                            style="width:60px;"
                            alt
                        >
                        <h2
                            class="margin_top_10 transform_duration15 transilateY2 margin_bottom_1 text_left h1_font"
                        >{{$t('words.professional_service')}}</h2>
                        <div class="sub_title transform_duration2 transilateY3">
                            <span>{{$t('words.Provide_real_industry')}}</span>
                            <br>
                            <span>{{$t('words.Maximize_the_roi_of')}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="phone_show margin_bottom_4">
            <div class="margin_top_3">
                <div class="overflow_hidden">
                    <img
                        src="../../static/img/network/7.png"
                        class="width_80 transform_duration15 float_right transilateX2"
                        alt
                    >
                </div>
                <div class="text_center margin_top_20 transform_duration15 transilateY1">
                    <div class="mobile_h3_font">{{$t('words.professional_service')}}</div>
                    <div
                        class="mobile_sub_title line-height_20 margin_top_1"
                    >{{$t('words.Provide_real_industry')}}
                        <br>{{$t('words.Maximize_the_roi_of')}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import modelDesc from "../model_desc";
export default {
    components: {
        modelDesc
    }
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.team_box_box {
    .pc_show {
        .team_box {
            .left_text {
                position: absolute;
                left: 20%;
                top: 40%;
            }
        }
    }
    .phone_show {
    }
}
</style>