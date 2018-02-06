import Layer from './vue-layer.vue'

let uuid = 0 // layer 弹层的标识id
const ready = {
  timer: {}, // 计时器id
  layerPool: {} // layer 弹层存储在对象中
}

export default {
  install (Vue, options = {}) {
    const LayerCom = Vue.component('vue-layer', Layer)
    Vue.prototype.$layer = {
      v: '0.0.1',
      /**
       * open 显示一个layer 弹层
       * @param {Object} options - layer 弹层配置项
       * @return {Number} uuid  - layer 弹层的标识id
       */
      open (options = {}) {
        options.uuid = uuid
        const $layer = new LayerCom({
          el: document.createElement('div')
        })
        Object.assign($layer, options)

        $layer.uuid = ++uuid
        ready.layerPool[uuid] = $layer.$el
        if ($layer.time && typeof +$layer.time) {
          ready.timer[uuid] = setTimeout(this.close, $layer.time * 1000, $layer.uuid)
        }

        Vue.nextTick(function () {
          document.body.appendChild($layer.$el)
          $layer.success($layer.$el)
        })
        $layer.close = () => {
          if (options.shadeClose === false) return
          this.close($layer.uuid)
        }
        $layer.closeAll = () => {
          this.closeAll()
        }
        return uuid
      },
      /**
       * close 关闭对应id的layer 弹层
       * @param {Number} index - 显示layer 弹层的id
       */
      close (index) {
        ready.layerPool[index].remove()
        clearTimeout(ready.timer[index])
        delete ready.layerPool[index]
        delete ready.timer[index]
      },
      /**
       * closeAll 关闭所有layer 弹层
       */
      closeAll () {
        for (let key in ready.layerPool) {
          this.close(key)
        }
      }
    }
  }
}
