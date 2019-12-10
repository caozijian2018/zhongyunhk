<template>
    <div class="net-map-div">
        <div class="pc_show">
            <div class="net-map" style="padding-bottom:50px;">
                <div class="glo_width_percent margin_auto text_center">
                    <h2 class="transform_duration15 transilateY1">{{$t('words.tb_network')}}</h2>
                    <div
                        class="sub_title width_50 margin_auto margin_top_20 transform_duration15 transilateY2"
                        style="margin-top:40px;margin-bottom:40px"
                    >
                        <span>{{$t('words.TB_network_with_high_quality')}}</span>
                        <br>
                        <span
                        >{{$t('words.Working_by_CPA_CPI_and_CPL_methods')}}</span>
                    </div>
                    <div
                        class="map_imgs overflow_hidden width_65 transform_duration1 transilateY1 margin_auto text_center margin_bottom_15"
                    >
                        <img src="../../static/img/network/5.png" class="float_left" alt>
                        <img src="../../static/img/network/3.png" alt>
                        <img src="../../static/img/network/4.png" class="float_right" alt>
                    </div>
                    <img
                        src="../../static/img/network/6.png"
                        class="width_100 margin_top_20 transform_duration2 transilateY1"
                        alt
                    >
                </div>
            </div>
        </div>
        <div class="phone_show">
            <div class="net-map" style="padding-bottom:50px;">
                <div class="width_90 margin_auto text_center">
                    <!-- <h2 class="transform_duration15 transilateY1" v-text="$t('')"></h2> -->
                    <!-- TB 网盟 -->
                    <div
                        class="sub_title margin_top_20 transform_duration15 transilateY2 mobile_sub_title"
                        style="margin-top:40px;margin-bottom:40px"
                    >
                         {{$t('words.TB_network_with_high_quality')}}
                         {{$t('words.Working_by_CPA_CPI_and_CPL_methods')}}
                    </div>
                    <div
                        class="map_imgs width_90 transform_duration1 transilateY1 display_flex flex_jusify_space margin_auto text_center margin_bottom_15"
                    >
                    <div class="flex_1">
                        <img src="../../static/img/network/5.png" alt>
                        <div class="h3_font">
                            CPA
                        </div>
                        <div class="mobile_sub_11_title">
                            {{$t('words.pay_by_aactivation')}}
                        </div>
                    </div>
                    <div class="flex_1">
                        <img src="../../static/img/network/3.png" alt>
                        <div class="h3_font">
                            CPI
                        </div>
                        <div class="mobile_sub_11_title">
                            {{$t('words.according_to_the_installation')}}
                        </div>
                    </div>
                    <div class="flex_1">
                        <img src="../../static/img/network/4.png" alt>
                        <div class="h3_font">
                            CPL
                        </div>
                        <div class="mobile_sub_11_title">
                            {{$t('words.Charge_by_collecting')}}
                        </div>
                    </div>
                        <!-- <img src="../../static/img/network/3.png" alt>
                        <img src="../../static/img/network/4.png" class="float_right" alt> -->
                    </div>
                    <img
                        src="../../static/img/network/6.png"
                        class="width_100 margin_top_20 transform_duration2 transilateY1"
                        alt
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num1: 50
        };
    },
    mounted() {},
    methods: {}
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.net-map-div {
    .pc_show {
        .net-map {
            .map_imgs img {
                width: 60px;
            }
            background: rgba(239, 247, 252, 1);
            padding-top: 40px;
            .map_item {
                sub {
                    vertical-align: baseline;
                }
                .map_item_title {
                    color: rgba(48, 48, 48, 1);
                    font-size: 30px;
                    font-weight: 200;
                }
                .map_item_sub {
                }
            }
        }
    }
    .phone_show{
        .net-map {
            .map_imgs img {
                width: 40px;
            }
            background: rgba(239, 247, 252, 1);
            padding-top: 40px;
            .map_item {
                sub {
                    vertical-align: baseline;
                }
                .map_item_title {
                    color: rgba(48, 48, 48, 1);
                    font-size: 30px;
                    font-weight: 200;
                }
                .map_item_sub {
                }
            }
        }
    }
}
</style>