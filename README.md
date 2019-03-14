# dynamic-antd-rangepicker

<br/>

## Introduce

-拓展antd时间范围组件禁用时间可配置性
<br/><br/>

## Quick Overview

```sh
npm install  
npm start
```

## API
| 参数     | 说明    |  类型  | 默认值  |
| -------- | :----:  | :----: |:----: |
| dynamicDateLimit | 动态可选范围模式：<br/>根据所传的时间长度，<br/>动态设置前后的时间范围 | boolean |
| maxDate         | 可选日期范围的最大时间，<br/>非dynamicDateLimit模式下，<br/>默认最大可选时间为当前时间 | moment object | [ moment() ]
| dateLimit       | 限制可选的日期长度： <br/>{ year: 1 }  { month: 1 }  { week: 1 }  { day: 1 }<br/> 四选一，如传入多个属性，以最后一个属性为准 | object |
--------------------- 
## Demo Code
```jsx
  <RangePicker
      maxDate={moment()}
      dynamicDateLimit
      dateLimit={{ month: 1 }}
      showTime={{ format: 'HH:mm' }}
      style={{ width: 500 }}
      format={dateFormat}
      ranges={{
        今天: [moment().startOf('day'), moment()],
        本周: [moment().startOf('week'), moment()],
        本月: [moment().startOf('month'), moment()],
        近一周: [moment().subtract(1, 'week'), moment()],
        近一月: [moment().subtract(1, 'month'), moment()],
        近三月: [moment().subtract(3, 'month'), moment()]
      }}
    />
```


### npm
```
npm i dynamic-antd-rangepicker --save 
```

###  CDN 
```
https://unpkg.com/dynamic-antd-rangepicker@0.0.8/lib/js/main.min.js
```


<br/><br/>
## issues：
https://github.com/samous0726/dynamic-antd-rangepicker/issues
