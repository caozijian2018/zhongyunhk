<template>
  <div>
    <div class="pc_show">
      <div class="banner troc-banner ie-background">
        <h1>TROC 移动APP自动化测试平台</h1>
        <p>十年磨一剑，集成TestBird自动化测试技术，部署到企业内部的私有云</p>
        <div class="btn-group">
          <nuxt-link
            class="btn banner-btn"
            to="./about"
          >联系我们</nuxt-link>
        </div>
      </div>
      <div class="block-wrap columns-wrap">
        <div class="block-content block-title top-padding">
          <h2 class="align-center">什么是TROC</h2>
          <p>TROC（全称 Testing Robot Over Cloud ）是TestBird研发的新一代移动APP自动化测试平台。TROC是一个100%的云端平台，通过Web浏览器即可完成自动化的所有功能，极大降低用户的安装部署使用门槛，TROC支持各种iOS/Android/终端/平板等软硬件系统，并具备批量自动化回归能力。</p>
        </div>
      </div>

      <div class="block-wrap">
        <div class="block-content block-title align-center">
          <h2>100% Web云端平台，学习曲线低，30分钟生成第一份自动化脚本</h2>
        </div>
        <div class="block-content columns-wrap align-center">
          <img src="../../../static/img/troc/block-1.png">
          <div class="columns columns-four troc-correction">
            <div class="column-block">
              <h4>录制用例</h4>
              <br>
              <p>支持web端、手机端录制
                <br>（和手机使用习惯相同）
                <br>数据统一上传到云端</p>
            </div>
            <div class="column-block">
              <h4>编辑用例</h4>
              <br>
              <p>全图形界面：丰富的脚本增强功能、各类设置均在web操作</p>
            </div>
            <div class="column-block">
              <h4>自动回归</h4>
              <br>
              <p>一键3步执行回归测试</p>
            </div>
            <div class="column-block">
              <h4>查看报告</h4>
              <br>
              <p>一键生成</p>
            </div>
          </div>
        </div>
      </div>

      <div class="block-wrap block-striped">
        <div class="block-content block-title align-center">
          <h2>增强鹰眼对象识别技术，有效应对移动测试碎片化</h2>
        </div>
        <div class="block-content">
          <img src="../../../static/img/troc/block-2.png">
        </div>
      </div>
      <div class="block-wrap">
        <div class="block-content block-title top-padding align-center">
          <h2>海量终端和用例自动化回归</h2>
          <p class="text-gray">下班发任务，上班看报告，内置各种可靠性机制，具备闪断续测能力，实时监控用例和手机状态</p>
        </div>
        <div class="block-content clearfix">
          <div class="float-block">
            <div class="title">创建测试任务</div>
            <img src="../../../static/img/troc/block-3.png">
            <div class="title">分布式执行一遍</div>
            <img src="../../../static/img/troc/block-4.png">
          </div>
          <div class="float-block">
            <div class="title">分布式执行N遍</div>
            <img src="../../../static/img/troc/block-5.png">
          </div>
        </div>
      </div>

      <div class="block-wrap block-striped">
        <div class="block-content clearfix">
          <div class="float-block solution-block position-center">
            <h2>外部接口对接，支撑客户多样应用场景</h2>
            <br>
            <p>TROC对外开放丰富的API，可与常见的外部系统进行对接。用户可以方便地将TROC的APP自动化测试能力接入到现有工作平台。</p>
            <ul class="disc-style">
              <li>与Jenkins对接，支撑DevOps研发过程</li>
              <li>与常用管理系统：JIRA/Confluence/TestLink/Redmine 对接，实现完整的测试工作流</li>
              <li>与后台数据库对接，实现前后端数据比对</li>
              <li>同一套测试平台，支持手工、自动化、兼容性、内部Beta验证、问题定位</li>
              <li>测试资产统一集中云端存储，利于将过程数据存储记录下来，支持研发效率持续改进</li>
            </ul>
          </div>
          <div class="float-block">
            <img src="../../../static/img/troc/block-fin-2.png">
          </div>
        </div>
      </div>

      <div class="block-wrap">
        <div class="block-content block-title align-center top-padding">
          <h2>TROC 确保企业软硬件与数据安全</h2>
        </div>
        <div class="block-content columns-wrap top-padding">
          <img src="../../../static/img/troc/block-7.png">
          <div class="columns column-troc-data">
            <div class="column-block">
              <h4>专业的测试机柜，保障资产安全</h4>
              <br>
              <p>TestBird TROC平台整体部署采用定制集成化机柜，测试平台所有硬件设备均可放在机柜中，机柜具备防火防盗功能，确保客户硬件资产安全</p>
            </div>
            <div class="column-block">
              <h4>内外网隔离，完全的私有化环境</h4>
              <br>
              <p>所有数据都在公司内部，符合行业合规要求</p>
            </div>
            <div class="column-block">
              <h4>测试数据定期备份</h4>
              <br>
              <p>为防止关键测试数据丢失，TestBird TROC平台提供测试数据定期备份功能，每个月定期备份用例库等关键测试数据，防止出现意外状况导致测试数据丢失</p>
            </div>
          </div>
        </div>
      </div>

      <div class="block-wrap">
        <div class="block-content align-center">
          <h2>他们正在使用TestBird TROC平台提高APP质量
            <img
              class="partners"
              src="../../../static/img/troc/partners.png"
            >
          </h2>
        </div>
      </div>
      <div>
        <regiest></regiest>
      </div>
    </div>
    <div class="phone_show div-striped">
      <div class="phone_banner">
        <div class="phone_banner-text">
          <p class="phone_banner-text-title">TROC 移动APP自动化测试平台</p>
          <p class="phone_banner-text-p">十年磨一剑，集成TestBird自动化测试技术，部署到企业内部的私有云</p>
        </div>
      </div>
      <div class="phone-box ">
        <div class="phone-box-title">
          <p class="phone-box-title-title">什么是TROC</p>
          <p class="phone-box-title-p">TROC（全称 Testing Robot Over Cloud ）是TestBird研发的新一代移动APP自动化测试平台。TROC是一个100%的云端平台，通过Web浏览器即可完成自动化的所有功能，极大降低用户的安装部署使用门槛，TROC支持各种iOS/Android/终端/平板等软硬件系统，并具备批量自动化回归能力。</p>
        </div>
      </div>

      <div class="phone-box paddingtop15">
        <div class="phone-box-div">
          <div class="troc-div1-title">
            <p>100% Web云端平台，学习曲线低，30分钟生成第一份自动化脚本</p>
          </div>
          <div class="troc-div1-img">
            <img src="../../../static/img/troc/TROC_01.png">
          </div>
        </div>
      </div>

      <div class="phone-box paddingtop15">
        <div class="phone-box-div">
          <div class="troc-div1-title">
            <p>增强鹰眼对象识别技术，有效应对移动测试碎片化</p>
          </div>
          <div class="troc-div1-img">
            <img src="../../../static/img/troc/TROC_09.png">
          </div>
        </div>
      </div>
      <div class="phone-box paddingtop15">
        <div class="phone-box-div">
          <div class="troc-div1-title">
            <p>海量终端和用例自动化回归</p>
          </div>
          <div class="troc-div1-p">
            <p>下班发任务，上班看报告，内置各种可靠性机制，具备闪断续测能力，实时监控用例和手机状态</p>
          </div>
          <div class="troc-div1-img margintop10">
            <img src="../../../static/img/troc/TROC_13.png">
          </div>
          <div class="troc-div1-img">
            <img src="../../../static/img/troc/TROC_16.png">
          </div>
        </div>
      </div>
      <div class="phone-box paddingtop15">
        <div class="phone-box-div">
          <div class="troc-div1-title">
            <p>外部接口对接，支撑客户多样应用场景</p>
          </div>
          <div class="troc-div1-p">
            <p>TROC对外开放丰富的API，可与常见的外部系统进行对接。用户可以方便地将TROC的APP自动化测试能力接入到现有工作平台。</p>
          </div>
          <div class="troc-div1-img margintop10">
            <img src="../../../static/img/troc/block-fin-2.png">
          </div>
          <div>
            <ul class="disc-style font12">
              <li>与Jenkins对接，支撑DevOps研发过程</li>
              <li>与常用管理系统：JIRA/Confluence/TestLink/Redmine 对接，实现完整的测试工作流</li>
              <li>与后台数据库对接，实现前后端数据比对</li>
              <li>同一套测试平台，支持手工、自动化、兼容性、内部Beta验证、问题定位</li>
              <li>测试资产统一集中云端存储，利于将过程数据存储记录下来，支持研发效率持续改进</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="phone-box paddingtop15">
        <div class="phone-box-div">
          <div class="troc-div1-title">
            <p>TROC 确保企业软硬件与数据安全</p>
          </div>
          <div class="troc-div2-box">
            <div class="troc-div2-box-img">
              <img src="../../../static/img/troc/TROC_23.png">
            </div>
            <div class="troc-div2-box-p">
              <p>
                TROC平台整体部署采用定制集成化机柜，测试平台所有硬件设备均可放在机柜中，机柜具备防火防盗功能，确保客户硬件资产安全
              </p>
            </div>
            <div style="clear: both"></div>
          </div>
          <div class="troc-div2-box margintop10">
            <div class="troc-div2-box-img">
              <img src="../../../static/img/troc/TROC_24.png">
            </div>
            <div class="troc-div2-box-p">
              <p>
                内外网隔离，完全的私有化环境,所有数据都在公司内部，符合行业合规要求
              </p>
            </div>
            <div style="clear: both"></div>
          </div>
          <div class="troc-div2-box margintop10">
            <div class="troc-div2-box-img">
              <img src="../../../static/img/troc/TROC_25.png">
            </div>
            <div class="troc-div2-box-p">
              <p>
                TROC平台提供测试数据定期备份功能，每个月定期备份用例库等关键测试数据，防止出现意外状况导致测试数据丢失
              </p>
            </div>
            <div style="clear: both"></div>
          </div>
        </div>
      </div>
      <div class="phone-box paddingtop15 paddingbottom15">
        <div class="phone-box-div">
          <div class="troc-div1-title">
            <p>他们正在使用TestBird TROC平台提高APP质量</p>
          </div>
          <div class="troc-div1-img margintop10">
            <img src="../../../static/img/troc/TROC_26.png">
          </div>
        </div>
      </div>
      <div class="foot_img">
        <div class="">
          如需测试，请联系我们相关负责人了解测试详情
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import regiest from "../../../components/regiest/index";
export default {
  head(){
      return {
        title:"TestBird私有云 - TROC 移动APP自动化测试平台",
        meta: [
                { name: 'keyword', content: '金融app测试，银行app测试，证券app测试，手机游戏测试，手游测试，云测试，APP测试，移动应用测试，应用测试，安卓测试，Android测试，iOS测试，私有云测试，移动APP金融行业解决方案，移动APP证券行业解决方案，移动APP银行行业解决方案，移动app自动化测试平台' },
                { name: 'description', content: 'TROC是一款私有化部署的移动APP自动化云测试平台，通过Web浏览器即可完成自动化回归、深度兼容性测试、远程真机测试等功能，支持各种iOS/Android/终端/平板等软硬件系统。' }
            ]
      }
    },
  components: {
    regiest
  },
  props: [],
  mounted(){
    this.$jquery('.scroll_box').animate({ scrollTop: 0 }, 0);
  },
};
</script>
<style scoped>
@import "../../../assets/css/troc/main.css";
@import "../../../assets/css/troc/phone_block.css";
</style>
