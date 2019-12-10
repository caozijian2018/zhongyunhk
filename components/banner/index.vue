<template>
    <div>
        <div class="head_banner pc_show">
            <el-carousel
                :height="swiper_height"
                @change="changeSwiper"
                :interval="119000"
                arrow="never"
            >
                <!--  -->
                <el-carousel-item>
                    <div
                        class="height_100 display_flex flex_jusify_space banner"
                        :class="{recovery_location:current_swiper_index == 0}"
                    >
                        <div class="flex_1 height_100 display_flex flex_end">
                            <div class="glo_width_percent height_100 text_left">
                                <h1
                                    class="banner_img_left_text transiform_200"
                                    style="font-size:27px;"
                                >{{$t('words.banner1_1')}}<br>{{$t('words.banner1_2')}}</h1>
                                <app-button
                                    class="transiform_100 margin_top_100"
                                    @click.native="nuxtLinkJump('https://jinshuju.net/f/sXSj7B', true)"
                                    :button-text="$t('words.click_to_download')"
                                ></app-button>
                            </div>
                        </div>
                        <div class="flex_1 height_100 overflow_hidden position_relative">
                            <img
                                src="../../static/img/banner/banner-bg.png"
                                class="width_100 transiform_100"
                                alt
                            />
                            <img
                                src="../../static/img/banner/banner-img05.png"
                                class="width_60 img1_position transiform_300"
                                alt
                            />
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div
                        class="height_100 display_flex flex_jusify_space banner"
                        :class="{recovery_location:current_swiper_index == 1}"
                    >
                        <div class="flex_1 height_100 display_flex flex_end">
                            <div class="glo_width_percent height_100 text_left">
                                <h1 class="banner_img_left_text transiform_200">{{$t('words.overseas_marketing1')}}</h1>
                                <h3 class="banner_img_left_text2 transiform_200">{{$t('words.omnimediamarketing_platform')}}</h3>
                                <app-button
                                    class="transiform_100 margin_top_100"
                                    @click.native="nuxtLinkJump('/media')"
                                    :button-text="$t('words.on_the_understanding')"
                                ></app-button>
                            </div>
                        </div>
                        <div class="flex_1 height_100 overflow_hidden position_relative">
                            <img
                                src="../../static/img/banner/banner-bg.png"
                                class="width_100 transiform_100"
                                alt
                            />
                            <img
                                src="../../static/img/banner/banner-img02.png"
                                class="width_60 img2_position transiform_300"
                                alt
                            />
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div
                        class="height_100 display_flex flex_jusify_space banner"
                        :class="{recovery_location:current_swiper_index == 2}"
                    >
                        <div class="flex_1 height_100 display_flex flex_end">
                            <div class="glo_width_percent height_100 text_left">
                                <h1 class="banner_img_left_text transiform_200">{{$t('words.test_expert')}}</h1>
                                <h3
                                    class="banner_img_left_text2 transiform_200"
                                >{{$t('words.tolaunch')}}</h3>
                                <app-button
                                    class="transiform_100 margin_top_100"
                                    @click.native="nuxtLinkJump('/mobile-internet-testing-expert')"
                                    :button-text="$t('words.start_testing')"
                                ></app-button>
                            </div>
                        </div>
                        <div class="flex_1 height_100 overflow_hidden position_relative">
                            <img
                                src="../../static/img/banner/banner-bg.png"
                                class="width_100 transiform_100"
                                alt
                            />
                            <img
                                src="../../static/img/banner/banner-img01.png"
                                class="width_60 img1_position transiform_300"
                                alt
                            />
                        </div>
                    </div>
                </el-carousel-item>
                
            </el-carousel>
        </div>
        <div class="head_banner_phone phone_show margin_bottom_3">
            <el-carousel height="360px" arrow="never" indicator-position="outside">
                <el-carousel-item>
                    <div class="position_relative text_center">
                        <img
                            src="../../static/img/index_mobile/banner-bg.png"
                            class="transiform_100 width_95 margin_left_5p"
                            alt
                        />
                        <img
                            src="../../static/img/index_mobile/banner-img05.png"
                            class="pcs width_60"
                            style="top:120px;"
                            alt
                        />
                        <h1 class="banner_img_left_text" style="font-size:19px;">{{$t('words.banner1_1')}} <br> {{$t('words.banner1_2')}}</h1>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="position_relative text_center">
                        <img
                            src="../../static/img/index_mobile/banner-bg.png"
                            class="transiform_100 width_95 margin_left_5p"
                            alt
                        />
                        <img
                            src="../../static/img/index_mobile/banner-img02.png"
                            class="pcs width_80"
                            style="top:100px;"
                            alt
                        />
                        <h1 class="banner_img_left_text">{{$t('words.overseas_marketing1')}}</h1>
                        <h3 class="banner_img_left_text2">{{$t('words.omnimediamarketing_platform')}}</h3>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="position_relative text_center">
                        <img
                            src="../../static/img/index_mobile/banner-bg.png"
                            class="transiform_100 width_95 margin_left_5p"
                            alt
                        />
                        <img
                            src="../../static/img/index_mobile/banner-img01.png"
                            class="pcs width_60"
                            style="top:120px;"
                            alt
                        />
                        <h1 class="banner_img_left_text">{{$t('words.test_expert')}}</h1>
                        <h3 class="banner_img_left_text2">{{$t('words.tolaunch')}}</h3>
                    </div>
                </el-carousel-item>
                
            </el-carousel>
        </div>
    </div>
