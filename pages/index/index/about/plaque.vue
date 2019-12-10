<template>
    <div class="display_flex margin_top_4">
        <div class="left_title">
            <div class="title_head" v-html="is_not_e_n?'企业资质':''"></div>
            <div class="title_box">
                <div
                    v-for="(item,index) in plaque_title"
                    :class="{selected: selected_index == index}"
                    @click="selected_index=index"
                    :key="item"
                >{{item}}</div>
            </div>
        </div>
        <div class="flex_1 display_flex flex_jusify_space wrop img_big_box">
            <div class="display_flex wrop  width_90 margin_auto">
                <!--  -->
                <div class="content-block" v-for="item in img_arr[selected_index]" :key="item.desc">
                    <img :src="item.img_src" class="width_100">
                    <p>{{item.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title:"企业资质 - 移动互联测试专家",
            meta: [
                { name: 'keyword', content: '移动广告，TBMedia，TB 网盟，TB Network，海外广告平台，海外移动营销，海外应用推广，海外品牌推广，Facebook广告投放，Google广告投放，海外媒体投放，用户获取，海外广告投放平台、手机游戏测试，手游测试，手游测试工具，手游行业测试解决方案、标准兼容性测试、压力测试，云测试，云测试平台、远程真机调试，APP测试，移动应用测试，应用测试，安卓测试，Android测试，iOS测试，金融APP测试，银行APP测试，证券APP测试，场景测试，金融行业测试解决方案，TROC 移动APP自动化测试平台' },
                { name: 'description', content: 'TestBird移动互联测试专家，专注为企业提供与移动应用相关的云端测试和移动广告链条式生态服务，目前拥有针对移动广告业务的TB Media、TB 网盟及云测试服务、众测服务、TROC自动化测试平台。为全球移动互联紧密联系的企业提供成熟的行业测试和移动广告解决方案，服务行业涵盖手游、金融、电商、硬件、教育等，业务线包含港澳台、日、韩、欧美等全球市场。依托在北、上、广、深等地分部，持续服务40万开发者，助力企业提升业务效力，在全球市场释放品牌价值。' }
            ]
        }
    },
    computed:{
        is_not_e_n:function(){
            return this.$store.state.lang != 'e_n'
        }
    },
    data() {
        return {
            plaque_title: [ this.$t('words.c29'), this.$t('words.c28'), this.$t('words.c27') ],
            selected_index: 0,
            //Trophy-01.png
            img_arr: [
                [
                    {
                        img_src: require("../../../../static/img/plaque/Plaque11.png"),
                        desc:
                            this.$t('words.chengdu_city_internet')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Plaque10.jpg"),
                        desc: this.$t('words.xcellent_service_innovation_award')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Plaque09.png"),
                        desc: this.$t('words.intelligence_testing') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Plaque03.png"),
                        desc: this.$t('words.national_high_tech_enterprise') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Plaque01.png"),
                        desc: this.$t('words.game_test_center') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Plaque02.png"),
                        desc: this.$t('words.public_technology_platform')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Plaque06.png"),
                        desc: this.$t('words.entrepreneurial_enterprise') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Plaque05.png"),
                        desc: this.$t('words.small_enterprises_in_chengdu') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Plaque07.png"),
                        desc: this.$t('words.southwest_China')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Plaque08.jpg"),
                        desc: this.$t('words.cmmi_level_3_certification')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/aaa.jpg"),
                        desc: this.$t('words.aaa_credit_unit') 
                    },
                    
                ],
           
                [
                    {
                        img_src: require("../../../../static/img/plaque/Trophy-08.png"),
                        desc: 
                            this.$t('words.jinpeng_award') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Trophy-07.png"),
                        desc:
                            this.$t('words.jincha_award') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Trophy-01.png"),
                        desc:
                            this.$t('words.entrepreneurship_competition') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Trophy-02.png"),
                        desc:
                            this.$t('words.provider_of_game2015') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Trophy-03.png"),
                        desc:
                            this.$t('words.game_service_providers') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Trophy-04.png"),
                        desc:
                            this.$t('words.in_2014') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Trophy-05.png"),
                        desc:
                            this.$t('words.game_enterprises_in_sichuan') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/Trophy-06.png"),
                        desc:
                            this.$t('words.first_prize_in')
                    },
                ],
                [
                    
                    {
                        img_src: require("../../../../static/img/plaque/certificate16.png"),
                        desc:
                            this.$t('words.compatibility_test1') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate17.png"),
                        desc:
                            this.$t('words.rmobile_phone') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate18.png"),
                        desc:
                            this.$t('words.automate_testing') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate10.png"),
                        desc:
                            this.$t('words.automatic_regression_test_software') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate13.png"),
                        desc:
                            this.$t('words.tb_compatibility_test_platform_v2')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate14.png"),
                        desc:
                            "TB" + this.$t('words.rmobile_phone')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate15.png"),
                        desc:
                            this.$t('words.mobile_terminal_test_system') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate02.png"),
                        desc:
                            this.$t('words.customer_service_system_v1') 
                    },

                    {
                        img_src: require("../../../../static/img/plaque/certificate03.png"),
                        desc:
                            this.$t('words.management_system_v1') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate12.png"),
                        desc:
                            this.$t('words.compatibility_test_platform_v1')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate0.png"),
                        desc:
                            this.$t('words.cert_1') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate01.png"),
                        desc:
                            this.$t('words.cert_2') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate07.png"),
                        desc:
                            this.$t('words.cert_3') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate04.png"),
                        desc:
                            this.$t('words.c4')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate05.png"),
                        desc:
                            this.$t('words.c5') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate06.png"),
                        desc:
                            this.$t('words.c6') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate08.png"),
                        desc:
                            this.$t('words.c7') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate09.png"),
                        desc:
                            this.$t('words.c8') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate20.png"),
                        desc:
                            this.$t('words.c9')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate21.png"),
                        desc:
                            this.$t('words.c10') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate22.png"),
                        desc:
                            this.$t('words.c11') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate23.png"),
                        desc:
                            this.$t('words.c12') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate24.png"),
                        desc:
                            this.$t('words.c13')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate25.png"),
                        desc:
                            this.$t('words.c14') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate26.png"),
                        desc:
                            this.$t('words.c15')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate27.png"),
                        desc:
                            this.$t('words.c16') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate28.png"),
                        desc:
                            this.$t('words.c17') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate29.png"),
                        desc:
                            this.$t('words.c18') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate30.png"),
                        desc:
                            this.$t('words.c19')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/certificate31.png"),
                        desc:
                            this.$t('words.c20') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/aaajsxy.jpg"),
                        desc:
                            this.$t('words.c21') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/aaacxjy.jpg"),
                        desc:
                            this.$t('words.c22')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/cxjlr.jpg"),
                        desc:
                            this.$t('words.c23')
                    },
                    {
                        img_src: require("../../../../static/img/plaque/aaaj.jpg"),
                        desc:
                            this.$t('words.c24') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/cxj.jpg"),
                        desc:
                            this.$t('words.c25') 
                    },
                    {
                        img_src: require("../../../../static/img/plaque/aaajfwzl.jpg"),
                        desc:
                            this.$t('words.c26') 
                    },

                ]
            ]
        };
    }
};
</script>
<style lang='less'>
.content-block {
    width: 30%;
    margin-right:3%;
    text-align: center;
    margin-bottom: 40px;
}
.img_big_box {
    border-left: 1px solid #ddd;
}
.left_title {
    width: 240px;
    .title_head {
        height: 51px;
        background-color: #ebeef2;
        font-weight: bold;
        line-height: 51px;
        padding-left: 25px;
    }
    .title_box {
        margin-top: 25px;
        div {
            cursor: pointer;
            padding: 15px 0;
            padding-left: 25px;
            &:hover {
                color: #0070f0;
            }
        }
        .selected {
            color: #0070f0;
        }
    }
}
</style>