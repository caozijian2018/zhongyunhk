<template>
  <div
    class="box"
    id="mite"
  >
    <div class="main-content-box">
      <div class='pc_show'>
        <div class="index-slider">
          <div
            class="banner banner-start-test ie-background"
            id="block_item0"
            :class="cls_block_item0"
          >
            <div class="block-content">
              <div class="float-block banner-left transform_duration1 transilateY3">
                <h1>移动互联测试专家</h1>
                <p>为移动应用提供从研发到上线的一站式质量管理服务</p>
                <a
                  class="btn banner-btn"
                  href="/dt/?"
                >开始测试</a>
              </div>
              <div class=" float-block banner-right position_relative transform_duration1 transilateX3">
                <img src="/img/mite/banner-right-img.png">
              </div>
            </div>
          </div>

        </div>
        <div
          class="block-wrap block-striped marginBtm"
          id="block_item1"
          :class="cls_block_item1"
        >
          <div class="block-content">
            <div class="block-p-title clearfix">
              <h2 class="l">TestBird行业解决方案</h2>
              <div class="btn-group r">
                <a class="btn btn-radius active js-financial-btn">金融行业</a>
                <a class="btn btn-radius js-game-btn">手游行业</a>
              </div>
            </div>
            <div class="js-financial-warp solution-wrap">
              <div class="solution-financial">
                <div class="solution-content">
                  <h2>金融行业解决方案</h2>
                  <p>沉淀十年测试经验和技术实力，熟悉各金融业务应用场景，具备批量自动化回归能力，大幅提升金融APP用户体验。</p>
                  <ul class="disc-style">
                    <li>拥有证券专业背景测试团队，深度理解证券交易场景，帮助券商提高APP质量，降低交易风险。</li>
                    <li>针对银行APP使用场景，深入各使用场景提供全方案、多重组合测试，提高留存率。</li>
                    <li>自动化测试平台私有化部署，支撑内部APP前期迭代开发，门槛低，上手快，确保企业软硬件与数据安全。</li>
                  </ul>
                  <a
                    class="btn btn-transparent"
                    href="/solution-financial/"
                  >了解详情</a>
                </div>
              </div>
              <div class="partners clearfix">
                <div class="title l hide">合作伙伴</div>
                <img
                  class="r"
                  src="/img/mite/partners-financial.png"
                >
              </div>
            </div>
            <div class="js-game-wrap solution-wrap hide">
              <div class="solution-game">
                <div class="solution-content">
                  <h2>手游行业解决方案</h2>
                  <p>全球首家突破手游自动化测试技术瓶颈，深入内部测试所有功能点，提升用户留存率，降低人力和时间成本。</p>
                  <ul class="disc-style">
                    <li>创新鹰眼识别技术，突破游戏引擎，深入新手引导、副本关卡、UI界面、性能指标、商城等内部系统进行测试。</li>
                    <li>拥有行业内领先的手机终端数，超过2万台手机终端，覆盖98%以上的主流机型，充分满足兼容性测试需求。</li>
                    <li>10家手游企业就有7家在TestBird做测试，丰富的测试经验帮助手游厂商提升效率，减少用户流失率。</li>
                  </ul>
                  <a
                    class="btn btn-transparent"
                    href="/solution-mobile-game/"
                  >了解详情</a>
                </div>
              </div>
              <div class="partners clearfix">
                <div class="title l hide">合作伙伴</div>
                <img
                  class="r"
                  src="/img/mite/partners-game.png"
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="block-wrap "
          id="block_item2"
          :class="cls_block_item2"
        >
          <div class="block-content clearfix">
            <div class="float-block transform_duration1 transilateX-2">
              <img
                style="position:relative;width: 80%;left: -20%;"
                src="/img/mite/comptest.png"
              >
            </div>
            <div class="float-block position-middle transform_duration1 transilateX2">
              <h3>标准兼容性测试
                <span class="new-hot">云测试服务</span>
              </h3>
              <h4>解决APP与移动终端的兼容适配问题 </h4>
              <ul class="icon-list">
                <li>机型多、覆盖广</li>
                <li>测试深、速度快</li>
                <li>报告全、定位准</li>
                <li>U型漏斗、省成本、少流失</li>
              </ul>
              <div class="btn-group">
                <a
                  class="btn btn-white"
                  href="/compatibility/"
                >查看详情</a>
                <a
                  class="btn btn-white"
                  href="/dt/?next=ct_game&amp;url_hash=/task-comptest/"
                >立即测试</a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="block-wrap"
          id="block_item3"
          :class="cls_block_item3"
        >
          <div class="block-content clearfix">
            <div class="float-block position-middle transform_duration1 transilateX-2">
              <h3>场景测试
                <span class="new-hot">云测试服务</span>
              </h3>
              <h4>有效解决金融APP复杂使用场景测试问题</h4>
              <ul class="icon-list">
                <li>应对复杂交易场景</li>
                <li>深入功能点测试</li>
                <li>多脚本、多用例、互不干扰</li>
              </ul>
              <div class="btn-group">
                <a
                  class="btn btn-white"
                  href="/scenario/"
                >查看详情</a>
                <a
                  class="btn btn-white"
                  href="/dt/?next=ct_game&url_hash=/task-scenario/"
                >立即测试</a>
              </div>
            </div>
            <div class="float-block transform_duration1 transilateX2">
              <img
                style="position:relative;width: 100%;right: -40%;"
                src="/img/mite/scenario.png"
              >
            </div>
          </div>
        </div>
        <div
          class="block-wrap "
          id="block_item4"
          :class="cls_block_item4"
        >
          <div class="block-content clearfix">
            <div class="float-block transform_duration1 transilateX-2">
              <img
                style="position:relative;width: 75%;left: -20%;"
                src="/img/mite/tphone.png"
              >
            </div>
            <div class="float-block position-middle transform_duration1 transilateX2">
              <h3>远程真机调试
                <span class="new-hot">云测试服务</span>
              </h3>
              <h4>解决因机型不全而导致无法在指定机型上复现BUG的难题</h4>
              <ul class="icon-list">
                <li>极大节省购置新机成本，省时省力</li>
                <li>同步呈现实时操作，和本地调试无异</li>
                <li>丰富的日志、截图，加速开发问题定位</li>
              </ul>
              <div class="btn-group">
                <a
                  class="btn btn-white"
                  href="/tphone-remote-debug/"
                >查看详情</a>
                <a
                  class="btn btn-white"
                  href="/dt/?next=rio"
                >立即测试</a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="block-wrap"
          id="block_item5"
          :class="cls_block_item5"
        >
          <div class="block-content clearfix">
            <div class="float-block position-middle transform_duration1 transilateX-2">
              <h3>压力测试
                <span class="new-hot">众测服务</span>
              </h3>
              <h4>全面测试服务器承载能力，有效避免因服务器崩溃造成的用户流失</h4>
              <ul class="icon-list">
                <li>真实设备，覆盖市面上80%以上的机型</li>
                <li>真实模拟开服后大量用户涌入的场景</li>
                <li>真实同屏在线，测试热门活动</li>
                <li>真实用户，分布广，可测不同地区带宽</li>
              </ul>
              <div class="btn-group">
                <a
                  class="btn btn-white"
                  href="/load-testing/"
                >查看详情</a>
                <a
                  class="btn btn-white"
                  href="/dt/?next=/loadtest/"
                >立即测试</a>
              </div>
            </div>
            <div class="float-block transform_duration1 transilateX2">
              <img
                style="position:relative;width: 80%;right: -50%;"
                src="/img/mite/loadtest.png"
              >
            </div>
          </div>
        </div>

        <div
          class="block-wrap "
          id="block_item6"
          :class="cls_block_item6"
        >
          <div class="block-content clearfix">
            <div class="float-block transform_duration1 transilateX-2">
              <img src="/img/mite/troc.png">
            </div>
            <div class="float-block position-middle transform_duration1 transilateX2">
              <h3>TROC移动APP自动化测试平台
                <span class="new-hot">自动化测试平台</span>
              </h3>
              <h4>专为企业定制的私有云自动化测试平台</h4>
              <ul class="icon-list">
                <li>真正意义上的私有云平台，所有操作100%基于Web浏览器</li>
                <li>同一套测试平台，支持手工、自动化、兼容性、内部Beta验证、问题定位</li>
                <li>测试资产统一集中云端存储，利于将过程数据存储记录下来，支撑研发效率持续改进</li>
                <li>B/S系统架构可扩展，可定制</li>
              </ul>
              <div class="btn-group">
                <a
                  class="btn btn-white"
                  href="/troc/"
                >查看详情</a>
              </div>
            </div>
          </div>
        </div>

        <div class="block-wrap data">
          <div class="block-content">
            <div class="text-box">
              <p class="num-desc">
                <span>已完成超过</span>
                <span>次测试任务</span></p>
              <ul>
                <li>
                  <p>20,000+ </p>
                  <p>合作伙伴</p>
                </li>
                <li>
                  <p>5,000+ </p>
                  <p>热门手机机型数量</p>
                </li>
                <li>
                  <p>98% </p>
                  <p>覆盖主流机型</p>
                </li>
                <li>
                  <p>100,000+ </p>
                  <p>众测专业测试人员</p>
                </li>
              </ul>
            </div>
            <div class="num-animate js-num-animate"></div>
          </div>
        </div>
        <div class="national-img">
          <img src="/img/mite/ISO.png">
          <img src="/img/mite/ISTQB.png">
          <img src="/img/mite/gaoxin.png">
          <img src="/img/mite/CMMI.png">
        </div>
        <div class="block-wrap">
          <div
            class="block-content"
            style="max-width: 1000px;width:100%;"
          >
            <div class="block-p-title book-title clearfix">
              <h2 class="l">行业白皮书</h2>
            </div>
            <el-carousel
              class='book-banner-container'
              height="400px"
              indicator-position="outside"
            >
              <el-carousel-item
                key='1'
                class="book-bg book-securities ie-background"
              >
                <div class="text-wrap">
                  <h2>证券测试白皮书</h2>
                  <p>此书收录了TestBird2017年大量的证券测试数据，对移动端证券类程序的适配测试数据进行了统计和深入分析，从不同维度分析证券类程序的质量问题。</p>
                  <a
                    class="btn btn-transparent"
                    href="https://www.testbird.com/support-white-book/"
                  >立即下载</a>
                </div>
              </el-carousel-item>
              <el-carousel-item
                key='2'
                class="book-bg book-game ie-background"
              >
                <div class="text-wrap">
                  <h2>手游测试白皮书</h2>
                  <p>此书是TestBird整合2018年中国手游行业测试数据，全面分析手游测试问题，分享经验教训，其间披露数据涵盖9755款游戏，并对其进行详细的阐述分析，希望能对您的市场判断和未来发展提供一些思路和帮助。</p>
                  <a
                    class="btn btn-transparent"
                    href="https://www.testbird.com/support-white-book/"
                  >立即下载</a>
                </div>
              </el-carousel-item>
              <el-carousel-item
                key='3'
                class="book-bg book-app ie-background"
              >
                <div class="text-wrap">
                  <h2>APP测试白皮书</h2>
                  <p>此书是TestBird对2016年测试的20806款APP 数据进行统计分析，为您直观的展示市面上APP的质量状况，以期能对您的市场判断和未来发展提供一些思路和帮助。</p>
                  <a
                    class="btn btn-transparent"
                    href="https://www.testbird.com/support-white-book/"
                  >立即下载</a>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>

        <div
          class="block-wrap"
          style="margin-top:60px;"
        >
          <div class="block-content top-padding">
            <div class="position_relative fotbox">
              <div class="text_center font_weight_600 h1_font margin_top_20 margin_bottom_3">企业合作伙伴</div>
              <el-carousel
                height="400px"
                indicator-position="outside"
                style='overflow-y:hidden;'
              >
                <template v-for='i in 2'>
                  <el-carousel-item
                    :key='i'
                    style="padding-bottom:50px;"
                  >
                    <img
                      :src="'/img/products/ad'+(i+1)+'.png'"
                      class="width_100"
                      alt
                    >
                  </el-carousel-item>
                </template>
              </el-carousel>
            </div>
          </div>
        </div>
        <div class="block-wrap foot-banner">
          <div class="block-content align-center">
            <h2>立即开始测试吧</h2>
            <a
              class="btn active btn-transparent radius-btn"
              href="/dt/signup/signup.html"
            >立即测试</a>
          </div>
        </div>
      </div>
      <div class="phone_show">
        <section class="block-1">
          <img src="/img/mite/banner-right-img.png">
        </section>
        <h1>移动互联测试专家</h1>
        <p>为移动应用提供从研发到上线的一站式质量管理服务</p>
        <section class="block-2">
          <div>
            <h2>TestBird行业解决方案</h2>
            <div>
              <img src="/img/mite/financial-bg.png">
              <el-row :gutter='20'>
                <template v-for='i in 6'>
                  <el-col
                    :key='i'
                    :span="8"
                  >
                    <img :src="'/img/mite/yd-01-0'+i+'.png'">
                  </el-col>
                </template>
              </el-row>
              <h2>金融行业解决方案</h2>
              <p>沉淀十年测试经验和技术实力，熟悉各金融业务应用场景，具备批量自动化回归能力，大幅提升金融APP用户体验。</p>
              <ul>
                <li>拥有证券专业背景测试团队，深度理解证券交易场景，帮助券商提高APP质量，降低交易风险。</li>
                <li>针对银行APP使用场景，深入各使用场景提供全方案、多重组合测试，提高留存率。</li>
                <li>自动化测试平台私有化部署，支撑内部APP前期迭代开发，门槛低，上手快，确保企业软硬件与数据安全。</li>
              </ul>
              <a
                class="glo_button"
                href="/solution-financial/"
              >了解详情</a>
            </div>

            <div>
              <img src="/img/mite/game-bg.png">
              <el-row :gutter='20'>
                <template v-for='i in 6'>
                  <el-col
                    :key='i'
                    :span="8"
                  >
                    <img :src="'/img/mite/yd-02-0'+i+'.png'">
                  </el-col>
                </template>
              </el-row>
              <h2>手游行业解决方案</h2>
              <p>全球首家突破手游自动化测试技术瓶颈，深入内部测试所有功能点，提升用户留存率，降低人力和时间成本。</p>
              <ul>
                <li>创新鹰眼识别技术，突破游戏引擎，深入新手引导、副本关卡、UI界面、性能指标、商城等内部系统进行测试。</li>
                <li>拥有行业内领先的手机终端数，超过2万台手机终端，覆盖98%以上的主流机型，充分满足兼容性测试需求。</li>
                <li>10家手游企业就有7家在TestBird做测试，丰富的测试经验帮助手游厂商提升效率，减少用户流失率。</li>
              </ul>
              <a
                class="glo_button"
                href="/solution-mobile-game/"
              >了解详情</a>
            </div>
          </div>
        </section>
        <section class="block-3">

          <section>
            <div>
              <img src="/img/mite/1.png">
            </div>
            <div>
              <span class="new-hot">云测试服务</span>
              <h3>标准兼容性测试</h3>
              <h4>解决APP与移动终端的兼容适配问题 </h4>
              <ul class="icon-list">
                <li>机型多、覆盖广</li>
                <li>测试深、速度快</li>
                <li>报告全、定位准</li>
                <li>U型漏斗、省成本、少流失</li>
              </ul>
              <div class="btn-group">
                <a
                  class="glo_button"
                  href="/compatibility/"
                >了解详情</a>
              </div>
            </div>
          </section>

          <section>
            <div>
              <img src="/img/mite/3.png">
            </div>
            <div>
              <span class="new-hot">云测试服务</span>
              <h3>场景测试</h3>
              <h4>有效解决金融APP复杂使用场景测试问题</h4>
              <ul class="icon-list">
                <li>应对复杂交易场景</li>
                <li>深入功能点测试</li>
                <li>多脚本、多用例、互不干扰</li>
              </ul>
              <div class="btn-group">
                <a
                  class="glo_button"
                  href="/scenario/"
                >了解详情</a>
              </div>
            </div>
          </section>

          <section>
            <div>
              <img src="/img/mite/2.png">
            </div>
            <div>
              <span class="new-hot">云测试服务</span>
              <h3>远程真机调试</h3>
              <h4>解决因机型不全而导致无法在指定机型上复现BUG的难题</h4>
              <ul class="icon-list">
                <li>极大节省购置新机成本，省时省力</li>
                <li>同步呈现实时操作，和本地调试无异</li>
                <li>丰富的日志、截图，加速开发问题定位</li>
              </ul>
              <div class="btn-group">
                <a
                  class="glo_button"
                  href="/tphone-remote-debug/"
                >了解详情</a>
              </div>
            </div>
          </section>

          <section>
            <div>
              <img src="/img/mite/4.png">
            </div>
            <div>
              <span class="new-hot">云测试服务</span>
              <h3>压力测试</h3>
              <h4>全面测试服务器承载能力，有效避免因服务器崩溃造成的用户流失</h4>
              <ul class="icon-list">
                <li>真实设备，覆盖市面上80%以上的机型</li>
                <li>真实模拟开服后大量用户涌入的场景</li>
                <li>真实同屏在线，测试热门活动</li>
                <li>真实用户，分布广，可测不同地区带宽</li>
              </ul>
              <div class="btn-group">
                <a
                  class="glo_button"
                  href="/load-testing/"
                >了解详情</a>
              </div>
            </div>
          </section>

          <section>
            <div>
              <img src="/img/mite/5.png">
            </div>
            <div>
              <span class="new-hot">自动化测试平台</span>
              <h3>TROC移动APP自动化测试平台</h3>
              <h4>专为企业定制的私有云自动化测试平台</h4>
              <ul class="icon-list">
                <li>真正意义上的私有云平台，所有操作100%基于Web浏览器</li>
                <li>同一套测试平台，支持手工、自动化、兼容性、内部Beta验证、问题定位</li>
                <li>测试资产统一集中云端存储，利于将过程数据存储记录下来，支撑研发效率持续改进</li>
                <li>B/S系统架构可扩展，可定制</li>
              </ul>
              <div class="btn-group">
                <a
                  class="glo_button"
                  href="/troc/"
                >了解详情</a>
              </div>
            </div>
          </section>

        </section>

        <section class="block-4">
          <h2>行业白皮书</h2>
          <el-carousel
            class='book-banner-container'
            indicator-position="none"
            :interval='5000'
            arrow="always"
            height="480px"
          >
            <el-carousel-item key='1'>
              <img src="/img/mite/book-3.png">
              <h2>证券测试白皮书</h2>
              <p>此书收录了TestBird2017年大量的证券测试数据，对移动端证券类程序的适配测试数据进行了统计和深入分析，从不同维度分析证券类程序的质量问题。</p>
            </el-carousel-item>
            <el-carousel-item key='2'>
              <img src="/img/mite/book-2.png">
              <h2>手游测试白皮书</h2>
              <p>此书是TestBird整合2018年中国手游行业测试数据，全面分析手游测试问题，分享经验教训，其间披露数据涵盖9755款游戏，并对其进行详细的阐述分析，希望能对您的市场判断和未来发展提供一些思路和帮助。</p>
            </el-carousel-item>
            <el-carousel-item key='3'>
              <img src="/img/mite/book-1.png">
              <h2>APP测试白皮书</h2>
              <p>此书是TestBird对2016年测试的20806款APP 数据进行统计分析，为您直观的展示市面上APP的质量状况，以期能对您的市场判断和未来发展提供一些思路和帮助。</p>
            </el-carousel-item>
          </el-carousel>
        </section>

        <section class="block-5">
          <h2>Partener</h2>
          <el-carousel
            indicator-position="none"
            height="250px"
          >
            <template v-for='i in 3'>
              <el-carousel-item :key='i'>
                <img
                  :src="'/img/mite/ad'+i+'.png'"
                  class="width_100"
                  alt
                >
              </el-carousel-item>
            </template>
          </el-carousel>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import jquery from "jquery";
