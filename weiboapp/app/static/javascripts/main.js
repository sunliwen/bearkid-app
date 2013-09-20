var result = {
  "m1": "#熊孩子#我家的小阿哥还算不上小熊孩儿哦~为他描述的一切他都感兴趣极啦,一台内容丰富,可以无限重复的故事机就可以拯救我啦!有了文曲星故事机,故事听再多遍也不怕啦!家有熊孩子?! 来测测！http://t.cn/z8YhRP0 转发有奖哦！ http://t.cn/z8QPgEZ",
  "m2": "#熊孩子#我家的小淘气为萌芽熊孩子，一点战斗力都没有，他对新鲜感的追求是他上进心的反光！ 层出不穷的故事、成语、神话… 文曲星故事机里都有！家有熊孩子？！来测测！http://t.cn/z8YhRP0 转发有奖哦！ http://t.cn/z8QPgEZ",
  "m3": "#熊孩子#我家的大宝贝已经正式进入了熊孩子初级阶段，他的好奇心是将来一切数码产品悲剧的源泉… 文曲星故事机里有无穷无尽的天文地理，每个月都有更新,让他琢磨去吧！来测测！http://t.cn/z8YhRP0 转发有奖哦！http://t.cn/z8QPgEZ",
  "m4": "#熊孩子#我家的小阿哥已经算是进阶熊宝宝了！作为一个小男子汉，从小就要培养深（jie）沉（jian）的气质，要挖掘玩具的内涵才行。文曲星故事机有专家安排的推送功能，常听常新，最适（sheng）合（qian）了！家有熊孩子？！来测测！http://t.cn/z8YhRP0 转发有奖哦！http://t.cn/z8QPgEZ",
  "m5": "#熊孩子#我家这位小王子已经是名符其实的“熊孩子”啦！和他们没有道理可讲！不管你多疲惫多辛苦他都有不停歇的缠着你！赶紧请文曲星故事机陪他一会儿，吸引他的注意力，让自己能喘口气，现在就解脱吧！ 家有熊孩子？！来测测！http://t.cn/z8YhRP0 转发有奖哦！http://t.cn/z8QPgEZ",

  "f1": "#熊孩子#我家小公主还算不上小熊孩儿哦~她喜欢听爸爸妈妈给她描述这个世界奇妙美好的一切，故事机可以耐心讲上三百零一遍！有了文曲星故事机，故事听再多遍也不怕啦！家有熊孩子？！来测测！http://t.cn/z8YhRP0 转发有奖哦！http://t.cn/z8QPgEZ",
  "f2": "#熊孩子#我家的小顽皮为萌芽熊孩子，熊孩儿指数只在萌芽阶段！ 现在就如此追求新鲜感，未来的她一定走在时尚最前线！文曲星故事机，故事总能花样再翻新:)家有熊孩子？！来测测！http://t.cn/z8YhRP0 转发有奖哦！http://t.cn/z8QPgEZ",
  "f3": "#熊孩子#我家的小宝贝已经进入了熊孩子初级阶段，她的求知欲已经蔓延到了整个宇宙! 将来不会有男孩子能瞒过她的眼睛! 文曲星故事机里有幼教专家不断更新专业知识，保证修炼火眼金睛!家有熊孩子？！来测测！http://t.cn/z8YhRP0 转发有奖哦！http://t.cn/z8QPgEZ",
  "f4": "#熊孩子#我家的小公主已经进入了进阶熊孩子阶段，题主已经看到她将来的男友表情了！不过现在嘛，先给她一个故事机听故事吧，告诉她故事机是会换灵魂的哟！每个月的灵魂讲的故事不一样哟！来测测！http://t.cn/z8YhRP0 转发有奖哦！http://t.cn/z8QPgEZ",
  "f5": "#熊孩子#我家的小公主已经是名符其实的“熊孩子”啦！明明大人辛辛苦苦为她赚钱跑了一天，跑来缠着大人不放！可是这样的熊孩子最可爱啦！不过，不妨请文曲星故事机陪她一会儿，给自己放个假吧！家有熊孩子？！来测测！http://t.cn/z8YhRP0 转发有奖哦！http://t.cn/z8QPgEZ"
};
$(function() {
  var index_page = $("#index"),
    questions_page = $("#questions"),
    oP1 = $("#Problem1"),
    oP2 = $("#Problem2"),
    oP3 = $("#Problem3"),
    oP4 = $("#Problem4"),
    oP5 = $("#Problem5"),
    oP6 = $("#Problem6"),
    oP7 = $("#Problem7"),

    oR = $("#Result"),
    result_text = $("#result-text"),
    
    oPro = $(".picbg").find("span"),
    oBtn1 = $("#p1But"),//oP1.find(".but"),
    oBtn2 = oP2.find(".but"),
    oBtn3 = oP3.find(".but"),
    oBtn4 = oP4.find(".but"),
    oBtn5 = oP5.find(".but"),
    oBtn6 = oP6.find(".but"),
    oBtn7 = oP7.find(".but"),

    oBtn9 = oR.find("#retake"),
    oBtnShare = $("#shareBut"),
    oBtnFollow = oR.find("#follow"),

    fightIndex = $("#fight-index"),

    index = 0,
    answer,
    data = [];

  index_page.find('img').click(function() {
    index_page.hide();
    questions_page.show();
  });

  oP1.find("input[type='radio']").change(function() {
    var choose1 = oP1.find("input[type='radio']:checked").length;
    if (choose1) {
      oPro.animate({
        "width": "15%"
      }, 400);
    }
    data.push($(this).val());
    return data;
  });

  $(document).on('click', '#Problem1 input.but', function() {
    var choose1 = oP1.find("input[type='radio']:checked").length;
    if (choose1) {
      try {
      oP1.animo({
        animation: 'flipOutY'
      }, function() {
        oP1.hide();
        oP2.show();
        oP2.animo({
          animation: 'flipInY'
        });
      });
      } finally {
        oP1.hide();
        oP2.show();
      };
    } else {
      alert("请选择一个答案");
      return false;
    }
  });

  oP2.find("input[type='radio']").change(function() {
    var choose2 = oP2.find("input[type='radio']:checked").length;
    if (choose2) {
      oPro.animate({
        "width": "30%"
      }, 400);
    }
    return data;
  });
  oBtn2.click(function() {
    var choose2 = oP2.find("input[type='radio']:checked").length;
    if (choose2) {
      try {
      oP2.animo({
        animation: 'flipOutY'
      }, function() {
        oP2.hide();
        oP3.show();
        oP3.animo({
          animation: 'flipInY'
        });
      });
      } finally {       
          oP2.hide();
          oP3.show();
      };
    } else {
      alert("请选择一个答案");
      return false;
    }
  });

  oP3.find("input[type='radio']").change(function() {
    var choose3 = oP3.find("input[type='radio']:checked").length;
    if (choose3) {
      oPro.animate({
        "width": "45%"
      }, 400);
    }
    return data;
  });
  oBtn3.click(function() {
    var choose3 = oP3.find("input[type='radio']:checked").length;
    if (choose3) {
      try{
          oP3.animo({
        animation: 'flipOutY'
      }, function() {
        oP3.hide();
        oP4.show();
        oP4.animo({
          animation: 'flipInY'
        });
      });

       }finally{
           oP3.hide();
           oP4.show();
       }
    } else {
      alert("请选择一个答案");
      return false;
    }
  });

  oP4.find("input[type='radio']").change(function() {
    var choose4 = oP4.find("input[type='radio']:checked").length;
    if (choose4) {
      oPro.animate({
        "width": "60%"
      }, 400);
    }
    data.push($(this).val());
    return data;
  });
  oBtn4.click(function() {
    var choose4 = oP4.find("input[type='radio']:checked").length;
    if (choose4) {
        try{
      oP4.animo({
        animation: 'flipOutY'
      }, function() {
        oP4.hide();
        oP5.show();
        oP5.animo({
          animation: 'flipInY'
        });
      });
        } finally {
            oP4.hide();
            oP5.show();
        }
    } else {
      alert("请选择一个答案");
      return false;
    }
  });
  oP5.find("input[type='radio']").change(function() {
    var choose5 = oP5.find("input[type='radio']:checked").length;
    if (choose5) {
      oPro.animate({
        "width": "70%"
      }, 400);
    }
    return data;
  });
  oBtn5.click(function() {
    var choose5 = oP5.find("input[type='radio']:checked").length;
    if (choose5) {
        try{
      oP5.animo({
        animation: 'flipOutY'
      }, function() {
        oP5.hide();
        oP6.show();
        oP6.animo({
          animation: 'flipInY'
        });
      });
        } finally {
            oP5.hide();
            oP6.show();
        }
    } else {
      alert("请选择一个答案");
      return false;
    }

  });
  oP6.find("input[type='radio']").change(function() {
    var choose6 = oP6.find("input[type='radio']:checked").length;
    if (choose6) {
      oPro.animate({
        "width": "85%"
      }, 400);
    }
    return data;
  });
  oBtn6.click(function() {
    var choose6 = oP6.find("input[type='radio']:checked").length;
    if (choose6) {
        try{
      oP6.animo({
        animation: 'flipOutY'
      }, function() {
        oP6.hide();
        oP7.show();
        oP7.animo({
          animation: 'flipInY'
        });
      });

        }finally {
        oP6.hide();
        oP7.show();
        }
    } else {
      alert("请选择一个答案");
      return false;
    }
  });
  oP7.find("input[type='radio']").change(function() {
    var choose7 = oP7.find("input[type='radio']:checked").length;
    if (choose7) {
      oPro.animate({
        "width": "100%"
      }, 400);
    }
    return data;
  });
  oBtn7.click(function() {
    var choose7 = oP7.find("input[type='radio']:checked").length;
    if (choose7) {
        try{
      oP7.animo({
        animation: 'flipOutY'
      }, function() {
        oP7.hide();
        oR.show();
        oR.animo({
          animation: 'flipInY'
        });
      });
        } finally {
            oP7.hide();
            oR.show();
        }

      if (!data[1]) {
        data[1] = 3;
      }
      index = data[0] + data[1];
      answer = result[index];

      if (data[0] === 'f') {
        $('#Result').find('#award').attr("src", 'static/images/tuz.png');
        $('#product-link').attr("href", 'http://api.weibo.com/t_short_url?outUrl=http%3A%2F%2Fto.taobao.com%2FPOINT%3Fbackurl%3Dhttp%3A%2F%2Fdetail.tmall.com%2Fitem.htm%3Fid%3D20133693601%26amp%3Bspm%3Da310v.4.88.1&extra=20133693601|product|product')
      }
      $('#fight-index').attr("src", "static/images/s" + data[1] + ".png");
      result_text.html(result[index]);

      WB2.anyWhere(function(W){
          W.widget.publish({
            action:"pubilish",
            type:"web",
            language:"zh_cn",
            default_text:$("#result-text").text(),
            refer:"y",
            default_image:"http%3A%2F%2Fkid.pocoweb.com%2Fstatic%2Fimages%2Findex_small.jpg",
            id: "publish-button"
          });
      });
    } else {
      alert("请选择一个答案");
      return false;
    }
  });
  oBtn9.click(function() {
    data.length = 0;
    $('input:radio').removeAttr('checked');
    try {
    oR.animo({
      animation: 'flipOutY'
    }, function() {
      oR.hide();
      oP1.show();
      oP1.animo({
        animation: 'flipInY'
      });
      oP2.hide();
      oP3.hide();
      oP4.hide();
      oP5.hide();
      oP6.hide();
      oP7.hide();
    });
    
    }
    finally {
        oR.hide();
        oP1.show();
        oP2.hide();
        oP3.hide();
        oP4.hide();
        oP5.hide();
        oP6.hide();
        oP7.hide();
    }
    oPro.animate({
      "width": "0%"
    }, 400);
  });

  /*
  oBtnShare.click(function() {
    var $follow = $('#Result').find('#follow');
    if ($follow.is(':checked')) {
      WB2.anywhere(function(w) {
        w.parseCMD('friendship/create', function(err) {
          //console.log(err);
        }, {
          ud: 3717651491
        }, {
          method: 'post'
        });
      });
    }
    answer = encodeURIComponent(answer);
    var url = 'http://v.t.sina.com.cn/share/share.php?appkey=3781998732&title=' + answer;
    window.open(url);
  });
  */

  $("#follow-checkbox").on('click', function() {
    var checked = $(this).is(':checked');
    if (checked) {
      $.post('/weibo',
        {
          'signed_request': signed_request,
          //'text': $("#result-text").text(),
          'follow': $('#follow-checkbox').is(':checked')
        },
        function(result) {
          if (result.error === 'success') {
            //alert("分享成功");
            // redirect to event page
          }
        }
      );
    }
  });

});
