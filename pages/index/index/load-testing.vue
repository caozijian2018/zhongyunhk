<template>
    <div>
        <div class="pc_show">
            <div class="banner load-banner ie-background">
                <h1>压力测试</h1>
                <p>全面测试服务器承载能力，挖掘隐患，有效避免因服务器崩溃造成的用户流失</p>
                <div class="btn-group">
                    <a class="btn banner-btn" href>联系我们</a>
                    <a class="btn banner-btn" href>立即测试</a>
                </div>
            </div>
            <div class="block-wrap columns-wrap">
                <div class="block-content align-center">
                    <img src="../../../static/img/load-testing/block-1.png">
                    <div class="columns columns-four text-gray">
                        <p class="column-block">
                            无法在短时间内组织大量
                            <br>真实用户
                        </p>
                        <p class="column-block">
                            一般机器人压测的性能体验
                            <br>不真实
                        </p>
                        <p class="column-block">
                            真实用户分布全国各地，带宽各异
                            <br>机器无法测出带宽设置问题
                        </p>
                        <p class="column-block">
                            服务器参数作为重要指标
                            <br>机器测试无法呈现
                        </p>
                    </div>
                </div>
            </div>

            <div class="block-wrap block-striped">
                <div class="block-content top-padding clearfix">
                    <div class="float-block">
                        <img src="../../../static/img/load-testing/block-2.png">
                    </div>
                    <div class="float-block position-center">
                        <h3>真实用户在线，测试体验真实</h3>
                        <p class="text-gray">
                            采用真实用户，真实现网，避免机器人测试造成的性能体验不真实
                            <br>完全真实模拟开服当日短时间内大量用户涌入对服务器各个环节的压力
                        </p>
                    </div>
                </div>
            </div>
            <div class="block-wrap">
                <div class="block-content clearfix">
                    <div class="float-block position-center align-right">
                        <h3>用户分布广，带宽问题和服务器参数更易体现</h3>
                        <p class="text-gray">
                            相较机器人，真实用户，带宽各异，能更易测出带宽设置问题
                            <br>服务器参数作为重要指标，采用真实用户，可以测试优化服务器参数
                        </p>
                    </div>
                    <div class="float-block">
                        <img src="../../../static/img/load-testing/block-3.png">
                    </div>
                </div>
            </div>
            <div class="block-wrap block-striped">
                <div class="block-content top-padding clearfix">
                    <div class="float-block">
                        <img src="../../../static/img/load-testing/block-4.png">
                    </div>
                    <div class="float-block position-center">
                        <h3>量化统计问题，测试精准高效</h3>
                        <p class="text-gray">
                            测试进度循序渐进，人员分批有序导入
                            <br>不以冲爆服务器为主，而是精准量化服务器和客户端的问题
                        </p>
                    </div>
                </div>
            </div>

            <div class="block-wrap columns-wrap">
                <div class="block-content align-center top-padding">
                    <h1>服务流程</h1>
                    <img src="../../../static/img/load-testing/block-5.png">
                    <div class="columns columns-eight text-gray">
                        <p class="column-block">
                            讨论测试需求
                            <br>（提前一天以上）
                        </p>
                        <p class="column-block">给包和测试流程</p>
                        <p class="column-block">运营评估测试需求</p>
                        <p class="column-block">确定测试需求</p>
                        <p class="column-block">确定测试具体时间</p>
                        <p class="column-block">正式压测</p>
                        <p class="column-block">同步测试进度以及问题</p>
                        <p class="column-block">反馈测试用户体验</p>
                    </div>
                </div>
            </div>
            <div class="block-wrap">
                <div class="block-content align-center">
                    <h1>他们正在使用TestBird提高APP质量</h1>
                    <img class="partners" src="../../../static/img/load-testing/partners.png">
                </div>
            </div>
            <div>
                <regiest></regiest>
            </div>
        </div>
        <div class="phone_show">
            <div class="phone_banner">
                <div class="phone_banner-text">
                    <p class="phone_banner-text-title">压力测试</p>
                    <p class="phone_banner-text-p">全面测试服务器承载能力，挖掘隐患，有效避免因服务器崩溃造成的用户流失</p>
                </div>
            </div>
            <div class="phone-box" style="width: 100%">
                <test-points :data-points="points"></test-points>
            </div>
            <div class="phone-box">
                <div class="phone-box-div">
                    <div class="troc-div2-box">
                        <div class="troc-div3-box-img">
                            <img src="../../../static/img/load-testing/yl-02.png">
                        </div>
                        <div class="troc-div3-box-p">
                            <p class="colorblue phone-title-p">真实用户在线，测试体验真实</p>
                            <p>采用真实用户，真实现网，避免机器人测试造成的性能体验不真实,完全真实模拟开服当日短时间内大量用户涌入对服务器各个环节的压力</p>
                        </div>
                        <div style="clear: both"></div>
                    </div>
                    <div class="troc-div2-box margintop50">
                        <div class="troc-div3-box-img">
                            <img src="../../../static/img/load-testing/yl-03.png">
                        </div>
                        <div class="troc-div3-box-p">
                            <p class="colorblue phone-title-p">用户分布广，带宽问题和服务器参数更易体现</p>
                            <p>
                                相较机器人，真实用户，带宽各异，能更易测出带宽设置问题
                                <br>服务器参数作为重要指标，采用真实用户，可以测试优化服务器参数
                            </p>
                        </div>
                        <div style="clear: both"></div>
                    </div>
                    <div class="troc-div2-box margintop50">
                        <div class="troc-div3-box-img">
                            <img src="../../../static/img/load-testing/yl-04.png">
                        </div>
                        <div class="troc-div3-box-p">
                            <p class="colorblue phone-title-p">量化统计问题，测试精准高效</p>
                            <p>
                                测试进度循序渐进，人员分批有序导入
                                <br>不以冲爆服务器为主，而是精准量化服务器和客户端的问题
                            </p>
                        </div>
                        <div style="clear: both"></div>
                    </div>
                </div>
            </div>
            <div class="phone-box paddingtop15">
                <div class="phone-box-div">
                    <div class="troc-div1-title">
                        <p>服务流程</p>
                    </div>
                    <div class="troc-div1-img">
                        <img src="../../../static/img/load-testing/yl-05.png">
                    </div>
                </div>
            </div>
            <div class="phone-box paddingtop15 paddingbottom10">
                <div class="phone-box-div">
                    <div class="troc-div1-title">
                        <p>他们正在使用TestBird提高APP质量</p>
                    </div>
                    <div class="troc-div1-img margintop10">
                        <img src="../../../static/img/load-testing/yl-07.png">
                    </div>
                </div>
            </div>
            <div class="foot_img">
                <div class>如需测试，请联系我们相关负责人了解测试详情</div>
            </div>
        </div>
    </div>