import bus from "../../../util/bus";
Vue.prototype.$jquery = jquery;
export default {
  head(){
    return {
      title:"TestBird - 移动互联测试专家",
      meta: [
                { name: 'keyword', content: '手机游戏测试，手游测试，手游测试工具，手游行业测试解决方案、标准兼容性测试、压力测试，云测试，云测试平台、远程真机调试，APP测试，移动应用测试，应用测试，安卓测试，Android测试，iOS测试，金融APP测试，银行APP测试，证券APP测试，场景测试，金融行业测试解决方案，TROC 移动APP自动化测试平台' },
                { name: 'description', content: 'TestBird移动互联测试专家，专注为企业提供与移动应用相关的云端测试和移动广告链条式生态服务，目前拥有针对移动广告业务的TB Media、TB 网盟及云测试服务、众测服务、TROC自动化测试平台。为全球移动互联紧密联系的企业提供成熟的行业测试和移动广告解决方案，服务行业涵盖手游、金融、电商、硬件、教育等，业务线包含港澳台、日、韩、欧美等全球市场。依托在北、上、广、深等地分部，持续服务40万开发者，助力企业提升业务效力，在全球市场释放品牌价值。' }
            ]
    }
  },
  mounted() {
    this.sortModuleOffset();
    this.Windowscroll();
    this.setHeight();
    this.$jquery('.scroll_box').animate({ scrollTop: 0 }, 0);
    //金融行业、手游行业切换
    var $financialBtn = this.$jquery(".js-financial-btn"),
      $financialWrap = this.$jquery(".js-financial-warp"),
      $gameBtn = this.$jquery(".js-game-btn"),
      $gameWrap = this.$jquery(".js-game-wrap");
    $financialBtn.click(function() {
      $financialBtn.addClass("active");
      $gameBtn.removeClass("active");
      $gameWrap.hide();
      $financialWrap.fadeIn();
    });
    $gameBtn.click(function() {
      $gameBtn.addClass("active");
      $financialBtn.removeClass("active");
      $financialWrap.hide();
      $gameWrap.fadeIn();
    });
  },
  computed: {
    cls_block_item0: function() {
      return this.scroll_most_value + this.inner_height > this.show_arr[0]
        ? "transition_back"
        : "";
    },
    cls_block_item1: function() {
      return this.scroll_most_value + this.inner_height > this.show_arr[1]
        ? "transition_back"
        : "";
    },
    cls_block_item2: function() {
      return this.scroll_most_value + this.inner_height > this.show_arr[2]
        ? "transition_back"
        : "";
    },
    cls_block_item3: function() {
      return this.scroll_most_value + this.inner_height > this.show_arr[3]
        ? "transition_back"
        : "";
    },
    cls_block_item4: function() {
      return this.scroll_most_value + this.inner_height > this.show_arr[4]
        ? "transition_back"
        : "";
    },
    cls_block_item5: function() {
      return this.scroll_most_value + this.inner_height > this.show_arr[5]
        ? "transition_back"
        : "";
    },
    cls_block_item6: function() {
      return this.scroll_most_value + this.inner_height > this.show_arr[6]
        ? "transition_back"
        : "";
    }
  },
  data() {
    return {
      show_arr: [],
      inner_height: 0,
      scroll_most_value: 0
    };
  },
  methods: {
    setHeight: function() {
      this.inner_height = innerHeight / 2;
    },
    sortModuleOffset() {
      this.show_arr = [
        this.$jquery("#block_item0").offset().top,
        this.$jquery("#block_item1").offset().top,
        this.$jquery("#block_item2").offset().top,
        this.$jquery("#block_item3").offset().top,
        this.$jquery("#block_item4").offset().top,
        this.$jquery("#block_item5").offset().top,
        this.$jquery("#block_item6").offset().top
      ];
    },
    Windowscroll: function() {
      var that = this;
      var oneFlag = true;
      bus.$on("windowScroll", v => {
        // 数字滚动动画
        if (oneFlag) {
          var numOffsetTop = document.querySelector(".block-wrap.data")
            .offsetTop;
          if (
            numOffsetTop - window.innerHeight < v &&
            numOffsetTop + window.innerHeight > v
          ) {
            oneFlag = false;
            that.play(that.format_number(that.getNumber()));
          }
        }
        if (v > that.scroll_most_value) {
          that.scroll_most_value = v;
        }
      });
    },
    getFormatDate: function(seconds) {
      var date = new Date(seconds * 1000);
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    },
    getNumber: function() {
      return (
        parseInt(
          ((new Date().getTime() - new Date(2018, 0, 1).getTime()) /
            1000 /
            60 /
            60) *
            3
        ) + 12345321
      );
    },
    format_number: function(nStr) {
      nStr += "";
      var x = nStr.split("."),
        x1 = x[0],
        x2 = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
      }
      return x1 + x2;
    },
    play: function(num) {
      var dom = document.querySelector(".js-num-animate"),
        threshold = 10,
        html = "",
        arr = String(num).split(""),
        len = arr.length;
      for (var i = 0; i < len; i++) {
        if (arr[i] == ",") {
          html += '<div class="separator">,</div>';
          continue;
        }
        html += '<div id="num_' + i + '" class="num" data-id="' + i + '">';
        html += this._retuen10(threshold);
        html += "</div>";
      }
      dom.innerHTML = html;
      var num = dom.querySelectorAll(".num"),
        spanHeight = num[0].querySelector("span").offsetHeight,
        numlen = num.length;
      for (var j = 0; j < numlen; j++) {
        var newi = document.createElement("i");
        newi.innerHTML = arr[num[j].getAttribute("data-id")];
        num[j].querySelector("span").appendChild(newi);
        num[j].querySelector("span").style.transition =
          "all " + (0.9 + j * 0.1) + "s ease-in .1s";
        num[j].querySelector("span").style.marginTop = "-" + spanHeight + "px";
      }
    },
    _retuen10: function(num) {
      var html = "";
      html += "<span>";
      for (var i = 0; i < num; i++) {
        for (var j = 0; j < 10; j++) {
          html += "<i>" + j + "</i>";
        }
      }
      html += "</span>";
      return html;
    }
  }
};
</script>
<style lang="less">
@import "../../../assets/css/base.css";
@import "../../../assets/css/mite.css";

