<template>
    <!-- <div class="net_solution position_relative" :class="{transition_back:showDocument}">
        <div class="net_text_box pcs width_45 text_center">
            <model-desc class="transform_duration1 transilateY2" desc="全网流量聚合营销解决方案" ></model-desc>
            <div class="app_font sub_title transform_duration1 transilateY1">
                TB 网盟，拥有高质量自有流
                量，网盟流量，覆盖全网效果流量渠道
                <br>以CPA、CPI、CPL为主要结算方式，服务于数百家广告主，提供SDK，API等多种渠道接入方式，高效获取真实用户
            </div>
            <app-button button-text="了解更多" class="green margin_top_20 transform_duration15 transilateY1"></app-button>
        </div>
        <img src="../../static/img/adv/2.png" class="width_100 transform_duration2 transilateX2" alt>
    </div>-->
    <div class="net_solution_div">
        <div class="pc_show">
            <div class="net_solution position_relative" style="background:rgba(250, 250, 252, 1.0)">
                <div class="net_text_box pcs width_60 text_center">
                    <h2 class="h1_font transform_duration1 transilateY1">{{$t('words.one_stop_integrated_mark')}}</h2>
                    <div class="app_font sub_title transform_duration15 transilateY1 margin_top_20">
                        <span>{{$t('words.TB_network_with_high_quality')}}</span>
                        <br>
                        <span>{{$t('words.working_by_CPA_CPI_and_CPL_met')}}</span>
                    </div>
                    <!-- <a href="" class="btn banner-btn">了解更多</a> -->
                    <!-- <a class="glo_button  app_button green  transform_duration15 transilateY2 margin_top_20"  v-text="$t('')"></a> -->
                    <app-button
                        :button-text="$t('words.learn_more')"
                        class="transform_duration15 transilateY2 margin_top_20"
                        @click.native="nuxtLinkJump('/media')"
                    ></app-button>
                </div>
                <img
                    src="../../static/img/att/2.png"
                    class="width_100"
                    style="vertical-align: bottom;"
                    alt
                >
                <div class="pcs width_30 adverllbox">
                    <img
                        src="../../static/img/att/2_03.png"
                        class="width_100 transform_duration2 transilateY2"
                        alt
                    >
                </div>
            </div>
        </div>
        <div class="phone_show margin_top_20">
            <div class="text_center">
                <div class="mobile_h3_font">
                    {{$t('words.one_stop_integrated_mark')}}
                </div>
                <div class="mobile_sub_title margin_top_10 width_90 margin_auto">
                    {{$t('words.TB_network_with_high_quality')}}
                </div>
                <app-button :button-text="$t('words.learn_more')" @click.native="nuxtLinkJump('/media')" class="margin_top_3"></app-button>
                <img src="../../static/img/att/ggz-02.png" class="width_100 margin_top_20" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import modelDesc from "../model_desc";
import appButton from "../button";

export default {
    props: {
        showDocument: {
            type: Boolean,
            default: false
        }
    },
    components: {
        modelDesc,
        appButton
    }
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.adv_head .margin_left_20p {
    margin-left: 20%;
}
/* adverllbox" style=" */
.adverllbox {
    top: auto;
    bottom: -194px;
}
.gamesboxxs {
    top: auto;
    bottom: -84px;
}
.adv_head .headimg {
    position: absolute;
    left: -20px;
    width: 60%;
    z-index: 1;
    bottom: -50px;
}
/*  */
.adv_boxx .adv_star_img {
    transition: 0.4s;
    width: 50px;
    border-radius: 40%;
    position: absolute;
}
/*  */
.net_solution {
    margin-top: -10px;
    padding-top: 0px;
}
.net_solution .net_text_box {
    top: 5%;
    height: 100px;
}
@media screen and (max-width: 1500px) {
    .adverllbox {
        top: auto;
        bottom: -154px;
    }
    .gamesboxxs {
        top: auto;
        bottom: -84px;
    }
}
</style>