/**
 * Created by ZHUANGYI on 2017/11/15.
 */
var hkbErrorTips={

    errorShow:function(details){

        var _this=this;

        if(!details){//如果details未输入，则防止报错
            details={};
        }

        var thisText = details.text || 'null';

        thisText=thisText.toString().replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/"/g,'&quot;');//字符串转义

        var thisInnerHtml = thisText;

        _this.errorRemove();//先删除一次


        var thisInsertEle = addNode('div',thisInnerHtml,'error_main');



    setTimeout(function () {

      thisInsertEle.className="error_main show";

     },1);


        //插入元素
        function addNode(tag,innerHtml,className){

            var ele=document.createElement(tag);

            ele.innerHTML=innerHtml;

            ele.className=className;

            document.getElementsByClassName('login_content_prompt')[0].appendChild(ele);




            return ele;

        }



    },

    errorRemove:function(){

        var _this=this;

        if(document.getElementsByClassName('error_main')[0]){

                removeNode(document.getElementsByClassName('error_main')[0])

        }

        //删除元素
        function removeNode(ele){

            var eleParentEle=ele.parentNode;

            if(eleParentEle){

                eleParentEle.removeChild(ele)
            }

        }

    }



};