@media screen and (max-width: 800px) {
  html body .container #mite {
    width: 100%;
    h1,
    h2,
    h3 {
      text-align: center;
    }
    section {
      width: 90%;
      margin: 0 5%;
      overflow: hidden;
      padding-bottom: 5%;
      .glo_button {
        display: block;
        margin: 20px auto;
        width: 140px;
      }
      img {
        max-width: 100%;
      }
    }
    .block-1 {
      width: 100%;
      margin: 0;
      background: url(/img/mite/banner-start-test.png) no-repeat center;
      background-size: cover;
      text-align: center;
      > img {
        width: 66%;
        margin: 10% auto 0;
        display: block;
      }
    }
    h1 {
      margin-top: 5%;
      color: #191e25;
      font-size: 24px;
      & + p {
        text-align: center;
        margin-bottom: 5%;
        color: #5d6570;
      }
    }
    .block-2 {
      h2 {
        margin: 20px auto;
        color: #191e25;
        font-size: 19px;
      }
      p {
        color: #5d6570;
      }
      h3 {
        color: #191e25;
      }
      .el-row {
        margin-top: 10px;
        .el-col {
          padding: 10px;
        }
      }

      ul {
        color: #5d6570;
        list-style: none;
        li {
          padding-bottom: 10px;
        }
      }
    }
    .block-3 {
      width: 100%;
      margin: 0;
      div {
        text-align: center;
        margin-bottom: 5rem;
        span {
          display: inline-block;
          margin: 20px auto;
        }
        h3 {
          color: rgba(25, 30, 37, 0.85);
          padding-bottom: 15px;
        }
        h4 {
          color: rgb(93, 101, 112);
          padding-bottom: 25px;
        }
        li {
          padding-bottom: 10px;
        }
      }
    }
    .block-4 {
      background-color: #eef7fd;
      padding: 20px 0;
      width: 100%;
      margin: 0;
      text-align: center;
      img {
        width: 50%;
        margin: 0 20%;
        display: block;
      }
      h2 {
        margin: 20px 0;
      }
      img + h2 {
        margin: 20px 0;
      }
      p {
        width: 80%;
        margin: 0 10%;
      }
    }
    .block-5 {
      margin-top: 10%;
      h2 {
        margin: 20px auto;
      }
    }
  }
}
</style>