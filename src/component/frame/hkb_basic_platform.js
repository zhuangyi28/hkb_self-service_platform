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


                thisSelectEle.className=thisSelectEle.className.replace(' tab_all_selected','')

                if(thisSelectEle!=this){

                    this.className+=' tab_all_selected'
                }

            }

            else {

                this.className+=' tab_all_selected'

            }







        },false)


    }





}

};
