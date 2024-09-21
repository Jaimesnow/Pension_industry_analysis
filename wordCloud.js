document.addEventListener('DOMContentLoaded', function() {
    // 初始化词云图的 ECharts 实例
    var wordCloudChart = echarts.init(document.getElementById('wordCloud'));

    // 词云数据
    var data = [
        { name: '产业缺口大', value: 1000, img:'img/产业缺口.png'},
        { name: '养老财务依赖养老保障', value: 1000, img:'img/养老保障.png'},
        { name: '居民养老压力大，需求大', value: 1000 },
        { name: '客单价居高不下', value: 2000, img:'img/客单价.png' },
        { name: '促销降价可行性低', value: 2000, img:'img/促销降价.png' },
        { name: '亟需模式技术创新', value: 2000, img:'img/模式技术创新.png'  },
        { name: '大额营利困难', value: 2000, img:'img/盈利困难.png' },
        { name: '产业政策', value: 500, img:'img/产业政策.png'  },
        { name: '金融政策', value: 500, img:'img/金融政策.png'  },
        { name: '市场需要加速', value: 200, img:'img/市场加速.png' },
        { name: '市场地域差异', value: 200, img:'img/市场地域差异.png' },
        { name: '资金规模大 回报周期长', value: 200, img:'img/市场特性.png' },
        { name: '金融+养老', value: 200, img:'img/金融+养老.png' }
    ];

    // 词云配置项
    var option = {
        tooltip: {
            show: true
        },
        series: [{
            type: 'wordCloud',
            gridSize: 2,
            sizeRange: [12, 50],
            rotationRange: [0, 0],
            shape: 'circle',
            width: '100%',
            height: '100%',
            drawOutOfBound: false,
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                            Math.round(Math.random() * 255),
                            Math.round(Math.random() * 255),
                            Math.round(Math.random() * 255)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: data
        }]
    };

    // 使用指定的配置项和数据显示词云图
    wordCloudChart.setOption(option);

    // 监听点击事件
    wordCloudChart.on('click',function(params){
        if(params.data.img){
            showModal(params.data.img);
        }
    });
});

// 显示模态框
function showModal(imageSrc) {
    var modal = document.getElementById('image-modal');
    var modalImg = document.getElementById('modal-image');
    modalImg.src = imageSrc;
    modal.style.display = 'block';
}

// 关闭模态框
function closeModal() {
    var modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}
