<template>
    <div>
        <video-banner></video-banner>
        <div class="index_scoll_img">
            <div v-if="showcp">
                <mobile-fix
                    ref="mobile_fix"
                    :class="{transition_back: scroll_most_value + (inner_height)> show_arr[1]}"
                ></mobile-fix>
                <games
                    ref="game"
                    :class="{transition_back: scroll_most_value + (inner_height)> show_arr[2]}"
                ></games>
                <mobile-service
                ref="mobile_service"
                :class="{transition_back: scroll_most_value + (inner_height)> show_arr[3]}"
             ></mobile-service>
            </div>
            <div v-else>
                <mobile-service
                ref="mobile_service"
                :class="{transition_back: scroll_most_value + (inner_height)> show_arr[1]}"
                ></mobile-service>
                
                <games
                    ref="game"
                    :class="{transition_back: scroll_most_value + (inner_height)> show_arr[2]}"
                ></games>
                <mobile-fix
                    ref="mobile_fix"
                    :class="{transition_back: scroll_most_value + (inner_height)> show_arr[3]}"
                ></mobile-fix>
            </div>
            <sea
                v-show="false"
                class="margin_top_100 pc_show"
                ref="sea"
                :show-document="scroll_most_value + (inner_height)> show_arr[4]"
            ></sea>
            <!-- <company-dynamics class="pc_show" v-if="newsDataArr.length" :news-data="newsDataArr"></company-dynamics> -->
            <partener></partener>
            <want-be-partner></want-be-partner>
        </div>
    </div>
</template>

<script>
import videoBanner from "../../../components/banner";
import newBox from "../../../components/new_box";
import modelDesc from "../../../components/model_desc";
// import companyDynamics from "../../../components/company_dynamics";
import partener from "../../../components/partener";
import wantBePartner from "../../../components/want_be_partner";
import sea from "../../../components/sea";
import mobileFix from "../../../components/mobile_fix";
import games from "../../../components/games";
import mobileService from "../../../components/mobile_service";
import bus from "../../../util/bus";
import glo_axios from "../../../util/glo_request";

