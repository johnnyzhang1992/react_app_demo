import React, { Component } from "react";

import { DatePicker } from "antd";
import locale from "antd/lib/date-picker/locale/zh_CN";
import { Statistic, Row, Col } from "antd";

import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

export default class AntDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.openChange = this.openChange.bind(this);
        this.panelChange = this.panelChange.bind(this);
        this.onFinish = this.onFinish.bind(this);
    }

    openChange(status) {
        console.log(status);
        console.log("---open---change--");
    }
    panelChange() {
        console.log("---panel-change--");
    }
    onFinish() {
        console.log("finished!");
    }
    render() {
        const Countdown = Statistic.Countdown;
        const deadline = Date.now() + 1000 * 60 * 60 * 24 + 1000 * 30; // Moment is also OK

        return (
            <div style={{ padding: 20 }}>
                <Row gutter={16}>
                    <Col span={24}>
                        <DatePicker
                            local={locale}
                            defaultValue={moment(new Date(), "YYYY-MM-DD")}
                            placeholder="请选择日期"
                            onOpenChange={this.openChange}
                            onPanelChange={this.panelChange}
                        />
                    </Col>
                </Row>
                <h2>倒计时</h2>
                <Row gutter={16}>
                    <Col span={12}>
                        <Countdown
                            title="Countdown"
                            value={deadline}
                            onFinish={this.onFinish}
                        />
                    </Col>
                    <Col span={12}>
                        <Countdown
                            title="Million Seconds"
                            value={deadline}
                            format="HH:mm:ss:SSS"
                        />
                    </Col>
                    <Col span={24} style={{ marginTop: 32 }}>
                        <Countdown
                            title="Day Level"
                            value={deadline}
                            format="D 天 H 时 m 分 s 秒"
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
