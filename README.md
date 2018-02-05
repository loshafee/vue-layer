# vue-m-layer
Vue2 layer弹层插件

## Installtion

    npm install vue-m-layer --save

## Initialization

    import Vue from 'vue'
    import layer from 'vue-m-layer'
    Vue.use(layer)

## Examples

    this.$layer.open({
        content: 'show the layer in the view'
    })

## API
layer.v 版本号

layer.open(options) 展示弹层
* `options` (`Object`), optional
        
    * `type` (`Number`) 弹层类型，0 表示信息层，1表示加载层，默认为信息层
    * `content` (`String`) 弹层文本内容
    * `title` (`String/Array`) 弹层标题，可以设置为字符串或长度为2的数组，例如设置成['标题', 'background-color: #eee;'] 第二个参数可以自定义标题的样式，默认为空
    * `time` (`Number`) 控制自动关闭弹层所需描述，默认为不关闭
    * `style` (`String`) 自定义弹层的样式
    * `className` (`String`) 添加一个自定义css类到弹层
    * `btn` (`String/Array`) 不设置则不显示按钮。如果只需要一个按钮，则btn: '按钮'，如果有两个，则：btn: ['按钮一', '按钮二'] 
    * `shade` (`Boolean`) 设置弹层的背景蒙层，默认显示true
    * `shadeClose` (`Boolean`) 点击弹层内容区域之外，关闭该弹层，默认点击关闭
    * `loadingTips` (`String`) 加载层下的提示文字，默认空
    * `yes` (`Function`) 第一个按钮btn的点击的事件处理函数
    * `no` (`Function`) 第二个按钮点击btn的事件处理函数
    * `success` (`Function`) 弹层显示的回调函数

Returns a id about this layer.

layer.close(id) 关闭弹层
* id, optional 调用layer.open返回的id值

layer.closeAll() 关闭所有弹层

## Reference
参考 开源弹层layerui系列 [layer](http://layer.layui.com/mobile/api.html)


