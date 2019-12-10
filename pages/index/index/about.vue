<template>
    <div class="about_me">
        <div class="pc_show margin_bottom_4">
            <div class="company-banner text_center white" v-html="show_problem?'移动互联网的领跑者': ''"></div>
            <about-menu></about-menu>
            <div class="glo_width_percent margin_auto">
                <nuxt-child></nuxt-child>
            </div>
        </div>
        <div class="phone_show">
            <div class="company-banner text_center white letter_spacing_1">铸就华彩荣耀，见证精彩时刻</div>
            <div class="back_desc padding_top_20 padding_bottom_30">
                <div class="width_90 margin_auto">
                    <div class="text_center mobile_h3_font" style="padding-bottom:2rem">{{$t('words.about_us')}}123</div>
                    <div class="about_desc mobile_sub_title">
                        TestBird (成都中云天下科技有限公司)是国内领先的企业服务提供商,
                        专注为企业提供与移动应用相关的云端测试和移动广告链条式生态服务。
                        公司致力于为全球移动互联紧密联系的企业提供成熟的行业测试和移动广告解决方案,
                        服务行业涵盖手游、金融、 电商、硬件、教育等,业务线包含港澳台、日、韩、欧美等全球市场。依托在北、上、广、深等地分部,
                        持续服务40万开发者,助力企业提升业务效力,
                        在全球市场释放品牌价值。
                        <br>
                        <br>TestBird注重技术创新和可持续发展,取得了一系列技术创新成果，
                        先后评为国家高新技术企业、国家软件公共服务平台、APP云测试公共技术平台、成都市企业技术中心等,
                        凭借全球首创鹰眼识别技术,成为全球最大手游测试平台,
                        连续5年发布手游测试白皮书,
                        成为唯一获成都市政府补贴的测试企业，与南科大共建人工智能实验室。
                        荣获“中韩创新创业大赛冠军”、‘西南创新企业50强”、 “最佳游戏产业第三方技术服务商”、
                        “ 十佳新锐移动游戏服务商”、"优秀服务创新奖”等荣誉。
                    </div>
                </div>
            </div>
            <!-- 里程碑 -->
            <div class="padding_bottom_30">
                <div class="text_center mobile_h3_font padding_bottom_20 padding_top_30">里程碑</div>
                <div class="width_90 margin_auto">
                    <div class="display_flex margin_top_10" v-for="v in milestone" :key="v.year">
                        <div class="width_50px">
                            <img :src="v.img" class="width_100" alt>
                            <div class="lcb_border" :style="{height:v.border_height}"></div>
                        </div>
                        <div class="margin_left_15 flex_1">
                            <div class="titles">{{v.year}}</div>
                            <div v-for="item in v.milestone_" :key="item">{{item}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 请联系我们 -->
            <div class="contact_us text_center white letter_spacing_1">如需测试，请联系我们相关负责人了解测试详情</div>
        </div>
    </div>
</template>

<script>
import aboutMenu from "../../../components/about_menu";
export default {
    components:{
       aboutMenu 
    },
    // head() {
    //     return {
    //         title:"关于我们 - 移动互联测试专家",
    //         meta: [
    //             { name: 'keyword', content: '移动广告，TBMedia，TB 网盟，TB Network，海外广告平台，海外移动营销，海外应用推广，海外品牌推广，Facebook广告投放，Google广告投放，海外媒体投放，用户获取，海外广告投放平台、手机游戏测试，手游测试，手游测试工具，手游行业测试解决方案、标准兼容性测试、压力测试，云测试，云测试平台、远程真机调试，APP测试，移动应用测试，应用测试，安卓测试，Android测试，iOS测试，金融APP测试，银行APP测试，证券APP测试，场景测试，金融行业测试解决方案，TROC 移动APP自动化测试平台' },
    //             { name: 'description', content: 'TestBird移动互联测试专家，专注为企业提供与移动应用相关的云端测试和移动广告链条式生态服务，目前拥有针对移动广告业务的TB Media、TB 网盟及云测试服务、众测服务、TROC自动化测试平台。为全球移动互联紧密联系的企业提供成熟的行业测试和移动广告解决方案，服务行业涵盖手游、金融、电商、硬件、教育等，业务线包含港澳台、日、韩、欧美等全球市场。依托在北、上、广、深等地分部，持续服务40万开发者，助力企业提升业务效力，在全球市场释放品牌价值。' }
    //         ]
    //     }
    // },
    mounted() {
        this.$jquery(".scroll_box").animate({ scrollTop: 0 }, 0);
    },
    computed:{
        show_problem(){
            return this.$store.state.lang != "e_n"
        },
    },
    data() {
        return {
            milestone: [
                {
                    img: require("../../../static/img/about/1.png"),
                    year: "2018年",
                    border_height: "120px",
                    milestone_: [
                        '1月连续三年荣获金茶奖"年度最佳移动游戏服务商奖"',
                        "2月全新发布TROC3.5自动化测试平台",
                        "5月服务金融客户突破100家",
                        "8月发布《2018年手游测试白皮书》"
                    ]
                },
                {
                    img: require("../../../static/img/about/2.png"),
                    year: "2017年",
                    border_height: "180px",
                    milestone_: [
                        "1月通过CMMI 3级认证",
                        "2月获得政府支持,推出20%补贴政策",
                        "3月服务过的开发者突破40万",
                        "9月发布TROC 3.0自动化测试平台",
                        "9月与华为成为生态合作伙伴",
                        "11月挂牌双创企业版,证券代码811597",
                        "12月荣获2017年度金融科技优秀服务创新奖"
                    ]
                },
                {
                    img: require("../../../static/img/about/3.png"),
                    year: "2016年",
                    border_height: "90px",
                    milestone_: [
                        "1月获得数千万元B轮融资",
                        "3月推出一站式APP测试服务",
                        "8月发布兼容性测试4.0版本"
                    ]
                },
                {
                    img: require("../../../static/img/about/4.png"),
                    year: "2015年",
                    border_height: "80px",
                    milestone_: [
                        "1月首次发布《TestBird2014中国手游兼容性测试白皮书》陆续发布真人众测、真人压力、云手机平台"
                    ]
                },
                {
                    img: require("../../../static/img/about/5.png"),
                    year: "2014年",
                    border_height: "120px",
                    milestone_: [
                        "年初获得天使投资数百万人民币",
                        "5月发布创新式的手游自动化云测试平台",
                        '9月成为被政府正式认可的"国家手游测试中心"',
                        "10月获得数百万美元的A轮融资"
                    ]
                },
                {
                    img: require("../../../static/img/about/6.png"),
                    year: "2013年",
                    border_height: "90px",
                    milestone_: [
                        "3月原华为GSM研发总裁李伟,无线资深技术专家邓飞、卫少峰,联合创办了TestBird",
                        "8月TestBird自创鹰 眼识别技术"
                    ]
                }
            ],
            regions: ["西南大区", "华北大区", "华东大区", "华南大区"],
            selected_index: 0,
            img_arr: [
                {
                    img: require("../../../static/img/about/map-1.png"),
                    address: "成都市高新区天府软件园C8-3F",
                    phone: "刘先生 153 2818 5669",
                    QQ: "924957891",
                    Email: "liuxiao@testbird.com",
                    position: {
                        left: "66%",
                        top: "46%"
                    }
                },
                {
                    img: require("../../../static/img/about/map-2.png"),
                    address: "北京市丰台区马家堡东路远洋自然-3F",
                    phone: "刘先生 155 1037 9835",
                    QQ: "568938413",
                    Email: "liuxinghan@testbird.com",
                    position: {
                        left: "58%",
                        top: "41%"
                    }
                },
                {
                    img: require("../../../static/img/about/map-3.png"),
                    address: "上海市浦东新区牡丹路418弄5号302室",
                    phone: "李女士 159 0088 5049",
                    QQ: "3038387066",
                    Email: "liyibing@testbird.com",
                    position: {
                        left: "50%",
                        top: "51%"
                    }
                },
                {
                    img: require("../../../static/img/about/map-4.png"),
                    address: "地址：深圳市南山桃园路86号常兴时代广场东座21N",
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
@import "../../../assets/css/glo";
//

.about_me {
    .h1_font {
        font-size: 30px;
        color: #191e25;
    }
    .phone_show {
        .contact_us {
            background: url(../../../static/img/about/yl-bg.png) center
                no-repeat;
            background-size: 100%;
            height: 120px;
            font-size: 12px;
            line-height: 110px;
        }
        .titles {
            color: @app_blue;
            font-size: 18px;
            margin-top: 17px;
        }
        .titles ~ div {
            line-height: 18px;
            color: @font_color;
            margin-top: 6px;
        }
        .width_50px {
            width: 50px;
        }
        .lcb {
            width: 30px;
            height: 30px;
            background: url(../../../static/img/company/banner.jpg);
            background-position: -0px -26px;
        }
        .lcb_border {
            margin-left: 25px;
            width: 0;
            border-left: 1px solid #ddd;
        }
        .back_desc {
            background: rgba(246, 250, 253, 1);
        }
        .about_desc {
            line-height: 22px;
        }
        .company-banner {
            background: url(../../../static/img/company/banner.jpg) center
                no-repeat;
            background-size: 200%;
            height: 160px;
            font-size: 19px;
            line-height: 160px;
        }
    }
    .pc_show {
        .company-banner {
            background: url(../../../static/img/company/banner.jpg) center
                no-repeat;
            background-size: cover;
            height: 250px;
            font-size: 32px;
            line-height: 180px;
        }
        .margin_top_70 {
            margin-top: 71px;
        }
    }
}
</style>