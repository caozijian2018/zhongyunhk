<template>
    <div class="integration_resources_box">
        <div class="pc_show">
            <div class="hour24_box margin_top_100 position_relative">
                <div>
                    <img
                        src="../../static/img/network/8.png"
                        class="width_40 transform_duration15 transilateX-2"
                        alt
                    >
                    <div class="right_text transform_duration15 transilateX3">
                        <img
                            src="../../static/img/fbs/7.png"
                            class="transform_duration2 transilateX1"
                            style="width:60px;"
                            alt
                        >
                        <h2
                            style="text-align:left"
                            class="h1_font margin_bottom_1 margin_top_10"
                        >{{$t('words.Integrate_high_quality')}}</h2>
                        <div class="sub_title">
                            <span>{{$t('words.Years_of_affiliate_co')}}</span>
                            <br>
                            <span>{{$t('words.select_high_qualit')}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="phone_show">
            <div class="margin_top_3">
                <img
                    src="../../static/img/network/8.png"
                    class="width_80 transform_duration15 transilateX-2"
                    alt
                >
                <div class="text_center margin_top_20 transform_duration15 transilateY1">
                    <div class="mobile_h3_font">{{$t('words.Integrate_high_quality')}}</div>
                    <div class="mobile_sub_title line-height_20 margin_top_1 ">
                        {{$t('words.Years_of_affiliate_co')}} <br> {{$t('words.select_high_qualit')}}
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
    }
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