</template>

<script>
import testPoints from "../../../components/test_points";
import regiest from "../../../components/regiest/index";
export default {
    components: {
        regiest,
        testPoints
    },
    props: [],
    head() {
        return {
            title: "TestBird压力测试 – 移动APP和手游真人压力测试平台",
            meta: [
                {
                    name: "keyword",
                    content: "真人压力测试，服务器测试，服务器压力测试"
                },
                {
                    name: "description",
                    content:
                        "全面测试服务器承载能力，挖掘隐患，有效避免因服务器崩溃造成的用户流失"
                }
            ]
        };
    },
    mounted() {
        this.$jquery(".scroll_box").animate({ scrollTop: 0 }, 0);
    },
    data() {
        return {
            points: {
                imgSrc: "/img/load-testing/yl-01.png",
                list: [
                    "无法在短时间内组织大量真实用户",
                    "一般机器人压测的性能体验不真实",
                    "带宽各异机器无法测出带宽设置问题",
                    "服务器参数作为重要指标机器测试无法呈现"
                ]
            }
        };
    }
};
</script>
<style lang='less'>
@import "../../../assets/css/troc/main.css";
@import "../../../assets/css/troc/phone_block.css";
.title-p1 {
    font-size: 14px;
    padding-left: 20px;
    margin-bottom: 20px;
}
</style>
