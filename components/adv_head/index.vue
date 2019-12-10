<template>
    <div class="adv_head_div">
        <div class="pc_show">
            <div class="adv_head">
                <div class="display_flex flex_jusify_space flex_align_center">
                    <div class="flex_1 height_100">
                        <div class="margin_left_40p width_40">
                            <div class="h1_font">{{$t("words.one_stop_overseas_marketing")}}</div>
                            <div
                                class="margin_top_20 sub_title margin_bottom_3"
                            >{{$t('words.data_driven_all_media')}}
                                {{$t('words.performance_oriented_help_advertisers')}}
                            </div>
                            <app-button class="green" @click.native="nuxtLinkJump('/about')" :button-text="$t('words.contact_us')"></app-button>
                        </div>
                    </div>
                    <div class="flex_1 position_relative text_right">
                        <img
                            src="../../static/img/att/bg.png"
                            class="width_90 transform_duration1 transilateX2"
                            alt
                        >
                        <img
                            src="../../static/img/att/img.png"
                            class="transform_duration1 transilateX3 headimg"
                            alt
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="phone_show">
            <div>
                <div class="position_relative">
                    <div class="overflow_hidden">
                        <img
                            src="../../static/img/att/bg.png"
                            class="width_95 transform_duration1 margin_left_17 transilateX1"
                            alt
                        >
                    </div>
                    <img
                        src="../../static/img/att/img.png"
                        class="width_65 position_absolute transform_duration2 transilateX2 headimg"
                        alt
                        style="top:14%;left:18%"
                    >
                </div>
                <div class="margin_top_3 text_center width_80 margin_auto transform_duration15 transilateX1">
                    <div class="mobile_h2_font">{{$t("words.one_stop_overseas_marketing")}}</div>
                    <div class="mobile_sub_11_title margin_top_1">
                        {{$t('words.data_driven_all_media')}}
                        {{$t('words.performance_oriented_help_advertisers')}}
                         </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import appButton from "../button";
export default {
    components: {
        appButton
    }
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.adv_head_div {
    .pc_show {
        .adv_head {
            // .margin_left_20p{
            //     margin-left:20%;
            // }
            .headimg {
                position: absolute;
                left: -20px;
                width: 60%;
                z-index: 100;
                bottom: -50px;
            }
        }
    }
    .phone_show {
    }
}
</style>