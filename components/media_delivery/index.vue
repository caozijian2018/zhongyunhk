<template>
    <div class="adv_div">
        <div class="pc_show">
            <div class="position_relative adv_boxx overflow_hidden">
                <div class="width_50 pcs text_center" style="top:20%;z-index:124444">
                    <h2 class="h1_font transform_duration1 transilateY1"  >{{$t('words.buying_solution_for_hero_app')}}</h2>

                    <div
                        class="margin_top_20 margin_bottom_2 sub_title transform_duration1 transilateY2"
                        style="font-size:13px;"
                    >
                        <span>{{$t('words.media_with_the_world_s_top_mobile_medi')}}</span>
                    </div>
                    <a
                        class="transform_duration15 app_button green transilateY2 glo_button"
                        v-text="$t('words.learn_more')"
                        @click="nuxtLinkJump('/network')"
                    ></a>
                    <img src alt srcset>
                </div>
                <img src="../../static/img/att/1.png" class="width_100" alt>
                <div class="pcs width_50 gamesboxxs">
                    <img
                        src="../../static/img/att/1-01.png"
                        class="width_100 transform_duration2 transilateY2"
                        alt
                    >
                </div>
                <img
                    :src="item.img_src"
                    v-for="(item,index) in star_img_arr"
                    :class="[item.cla]"
                    :key="index"
                    :style="item.sty"
                    class="star_fade adv_star_img"
                    alt
                >
            </div>
        </div>
        <div class="phone_show margin_top_3 padding_top_30">
            <div>
                <div class="width_70 margin_auto text_center">
                    <div class="mobile_h3_font">{{$t('words.buying_solution_for_hero_app')}}</div>
                    <div class="mobile_sub_title margin_top_10 line-height_20">
                        {{$t('words.media_with_the_world_s_top_mobile_medi')}}
                    </div>
                    <div class="margin_top_20 margin_bottom_3">
                        <app-button :button-text="$t('words.learn_more')" @click.native="nuxtLinkJump('/network')"></app-button>
                    </div>
                </div>
                <img src="../../static/img/att/01.png" class="vertical_middle width_100" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import modelDesc from "../model_desc";
import subTitle from "../sub_title";
import appButton from "../button";
export default {
    components: {
        modelDesc,
        subTitle,
        appButton
    },

    data() {
        return {
            rubberBand_index: -1,
            star_img_arr: [
                {
                    cla: ["transform_duration1", "transilateY1", "star_fade_0"],
                    sty: { left: "28%", top: "46%" },
                    img_src: require("../../static/img/games2background/1.png")
                },
                {
                    cla: ["transform_duration1", "transilateY1", "star_fade_1"],
                    sty: { left: "27%", top: "35%" },
                    img_src: require("../../static/img/games2background/2.png")
                },
                {
                    cla: ["transform_duration1", "transilateY1", "star_fade_2"],
                    sty: { left: "22%", top: "52%" },
                    img_src: require("../../static/img/games2background/3.png")
                },
                {
                    cla: ["transform_duration1", "transilateY1", "star_fade_3"],
                    sty: { left: "29%", top: "56%" },
                    img_src: require("../../static/img/games2background/4.png")
                },
                {
                    cla: ["transform_duration1", "transilateY1", "star_fade_4"],
                    sty: { left: "36%", top: "61%" },
                    img_src: require("../../static/img/games2background/6.png")
                },
                {
                    cla: ["transform_duration1", "transilateY1", "star_fade_5"],
                    sty: { left: "35%", top: "46%" },
                    img_src: require("../../static/img/games2background/7.png")
                },
                {
                    cla: ["transform_duration1", "transilateY1", "star_fade_6"],
                    sty: { left: "39%", top: "72%" },
                    img_src: require("../../static/img/games2background/8.png")
                },
                {
                    cla: ["transform_duration1", "transilateY1", "star_fade_7"],
                    sty: { right: "28%", top: "37%" },
                    img_src: require("../../static/img/games2background/9.png")
                },
                {
                    cla: ["transform_duration1", "transilateY1", "star_fade_8"],
                    sty: { right: "39%", top: "35%" },
                    img_src: require("../../static/img/games2background/10.png")
                },
                {
                    cla: ["transform_duration1", "transilateY1", "star_fade_9"],
                    sty: { right: "34%", top: "43%" },
                    img_src: require("../../static/img/games2background/11.png")
                },
                {
                    cla: [
                        "transform_duration1",
                        "transilateY1",
                        "star_fade_10"
                    ],
                    sty: { right: "38%", top: "50%" },
                    img_src: require("../../static/img/games2background/12.png")
                },
                {
                    cla: [
                        "transform_duration1",
                        "transilateY1",
                        "star_fade_11"
                    ],
                    sty: { right: "33%", top: "55%" },
                    img_src: require("../../static/img/games2background/13.png")
                },
                {
                    cla: [
                        "transform_duration1",
                        "transilateY1",
                        "star_fade_12"
                    ],
                    sty: { right: "28%", top: "60%" },
                    img_src: require("../../static/img/games2background/14.png")
                },
                {
                    cla: [
                        "transform_duration1",
                        "transilateY1",
                        "star_fade_13"
                    ],
                    sty: { right: "23%", top: "65%" },
                    img_src: require("../../static/img/games2background/15.png")
                }
            ]
        };
    },
    methods: {
        //     leaveImg(index){
        //         console.log(this.star_img_arr[index].sty.left);
        //     this.star_img_arr[index].sty.left = parseInt(this.star_img_arr[index].sty.left)+5*Math.random()+"%";
        //     this.star_img_arr[index].sty.top = parseInt(this.star_img_arr[index].sty.top)+5*Math.random()+"%";
        //         console.log(this.star_img_arr[index].sty.left);
        // },
    }
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.adv_div {
    .pc_show {
        .adv_boxx {
            .adv_star_img {
                transition: 0.4s;
                width: 50px;
                border-radius: 40%;
                position: absolute;
            }
        }
    }
    .phone_show{
        background: rgba(239, 247, 253, 1.0);
    }
}
</style>