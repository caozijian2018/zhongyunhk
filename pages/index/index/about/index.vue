<template>
    <div class="about_index" >
        <div class="about_text_div">
            <h1 class="aboutme_text h1_font text_center">{{$t('words.about_us')}}</h1>
            <p>{{$t('words.desc1')}}</p>
            <br>
            <p>{{$t('words.TestBirds_vision')}}</p>
            <br>
            <p>{{$t('words.TestBird_mission')}}</p>
            <br>
            <p>{{$t('words.TestBird_values')}}</p>
        </div>
        <div class="margin_top_20">
            <img src="../../../../static/img/about/about-1.jpg" class="width_100" alt>
        </div>
        <div class="margin_top_3" v-if="!showcp">
            <div class="text_center h1_font">{{$t('words.contact_us')}}</div>
            <div class="width_80 margin_auto display_flex flex_jusify_space margin_top_4 regions">
                <div
                    v-for="(item,index) in regions"
                    :key="item"
                    :class="{seleced:selected_index==index}"
                    @click="selected_index=index"
                >{{item}}</div>
            </div>
            <div class="margin_top_70 position_relative">
                <img :src="img_arr[selected_index].img" class="width_100" alt>
                <div :style="img_arr[selected_index].position" class="area_div">
                    <p></p>
                    <div>{{$t('words.addr')}}: {{img_arr[selected_index].address}}</div>
                    <div>{{$t('words.phone')}}:  {{img_arr[selected_index].phone}}</div>
                    <div>QQ： {{img_arr[selected_index].QQ}}</div>
                    <div>{{$t('words.email')}}: {{img_arr[selected_index].Email}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        showcp:function(){
            return this.$store.state.lang == 'e_n'
        }
    },
    data() {
        return {
            regions: [this.$t('words.southwest_district'), this.$t('words.north_district'), this.$t('words.east_district'), this.$t('words.south_district') ],
            selected_index: 0,
            img_arr: [
                {
                    img: require("../../../../static/img/about/map-1.png"),
                    address: this.$t('words.addr1'),
                    phone: "刘先生 153 2818 5669",
                    QQ: "924957891",
                    Email: "liuxiao@testbird.com",
                    position: {
                        left: "66%",
                        top: "46%"
                    }
                },
                {
                    img: require("../../../../static/img/about/map-2.png"),
                    address: this.$t('words.addr4'),
                    phone: "刘先生 155 1037 9835",
                    QQ: "568938413",
                    Email: "liuxinghan@testbird.com",
                    position: {
                        left: "58%",
                        top: "41%"
                    }
                },
                {
                    img: require("../../../../static/img/about/map-3.png"),
                    address: this.$t('words.addr3'),
                    phone: "李女士 159 0088 5049",
                    QQ: "3038387066",
                    Email: "liyibing@testbird.com",
                    position: {
                        left: "50%",
                        top: "51%"
                    }
                },
                {
                    img: require("../../../../static/img/about/map-4.png"),
                    address: this.$t('words.addr2'),
                    phone: "张先生 135 4077 0984",
                    QQ: "1873436847",
                    Email: "zhangyunfeng@testbird.com",
                    position: {
                        left: "51%",
                        top: "34%"
                    }
                }
            ]
        };
    }
};
</script>
<style lang='less'>
.about_index {
    .regions {
        & > div {
            padding-bottom: 10px;
            border-bottom: 2px solid transparent;
            &.seleced,
            &:hover {
                border-color: #0070f0;
            }
        }
    }
    .area_div {
        padding: 14px 30px;
        background: rgba(0, 112, 240, 0.6);
        color: #fff;
        position: absolute;
        & > div {
            margin-bottom: 6px;
        }
        p {
            width: 15px;
            height: 20px;
            background-image: url(../../../../static/img/company/sprite-base@2x.png);
            background-position: -0px -26px;
            position: absolute;
            top: 50%;
            background-size: 100px;
            left: -15px;
        }
    }
    .about_text_div {
        color: #191e25;
        .aboutme_text {
            margin: 40px 0;
        }
        p {
            font-size: 14px;
            line-height: 1.75;
        }
    }
    .margin_top_70 {
        margin-top: 71px;
    }
}
</style>