//轮播图
$('.index_slide').swiper({
    autoplay : 4000,
    speed:1500,
    effect:'slide',
    autoplayDisableOnInteraction : false,
    loop : true,
    onInit:function(swiper){
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});

//响应式导航
//$('.index_nav').responsiveNav({
//    animate: true
//});
var navigation = responsiveNav(".index_nav",{
    animate: true,                    // Boolean: 下拉导航是否使用css3过渡效果
    transition: 1000,                  // Integer: 控制导航下拉速度
    label: "M1enu",                    // String: 切换导航的标签
    insert: "after",                  // String: 在导航之前或之后插入切换
    customToggle: "",                 // Selector: 指定自定义切换的ID
    closeOnNavClick: false,           // Boolean: 当其中一个链接被点击时关闭导航
    openPos: "relative",              // String: 打开的导航，相对或静态的位置
    navClass: "nav-collapse",         // String: 默认CSS类。 如果更改，您还需要编辑CSS！
    navActiveClass: "js-nav-active",  // String: 导航处于活动状态时添加到<html>元素的类
    jsClass: "js",                    // String: 'JS启用'类添加到<html>元素
    init: function(){},               // Function: Init callback
    open: function(){},               // Function: Open callback
    close: function(){}               // Function: Close callback
});