export default {
    computed:{
        showcp:function(){
            return this.$store.state.lang == 'e_n'
        }
    },
    head() {
        return {
            title: "TestBird - 移动互联测试专家",
             meta: [
                {
                    name: "keyword",
                    content: "移动广告，TBMedia，TB 网盟，TB Network，海外广告平台，海外移动营销，海外应用推广，海外品牌推广，Facebook广告投放，Google广告投放，海外媒体投放，用户获取，海外广告投放平台、手机游戏测试，手游测试，手游测试工具，手游行业测试解决方案、标准兼容性测试、压力测试，云测试，云测试平台、远程真机调试，APP测试，移动应用测试，应用测试，安卓测试，Android测试，iOS测试，金融APP测试，银行APP测试，证券APP测试，场景测试，金融行业测试解决方案，TROC 移动APP自动化测试平台"
                },
                {
                    name: "description",
                    content: "TestBird移动互联测试专家，专注为企业提供与移动应用相关的云端测试和移动广告链条式生态服务，目前拥有针对移动广告业务的TB Media、TB 网盟及云测试服务、众测服务、TROC自动化测试平台。为全球移动互联紧密联系的企业提供成熟的行业测试和移动广告解决方案，服务行业涵盖手游、金融、电商、硬件、教育等，业务线包含港澳台、日、韩、欧美等全球市场。依托在北、上、广、深等地分部，持续服务40万开发者，助力企业提升业务效力，在全球市场释放品牌价值。"
                }
            ]
        };
    },
    components: {
        videoBanner,
        newBox,
        modelDesc,
        partener,
        // companyDynamics,
        sea,
        mobileFix,
        games,
        mobileService,
        wantBePartner
    },
    data() {
        return {
            show_index: 0,
            scroll_most_value: 0,
            show_arr: [],
            inner_height: "",
            newsDataArr: []
        };
    },
    mounted() {
        this.whatchScroll();
        this.setLang();
        this.$nextTick(() => {
            this.inner_height = this.$store.getters.getInnerHeight / 2;
            this.sortModuleOffset();
        });
        this.$jquery(".scroll_box").animate({ scrollTop: 0 }, 0);
        this.getNews();
    },
    methods: {
        setLang(){
            var lang = this.$route.query.lang || localStorage.lang || 'zh'
            this.$i18n.locale = localStorage.lang = this.$store.state.lang = lang;
        },
        getNews() {
            this.$http("foundation/news/marketing").then(res => {
                res.sort(function(a, b) {
                    return b.happened - a.happened;
                });
                if (res.length > 0) {
                    res = res.slice(0, 4);
                } else {
                    res = [
                        {
                            sub_type: null,
                            title:
                                "TestBird CEO 李伟：做APP质量守护者 伴您的APP征途海外",
                            happened: 1546848000,
                            summary:
                                "2019年悄然来临，TestBird也迎来第六个创业年，我们从一只出生茅庐的小雏鸟逐渐成长为可以经历风吹雨打的坚韧小蓝鸟，这一路，其实并不容易，衷心感谢一路陪伴我们成长的合作伙伴，政府相关机构，各界人士。",
                            url:
                                "http://legacy.testbird.com/2019/01/07/testbird-ceo-李伟：做app质量守护者-伴您的app征途海外/",
                            image_url:
                                "http://legacy.testbird.com/wp-content/uploads/2019/01/111.jpg"
                        },
                        {
                            sub_type: null,
                            title: "中国银行与TestBird 正式签约合作！",
                            happened: 1545297540,
                            summary:
                                "近日，TestBird与中国银行正式签约，此次合作TestBird将为中国银行提供金融测试解决方案，协助中国银行优化APP质量和用户体验。",
                            url:
                                "http://legacy.testbird.com/2018/12/19/中国银行与testbird-正式签约合作！/",
                            image_url:
                                "http://legacy.testbird.com/wp-content/uploads/2018/12/中国银行.jpg"
                        },
                        {
                            sub_type: null,
                            title:
                                "质量是优秀的前提！TestBird服务的9家中国游戏企业入围全球 35 强",
                            happened: 1545186420,
                            summary:
                                "近日，由伽马数据（CNG）与 Newzoo 发布的《2018 年全球移动游戏市场企业竞争力分析报告》中，公布了“2018 年全球移动游戏市场竞争力 35 强企业”榜单，TestBird服务的9家中国游戏企业入围全球 35 强。",
                            url:
                                "http://legacy.testbird.com/2018/12/18/质量是优秀的前提！testbird服务的9家中国游戏企业入围/",
                            image_url:
                                "http://legacy.testbird.com/wp-content/uploads/2018/12/QQ图片20181217102458.png"
                        },
                        {
                            sub_type: null,
                            title: "11月测试报告更新：全新的版面设计和UI展现",
                            happened: 1543545900,
                            summary:
                                "此次测试报告设计采用扁平化风格，通过用户调查，更多用户偏好简洁风格。设计团队基于测试报告的多维度数据和用户最关注测试数据，将报告首页分为四大区块，图形和数字的呈现方式让用户打开报告对测试结果一目了然。",
                            url:
                                "http://legacy.testbird.com/2018/11/28/11月测试报告更新：全新的版面设计和ui展现/",
                            image_url:
                                "http://legacy.testbird.com/wp-content/uploads/2018/11/f.jpg"
                        }
                    ];
                }
                this.newsDataArr = res;
            });
        },
        whatchScroll() {
            bus.$on("windowScroll", v => {
                if (v > this.scroll_most_value) {
                    this.scroll_most_value = v;
                }
            });
        },
        sortModuleOffset() {
            this.show_arr = this.showcp ? [
                0,
                this.$refs.mobile_fix.$el.offsetTop,
                this.$refs.game.$el.offsetTop,
                this.$refs.mobile_service.$el.offsetTop - 100,
                this.$refs.sea.$el.offsetTop
            ] : [
                0,
                this.$refs.mobile_service.$el.offsetTop - 100,
                this.$refs.game.$el.offsetTop,
                this.$refs.mobile_fix.$el.offsetTop,
                this.$refs.sea.$el.offsetTop
            ];
        },
        data() {
            return {
                show_index: 0,
                scroll_most_value: 0,
                show_arr: [],
                inner_height: ""
            };
        }
    }
};
</script>

<style lang='less'>
@import "../../../assets/css/glo";
.index_scoll_img {
    .scoll_desc {
        .index_title {
            color: @h1_color;
            font-size: 28px;
        }
        .index_title_sub {
            color: @font_color;
            margin-top: 30px;
        }
    }
}
</style>
