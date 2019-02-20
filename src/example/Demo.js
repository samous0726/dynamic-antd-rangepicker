import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import '../index.css';
import RangePicker from '../component/RangePicker';

import { LocaleProvider, Table } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';
const dataSource = [{
  key: '1',
  name: 'dynamicDateLimit',
  tag: '动态可选范围模式：根据所传的时间长度，动态设置前后的时间范围',
  type: 'boolean',
  default: '无'
}, {
  key: '2',
  name: 'maxDate',
  tag: '可选日期范围的最大时间，非dynamicDateLimit模式下，默认最大可选时间为当前时间',
  type: 'moment object',
  default: '[ moment() ]'
}, {
  key: '3',
  name: 'dateLimit',
  tag: '限制可选的日期长度： { year: 1 }  { month: 1 }  { week: 1 }  { day: 1 } 四选一，如传入多个属性，以最后一个属性为准',
  type: 'object',
  default: '无'
}];

const columns = [{
  title: '参数',
  dataIndex: 'name',
  align: 'center',
  width: '15%',
}, {
  title: '说明',
  dataIndex: 'tag',
  align: 'center',
  width: '55%',
}, {
  title: '类型',
  dataIndex: 'type',
  align: 'center',
  width: '15%',
  render: (v, row) => <font color="green">{v}</font>
}, {
  title: '默认值',
  dataIndex: 'default',
  align: 'center',
  width: '15%',
}];


class Demo extends React.Component {
  render() {
    return (
      <div style={{ width: '80%', maxWidth: 1400, margin: '60px auto' }}>
        <p style={{ fontSize: 26, fontWeight: 600 }}>antd-rangepicker-extend:</p>
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
        <Table
            style={{ marginTop: 30, fontSize: 18, fontWeight: 600 }}
            dataSource={dataSource}
            columns={columns}
        >
        </Table>
      </div>
    );
  }
}

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
      <Demo/>
    </LocaleProvider>, document.getElementById('root')
);