<template>
    <div>
        <div class="pc_show margin_top_100">
            <!-- <div class="text_center scoll_desc">
                <h2 class="index_title">{{$t('words.mobile_applications')}}</h2>
                <div class="index_title_sub">{{$t('words.half_the_effort')}}</div>
            </div> -->
            <div class="padding_scoll_box1 position_relative">
                <img
                    src="../../static/img/games2background/index_back1.png"
                    class="width_100 transilateY3 transform_duration15"
                >
                <div
                    class="pcs glo_width_percent display_flex flex_jusify_space position_relative hover_box_index"
                    style="width:1192px;"
                >
                    <div
                        class="width_47 products_index_box position_relative transform_duration15 transilateY1"
                    >
                        <div class="products_index height_100">
                            <div
                                class="width_100 height_100 back_white pro1 position_absolute"
                                style=" transform:translatez(0px)"
                            >
                                <img
                                    src="../../static/img/computer.jpg"
                                    class="width_100"
                                >
                                <div class="products_box">
                                    <h2 class="products_box_title font_weight_600">Digital Mobile Content </h2>
                                    <div
                                        class="width_90 margin_auto  mobile_sub_title products_box_desc"
                                    >
                                        We have abundant mobile content ranging from games, videos, adult to fitness. The content is updated regularly by professional team. We also help monetize the content of third-party partners. 
                                    </div>
                                </div>
                            </div>
                            <div
                                style="transform:translatez(-1px) rotateY(180deg)"
                                class="back_white hover_back1 width_100 height_100 position_absolute"
                            >
                                <div class="width_90 margin_auto margin_top_10">
                                    <div class="text_center margin_top_20">
                                        <img
                                            src="../../static/img/index_img/2_11.png"
                                            class="width_25"
                                            alt
                                        >
                                    </div>
                                    <div class="display_flex flex_jusify_space wrop margin_top_20">
                                        <div
                                            class="width_47 text_left"
                                            @click="jump1(item)"
                                            :key="item.title"
                                            v-for="item in hover_1_text"
                                        >
                                            <div
                                                class="font_weight_600 index_title_blue"
                                                style="font-size:15px;"
                                            >{{item.title}}</div>
                                            <div
                                                class="hover_rotate_box margin_top_10 margin_bottom_3"
                                                style="font-size:14px;"
                                            >{{item.desc}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="width_47 products_index_box position_relative transform_duration15 transilateY1"
                    >
                        <div class="products_index height_100">
                            <div
                                class="width_100 height_100 pro1 position_absolute"
                                style=" transform:translatez(0px)"
                            >
                                <img
                                    src="../../static/img/camera.jpg"
                                    class="width_100"
                                >
                                <div class="products_box">
                                    <h2 class="products_box_title font_weight_600">Marketing and Advertising</h2>
                                    <div
                                         
                                        class="width_90 margin_auto products_box_desc"
                                    >
                                        With our own media buy team and publisher partners, we are able to provide high quality traffic for companies globally. You can get overseas users easily and efficiently.
                                    </div>
                                </div>
                            </div>
                            <div
                                style="transform:translatez(-1px) rotateY(180deg)"
                                class="back_white hover_back1 width_100 height_100 position_absolute"
                            >
                                <div class="width_90 margin_auto margin_top_10">
                                    <div class="text_center margin_top_20">
                                        <img
                                            src="../../static/img/index_img/2_11-02.png"
                                            class="width_25"
                                            alt
                                        >
                                    </div>
                                    <div class="display_flex flex_jusify_space wrop margin_top_20">
                                        <div
                                            class="width_47 text_left hv_box"
                                            v-for="item in hover_2_text"
                                            :key="item.title"
                                            @click="jump1(item)"
                                        >
                                            <div
                                                style="font-size:15px;"
                                                class="font_weight_600 index_title_blue"
                                            >{{item.title}}</div>
                                            <div
                                                class="hover_rotate_box margin_top_10 margin_bottom_3"
                                                style="font-size:14px;"
                                            >{{item.desc}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="phone_show width_95 margin_auto margin_top_10">
            <div class="phone_service">
                <img class="width_100" src="../../static/img/index_img/product-bg02.png" alt>
                <div class="width_70 margin_auto text_center">
                    <h2 class="padding_top_20">Digital Mobile Content</h2>
                    <div class="margin_top_20">We have abundant mobile content ranging from games, videos, adult to fitness. The content is updated regularly by professional team. We also help monetize the content of third-party partners. </div>
                </div>
                <div v-if="show_all_1" class="margin_top_20">
                    <div class="display_flex flex_align_center width_95 margin_auto mobile_item" @click="nuxtLinkJump('/'+item.route)"  v-for="(item,index) in hover_1_text" :class="{border_bottom:index < hover_1_text.length-1}" :key="item.title">
                        <img :src="item.mobile_img_icon" class="icon" alt>
                        <div class>
                            <div class="mobile_h3_font">{{item.title}}</div>
                            <div class="mobile_sub_title service_desc">{{item.desc}}</div>
                        </div>
                    </div>
                </div>
                <div class="text_center margin_top_20 padding_bottom_10">
                    <img src="../../static/img/index_mobile/product-bg07.png" @click="show_all_1=!show_all_1" :class="{rotate180:show_all_1}" class="show_all" alt="">
                </div>
            </div>
            <div class="phone_service margin_top_10">
                <img class="width_100" src="../../static/img/index_img/product-bg01.png" alt>
                <div class="width_70 margin_auto text_center">
                    <h2 class="padding_top_20">Marketing and Advertising </h2>
                    <div class="margin_top_20 mobile_sub_title">With our own media buy team and publisher partners, we are able to provide high quality traffic for companies globally. You can get overseas users easily and efficiently.</div>
                </div>
                <div v-if="show_all_2" class="margin_top_20">
                    <div class="display_flex flex_align_center width_95 margin_auto mobile_item" @click="nuxtLinkJump('/'+item.route)"  v-for="(item,index) in hover_2_text" :class="{border_bottom:index < hover_2_text.length-1}" :key="item.title">
                        <img :src="item.mobile_img_icon" class="icon" alt>
                        <div class>
                            <div class="mobile_h3_font">Marketing and Advertising</div>
                            <div class="mobile_sub_title service_desc">With our own media buy team and publisher partners, we are able to provide high quality traffic for companies globally. You can get overseas users easily and efficiently.</div>
                        </div>
                    </div>
                </div>
                <div class="text_center margin_top_20 padding_bottom_10">
                    <img src="../../static/img/index_mobile/product-bg07.png" @click="show_all_2=!show_all_2" :class="{rotate180:show_all_2}" class="show_all" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        jump1(v) {
            this.nuxtLinkJump('/' + v.route)
        },
    },
    data() {
        return {
            show_all_1:false,
            show_all_2:false,
            hover_1_text: [
                {
                    title: this.$t('words.compatibility_test'),
                    desc: this.$t('words.for_allxx'),
                    route: "compatibility",
                    mobile_img_icon:require('../../static/img/index_mobile/product-icon01.png')
                },
                {
                    title: this.$t('words.machine_debugging'),
                    desc: this.$t('words.incomplete_models'),
                    route: "tphone-remote-debug",
                    mobile_img_icon:require('../../static/img/index_mobile/product-icon02.png')
                },
                {
                    title: this.$t('words.scenario_testing'),
                    desc: this.$t('words.financial_apps'),
                    route: "scenario",
                    mobile_img_icon:require('../../static/img/index_mobile/product-icon03.png')

                },
                {
                    title: this.$t('words.pressure_test'), 
                    desc: this.$t('words.crash'), 
                    route: "load-testing",
                    mobile_img_icon:require('../../static/img/index_mobile/product-icon04.png')

                },
                {
                    title: "TROC",
                    desc: this.$t('words.the_enterprise'), 
                    route: "troc",
                    mobile_img_icon:require('../../static/img/index_mobile/product-icon04-09.png')

                }
            ],
            hover_2_text: [
                {
                    title: "TBmedia",
                    desc: this.$t('words.delivery_solution'), 
                    route: "media",
                    mobile_img_icon:require('../../static/img/index_mobile/product-icon09.png')

                },
                {
                    title: this.$t('words.advertising_alliance'), 
                    desc: this.$t('words.marketing_plan'), 
                    route: "network",
                    mobile_img_icon:require('../../static/img/index_mobile/product-icon10.png')

                },
                {
                    title: this.$t('words.advertisers'), 
                    desc: this.$t('words.quality_users'), 
                    route: "advertiser",
                    mobile_img_icon:require('../../static/img/index_mobile/ffz.png')
                },
                {
                    title: this.$t('words.the_publishers'), 
                    desc: this.$t('words.real_income'), 
                    route: "publisher",
                    mobile_img_icon:require('../../static/img/index_mobile/fbs.png')

                }
            ],

        };
    }
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
//旧代码
.pc_show {
    .padding_scoll_box1 {
        background-repeat: no-repeat;
        background-size: 42%;
        padding: 45px 0;
    }
    .padding_scoll_box1 .products_index_box {
        border-radius: 6px;
        width: 566px;
        height: 596px;
        perspective: 1000px;
    }
    .padding_scoll_box1 .products_index {
        border-radius: 6px;
        box-shadow: 0px 4px 30px 0px rgba(119, 163, 212, 0.2);
        transition-duration: 0.4s;
        transform-style: preserve-3d;
        transition-duration: 1.4s;
        -webkit-transform-style: preserve-3d;
        cursor: pointer;
    }
    .jumpbutton {
        width: 30px;
        height: 30px;
        line-height: 26px;
        text-align: center;
        color: #fff;
        font-size: 25px;
        border-radius: 50%;
        background: #64d7a4;
        right: 90px;
        box-shadow: 3px 3px 6px #ddd;
        bottom: 70px;
    }
    .padding_scoll_box1 .products_index_box:hover .products_index {
        // transform: rotateY(180deg);
    }
    .padding_scoll_box1 .products_index .products_box {
        margin-top: -8px;
        background: #fff;
        padding: 60px 0;
        text-align: center;
    }
    .padding_scoll_box1 .products_index .products_box .products_box_title {
        font-size: 20px;
        color: #191e25;
    }
    .padding_scoll_box1 .products_index .products_box .products_box_desc {
        margin-top: 30px;
        color: #5d6570;
        font-size: 14px;
    }
}
.phone_show{
    .show_all{
        width:30px;
        &.rotate180{
            transform: rotate(180deg);
        }
    }
    .phone_service{
        box-shadow: 0px 0px 10px rgba(100,100,100,0.3);
    }
    .icon{
        width:30px;
        padding-right: 16px;
    }
    .service_desc{
        margin-top:5px;
    }
    .mobile_item{
        margin-top: 30px;
        padding-bottom: 30px;
    }
    .border_bottom{
        border-bottom: 1px dashed #d5e3f3;
    }
}
.index_title_blue:hover{
    color: #2472e7;
}
</style>