# affix

---

[![Build Status](https://travis-ci.org/seaui/transition.svg)](https://travis-ci.org/seaui/transition)

固定层插件

---

## 用法

### 通过data属性

只需为需要监听的页面元素添加`data-spy="affix"`即可方便的添加affix行为。然后设置`data-offset-*`的值来控制该元素的开关，当滚动坐标小于该值关闭affix.

````html
<div data-spy="affix" data-offset-top="200">...</div>
````

> ####Requires independent styling ;)
> Affix插件在三中状态之间切换：`affix`、`affix-top`和`affix-bottom`。你必须为这三种状态提供自己的样式（不依赖此插件）。 `affix-top` class应当是在正常文档流中的状态。`affix` class应当是以fixed方式定位时的状态。`affix-bottom`应当是以absolute方式定位时的状态。注意，`affix-bottom`在此插件中比较特殊， is special in that the plugin will place the element with JS relative to the offset: { bottom: number } option you've provided.

### 通过JavaScript

通过JavaScript启动affix插件：

```javascript
seajs.use('affix', function() {
  $('#myAffix').affix({
    offset: {
      top: 100,
      bottom: function () {
        return (this.bottom = $('.bs-footer').outerHeight(true))
      }
    }
  })
});
```

### 选项

可以将选项通过data属性或JavaScript传递。对于data属性，需要将选项名称放到`data-`之后，例如`data-offset-top="200"`。

<table class="table table-bordered table-striped">
        <thead>
         <tr>
           <th style="width: 100px;">名称</th>
           <th style="width: 100px;">类型</th>
           <th style="width: 50px;">默认值</th>
           <th>描述</th>
         </tr>
        </thead>
        <tbody>
         <tr>
           <td>offset</td>
           <td>number | function | object</td>
           <td>10</td>
           <td>Pixels to offset from screen when calculating position of scroll. If a single number is provided, the offset will be applied in both top and bottom directions. To provide a unique, bottom and top offset just provide an object <code>offset: { top: 10 }</code> or <code>offset: { top: 10, bottom: 5 }</code>. Use a function when you need to dynamically calculate an offset.</td>
         </tr>
    </tbody>
</table>

