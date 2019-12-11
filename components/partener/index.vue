<template>
    <div class="partener_box_div">
        <div class="pc_show">
            <div class="margin_top_100 partener_box padding_bottom_20">
                <model-desc desc="Partner" class></model-desc>
                <el-carousel
                    indicator-position="outside"
                    class="glo_width_percent margin_auto patner_img margin_top_20"
                    arrow="never"
                    :height="swiper_height"
                >
                    <el-carousel-item >
                        <div class="width_70 margin_auto display_flex flex_jusify_space margin_top_20">
                            <!-- <img :src="item" class="width_100"> -->
                            <img src="../../static/img/partener/logo01.gif" alt="">
                            <img src="../../static/img/partener/logo02.gif" alt="">
                            <img src="../../static/img/partener/logo03.gif" alt="">
                            <img src="../../static/img/partener/logo04.gif" alt="">
                            <!-- <img v-for="img in arr" :src="img" :key="img" style="width: 100px" alt=""> -->
                        </div>
                    </el-carousel-item>
                    <el-carousel-item >
                        <div class="width_70 margin_auto display_flex flex_jusify_space margin_top_20">
                            <!-- <img :src="item" class="width_100"> -->
                            <img src="../../static/img/partener/logo05.gif" alt="">
                            <img src="../../static/img/partener/logo06.gif" alt="">
                            <img src="../../static/img/partener/logo07.gif" alt="">
                            <img src="../../static/img/partener/logo08.gif" alt="">

                            <!-- <img v-for="img in arr" :src="img" :key="img" style="width: 100px" alt=""> -->
                        </div>
                    </el-carousel-item>
                    <el-carousel-item >
                        <div class="width_70 margin_auto display_flex flex_jusify_space margin_top_20">
                            <!-- <img :src="item" class="width_100"> -->
                            <img src="../../static/img/partener/logo09.gif" alt="">
                            <img src="../../static/img/partener/logo10.gif" alt="">
                            <img src="../../static/img/partener/logo11.gif" alt="">
                            <img src="../../static/img/partener/logo12.gif" alt="">
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <!-- phone -->
        <div class="phone_show">
            <div class="width_95 margin_auto margin_top_4 partener_box ">
                <model-desc :desc="$t('words.corporate_partner')" class></model-desc>
                <el-carousel
                    indicator-position="outside"
                    class="width_100 patner_img"
                    arrow="never"
                    height="230px"
                >
                    <el-carousel-item v-for="item in mobile_partner_logo" :key="item">
                        <div class="margin_top_20">
                            <img :src="item" class="width_100">
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
import modelDesc from "../../components/model_desc";
import footerPartenerHover from "../../components/footer_partener_hover";
import getInnerWidth from "../../util/get_width";
export default {
    components: {
        modelDesc,
        footerPartenerHover
    },
    mounted() {
        this.watchWidth();
        this.pc_phone();
    },
    data() {
        return {
            swiper_height: "0px",
            partner_logo: [
                require("../../static/img/products/ad1.png"),
                require("../../static/img/products/ad2.png"),
                require("../../static/img/products/ad3.png")
            ],
            partner_logo_imgs: [
                [
                require("../../static/img/partener/logo01.gif"),
                require("../../static/img/partener/logo02.gif"),
                require("../../static/img/partener/logo03.gif"),
                ],
                [
                require("../../static/img/partener/logo04.gif"),
                require("../../static/img/partener/logo05.gif"),
                require("../../static/img/partener/logo06.gif"),
                ],
                require("../../static/img/partener/logo07.gif"),
                require("../../static/img/partener/logo08.gif"),
                require("../../static/img/partener/logo09.gif"),
                [
                require("../../static/img/partener/logo10.gif"),
                require("../../static/img/partener/logo11.gif"),
                require("../../static/img/partener/logo12.gif")
                ]
            ],
            mobile_partner_logo: [
                require("../../static/img/index_mobile/ad1.png"),
                require("../../static/img/index_mobile/ad2.png"),
                require("../../static/img/index_mobile/ad3.png")
            ]
        };
    },
    computed: {
    },
    methods: {

        watchWidth() {
            window.addEventListener("resize", () => {
                this.pc_phone();
            });
        },
        pc_phone() {
            this.$nextTick(() => {
                this.swiper_height =
                    parseInt(this.$jquery(".patner_img img").css("height")) +
                    40 +
                    "px"; // getInnerWidth()/5 + 'px';
                console.log(this.swiper_height);
                // this.mobile_swiper_height =
                // parseInt(this.$jquery(".patner_img img").css("height")) +
                // 40 +
                // "px";
            });
        }
    }
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.partener_box_div {
    .phone_show {
        background: url(../../static/img/index_mobile/products-bg.png) no-repeat;
        background-size: 103%;
        .el-carousel__button {
            width: 6px;
            height: 6px;
            opacity: 1;
            border-radius:50%;
            background: #dadfe5;
        }
        .is-active {
            .el-carousel__button {
                background: rgba(36, 114, 231, 1);
            }
        }
    }
    .pc_show {
        .partener_box {
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
            background: url(../../static/img/products/5.png) no-repeat;
            background-size: 103%;
            @media screen and (max-width:1500px){
                background-size: 133%;
            }
            .partener_img {
                border-radius: 6px;
                transition: 0.4s;
                box-shadow: 0px 0px 3px #888;
                &:hover {
                    box-shadow: 4px 4px 5px #666;
                }
            }
        }
    }
}
</style>