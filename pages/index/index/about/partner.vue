<template>
    <div class="display_flex margin_top_4">
        <div class="left_title">
            <div class="title_head" v-html="is_not_e_n?'已测试企':''"></div>
            <div class="title_box">
                <div
                    v-for="item in test_comp"
                    :class="{selected: selected_index==item.index}"
                    @click="selected_index=item.index"
                    :key="item.index"
                >{{item.title}}</div>
            </div>
            <div class="title_head margin_top_20" v-html="is_not_e_n?'合作企业':''"></div>
            <div class="title_box">
                <div
                    v-for="item in partener_comp"
                    :class="{selected: selected_index==item.index}"
                    @click="selected_index=item.index"
                    :key="item.index"
                >{{item.title}}</div>
            </div>
        </div>
        <div class="flex_1 img_big_box">
            <div class="width_90 margin_auto">
                <!--  -->
                <div class>
                    <!-- <img :src="img_arr[selected_index].img_src" class="width_100"> -->
                    <img
                        v-for="item in img_arr[selected_index]"
                        :src="item.img_src"
                        :key="item.name"
                        class="width_100"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        is_not_e_n:function(){
            return this.$store.state.lang != 'e_n'
        }
    },
    head() {
        return {
            title:"合作伙伴 – 移动互联测试专家",
            meta: [
                { name: 'keyword', content: '移动广告，TBmedia，TB 网盟，TB Network，海外广告平台，海外移动营销，海外应用推广，海外品牌推广，Facebook广告投放，Google广告投放，海外媒体投放，用户获取，海外广告投放平台、手机游戏测试，手游测试，手游测试工具，手游行业测试解决方案、标准兼容性测试、压力测试，云测试，云测试平台、远程真机调试，APP测试，移动应用测试，应用测试，安卓测试，Android测试，iOS测试，金融APP测试，银行APP测试，证券APP测试，场景测试，金融行业测试解决方案，TROC 移动APP自动化测试平台' },
                { name: 'description', content: 'TestBird移动互联测试专家，专注为企业提供与移动应用相关的云端测试和移动广告链条式生态服务，目前拥有针对移动广告业务的TB Media、TB 网盟及云测试服务、众测服务、TROC自动化测试平台。为全球移动互联紧密联系的企业提供成熟的行业测试和移动广告解决方案，服务行业涵盖手游、金融、电商、硬件、教育等，业务线包含港澳台、日、韩、欧美等全球市场。依托在北、上、广、深等地分部，持续服务40万开发者，助力企业提升业务效力，在全球市场释放品牌价值。' }
            ]
        }
    },
    data() {
        return {
            test_comp: [
                { title: this.$t('words.financial_sector'), index: 0 },
                { title: this.$t('words.mobile_game'), index: 1 }
            ],
            partener_comp: [
                { title:this.$t('words.c31'), index: 2 },
                { title: this.$t('words.c30'), index: 3 }
            ],
            plaque_title: ["公司荣誉", "斩获奖项", "登记证书"],
            selected_index: 0,
            // img_arr: [{
            //             img_src: require("../../../../static/img/about/partener.jpg"),
            //         },{
            //             img_src: require("../../../../static/img/about/partener2.jpg"),
            //         },{
            //             img_src: require("../../../../static/img/about/partener3.jpg"),
            //         },{
            //             img_src: require("../../../../static/img/about/partener4.jpg"),
            //         }]
            img_arr: [
                [
                    {
                        name: "img_1",
                        img_src: require("../../../../static/img/about/pt1.jpg")
                    },
                    {
                        name: "img_2",
                        img_src: require("../../../../static/img/about/pt2.jpg")
                    }
                ],
                [
                    {
                        name: "img_3",
                        img_src: require("../../../../static/img/about/pt3.jpg")
                    },
                    {
                        name: "img_4",
                        img_src: require("../../../../static/img/about/pt4.jpg")
                    }
                ],
                [
                    {
                        name: "img_5",
                        img_src: require("../../../../static/img/about/pt5.jpg")
                    },
                    {
                        name: "img_6",
                        img_src: require("../../../../static/img/about/pt6.jpg")
                    }
                ],
                [
                    {
                        name: "img_7",
                        img_src: require("../../../../static/img/about/pt7.jpg")
                    }
                ]
            ]
        };
    }
};
</script>
<style lang='less'>
.content-block {
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