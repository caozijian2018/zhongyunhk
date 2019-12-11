<template>
    <div class="game_box">
        <div class="overflow_hidden game pc_show">
            <div class="go_to_sea_box position_relative">
                <img
                    src="../../static/img/games2background/index_back2.png"
                    class="width_100 transform_duration15 transilateX4"
                    alt
                >
                <div
                    class="glo_width_percent height_100 pcs flex_align_center flex_jusify_space display_flex"
                >
                    <!-- 左面的出海描述 -->
                    <div class="left_box transform_duration1 transilateY3">
                        <h2 class="go_to_sea_title h1_font">ABOUT US</h2>
                        <div class="go_to_sea_desc">
                            Founded in 2016, Zhongyun HK Limited <br>
                            is a dynamic innovative company. Its founders are <br>
                             from Qinghua University, Hong Kong University of<br>
                              Science and Technology and China University of Technology,<br>
                               and have working experience in Google, Tencent and other major companies.<br>
                                We know the time of trend well, and always keep abreast with it.<br>
                                 Zhongyun HK Limited emphasizes the importance of technology.<br>
                                  With technology, we are able to provide colorful <br>
                                  applications and content to netizens wordwide. <br>
                            <div class="go_to_sea_button_box">
                                <!-- <a class="btn banner-btn">TBmedia</a> -->
                                <!-- <a class="glo_button app_button green" @click="nuxtLinkJump('/media')">TBmedia</a>
                                <a
                                    class="glo_button app_button green"
                                    style="margin-left:30px;display:inline-block;"
                                    @click="nuxtLinkJump('/network')"
                                >{{$t('words.advertising_alliance')}} </a> -->
                            </div>
                        </div>
                    </div>
                    <!-- 右边的球 -->
                    <div class="right_box position_relative transform_duration15 transilateY4">
                        <div class="pcs rightbox_game" style="width:500px;top:45%;height:500px;">
                            <img
                                class="pcs width_40 center_"
                                src="../../static/img/index_img/overseas-01.png"
                                alt
                            >
                            <img
                                class="pcs width_50 center_ nebula_1"
                                src="../../static/img/index_img/overseas-02.png"
                                alt
                            >
                            <img
                                class="pcs width_70 center_ nebula_2"
                                src="../../static/img/index_img/overseas-03.png"
                                alt
                            >
                        </div>

                        <img
                            class="satellite star_fade"
                            :class="['satellite'+(index+1),'star_fade_'+index]"
                            v-for="(img_src,index) in star_img_arr"
                            :key="index"
                            :src="img_src"
                            alt
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="phone_show width_95 margin_top_3 margin_auto">
            <!-- games的box -->
            <div class="position_relative">
                <img src="../../static/img/index_mobile/overseas-bg.png" class="width_100" alt>
                <img src="../../static/img/index_mobile/overseas-img.png" class="width_90 pcs" alt>
            </div>
            <!-- text -->
            <div class="mobile_h3_font classmobile_oversea_title text_center">ABOUT US</div>
            <div class="mobile_sub_title game_desc width_80 margin_auto margin_top_20 text_center">
                Founded in 2016, Zhongyun HK Limited 
                is a dynamic innovative company. Its <br>
                founders are from 
                Qinghua University, Hong Kong University<br>
                 of Science and Technology and China University <br>
                 of Technology, and have working experience in Google,<br>
                  Tencent and other major companies. We know the time of trend well,<br>
                   and always keep abreast with it. Zhongyun HK Limited emphasizes the importance of technology.<br>
                    With technology, we are able to provide colorful<br>
                     applications and content to netizens wordwide. <br>
            </div>
            <div class="margin_top_20 width_80 margin_auto display_flex flex_jusify_space">
              <app-button button-text="TBmedia" @click.native="nuxtLinkJump('/media')"></app-button>
              <app-button :button-text="$t('words.marketingsolutions')" @click.native="nuxtLinkJump('/network')"></app-button>
            </div>
        </div>
    </div>
</template>

