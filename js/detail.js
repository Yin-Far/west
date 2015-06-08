// $(document).ready(function(){
  var link=window.location.search;
  var index=link.split('&')[1];
  var oId = index.substr(3);
  var link1=window.location.search;
  var index1=link1.split('?')[1];
  var oUid = index1.substr(4);
  
  $.ajax({
  type:'get',
  url:"server/index.php?m=Home&c=views&a=getNewsContent",
  data:{uid:oUid,id:oId},
  dataType:'jsoUidon',
  success:function(data){   
      var str = "";  
      var res = data.data;
      str = '<div class="detail_pic_left">';  
      str = str + '<img src="'+res.thumbnail.substr(1)+'" />';
      str = str + '</div><h4 id="detail_name">'+res.title+'</h4>';
      str = str + '<span id="introduction"><span>介绍：</span>'+htmlDecode(res.content)+'</span>';
      str = str + '<span class="code"><<i><span>来自：</span>'+res.author+'</i>></span>';
      str = str + '</div>';
      $("#introduce").append(str);  
    }
  });
  $('#introduction span,#introduction div').css('background-color','rgba(0,0,0,0)')
});


function htmlDecode(value){
  return $('<div/>').html(value).text();
}