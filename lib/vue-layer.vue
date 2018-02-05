<template>
  <div class="m-layer m-layer0" :index="uuid">
    <div class="m-layer-shade" v-if="shade" :style="shadeStyle"></div>
    <div class="m-layer-main" @click="close" v-if="type === 0">
      <div class="m-layer-section" @click.stop>
        <div class="m-layer-child" :style="style" :class="className">
          <h3 :style="titleStyle" v-if="title">{{ titleTips }}</h3>
          <div class="m-layer-content">
            {{ content }}
          </div>
          <div class="m-layer-btn" v-if="btn.length">
            <span v-if="btn.length == 2" @click="no(uuid)">
              {{ btn[1] }}
            </span>
            <span yes @click="yes(uuid)">
              {{ btn[0] }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="m-layer-main" v-if="type === 1">
      <div class="m-layer-section">
        <div class="loader">
          <div class="loader-outer"></div>
          <div class="loader-inner"></div>
        </div>
        <p class="loading-tips" v-if="loadingTips">{{ loadingTips }}</p>
      </div>
    </div>
    <div class="m-layer-main" v-if="type === 2">
      <div class="m-layer-section">
        <div class="loader">
          <div class="loader-outer"></div>
          <div class="loader-inner"></div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layer',
  data () {
    return {
      uuid: 0,
      type: 0, // 0 表示信息层，1表示加载层，默认为信息层
      content: '', // 设置layer文本内容      
      title: '',   // 空，值可以为字符串或者数组。为空则不显示，如['标题', 'background-color: #eee;'] 第二个参数可以自定义标题的样式      
      time: 0,  // 控制自动关闭层所需秒数，默认不关闭      
      style: '',  // 自定义层的样式      
      className: '',  // 自定义一个css类      
      btn: '',  //不设置则不显示按钮。如果只需要一个按钮，则btn: '按钮'，如果有两个，则：btn: ['按钮一', '按钮二']      
      shade: true, // 设置layer的背景蒙层，默认显示true      
      shadeClose: true, // layer内容区域之外点击，关闭该layer，默认点击关闭
      loadingTips: '' // 加载层下的提示文字，默认空
    }
  },
  methods: {
    /** 关闭layer */
    close () {
    },
    /** btn[1]按钮的事件函数 */
    no () {
    },
    /** btn[0]按钮的事件函数 */
    yes () {
    },
    /**功弹出层的回调 */
    success (ele) {}
  },
  computed: {
    titleTips () {
      if (typeof this.title === 'string') {
        return this.title
      } else if (Array.isArray(this.title)) {
        return this.title[0]
      }
    },
    titleStyle () {
      if (Array.isArray(this.title) && this.title.length === 2) {
        return this.title[1]
      }
    },
    shadeStyle () {
      return (typeof this.shade === 'string' && this.shade)
    }
  }
}
</script>

<style lang="less" scoped>
  .m-layer {
    position: relative;
    z-index: 19890328;
    &-shade {
      pointer-events: auto;
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.7)
    }
    &-main {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
    &-child {
      background-color: #fff;
      text-align: left;
      border-radius: 5px;
    }
    h3 {
      font-size: 1.8rem;
      padding: 0 10px;
      height: 60px;
      line-height: 60px;
      font-weight: 600;
      border-radius: 5px 5px 0 0;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      background-color: #1e9fff;
      color: #fff;
    }
    &-content {
      padding: 36px 30px;
      font-size: 1.6rem;
      text-align: center;
      line-height: 1.6;
    }
    &-btn {
      display: flex;
      background-color: #f2f2f2;
      border-top: 1px solid #d0d0d0;
      border-radius: 0 0 5px 5px;
      span {
        flex: 1;
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 1.6rem;
        &:nth-child(n+1) {
          border-left: 1px solid #d0d0d0;
        }
        &[yes] {
          color: #f40;
        }
      }
    }
  }
  .m-layer0 .m-layer-section {
    width: 88%;
    max-width: 640px;
  }
  .loading-tips {
    text-align: center;
    color: #fff;
    font-size: 1.6rem;
    margin-top: 24px;
  }
  .loader {
    position: relative;
    width: 68px;
    height: 68px;
    margin: 0 auto;
  }
  .loader .loader-outer {
    position: absolute;
    border: 4px solid #ff5722;
    border-left-color: transparent;
    border-bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: loader-outer 1s cubic-bezier(.42, .61, .58, .41) infinite;
  }
  .loader .loader-inner {
    position: absolute;
    border: 4px solid #ff5722;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    left: 14px;
    top: 14px;
    border-right: 0;
    border-top-color: transparent;
    animation: loader-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
  }
  @keyframes loader-outer {
    0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    }
    100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    }
  }
  @keyframes loader-inner {
    0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    }
    100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    }
  }
</style>
