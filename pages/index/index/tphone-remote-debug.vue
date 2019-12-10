<template>
  <div id='trd'>
    <div class="pc_show">
      <div class="banner tphone-banner ie-background">
        <h1>远程真机调试</h1>
        <p>解决因机型不全而导致无法在指定机型上复现BUG及调试程序的难题</p>
        <div class="btn-group">
          <a
            class="btn banner-btn"
            target="_blank"
            href="/dt/?next=rio"
          >立即测试</a>
        </div>
      </div>
      <div class="block-wrap columns-wrap">
        <div class="block-content align-center">
          <img src="/img/tphone/block-1.png">
          <div class="columns columns-three text-gray">
            <p class="column-block">终端碎片化严重，购机成本越来越高</p>
            <p class="column-block">终端维护投入高，日常管理繁琐</p>
            <p class="column-block">自建测试平台难度大，稳定性无法保证</p>
          </div>
        </div>
      </div>

      <div class="block-wrap block-striped">
        <div class="block-content top-padding clearfix">
          <div class="float-block">
            <img src="/img/tphone/block-2.png">
          </div>
          <div class="float-block position-center">
            <h3>极大节省购置新机成本，省时省力</h3>
            <p class="text-gray">机型丰富，型号齐全，20000+部真机，7×24小时在线<br>覆盖98%主流机型，用户随时随地、自由选择远程调试机型</p>
          </div>
        </div>
      </div>
      <div class="block-wrap">
        <div class="block-content top-padding clearfix">
          <div class="float-block position-center align-right">
            <h3>同步呈现实时操作，和本地调试无异</h3>
            <p class="text-gray">一键上传安装运行APP，实时同步呈现操作过程，画面流畅<br>支持断点调试，单步执行及远程命名操作</p>
          </div>
          <div class="float-block">
            <img
              style="width:486px;"
              src="/img/tphone/block-3.png"
            >
          </div>
        </div>
      </div>
      <div class="block-wrap block-striped">
        <div class="block-content top-padding clearfix">
          <div class="float-block">
            <img src="/img/tphone/block-4.png">
          </div>
          <div class="float-block position-center">
            <h3>丰富的日志、截图，加速开发问题定位</h3>
            <p class="text-gray">Log日志截图实时输出，完整反馈<br>日志过滤功能，快速复现BUG，定位更加准确<br>可连接Android Studio、Eclipse等本地调试工具实时进行调试</p>
          </div>
        </div>
      </div>
      <div class="block-wrap">
        <div class="block-content align-center">
          <h1>他们正在使用TestBird提高金融APP质量</h1>
          <img
            class="partners"
            src="/img/tphone/partners.png"
          >
        </div>
      </div>
      <div class="block-wrap foot-banner">
        <div class="block-content align-center">
          <h1>欢迎注册体验产品</h1>
          <a
            class="btn btn-transparent radius-btn"
            href="/dt/signup/signup.html"
          >点击注册</a>
        </div>
      </div>
    </div>
    <div class="phone_show">
      <section class="banner tphone-banner">
        <h1>远程真机调试</h1>
        <p>解决因机型不全而导致无法在指定机型上复现BUG及调试程序的难题</p>
      </section>
      <test-points :data-points='points'></test-points>
      <scenario-s
        :pageData='list'
        class="phone_show"
      ></scenario-s>
    </div>
  </div>
</template>

<script>
import scenarioS from "../../../components/scenario_s";
import testPoints from "../../../components/test_points";
export default {
  head(){
      return {
        title:"TestBird云手机 - 远程真机调试",
        meta: [
                { name: 'keyword', content: 'TestBird云手机，远程调试，远程Debug，远程手机租用，真机调试，安卓真机调试，Android真机调试，苹果真机调试，iOS真机调试、Android Studio、Eclipse' },
                { name: 'description', content: 'TestBird云手机为移动APP开发者提供24小时远程Android与iOS真机调试服务，全真机远程安装，运行和调试程序；丰富adb日志，截图和视频，实时定位问题；全面支持开发环境，可用IDE进行单步调试。解决因机型不全而导致无法在指定机型上复现BUG及调试程序的难题。' }
            ]
      }
    },
  name: "trd",
  mounted(){
    this.$jquery('.scroll_box').animate({ scrollTop: 0 }, 0);
  },
  components: {
    scenarioS,
    testPoints
  },
  data() {
    return {
      points: {
        imgSrc: "/img/tphone/yc.png",
        list: [
          "终端碎片化严重，购机成本越来越高",
          "终端维护投入高，日常管理繁琐",
          "自建测试平台难度大，稳定性无法保证"
        ]
      },
      list: [
        {
          img: "/img/tphone/yc-01.jpg",
          title: "极大节省购置新机成本，省时省力",
          desc:
            "机型丰富，型号齐全，20000+部真机，7×24小时在线<br>覆盖98%主流机型，用户随时随地、自由选择远程调试机型"
        },
        {
          img: "/img/tphone/yc-02.jpg",
          title: "同步呈现实时操作，和本地调试无异",
          desc:
            "一键上传安装运行APP，实时同步呈现操作过程，画面流畅<br>支持断点调试，单步执行及远程命名操作"
        },
        {
          img: "/img/tphone/yc-03.jpg",
          title: "丰富的日志、截图，加速开发问题定位",
          desc:
            "Log日志截图实时输出，完整反馈<br>日志过滤功能，快速复现BUG，定位更加准确<br>可连接Android Studio、Eclipse等本地调试工具实时进行调试"
        }
      ]
    };
  }
};
</script>
<style lang='less' scoped>
@import "../../../assets/css/base.css";
// #trd {
.banner.tphone-banner {
  background-image: url("/img/tphone/yc-bg.jpg");
}
.foot-banner {
  background-size: cover;
}
// }
@media screen and (max-width: 800px) {
  .w {
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    box-sizing: border-box;
    & + .w {
      padding-top: 0;
    }
  }
  // #trd {
  body {
    background-color: rgb(244, 245, 246);
  }
  .banner.tphone-banner {
    height: 220px;
    h1 {
      padding-top: 50px;
    }
    p {
      padding: 0 10%;
    }
  }
  // }
}
</style>