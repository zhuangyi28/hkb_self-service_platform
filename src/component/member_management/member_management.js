/**
 * Created by ZHUANGYI on 2018/1/17.
 */


var memberManagement = {


    //删除成员
    delEvtDom:function () {

    var allEleDle = document.getElementsByClassName('member_del');


    for (var i=0;i<allEleDle.length;i++){

        allEleDle[i].addEventListener('click',function () {

            delDetailDialog.show()


        })
    }
},
    //添加成员
    addEvtDom:function() {

    var allEleDle = document.getElementsByClassName('member_detail');


    for (var i=0;i<allEleDle.length;i++){

        allEleDle[i].addEventListener('click',function () {

            addDetailDialog.show()


        })
    }
},
     //编辑成员
    editEvtDom:function () {

    var allEleDle = document.getElementsByClassName('member_edit');


    for (var i=0;i<allEleDle.length;i++){

        allEleDle[i].addEventListener('click',function () {

            editDialog.show()


        })
    }
},
    //倒计时
    dropDownCode:function (details) {

    //获取验证码按钮
    var codeBtn = details.codeButton;

    //秒数
    var num = details.nums;

    //剩余秒数
    var countNum = 0;

    var InterValObj = 0;


    codeBtn.addEventListener('click', function sentCode() {

        //event.preventDefault();

        codeBtn.innerHTML = '重新发送'+ num + 's';

        codeBtn.className += ' btn_locked';

        countNum = num;

        InterValObj = setInterval(countDown,1000);


    },false);

    function countDown() {


        //如果等于0的时候停止计时 否则每一秒减一
        if(countNum==0){

            //清除计时器
            clearInterval(InterValObj);

            codeBtn.className = 'identifying_code';

            codeBtn.innerHTML = '点击获取验证码';

        }
        else {

            countNum--;

            codeBtn.innerHTML = '重新发送'+ countNum + 's';
        }

    }




},

    inputCheck:function (details) {


        if(!details){
            details ={}
        }

        var time = details.times;

        var codeBtn = details.codeButton;

        var thisInnerHtml = codeBtn.innerHTML;

      event.preventDefault();

    if (codeBtn.className.indexOf('btn_locked') == -1) {


        alert('1')

        codeBtn.innerHTML = '重新发送' + time + 's';

        codeBtn.className += ' btn_locked';

        var thisSet = setInterval(function () {

            codeBtn.innerHTML = '重新发送' + (--time) + 's';

            if (time <= 0) {

                clearInterval(thisSet);

                codeBtn.className = codeBtn.className.replace('btn_locked', '');

                codeBtn.innerHTML=thisInnerHtml;

            }

        }.bind(this), 1000)

    }
},

    //退款弹框
    refundsDom:function () {

        var allEleDle = document.getElementsByClassName('table_operation');


        for (var i=0;i<allEleDle.length;i++){

            allEleDle[i].addEventListener('click',function () {

                refundsDialog.show()


            })
        }
    }


};
