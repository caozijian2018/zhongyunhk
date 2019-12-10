<template>
    <div class="margin_top_3">
        <div class="text_center">
            <h1 class="font_weight_600">媒体合作</h1>
            <div class="font_size_12px margin_top_20 mobile_sub_title">搭建营销传播和平台建设的合作平台, 共创互利共盈的新局面</div>
            <div class="display_flex flex_jusify_space media_heads margin_top_20">
                <!-- 单个 -->
                <div>
                    <div class="img_tx img_1"></div>
                    <div class="font_size_16px title_s">联系人</div>
                    <div class="mobile_sub_11_title">方女士</div>
                </div>
                <div>
                    <div class="img_tx img_2"></div>
                    <div class="font_size_16px title_s">QQ</div>
                    <div class="mobile_sub_11_title">1399920948</div>
                </div>
                <div>
                    <div class="img_tx img_3"></div>
                    <div class="font_size_16px title_s">电话</div>
                    <div class="mobile_sub_11_title">15828240233</div>
                </div>
                <div>
                    <div class="img_tx img_4"></div>
                    <div class="font_size_16px title_s">邮箱</div>
                    <div class="mobile_sub_11_title">fangshan@testbird.com</div>
                </div>
            </div>
            <!-- news -->
            <div class="display_flex flex_jusify_space news_box_">
                <a
                    :href="item.url"
                    v-for="item in  list.slice(3*page,3*page+3)"
                    :key="item.title"
                >
                    <!-- <img :src="item" alt=""> -->
                    <div class="font_size_16px margin_bottom_15 font_weight_600">{{item.title}}</div>
                    <div>{{item.summary}}</div>
                </a>

                <!-- 
                happened: 1530858000
            summary: "从华为的发展经历来看，小企业要成功，产品与服务缺一不可。创始团队源自华为的移动互联测试专家TestBird，同样秉持着这样的精神。“以客户为中心，贴心为客户服务。这种精神已经深入到了我的骨髓与血液中。”在位于成都天府软件园的办公室内，TestBird创始人兼CEO李伟说道。而产品与服务，也成其频频提及的关键词。"
            title: "【金融投资报】TestBird创始人李伟： 持续深耕金融领域 客户服务决胜关键"
            url: "http://www.jrtzb.com.cn/text.asp?i=180862"
                -->
            </div>
            <div class="prev_next display_flex flex_center">
                <div @click="changePage(1)"> &lt;</div>
                <div @click="changePage(2)"> &gt;</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title:"媒体关系 - 移动互联测试专家",
            meta: [
                { name: 'keyword', content: '移动广告，TB Media，TB 网盟，TB Network，海外广告平台，海外移动营销，海外应用推广，海外品牌推广，Facebook广告投放，Google广告投放，海外媒体投放，用户获取，海外广告投放平台、手机游戏测试，手游测试，手游测试工具，手游行业测试解决方案、标准兼容性测试、压力测试，云测试，云测试平台、远程真机调试，APP测试，移动应用测试，应用测试，安卓测试，Android测试，iOS测试，金融APP测试，银行APP测试，证券APP测试，场景测试，金融行业测试解决方案，TROC 移动APP自动化测试平台' },
                { name: 'description', content: 'TestBird移动互联测试专家，专注为企业提供与移动应用相关的云端测试和移动广告链条式生态服务，目前拥有针对移动广告业务的TB Media、TB 网盟及云测试服务、众测服务、TROC自动化测试平台。为全球移动互联紧密联系的企业提供成熟的行业测试和移动广告解决方案，服务行业涵盖手游、金融、电商、硬件、教育等，业务线包含港澳台、日、韩、欧美等全球市场。依托在北、上、广、深等地分部，持续服务40万开发者，助力企业提升业务效力，在全球市场释放品牌价值。' }
            ]
        }
    },
    data() {
        return {
            list: [],
            page: 0
        };
    },
    mounted() {
        this.getNews();
    },
    methods: {
        changePage(v){
            if(v==1){
                if(this.page > 0){
                    this.page--
                }
            }else{
                if(this.list.length > ((this.page+1)*3)){
                    this.page++
                }
            }
            debugger;
        },
        getNews() {
            this.$http("foundation/news/media/").then(res => {
                console.log(res);
                this.list = res;
            });
        }
    }
};
</script>
<style lang='less'>
// ../img/company/sprite-base@2x.png
.prev_next {
    margin-top: 30px;
    & > div {
        width: 30px;
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border:1px solid #ddd;
        &:last-child{
            margin-left:20px;
        }
    }
}
.media_heads {
    & > div {
        text-align: center;
    }
    .mobile_sub_11_title {
        font-size: 14px;
    }
    .title_s {
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .img_tx {
        margin: 0 auto;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        background-image: url(../../../../static/img/company/sprite-base@2x.png); //url(../img/company/sprite-base@2x.png);
        background-size: 100px;
    }
    .img_1 {
        background-position: -0px -626px;
    }
    .img_2 {
        background-position: -0px -326px;
    }
    .img_3 {
        background-position: -0px -526px;
    }
    .img_4 {
        background-position: -0px -426px;
    }
}
.news_box_ {
    margin-top: 50px;
    & > a {
        width: 30%;
        padding: 10px;
        box-shadow: 2px 2px 10px rgba(40, 40, 40, 0.4);
        padding-bottom: 20px;
    }
}
</style>