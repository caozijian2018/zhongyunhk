<template>
  <div id='control'>
    <section class="banner control-banner">
      <h1>控件遍历测试</h1>
      <p>测试APP机型的适配性，属于兼容性相关测试</p>
      <div class="btn-group">
        <a
          class="btn banner-btn"
          target="_blank"
          href="/dt/?next=ct_game&amp;url_hash=/task-control/"
        >立即测试</a>
      </div>
    </section>
    <section class="w">
      <h2>全自动化测试，无人值守，不需要录制脚本</h2>
      <p>根据TestBird的APP测试经验，有80%的测试，仅覆盖20%的页面<br>
        20%的重点功能会反复测试，80%的页面元素覆盖不到。
        一个普通APP一般有1000个以上控件，
        但是常规测试中，有600-800个控件是很少覆盖到的<br>
        控件遍历测试可以解决这样的难题</p>
    </section>
    <section class="features w">
      <ul>
        <li>
          <img src="/img/control/kj-01.png">
          <p>
            自动获取控件
          </p>
        </li>
        <li>
          <img src="/img/control/kj-02.png">
          <p>
            自动控件命名
          </p>
        </li>
        <li>
          <img src="/img/control/kj-03.png">
          <p>
            自动生成控件树
          </p>
        </li>
        <li>
          <img src="/img/control/kj-04.png">
          <p>
            遍历结果自动对比
          </p>
        </li>
        <li>
          <img src="/img/control/kj-05.png">
          <p>
            自动生产报告
          </p>
        </li>
      </ul>
    </section>
    <section class="diff">
      <h2>
        控件遍历测试和兼容性测试的区别
      </h2>
      <p class="w">
        20%的重点功能会反复测试，80%的页面元素覆盖不到
        一个普通APP一般有1000个以上控件， 但是常规测试中
        有600-800个控件是很少覆盖到的
      </p>
      <ul class="w">
        <li>
          <div>
            <img src="/img/control/yc-06.png">
            <h3>控件遍历测试</h3>
            <ul>
              <li>
                <h5>测试方式</h5>
                <p>按照控件树进行遍历点击</p>
              </li>
              <li>
                <h5>录制脚本</h5>
                <p>不需要做脚本录制，是全自动化测试</p>
              </li>
              <li>
                <h5>逻辑操作</h5>
                <p>不能够完成带逻辑相关的操作</p>
              </li>
              <li>
                <h5>价格因素</h5>
                <p>性价比高，工作量要小</p>
              </li>
              <li>
                <h5>全面性</h5>
                <p>按照控件树逐个操作，更加全面 </p>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <img src="/img/control/yc-07.png">
            <h3>兼容性测试</h3>
            <ul>
              <li>
                <h5>测试方式</h5>
                <p>通过脚本录制回放来完成的</p>
              </li>
              <li>
                <h5>录制脚本</h5>
                <p>需要人工录制脚本</p>
              </li>
              <li>
                <h5>逻辑操作</h5>
                <p>可以做逻辑相关的操作</p>
              </li>
              <li>
                <h5>价格因素</h5>
                <p>价格高于控件遍历测试</p>
              </li>
              <li>
                <h5>全面性</h5>
                <p>全面性低于控件遍历测试</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
export default {
  head(){
    return {
      title:"TestBird APP兼容性测试-移动APP自动化测试工具"
    }
  },
  name: "control",
  mounted(){
        this.$jquery('.scroll_box').animate({ scrollTop: 0 }, 0);
  },
};
</script>
<style lang='less'>
@import "../../../assets/css/base.css";
.w {
  max-width: 1200px;
  margin: 0 auto;
}
#control {
  .banner.control-banner {
    background-image: url("/img/control/kj-bg.png");
  }
  section + section {
    text-align: center;
    h2 {
      margin: 4rem auto 2rem;
    }
    h2 + p {
      line-height: 2;
      margin-bottom: 4rem;
    }
  }
  .features ul {
    display: flex;
    padding-bottom: 3rem;
    text-align: left;
    li {
      text-align: center;
      flex: 1;
      margin: 20px;
      background-color: #eff7fd;
      padding: 40px 0 30px;
      border-bottom: 2px solid rgb(197, 219, 250);
      img {
        width: 80px;
        margin-bottom: 20px;
      }
    }
  }
  .diff {
    background-color: #eff7fd;
    padding: 3rem 0;
    ul {
      display: flex;
      > li {
        margin: 20px;
        flex: 1;
        padding: 20px 20px 0;
        background-color: #fff;
        border-bottom: none;
        h3 {
          margin: 2rem auto 4rem;
          position: relative;
          &:after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -2rem;
            margin-left: -40px;
            width: 80px;
            height: 2px;
            background-color: #0070f0;
          }
        }
        img {
          width: 100px;
        }
        ul {
          display: block;
          li {
            border-top: 1px solid #eee;
            display: block;
            padding: 20px 0;
            margin: 0;
            p {
              margin: 0;
            }
          }
        }
        h5 {
          font-weight: normal;
          color: #666;
        }
        h5 + p {
          color: #333;
        }
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .w {
    width: 90%;
    margin: 0 auto;
  }
  #control {
    .banner.control-banner {
      height: 160px;

      h1 {
        padding-top: 50px;
      }
      .btn-group {
        display: none;
      }
    }

    .features {
      > ul {
        width: 90%;
        margin: 0 auto;
        display: block;
        > li {
          width: 45%;
          flex: none;
          margin: 10px 0;
          display: inline-block;
          &:nth-of-type(even) {
            margin-left: 10%;
          }
        }
      }
    }
    .diff {
      h2 {
        width: 80%;
        & + p {
          width: 80%;
        }
      }

      > ul {
        display: block;
        > li {
          flex: none;
        }
      }
    }
  }
}
</style>