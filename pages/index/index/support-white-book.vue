<template>
  <div class="support-white-book">
    <div class="support-banner">
      <h1>TestBird资源库</h1>
    </div>
    <div class="support-container">
      <div class="block-area">
        <a
          class="link-in-pages active"
          href="#"
        >行业白皮书</a>
        <a
          class="link-in-pages"
          href="/support-blog"
        >博客</a>
      </div>
      <div class="block-area">
        <h3>行业白皮书</h3>
        <p>专业的行业移动应用测试报告，洞察移动应用质量现状</p>
        <div class="instructions-content">
          <div class="white-book">
            <img
              src="/img/support/ltt.png"
              style="width:175px;"
            >
            <p>手游测试白皮书 </p>
            <a
              class="link"
              href="https://jinshuju.net/f/sXSj7B"
            >点击领取 &gt;</a>
          </div>
          <div class="white-book">
            <img
              src="/img/support/zq.png"
              style="width:175px;"
            >
            <p>证券测试白皮书 </p>
            <a
              class="link"
              href="https://jinshuju.net/f/3XO8je"
            >点击领取 &gt;</a>
          </div>
          <div class="white-book">
            <img src="/img/support/2018.png">
            <p>2018年手游测试白皮书 </p>
          </div>
          
          <img
            class="desk"
            src="/img/support/desk.png"
          >
        </div>
        <div class="instructions-content">
          <div class="white-book">
            <img src="/img/support/2017.png">
            <p>2017上半年手游测试白皮书 </p>
          </div>
          <div class="white-book">
            <img src="/img/support/2016.png">
            <p>2016上半年APP测试白皮书</p>
          </div>
          <div class="white-book">
            <img src="/img/support/2015-2.png">
            <p>2015年度手游测试白皮书</p>
          </div>
          
          <img
            class="desk"
            src="/img/support/desk.png"
          >
        </div>
        <div class="instructions-content">
          <div class="white-book">
            <img src="/img/support/2014.png">
            <p>2014手游兼容性测试白皮书</p>
          </div>
          <div class="white-book">
            <img src="/img/support/2015-1.png">
            <p>2015年上半年中国手游兼容性白皮书</p>
          </div>
          <img
            class="desk"
            src="/img/support/desk.png"
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
        title:"行业白皮书 - TestBird移动互联测试专家",
        meta: [
                { name: 'keyword', content: '证券测试、银行测试、金融行业解决方案，证券测试白皮书、APP测试、Android测试、iOS测试、兼容性测试、压力测试、场景测试、移动应用质量、移动APP测试白皮书、游戏测试、手游测试、手游行业测试白皮书' },
                { name: 'description', content: 'TestBird权威发布证券行业、移动APP和手游行业测试报告，洞察移动应用质量现状' }
            ]
      }
    },
  name: "support-white-book",
  mounted(){
    this.$jquery('.scroll_box').animate({ scrollTop: 0 }, 0);

  },
};
</script>
<style lang='less'>
@color_1: #fff;
@color_2: #5d6570;
@color_3: #191e25;
@color_4: #0070f0;
@color_5: #8792a3;
@color_6: white;
@background_color_1: #0070f0;
@background_color_2: #f6444d;
@border_color_1: #e6ebf0;
@border_right_color_1: #f6444d;
@border_bottom_color_1: #fff;
@border_bottom_color_2: #0070f0;

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
    color: @color_1;
  }
}
p {
  font-size: 14px;
  line-height: 24px;
  color: @color_2;
  margin-bottom: 30px;
  .new {
    &:before {
      content: "";
      display: inline-block;
      width: 0;
      border: 5px solid;
      border-right-color: @border_right_color_1;
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
    color: @color_4;
    margin-bottom: 60px;
    width: 30%;
    float: left;
  }
  h3 {
    margin: 90px 0 25px;
  }
  .instructions-content {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    text-align: left;
    padding-bottom: 70px;
  }
  .subhead {
    font-size: 18px;
    color: @color_3;
    margin: 30px auto 18px;
  }
  .profile {
    font-size: 14px;
    line-height: 18px;
    color: @color_5;
    margin-bottom: 15px;
    height: 30px;
  }
}
.link-in-pages {
  display: inline-block;
  font-size: 16px;
  color: @color_3;
  width: 190px;
  height: 55px;
  line-height: 55px;
  border-width: 0 1px 2px 0;
  border-color: @border_color_1;
  border-style: solid;
  border-bottom-color: @border_bottom_color_1;
  cursor: pointer;
  &:first-child {
    border-left-width: 1px;
  }
  &:hover {
    color: @color_4;
    border-bottom-color: @border_bottom_color_2;
  }
}
.link-in-pages.active {
  color: @color_4;
  border-bottom-color: @border_bottom_color_2;
}
.instructions-content {
  .title {
    font-size: 22px;
    width: 100%;
    float: left;
    margin-top: 60px;
    &:before {
      content: "";
      display: inline-block;
      margin-right: 12px;
      width: 4px;
      height: 17px;
      background-color: @background_color_1;
    }
  }
}
.white-book {
  width: 400px;
  float: left;
  margin-top: 60px;
  position: relative;
  img {
    width: 140px;
    float: left;
  }
  p {
    color: @color_3;
    position: absolute;
    left: 164px;
    top: 27px;
    .new {
      display: inline-block;
      width: 45px;
      font-size: 12px;
      line-height: 16px;
      color: @color_6;
      background-color: @background_color_2;
      margin-left: 10px;
    }
  }
  .link {
    position: absolute;
    left: 164px;
    top: 75px;
  }
}
.desk {
  width: 1200px;
  position: relative;
  top: -50px;
  z-index: -1;
}
</style>