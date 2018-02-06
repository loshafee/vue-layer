# vue-m-layer
Vue2 layer plugin

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
layer.v version

layer.open(options) display the layer
* `options` (`Object`)
        
    * `type` (`Number`) layer type，0 represents message，1 represents loading(defaults to `0`)
    * `content` (`String`) layer text content
    * `title` (`String/Array`) layer title，it can be a `string` or `array` which length is two. as follows: ['title', 'background-color: #eee;'] the second parameter sets the title style(defaults to null).
    * `time` (`Number`) the seconds about closing the layer (defaults no closing)
    * `style` (`String`) custom layer style
    * `className` (`String`) add a className to layer element
    * `btn` (`String/Array`) no setting no diaplay. set one as `btn: 'button'`, if two, then set `btn: ['btn-one', 'btn-2'] `
    * `shade` (`Boolean`) show the mask(defaults to `true`)
    * `shadeClose` (`Boolean`) click the mask close the layer(defaults to `true`)
    * `loadingTips` (`String`) the strings tips in loading(defaults to `null`)
    * `yes` (`Function`) the first button's handled function
    * `no` (`Function`) the seconds button's handled function
    * `success` (`Function`) display the layer callback function

Returns a id about this layer.

layer.close(id) closing the layer
* id, optional the function `layer.open` returns id

layer.closeAll() close all layers

## Reference
Refer [layer](http://layer.layui.com/mobile/api.html)

## License
MIT