<script>
import appButton from "../button"
export default {
    components:{
      appButton
    },
    props: {
        showDocument: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            rubberBand_index: -1,
            star_img_arr: [
                require("../../static/img/games2background/1.png"),
                require("../../static/img/games2background/2.png"),
                require("../../static/img/games2background/3.png"),
                require("../../static/img/games2background/4.png"),
                require("../../static/img/games2background/5.png"),
                require("../../static/img/games2background/6.png"),
                require("../../static/img/games2background/7.png"),
                require("../../static/img/games2background/8.png"),
                require("../../static/img/games2background/9.png"),
                require("../../static/img/games2background/10.png"),
                require("../../static/img/games2background/11.png"),
                require("../../static/img/games2background/12.png"),
                require("../../static/img/games2background/13.png"),
                require("../../static/img/games2background/14.png"),
                require("../../static/img/games2background/15.png")
            ]
        };
    }
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.game_box {
    .phone_show {
        .game_desc {
            line-height: 24px;
        }
        .classmobile_oversea_title {
            margin-top: 60px;
        }
    }
    .pc_show {
        .go_to_sea_box {
            margin-top: 180px;
        }
        .go_to_sea_box .go_to_sea_button_box {
            margin-top: 62px; /* height:100px; */
        }
        .go_to_sea_box .left_box .go_to_sea_title {
            margin-bottom: 30px;
        }
        .go_to_sea_box .left_box .go_to_sea_desc {
            color: #5d6570;
            line-height: 28px;
        }
        .go_to_sea_box .right_box {
            margin-left: 10px;
            width: 690px;
            height: 640px;
            right: -80px;
        }
        .go_to_sea_box .right_box .center_ {
            transform: translate(-50%, -50%);
        }
        .go_to_sea_box .right_box .satellite {
            position: absolute;
            width: 50px;
        }
        .go_to_sea_box .right_box .satellite1 {
            left: 250px;
            top: 0px;
        }
        .go_to_sea_box .right_box .satellite2 {
            left: 351.68416077px;
            top: 21.61363559px;
        }
        .go_to_sea_box .right_box .satellite3 {
            left: 435.78620637px;
            top: 82.71734841px;
        }
        .go_to_sea_box .right_box .satellite4 {
            left: 490.7906417px;
            top: 162.85698817px;
        }
        .go_to_sea_box .right_box .satellite5 {
            left: 498.63047384px;
            top: 276.13211582px;
        }
        .go_to_sea_box .right_box .satellite6 {
            left: 466.50635095px;
            top: 375px;
        }
        .go_to_sea_box .right_box .satellite7 {
            left: 396.94631307px;
            top: 452.25424859px;
        }
        .go_to_sea_box .right_box .satellite8 {
            left: 301.9779227px;
            top: 494.53690018px;
        }
        .go_to_sea_box .right_box .satellite9 {
            left: 198.0220773px;
            top: 494.53690018px;
        }
        .go_to_sea_box .right_box .satellite10 {
            left: 94.71305493px;
            top: 458.23031018px;
        }
        .go_to_sea_box .right_box .satellite11 {
            left: 33.49364905px;
            top: 375px;
        }
        .go_to_sea_box .right_box .satellite12 {
            left: 1.36952616px;
            top: 276.13211582px;
        }
        .go_to_sea_box .right_box .satellite13 {
            left: 12.23587093px;
            top: 172.74575141px;
        }
        .go_to_sea_box .right_box .satellite14 {
            left: 64.21379363px;
            top: 82.71734841px;
        }
        .go_to_sea_box .right_box .satellite15 {
            left: 148.31583923px;
            top: 21.61363559px;
        }
        .swiper-container.index_swiper.swiper-container-horizontal.swiper3 {
            height: 120px;
        }
        .swiper-container.index_swiper.swiper-container-horizontal.swiper3
            .swiper-slide {
            width: 100%;
        }

        @media screen and (min-width: 1500px) {
            .rightbox_game {
                left: 41%;
            }
        }
        @media screen and (max-width: 1500px) {
            .rightbox_game {
                left: 40%;
            }
        }

        @keyframes fade_star {
            from {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        /* fade */
        .star_fade {
            animation-name: fade_star;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }

        .star_fade_0 {
            animation-delay: 3s;
            animation-duration: 3s;
        }
        .star_fade_1 {
            animation-delay: 1s;
            animation-duration: 5s;
        }
        .star_fade_2 {
            animation-delay: 0.4s;
            animation-duration: 7s;
        }
        .star_fade_3 {
            animation-delay: 1s;
            animation-duration: 3s;
        }
        .star_fade_4 {
            animation-delay: 2s;
            animation-duration: 5s;
        }
        .star_fade_5 {
            animation-delay: 1s;
            animation-duration: 7s;
        }
        .star_fade_6 {
            animation-delay: 1s;
            animation-duration: 3s;
        }
        .star_fade_7 {
            animation-delay: 1s;
            animation-duration: 5s;
        }
        .star_fade_8 {
            animation-delay: 1s;
            animation-duration: 7s;
        }
        .star_fade_9 {
            animation-delay: 1s;
            animation-duration: 3s;
        }
        .star_fade_10 {
            animation-delay: 1s;
            animation-duration: 5s;
        }
        .star_fade_11 {
            animation-delay: 1s;
            animation-duration: 7s;
        }
        .star_fade_12 {
            animation-delay: 1s;
            animation-duration: 3s;
        }
        .star_fade_13 {
            animation-delay: 1s;
            animation-duration: 5s;
        }
        .star_fade_14 {
            animation-delay: 1s;
            animation-duration: 7s;
        }

        /* 动画 */
        @keyframes rotates_ {
            from {
                transform: rotate(0);
                transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
                transform: translate(-50%, -50%) rotate(720deg);
            }
        }
        @keyframes rotates_2 {
            from {
                transform: rotate(0);
                transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
                transform: translate(-50%, -50%) rotate(-720deg);
            }
        }
        .nebula_1 {
            animation-name: rotates_;
            animation-duration: 10s;
            animation-timing-function: linear;
            /* animation-direction:alternate; */
            animation-iteration-count: infinite;
        }
        .nebula_2 {
            animation-name: rotates_2;
            animation-duration: 20s;
            animation-timing-function: linear;
            /* animation-direction:alternate; */
            animation-iteration-count: infinite;
        }
    }
}
</style>