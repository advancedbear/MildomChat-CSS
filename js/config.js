var bool_options = {
    sender: true,
    level: true,
    subscribe: true,
    streamer: true,
    admin: true,
    separator: true,
    entered: true,
    outline: false,
    customfont: false
}

var color_options = {
    sender: "#000000",
    sender_reset: true,
    separator: "#000000",
    text: "#000000",
    outline: "#000000"
}

var bg_options = {
    "bg-white-0": "rgba(255, 255, 255, 1)",
    "bg-white-20": "rgba(255, 255, 255, 0.8)",
    "bg-white-40": "rgba(255, 255, 255, 0.6)",
    "bg-white-60": "rgba(255, 255, 255, 0.4)",
    "bg-white-80": "rgba(255, 255, 255, 0.2)",
    "bg-black-0": "rgba(0, 0, 0, 1)",
    "bg-black-20": "rgba(0, 0, 0, 0.8)",
    "bg-black-40": "rgba(0, 0, 0, 0.6)",
    "bg-black-60": "rgba(0, 0, 0, 0.4)",
    "bg-black-80": "rgba(0, 0, 0, 0.2)",
    "bg-transparent": "transparent"
}

var bg_color = "rgba(255, 255, 255, 1)"

var outline_size = "1px"
var width_size = "370px"
var font_size = "15px"
var padding_top = "12px"
var padding_bottom = "12px"

var font_family = "Yu Gothic UI"

var google_font = {
    "Noto Sans JP": "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');",
    "Kosugi Maru": "@import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap');",
    "Yusei Magic": "@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');",
    "Stick": "@import url('https://fonts.googleapis.com/css2?family=Stick&display=swap');",
    "RocknRoll One": "@import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');"
}

var css_template

function generate() {
    css_template = `${google_font[font_family]?google_font[font_family]:""}
body { background-color: transparent !important; }
div.content { display: block !important; }
div.gzfsNK, div.fwzdDC, div.esJYXy, div.bgLbXx, div#sidebar, div.JKLlz, div.csMNuF, div.hKxVsa, div.jHZfJz, .kqeaKU, .ekbleA, .sc-1s65pk3-0{ display: none !important; }
div.iTlshc { width: ${width_size} !important; }
div.fIdaFb { background-color: transparent !important; }
.message-list::-webkit-scrollbar { display:none !important; }
.chat-panel___mention-follow-panel { display: none !important; }
.sc-1432w4k-0 { left: unset !important; }
.xb72g0-2 { width: unset !important; }
/* プレミアムコメント */
.sc-1448gr7-0 {
    background-color: ${bg_color} !important;
}
/* ギフト全画面エモート */
.canvas-box { 
    left: unset !important;
    top: unset !important;
    width: ${width_size} !important;
}
canvas.room-chat-player__level3 {
    width: ${width_size} !important;
}
/* 今週のランキング */
.sc-2it59z-0, .sc-2it59z-0+div {
    display: none !important;
}
/* コメント欄メインのCSS */
div.ycw4tr-1{
    max-width: initial !important;
    margin: unset !important;
    padding: unset !important;
    font-family: "${font_family}", Sans-Serif !important;
    font-size: ${font_size} !important;
    width: ${width_size} !important;
    line-height: normal !important;
    border: none !important;
    background-color: ${bg_color} !important;
    ${bool_options["outline"]? "text-shadow:0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]+",0 0 "+outline_size+" "+color_options["outline"]:""}
}
.message-list { 
    font-size: ${font_size} !important;
    padding-top: ${padding_top} !important;
    padding-bottom: ${padding_bottom} !important;
}
/* コメント本文 */
span.sc-173ztwo-0{
    color: ${color_options["text"]} !important;
}
/* コメント投稿者 */
span.sender {
    display: ${bool_options["sender"]? "initial" : "none"} !important;
    ${color_options["sender_reset"]? '': 'color: '+color_options["sender"]+' !important;'}
}
/* 「：」表記 */
.sc-1244qg5-0 + span {
    display: ${bool_options["separator"]? "initial" : "none"} !important;
    color: ${color_options["separator"]} !important;
}
/* 入室表記 */
.sc-1pw8g5f-0 {
    display: ${bool_options["separator"]? "initial" : "none"} !important;
}
/* コメント投稿者レベル */
div.sc-1oendbw-0 {
    display:${bool_options["level"]? "initial" : "none"} !important;
    ${color_options["sender_reset"]? '': 'color: '+color_options["sender"]+'!important;'}
    ${color_options["sender_reset"]? '': 'border-color: '+color_options["sender"]+' !important;'}
}
/* サブスクライバー表記 */
span.dqJpfd {
    display: ${bool_options["subscribe"]? "initial" : "none"} !important
}
/* 配信者表記 */
span.user-info__host-icon {
    display: ${bool_options["streamer"]? "initial" : "none"} !important
}
/* 管理者表記 */
span.admin-medal-wrap {
    display: ${bool_options["admin"]? "initial" : "none"} !important
}
`

    $('#generate_css').val(css_template)
    $('#css_result').modal('open')
    $('#generate_css').select()
    document.execCommand("copy");
    setTimeout(()=>{$('#css_result').modal('close')}, 4000)
}