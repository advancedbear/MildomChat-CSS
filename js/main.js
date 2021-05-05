$(document).ready(function(){
    //$('.tooltipped').tooltip();
    $('select').formSelect();
    $('.modal').modal()
    $('.tap-target').tapTarget();
    
    $('.tap-target').tapTarget('open');
});

$(function(){
    /* 横幅変更 */
    $(document).on('change', '#width_size', ()=>{
        width_size = $('#width_size').val()
        if(Number.parseInt(width_size) <= 480){
            $('.mildom-chat-preview').css('width', $('#width_size').val())
        }
    })
    /* レベル表示変更 */
    $(document).on('change', '#level_bool', ()=>{
        bool_options["level"] = $('#level_bool').prop('checked')
        $('div.sc-1oendbw-0').css('display', $('#level_bool').prop('checked')? "initial" : "none")
    })
    /* ユーザ名表示変更 */
    $(document).on('change', '#sender_bool', ()=>{
        bool_options["sender"] = $('#sender_bool').prop('checked')
        $('span.sender').css('display', $('#sender_bool').prop('checked')? "initial" : "none")
    })
    /* セパレータ表示変更 */
    $(document).on('change', '#separator_bool', ()=>{
        if(!$('#separator_bool').prop('checked')){
            if($('#entered_bool').prop('checked')) {
                $('#entered_bool').prop('checked', false)
            }
            $('#entered_bool').prop('disabled', true)
        } else {
            $('#entered_bool').prop('disabled', false)
        }
        bool_options["separator"] = $('#separator_bool').prop('checked')
        bool_options["entered"] = $('#entered_bool').prop('checked')
        $('.sc-1244qg5-0 + span').css('display', $('#separator_bool').prop('checked')? "initial" : "none")
        $('.sc-1pw8g5f-0').css('display', $('#entered_bool').prop('checked')? "initial" : "none")
    })
    /* 配信者アイコン表示変更 */
    $(document).on('change', '#streamer_bool', ()=>{
        bool_options["streamer"] = $('#streamer_bool').prop('checked')
        $('span.user-info__host-icon').css('display', $('#streamer_bool').prop('checked')? "initial" : "none")
    })
    /* 管理者アイコン表示変更 */
    $(document).on('change', '#admin_bool', ()=>{
        bool_options["admin"] = $('#admin_bool').prop('checked')
        $('span.admin-medal-wrap').css('display', $('#admin_bool').prop('checked')? "initial" : "none")
    })
    /* サブスクアイコン表示変更 */
    $(document).on('change', '#subscribe_bool', ()=>{
        bool_options["subscribe"] = $('#subscribe_bool').prop('checked')
        $('span.dqJpfd').css('display', $('#subscribe_bool').prop('checked')? "initial" : "none")
    })
    /* 入室メッセージ表示変更 */
    $(document).on('change', '#entered_bool', ()=>{
        bool_options["entered"] = $('#entered_bool').prop('checked')
        $('.sc-1pw8g5f-0').css('display', $('#entered_bool').prop('checked')? "initial" : "none")
    })
    /* 背景色変更 */
    $(document).on('change', '#bg_color', ()=>{
        bg_color = bg_options[$('#bg_color').val()]
        $('.bzOwhh').css('background-color', bg_color)
    })
    /* ユーザ名カラー変更 */
    $(document).on('change', '#sender_color', ()=>{
        color_options["sender"] = $('#sender_color').val()
        color_options["sender_reset"] = false
        $('span.sender').css('color', $('#sender_color').val())
        $('div.sc-1oendbw-0').css('color', $('#sender_color').val())
        $('div.sc-1oendbw-0').css('border-color', $('#sender_color').val())
    })
    /* セパレータカラー変更 */
    $(document).on('change', '#separator_color', ()=>{
        color_options["separator"] = $('#separator_color').val()
        $('.sc-1244qg5-0 + span').css('color', $('#separator_color').val())
    })
    /* 本文カラー変更 */
    $(document).on('change', '#text_color', ()=>{
        color_options["text"] = $('#text_color').val()
        $('.sc-173ztwo-0').css('color', $('#text_color').val())
    })
    /* 縁取り太さ変更 */
    $(document).on('change', '#outline_size', ()=>{
        outline_size = $('#outline_size').val()
        if($('#outline_size').val()=="0"){
            $('#outline_color').prop("disabled", true)
            bool_options["outline"] = false;
            $('.bzOwhh').css('text-shadow', "none")
        } else {
            $('#outline_color').prop("disabled", false)
            bool_options["outline"] = true;
            $('.bzOwhh').css('text-shadow', "0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"])
        }
    })
    /* 縁取りカラー変更 */
    $(document).on('change', '#outline_color', ()=>{
        color_options["outline"] = $('#outline_color').val()
        $('.bzOwhh').css('text-shadow', "0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"])
    })

    /* フォントサイズ変更 */
    $(document).on('change', '#font_size', ()=>{
        font_size = $('#font_size').val()
        $('.bzOwhh').css('font-size', $('#font_size').val())
    })

    /* 標準フォント変更 */
    $(document).on('change', '#font_family', ()=>{
        font_family = $('#font_family').val()
        $('.bzOwhh').css('font-family', $('#font_family').val())
        if(google_font[font_family]){
            css_template = google_font[font_family] + "\n" + css_template
        }
    })

    /* カスタムフォント有効 */
    $(document).on('change', '#customfont_bool', ()=>{
        bool_options["customfont"] = $('#customfont_bool').prop('checked')
        let bool = $('#customfont_bool').prop('checked') ? false : true
        $('#custom_font').prop('disabled', bool)
        $('#font_family').prop('disabled', $('#customfont_bool').prop('checked'))
    })

    /* カスタムフォント変更 */
    $(document).on('blur', '#custom_font', ()=>{
        console.log("blur!")
        font_family = $('#custom_font').val()
        $('.bzOwhh').css('font-family', $('#custom_font').val())
    })
})

function sender_color_reset() {
    color_options["sender"] = "initial"
    color_options["sender_reset"] = true
    $('#sender_color').val("#000000")
    $('.gyqlDl').css('color', 'rgb(63, 201, 217)')
    $('.gyqlDl').css('border-color', 'rgb(63, 201, 217)')
    $('.gyqlDl + .sender').css('color', 'rgb(63, 201, 217)')
    $('.cekBll').css('color', 'rgb(245, 123, 123)')
    $('.cekBll').css('border-color', 'rgb(245, 123, 123)')
    $('.cekBll + .sender').css('color', 'rgb(245, 123, 123)')
    $('.fdhYri').css('color', 'rgb(65, 208, 145)')
    $('.fdhYri').css('border-color', 'rgb(65, 208, 145)')
    $('.fdhYri + .sender').css('color', 'rgb(65, 208, 145)')
    $('.iJlVqj').css('color', 'rgb(232, 111, 176)')
    $('.iJlVqj').css('border-color', 'rgb(232, 111, 176)')
    $('.iJlVqj + .sender').css('color', 'rgb(232, 111, 176)')
}

function separator_color_reset() {
    color_options["separator"] = "rgb(159, 159, 159)"
    $('#separator_color').val('#9f9f9f')
    $('.sc-1244qg5-0 + span').css('color', $('#separator_color').val())

}

function text_color_reset() {
    color_options["text"] = "black"
    $('#text_color').val('#000000')
    $('.sc-173ztwo-0').css('color', $('#text_color').val())
}