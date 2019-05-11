import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
// import echarts
import echarts from 'echarts';
// register theme object
echarts.registerTheme('my_theme', {
  backgroundColor: '#f4cccc'
});

// ---学习地址----
// https://github.com/hustcc/echarts-for-react
export default class EchartDemo extends Component { 
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    getOption = () => {
        return {
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [150, 232, 201, 154, 190, 330, 410]
                }
            ]
        };
    }
    render() { 
        return (
            <div className="echart_demo">
                <h2>Echarts Demo</h2>
                {/* // render echarts option. */}
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '300px', width: '80%',margin: '0 auto'}}
                    className='echarts-for-echarts'
                    theme='my_theme'
                />
            </div>
        )
    }
}