document.addEventListener('DOMContentLoaded', function() {
    // 初始化树状图的 ECharts 实例
    var treeChart = echarts.init(document.getElementById('tree-chart'));

    // 树状图配置项和数据
    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: function(params){
                //检查是否有注释字段并应用自定义样式
                let tooltipContent = `<div style = "font-size: 14px;font-weight: bold;">${params.data.name}</div>`;
                if(params.data.comment){
                    tooltipContent += `<div style = font-size: 14px; color: #666; font-style: italic;">${params.data.comment}</div>`;
                }
                return tooltipContent;
            }
        },
        series: [
            {
                type: 'tree',
                data: [
                    {
                        name: '养老产业',
                        children: [
                            {
                                name: '养老服务',
                                children: [
                                    { name: '居家养老' },
                                    { name: '社区养老' },
                                    { name: '机构养老' ,
                                      comment: '根据老人自理能分离强弱分档位收费'
                                    },
                                ]
                            },
                            {
                                name: '养老器材', 
                                comment: '从老年人茶杯（一种带豁口的、把鼻子位置让出去的茶杯，老人不用使劲仰头就能把水喝完）到老年男用短裤（裆部加厚加翼、内藏具有吸收液体功能材料的短裤，可以帮助老人避免漏尿外显的尴尬），从大小便护理机器人到陪伴机器人',
                                url: 'https://dbba.sacinfo.org.cn/attachment/downloadStdFile?pk=7ac6c22e473542a7f9b8b0820910744d17dde8fcc3cdfe2e8d79d8b2d421c68d',
                            },
                            {
                                name: '其他',
                                children: [
                                    { name: '养老地产' },
                                    { name: '养老金融' },
                                    { name: '养老机构数字化管理'}
                                ]
                            }
                        ]
                    }
                ],
                top: '5%',
                left: '20%',
                bottom: '2%',
                right: '30%',
                layout: 'orthogonal',
                orient: 'LR', // 从左到右
                symbolSize: 7,
                label: {
                    position: 'left',//父对象的左侧
                    verticalAlign: 'middle',
                    align: 'right',//水平对齐到右侧
                    fontSize: 16,
                    overflow: 'truncate',//确保文字不超出节点
                    ellipsis: '...'//使用省略号表示超出部分
                },
                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left',
                        overflow: 'truncate',
                        ellipsis: '...'
                    }
                },
                expandAndCollapse: true,
                initialTreeDepth: 1,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    };

    // 使用指定的配置项和数据显示树状图
    treeChart.setOption(option);
    treeChart.on('click', function (params){
        if(params.data.url){
            //打开链接
            window.open(params.data.url, '_blank');
        }
    })
});
