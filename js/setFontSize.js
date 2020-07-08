
$(function(){
       // 适配的方法
       function setFontSize() {
        var designWidth = 750; // 设计稿宽度
        var remPx = 100; // 在屏幕宽度375px，的时候，设置根元素字体大小 100px
        var scale = window.innerWidth / designWidth; //计算当前屏幕的宽度与设计稿比例
        // 根据屏幕宽度 动态计算根元素的 字体大小
        document.documentElement.style.fontSize = scale * remPx + 'px';
    }
    setFontSize();
    window.addEventListener("resize", function () {
        setFontSize();
    });
})