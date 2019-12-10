<template>
  <div class="support-blog">
    <div class="support-banner">
      <h1>TestBird资源库</h1>
    </div>
    <div class="support-container">
      <div class="block-area">
        <a
          class="link-in-pages"
          href="/support-white-book"
        >行业白皮书</a>
        <a
          class="link-in-pages active"
          href="#"
        >博客</a>
      </div>
      <div class="block-area feature-support">
        <div class="feature-inner">
          <div class="content">
            <h2>博客</h2>
            <p>在这里获得新式的行业资讯和最in的技术干货</p>
            <a
              class="btn"
              target="_blank"
              href="http://legacy.testbird.com/"
            >查看详情</a>
          </div>
          <img
            class="graph"
            src="/img/support/support-blog.png"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head(){
      return {
        title:"博客 - TestBird移动互联测试专家",
        meta: [
                { name: 'keyword', content: '移动广告，TBMedia，TB 网盟，TB Network，海外广告平台，海外移动营销，海外应用推广，海外品牌推广，Facebook广告投放，Google广告投放，海外媒体投放，用户获取，海外广告投放平台、手机游戏测试，手游测试，手游测试工具，手游行业测试解决方案、标准兼容性测试、压力测试，云测试，云测试平台、远程真机调试，APP测试，移动应用测试，应用测试，安卓测试，Android测试，iOS测试，金融APP测试，银行APP测试，证券APP测试，场景测试，金融行业测试解决方案，TROC 移动APP自动化测试平台' },
                { name: 'description', content: 'TestBird移动互联测试专家，专注为企业提供与移动应用相关的云端测试和移动广告链条式生态服务，目前拥有针对移动广告业务的TB Media、TB 网盟及云测试服务、众测服务、TROC自动化测试平台。为全球移动互联紧密联系的企业提供成熟的行业测试和移动广告解决方案，服务行业涵盖手游、金融、电商、硬件、教育等，业务线包含港澳台、日、韩、欧美等全球市场。依托在北、上、广、深等地分部，持续服务40万开发者，助力企业提升业务效力，在全球市场释放品牌价值。' }
            ]
      }
    },
  name: "support-blog",
  mounted(){
    this.$jquery('.scroll_box').animate({ scrollTop: 0 }, 0);

  }
};
</script>
<style lang='less'>
body {
  letter-spacing: 0;
}
.support-banner {
  height: 300px;
  border-bottom: 0;
  background-image: url("/img/solution/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  h1 {
    padding-top: 125px;
    color: #fff;
  }
}
p {
  font-size: 14px;
  line-height: 24px;
  color: #5d6570;
  margin-bottom: 30px;
  .new {
    &:before {
      content: "";
      display: inline-block;
      width: 0;
      border: 5px solid;
      border-right-color: #f6444d;
      position: relative;
      left: -10px;
    }
  }
}
.support-container {
  .block-area {
    text-align: center;
    border: 1px solid #d1d9e0;
  }
  .link {
    display: block;
    font-size: 14px;
    color: #0070f0;
    margin-bottom: 60px;
    width: 30%;
    float: left;
  }
  h3 {
    margin: 90px 0 25px;
  }
}
.link-in-pages {
  display: inline-block;
  font-size: 16px;
  color: #191e25;
  width: 190px;
  height: 55px;
  line-height: 55px;
  border-width: 0 1px 2px 0;
  border-color: #e6ebf0;
  border-style: solid;
  border-bottom-color: #fff;
  cursor: pointer;
  &:first-child {
    border-left-width: 1px;
  }
  &:hover {
    color: #0070f0;
    border-bottom-color: #0070f0;
  }
}
.link-in-pages.active {
  color: #0070f0;
  border-bottom-color: #0070f0;
}
.feature-support {
  .btn {
    display: inline-block;
    text-align: center;
    font-size: 14px;
    border-radius: 4px;
    width: 90px;
    height: 28px;
    line-height: 28px;
    color: #fff;
    background-color: #0070f0;
  }
  .feature-inner {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .graph {
    float: left;
    width: 515px;
    margin: 123px 0;
  }
  .content {
    width: 685px;
    text-align: left;
    float: left;
    h2 {
      margin: 160px 0 25px;
    }
  }
  .content.right {
    text-align: right;
  }
}
</style>