/**
 * Created by ZHUANGYI on 2017/11/23.
 */
var hkbShowDialog = function (details) {

    if(!details){

        details ={}

    }

    this.details = details;

    var thisEle = document.getElementById(this.details.ele);


    thisEle.getElementsByClassName('dialog_close')[0].addEventListener('click', clickEven.bind(this), false);



    function clickEven() {

        this.hide();

    }



    if(thisEle.getElementsByClassName('dialog_bg')[0]) {


            addEvent(thisEle.getElementsByClassName('dialog_bg')[0]);


    }



    function addEvent(ele) {

        var allEvent=['touchstart','touchmove','touchend'];

        for(var i=0;i<allEvent.length;i++) {

            ele.addEventListener(allEvent[i],eventBan,false)

        }

    }

    function eventBan(e) {


        window.event ? window.event.returnValue = false : e.preventDefault();


    }

};

hkbShowDialog.prototype.show = function (details) {


    if(details){

        details.fn();

    }



    var thisEle = document.getElementById(this.details.ele);


    thisEle.style.display = 'block';


    setTimeout(function () {

        if (thisEle.className.indexOf('show') == -1) {

            thisEle.className += ' show'

        }

    }, 1);

    document.getElementsByClassName('dialog_bg')[0].addEventListener('touchmove',windowBanEvent.Canceling,false);//给阴影绑定冒泡事件


};

hkbShowDialog.prototype.hide = function () {

    var thisEle = document.getElementById(this.details.ele);


    if (thisEle.className.indexOf('show') > -1) {


        transitionMove(thisEle);

        thisEle.className = thisEle.className.replace(' show', '')

    }

    windowBanEvent.unbundling();//解绑页面禁止事件




    function transitionMove(ele) {

        // Safari 3.1 到 6.0 代码
        ele.addEventListener("webkitTransitionEnd", MFunction);
        // 标准语法
        ele.addEventListener("transitionend", MFunction);

        function MFunction() {

            ele.style.display = 'none';
            // Safari 3.1 到 6.0 代码
            ele.removeEventListener("webkitTransitionEnd", MFunction);
            // 标准语法
            ele.removeEventListener("transitionend", MFunction);


        }


    }


};