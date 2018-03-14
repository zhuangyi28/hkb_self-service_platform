/**
 * Created by ZHUANGYI on 2017/11/8.
 */

/*

var hkbDropDown = function (details) {

    if(!details){

        details ={}

    }

    //var thisEle = document.getElementById(this.details.ele);

    this.details = details;



};

hkbDropDown.prototype.show = function (details) {


    if(details){

        details.fn();

    }

    var thisEle = document.getElementById(this.details.ele);

    thisEle.style.display = 'block';

    setTimeout(function () {

        if (thisEle.className.indexOf('show') == -1) {

            thisEle.className += ' show'

        }

        else {

            basicHkb.transitionEndFn(thisEle,function MFunction() {

                thisEle.style.display = 'none';
                // Safari 3.1 到 6.0 代码
                thisEle.removeEventListener("webkitTransitionEnd", MFunction);
                // 标准语法
                thisEle.removeEventListener("transitionend", MFunction);


            });

            thisEle.className = thisEle.className.replace(' show', '')
        }

    }, 1);


};

hkbDropDown.prototype.hide = function (details) {

    if(details){

        details.fn();

    }

    var thisEle = document.getElementById(this.details.ele);



    if (thisEle.className.indexOf('show') > -1) {

        basicHkb.transitionEndFn(thisEle,function MFunction() {

            thisEle.style.display = 'none';
            // Safari 3.1 到 6.0 代码
            thisEle.removeEventListener("webkitTransitionEnd", MFunction);
            // 标准语法
            thisEle.removeEventListener("transitionend", MFunction);


        });


        thisEle.className = thisEle.className.replace(' show', '')

    }




};*/

var basicPlatform = {

    tabChange:function(){


    var huikabaoTabul=document.getElementById('HKB_tabUl');

    var allTab=huikabaoTabul.getElementsByClassName('tab_block');


        for(var i=0;i<allTab.length;i++){

        allTab[i].addEventListener('click',function () {

            var thisSelectEle=document.getElementsByClassName('tab_all_selected')[0];

            if(thisSelectEle){

                thisSelectEle.className = 'tab_block';

                if(thisSelectEle!=this){

                    this.className+=' tab_all_selected'
                }

            }

            else {

                this.className+=' tab_all_selected'

            }

        },false);


    }

    if(document.getElementsByClassName('content_body')[0]){

        document.getElementsByClassName('content_body')[0].addEventListener('click',function () {

            if(huikabaoTabul.getElementsByClassName('tab_all_selected')[0]){

                huikabaoTabul.getElementsByClassName('tab_all_selected')[0].className = 'tab_block';
            }



        },false);

    }





    },
    navUserDrop:function () {


    var clickEle = document.getElementsByClassName('hkb_user')[0];

    var thisEle = document.getElementById('userList');

    var hrefBtn = document.getElementsByClassName('user_operation')[0].getElementsByTagName('a');


    clickEle.addEventListener('click',function () {


        if(thisEle.className.indexOf('show') > -1){


            transitionMove(thisEle);

            thisEle.className = thisEle.className.replace(' show','');


        }

        else {


            thisEle.style.display = 'block';

            setTimeout(function () {

                thisEle.className += ' show';

            },1)



        }

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

        addevent();

        function addevent() {

            for (var i=0;i<hrefBtn.length;i++){


                hrefBtn[i].addEventListener('click',function () {


                    event.preventDefault();

                    thisEle.className = thisEle.className.replace(' show', '')


                },false)
            }
        }





    },false)



}

};
