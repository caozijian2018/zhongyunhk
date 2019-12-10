<template>
    <div>
        <!-- header -->
        <scenario-head></scenario-head>
        <scenarioimg-three></scenarioimg-three>
        <scenario-s :pageData="list" class="phone_show"></scenario-s>
        <scenario-trading class="pc_show"></scenario-trading>
        <scenario-compatible class="pc_show"></scenario-compatible>
        <scenario-compu class="pc_show"></scenario-compu>
        <scenario-table class="pc_show"></scenario-table>
        <scenario-footer class="pc_show"></scenario-footer>
    </div>
</template>

<script>
import scenarioHead from "../../../components/scenario_head";
import scenarioimgThree from "../../../components/scenarioimg_three";
import scenarioTrading from "../../../components/scenario_trading";
import scenarioCompatible from "../../../components/scenario_compatible";
import scenarioCompu from "../../../components/scenario_compu";
import scenarioTable from "../../../components/scenario_table";
import scenarioFooter from "../../../components/scenario_footer";
import scenarioS from "../../../components/scenario_s";
export default {
    head() {
        return {
            title: "TestBird场景测试 - 金融APP复杂使用场景测试",
            meta: [
                {
                    name: "keyword",
                    content:
                        "金融APP测试，场景测试，APP场景测试，复杂场景测试，POC测试，开户场景测试，云测试，APP测试，移动应用测试，应用测试，安卓测试，Android测试，银行APP测试，证券APP测试，金融行业测试解决方案，自动化测试，业务测试，兼容性测试"
                },
                {
                    name: "description",
                    content:
                        "通过进行场景测试，验证APP各功能点在不同机型上运行的表现是否符合预期，将帮助开发进一步提高APP的健壮性，防止特定机型用户流失。"
                }
            ]
        };
    },
    components: {
        scenarioHead,
        scenarioimgThree,
        scenarioTrading,
        scenarioCompatible,
        scenarioCompu,
        scenarioTable,
        scenarioFooter,
        scenarioS
    },
    mounted() {
        this.$jquery(".scroll_box").animate({ scrollTop: 0 }, 0);
    },
    data() {
        return {
            list: [
                {
                    img: "/img/scenario_phone/cj-icon01.png",
                    title: "应对复杂交易场景",
                    desc:
                        "具有专业金融背景的高级测试工程师提供测试咨询和技术支撑，深谙金融业务场景 针对金融行业流程和功能逻辑设计测试用例"
                },
                {
                    img: "/img/scenario_phone/cj-icon02.png",
                    title: "带业务逻辑的兼容测试",
                    desc:
                        "验证交易核心功能，对个关键业务功能进行兼容性 UI适配及稳定性检查"
                },
                {
                    img: "/img/scenario_phone/cj-icon03.png",
                    title: "多脚本 多用例 互不干扰",
                    desc:
                        "采用场景测试 录制更多用例和脚本 测试出的问题相互不干扰提升测试脚本覆盖度以及发现问题的数量"
                },
                {
                    img: "/img/scenario_phone/cj-icon04.png",
                    title: "独立查看和分析",
                    desc:
                        "每个脚本测试的内容可以独立查看独立分析可提升开发人员的效率"
                }
            ]
        };
    }
};
</script>
<style lang='less'>
</style>