// source/js/tagcloud.js 的内容
window.onload = function() {
    try {
        TagCanvas.Start('resCanvas', '', {
            textColour: '#333',
            outlineColour: '#E2E1D1',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
            textFont: 'Trebuchet MS, Helvetica',
            textHeight: 25,
            initial: [0.05, -0.05],
            // 更多配置可以参考TagCanvas官网
        });
    } catch(e) {
        // 如果出错，隐藏画布，避免页面上出现空白区域
        document.getElementById('myCanvasContainer').style.display = 'none';
    }
};