</template>

<script>
import isPc from "../../util/get_pc_or_phone";
import appButton from "../../components/button";
import getInnerWidth from "../../util/get_width";
//getPcOrPhone
export default {
    components: {
        appButton
    },
    data() {
        return {
            pc_banner: "",
            banner_height: "0px",
            current_swiper_index: "",
            swiper_height: "0px",
            swiper_mobile_height: ""
        };
    },
    mounted() {
        this.pc_phone();
        this.watchWidth();
    },
    methods: {
        // getmobile() {
        //     this.$nextTick(()=>{
        //         var heightCss = window.getComputedStyle(this.$refs.mobile_banner).height;
        //         this.swiper_mobile_height = heightCss;
        //     })
        // },
        changeSwiper(i) {
            this.current_swiper_index = i;
        },
        watchWidth() {
            window.addEventListener("resize", () => {
                this.pc_phone();
            });
        },
        pc_phone() {
            this.swiper_height = getInnerWidth() / 3 + "px";
            // this.getmobile()
        }
    }
};
</script>

<style lang='less'>
@import "../../assets/css/glo";
// 移动端
.head_banner_phone {
    .is-active {
        .el-carousel__button {
            background: rgba(36, 114, 231, 1);
        }
    }
    .width_95 {
        width: 95%;
    }
    .margin_left_5p {
        margin-left: 5%;
    }
    .banner_img_left_text {
        margin-top: 50px;
        margin-bottom: 16px;
        font-size: 28px;
        font-weight: 400;
        color: #191e25;
    }
    .banner_img_left_text2 {
        font-size: 14px;
        color: #5d6570;
    }
}
// pc端
.head_banner {
    .el-carousel__button {
        width: 38px;
        height: 4px;
        opacity: 1;
        background: #dadfe5;
    }
    .is-active {
        .el-carousel__button {
            background: rgba(36, 114, 231, 1);
        }
    }
    .banner {
        .transiform_100 {
            transform: translateX(100px);
            transition-duration: 1s;
        }
        .transiform_200 {
            transform: translateX(200px);
            transition-duration: 1s;
        }
        .transiform_300 {
            transform: translateX(300px);
            transition-duration: 1s;
        }
        .start_test_button {
            margin-top: 100px;
            width: 150px;
            height: 42px;
            line-height: 42px;
            font-size: 16px;
            border-radius: 21px;
            &:active {
                background: rgba(59, 178, 128, 1) !important;
                color: #555;
            }
            &.button-action,
            .button-action-flat {
                background-color: rgba(69, 218, 158, 1);
                border-color: rgba(69, 218, 158, 1);
            }
            & {
                box-shadow: 0 7px 0 rgba(49, 198, 138, 1);
            }
        }
        .img0_position {
            position: absolute;
            left: -15px;
            top: 165px;
        }
        .img1_position {
            position: absolute;
            left: -45px;
            top: 125px;
        }
        .img2_position {
            position: absolute;
            left: -15px;
            top: 125px;
        }
        .banner_img_left_text {
            margin-top: 154px;
            margin-bottom: 32px;
            font-size: 38px;
            font-weight: 400;
            color: #191e25;
        }
        .banner_img_left_text2 {
            font-weight: 200;
            color: #5d6570;
        }
        &.recovery_location {
            .transiform_100,
            .transiform_200,
            .transiform_300 {
                transform: translateX(0px);
            }
        }
    }
}
</style>