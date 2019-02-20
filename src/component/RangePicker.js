import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

export default class RangePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
    }
  }

  disabledDate = (now) => {
    const { maxDate, dateLimit, dynamicDateLimit } = this.props;
    const { selected } = this.state;
    let beforeDay = null;
    let afterDay = null;
    if (dateLimit) {
      let unit = Object.keys(dateLimit)[0];
      beforeDay = moment(selected).subtract(dateLimit[unit], unit);
      if (selected && dynamicDateLimit) {
        if (!isNaN(dateLimit[unit])) {
          afterDay = moment(selected).add(dateLimit[unit], unit);
        }
        // 如果设定了最大时间 并且最大时间小于计算时间 最终范围设定为最大时间
        if (maxDate && moment(maxDate).isBefore(afterDay)) {
          afterDay = maxDate
        }
        return now < beforeDay || now > afterDay.endOf('day');
      } else {
        return now < beforeDay || now > moment().endOf('day');
      }
    } else if (maxDate) {
      return now && now > maxDate.endOf('day');
    }
  }

  onCalendarChange = (now) => {
    const { dateLimit, dynamicDateLimit } = this.props;
    if (dateLimit && dynamicDateLimit && now.length === 1) {
      this.setState({
        selected: now[0]
      })
    }
  }

  render() {
    return (
      <DatePicker.RangePicker
        {...this.props}
        disabledDate={this.disabledDate}
        onCalendarChange={this.onCalendarChange}
      />
    );
  }
}