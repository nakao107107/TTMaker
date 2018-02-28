
$(function(){
  //semester選択を検知して必修科目を自動取得
  $('#semester-select').change(function(){

    var semester_text=$('#semester-select').val();
    var semester_number=Number(semester_text);

    $.ajax({
        url: '/make/search',
        type: 'GET',
        data: {
          day:day,
          period:period
        },
      })
      .done(function(response){

        classeslist_html=$(response).filter('.classeslist')[0].innerHTML;
        console.log(classeslist_html);
        $('.classeslist').html(classeslist_html);
        console.log("授業取得成功");
      })
      .fail(function(xhr){
        // Railsのアクションなどでエラーが発生した時の処理
        console.log("授業取得失敗");
      });

  });
});


$(document).on('click', '#time-table td', function(){

  var $tag_td = $(this)[0];
  var $tag_tr = $(this).parent()[0];
  console.log("%s列, %s行", $tag_td.cellIndex, $tag_tr.rowIndex);

  var day=Number($tag_td.cellIndex);
  var period=Number($tag_tr.rowIndex);
  $.ajax({
      url: '/make/search',
      type: 'GET',
      data: {
        day:day,
        period:period
      },
    })
    .done(function(response){

      classeslist_html=$(response).find('#classeslist')[0].innerHTML;
      console.log(classeslist_html);
      $('#classeslist').html(classeslist_html);
      console.log("授業取得成功");
    })
    .fail(function(xhr){
      // Railsのアクションなどでエラーが発生した時の処理
      console.log("授業取得失敗");
    });
});


//時間割の選択を反映
$(document).on('click', '#classeslist tr', function(){

    var pre_day_text = $(this).find(':nth-child(1)').text();
    var pre_period_text=$(this).find(':nth-child(2)').text();
    var name_text=$(this).find(':nth-child(3)').text();

    var day=Number(pre_day_text)+1;
    var period=Number(pre_period_text)+1;

    console.log("day:%d,period:%d",day,period);

    $('#time-table').find(':nth-child('+String(period)+')').find(':nth-child('+String(day)+')').text(name_text);
});
