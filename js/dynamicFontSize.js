function setDynamicFontSize(id,designWidth){
    $(window).resize(setFs);
    setFs();
    function setFs(){
        var sjWidth =designWidth?designWidth:320;
        var w=window.screen.width;
        if (w>600){
            w=600;
        }
        var fs = w/sjWidth*10;
        document.getElementById(id).style.fontSize=fs+"px"
    }
}