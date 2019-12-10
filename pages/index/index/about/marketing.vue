<template>
    <div class="display_flex margin_top_4">
        <div class="left_title">
            <div class="title_head">活动合作和咨询</div>
            <div class="title_box">
                <div v-for="(item) in plaque_title" :key="item">{{item}}</div>
            </div>
        </div>
        <div class="flex_1 display_flex flex_jusify_space wrop img_big_box">
            <div class="display_flex wrop flex_jusify_space width_90 margin_auto">
                <a
                    class="width_30 margin_bottom_15 shadow_new"
                    :href="item.url"
                    v-for="item in markting_list.slice(page*9,page*9+9)"
                    :key="item.title"
                >
                    <img class="width_100" :src="item.image_url" alt>
                    <div class="padding_1">
                        <div class="margin_top_10 margin_bottom_15 font_weight_600">{{item.title}}</div>
                        <div style="text-indent:22px">{{item.summary}}</div>
                    </div>
                </a>
            </div>
            <div class="block margin_auto margin_top_20">
                <el-pagination layout="prev, pager, next" @current-change="changeList" :page-size="9" :total="totle"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title:"市场活动 - 移动互联测试专家",
            meta: [
                { name: 'keyword', content: '移动广告，TBMedia，TB 网盟，TB Network，海外广告平台，海外移动营销，海外应用推广，海外品牌推广，Facebook广告投放，Google广告投放，海外媒体投放，用户获取，海外广告投放平台、手机游戏测试，手游测试，手游测试工具，手游行业测试解决方案、标准兼容性测试、压力测试，云测试，云测试平台、远程真机调试，APP测试，移动应用测试，应用测试，安卓测试，Android测试，iOS测试，金融APP测试，银行APP测试，证券APP测试，场景测试，金融行业测试解决方案，TROC 移动APP自动化测试平台' },
                { name: 'description', content: 'TestBird移动互联测试专家，专注为企业提供与移动应用相关的云端测试和移动广告链条式生态服务，目前拥有针对移动广告业务的TB Media、TB 网盟及云测试服务、众测服务、TROC自动化测试平台。为全球移动互联紧密联系的企业提供成熟的行业测试和移动广告解决方案，服务行业涵盖手游、金融、电商、硬件、教育等，业务线包含港澳台、日、韩、欧美等全球市场。依托在北、上、广、深等地分部，持续服务40万开发者，助力企业提升业务效力，在全球市场释放品牌价值。' }
            ]
        }
    },
    mounted() {
        this.getMarktingList();
    },
   
    data() {
        return {
            page:0,
            plaque_title: ["方女士", "15828240233 /注明市场合作", "fangshan@testbird.com"],
            markting_list: [],
            totle:0,
        };
    },
    methods: {
        changeList(page){
            this.page=page-1;
        },
        getMarktingList() {
            this.$http("foundation/news/marketing/").then(res => {
                this.markting_list = res;
                this.totle = res.length;
            });
        }
    }
};
</script>
<style lang='less'>
.shadow_new {
    box-shadow: 2px 2px 8px rgba(30, 30, 30, 0.3);
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
            padding: 15px 0;
            padding-left: 25px;
        }
    }
}
</style>