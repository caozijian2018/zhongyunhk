<template>
    <div class="media_product_div">
        <div class="pc_show">
            <div class="media_box">
                <div class="glo_width_percent margin_auto padding_top_30 text_center">
                    <model-desc
                        :desc="$t('words.Product_information_display')"
                        class="margin_top_20 margin_bottom_4 transform_duration15 transilateY1"
                    ></model-desc>
                    <div class="position_relative margin_top_20">
                        <div
                            class="position_absolute left_0 top_0 text_left width_30 transform_duration1 transilateX-1"
                        >
                            <img src="../../static/img/TB-media_12.png" class="star" alt>
                            <h3 class="margin_bottom_1">{{$t('words.Global_high_qua')}}</h3>
                            <div class="sub_title" style="line-height:22px;font-size:12px;">
                                {{$t('words.cooperate_with_her')}}
                                <br>{{$t('words.cover_200_countries')}}
                                <br>{{$t('words.comprehensive_user_portrait')}}
                            </div>
                        </div>
                        <div
                            class="position_absolute right_0 top_0 text_right width_30 transform_duration15 transilateX1"
                        >
                            <img src="../../static/img/TB-media_12-02.png" class="star" alt>
                            <h3 class="margin_bottom_1">{{$t('words.Senior_mediabuy_team')}}</h3>
                            <div class="sub_title" style="line-height:22px;font-size:12px;">
                                {{$t('words.More_than_5_years_of')}}
                                <br>{{$t('words.Professional_service')}}
                                <br>{{$t('words.maximize_the_ROI_of')}}
                            </div>
                        </div>
                        <div
                            class="position_absolute left_0 bottom_0 text_left width_30 transform_duration2 transilateX-2"
                        >
                            <img src="../../static/img/TB-media_12-04.png" class="star" alt>
                            <h3 class="margin_bottom_1">{{$t('words.customized_creative_design')}}</h3>
                            <div class="sub_title" style="line-height:22px;font-size:12px;">
                                {{$t('words.deep_understanding_of')}}
                                <br>{{$t('words.Customized_advertising')}}
                                <br>{{$t('words.accurately_matches_the')}}
                            </div>
                        </div>
                        <div
                            class="position_absolute right_0 bottom_0 text_right width_30 transform_duration2 transilateX3"
                        >
                            <img src="../../static/img/TB-media_12-05.png" class="star" alt>
                            <h3 class="margin_bottom_1">{{$t('words.accurate_performance_marketing')}}</h3>
                            <div
                                class="sub_title"
                                style="line-height:22px;font-size:12px;"
                            >{{$t('words.Utilize_the')}}
                                <br>{{$t('words.accurate_user')}}
                                <br>{{$t('words.help_developers_to')}}
                            </div>
                        </div>
                        <img src="../../static/img/TB-media_13.png" class="height_400px" alt>
                    </div>
                </div>
            </div>
        </div>
        <div class="phone_show">
            <div class="padding_top_30 padding_bottom_30">
                <div class="mobile_h2_font text_center">{{$t('words.Product_information_display')}}</div>
                <div class="margin_top_20 padding_right_30">
                    <div class="display_flex flex_align_center margin_bottom_2">
                        <div class="width_30 text_center">
                            <img src="../../static/img/TB-media_12.png" class="width_70 margin_top_10" alt="">
                        </div>
                        <div class="flex_1">
                            <div class="mobile_h3_font">
                                {{$t('words.Global_high_qua')}}
                            </div>
                            <div class="margin_top_10 mobile_sub_title">
                                {{$t('words.cooperate_with_her')}}
                                {{$t('words.cover_200_countries')}}
                                {{$t('words.comprehensive_user_portrait')}}
                            </div>
                        </div>
                    </div>
                    <div class="display_flex flex_align_center margin_bottom_2">
                        <div class="width_30 text_center">
                            <img src="../../static/img/TB-media_12-02.png" class="width_70 margin_top_10" alt="">
                        </div>
                        <div class="flex_1">
                            <div class="mobile_h3_font">
                                {{$t('words.Senior_mediabuy_team')}}
                            </div>
                            <div class="margin_top_10 mobile_sub_title">
                                {{$t('words.More_than_5_years_of')}}
                                <br>{{$t('words.Professional_service')}}
                                <br>{{$t('words.maximize_the_ROI_of')}}
                            </div>
                        </div>
                    </div>
                    <div class="display_flex flex_align_center margin_bottom_2">
                        <div class="width_30 text_center">
                            <img src="../../static/img/TB-media_12-04.png" class="width_70 margin_top_10" alt="">
                        </div>
                        <div class="flex_1">
                            <div class="mobile_h3_font">
                                {{$t('words.customized_creative_design')}}
                            </div>
                            <div class="margin_top_10 mobile_sub_title">
                                 {{$t('words.deep_understanding_of')}}
                                <br>{{$t('words.Customized_advertising')}}
                                <br>{{$t('words.accurately_matches_the')}}
                            </div>
                        </div>
                    </div>
                    <div class="display_flex flex_align_center">
                        <div class="width_30 text_center">
                            <img src="../../static/img/TB-media_12-05.png" class="width_70 margin_top_10" alt="">
                        </div>
                        <div class="flex_1">
                            <div class="mobile_h3_font">
                                {{$t('words.accurate_performance_marketing')}}
                            </div>
                            <div class="margin_top_10 mobile_sub_title">
                                {{$t('words.Utilize_the')}}
                                <br>{{$t('words.accurate_user')}}
                                <br>{{$t('words.help_developers_to')}}
                            </div>
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
    components: {
        modelDesc
    },
    data() {
        return {
            product_list:[{
                img:require("../../static/img/TB-media_12.png"),
                title:"全球优质流量",
                desc:""
            }]
        }
    },
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.media_product_div {
    .pc_show {
        .media_box {
            padding-bottom: 75px;
            .lefttopbox {
                left: 0;
                top: 0;
            }
            .lefttopbox {
                left: 0;
                top: 0;
            }
            .star {
                width: 60px;
            }
            .height_400px {
                height: 470px;
            }
        }
    }
    .phone_show {
    }
}
</style>