import img from './w3images/header-bg.png'

export const fifthStyle = `* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.clearfix{
  clear:both;
}
.header-banner{
  padding-top:35px;
  padding-bottom:100px;
  color:#ffffff;
  font-family:Helvetica, serif;
  font-weight:100;
  background-image:url("https://grapesjs.com/img/bg-gr-v.png"), url("https://grapesjs.com/img/work-desk.jpg");
  background-attachment:scroll, scroll;
  background-position:left top, center center;
  background-repeat:repeat-y, no-repeat;
  background-size:contain, cover;
}
.container-width{
  width:90%;
  max-width:1150px;
  margin:0 auto;
}
.logo-container{
  float:left;
  width:50%;
}
.logo{
  color:#fff;
  border-radius:5px;
  width:130px;
  padding:10px;
  min-height:30px;
  text-align:center;
  line-height:30px;
  color:#4d114f;
  font-size:23px;
}
.menu{
  float:right;
  width:100%;
}
.menu-item{
  float:right;
  font-size:15px;
  color:#eee;
  width:130px;
  padding:10px;
  min-height:50px;
  text-align:center;
  line-height:30px;
  font-weight:400;
}
.lead-title{
  margin:150px 0 30px 0;
  font-size:40px;
}
.sub-lead-title{
  max-width:650px;
  line-height:30px;
  margin-bottom:30px;
  color:#c6c6c6;
}
.lead-btn{
  margin-top:15px;
  padding:10px;
  width:190px;
  min-height:30px;
  font-size:20px;
  text-align:center;
  letter-spacing:3px;
  line-height:30px;
  background-color:#d983a6;
  border-radius:5px;
  transition:all 0.5s ease;
  cursor:pointer;
}
.lead-btn:hover{
  background-color:#ffffff;
  color:#4c114e;
}
.lead-btn:active{
  background-color:#4d114f;
  color:#fff;
}
.flex-sect{
  padding:100px 0;
  font-family:Helvetica, serif;
}
.flex-title{
  margin-bottom:15px;
  font-size:2em;
  text-align:center;
  font-weight:700;
  color:#555;
  padding:5px;
}
.flex-desc{
  margin-bottom:55px;
  font-size:1em;
  color:rgba(0, 0, 0, 0.5);
  text-align:center;
  padding:5px;
}
.cards{
  padding:20px 0;
  display:flex;
  justify-content:space-around;
  flex-flow:wrap;
}
.card{
  background-color:white;
  height:300px;
  width:300px;
  margin-bottom:30px;
  box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius:2px;
  transition:all 0.5s ease;
  font-weight:100;
  overflow:hidden;
}
.card:hover{
  margin-top:-5px;
  box-shadow:0 20px 30px 0 rgba(0, 0, 0, 0.2);
}
.card-header{
  height:155px;
  background-image:url("https://placehold.it/350x250/78c5d6/fff/image1.jpg");
  background-size:cover;
  background-position:center center;
}
.card-header.ch2{
  background-image:url("https://placehold.it/350x250/459ba8/fff/image2.jpg");
}
.card-header.ch3{
  background-image:url("https://placehold.it/350x250/79c267/fff/image3.jpg");
}
.card-header.ch4{
  background-image:url("https://placehold.it/350x250/c5d647/fff/image4.jpg");
}
.card-header.ch5{
  background-image:url("https://placehold.it/350x250/f28c33/fff/image5.jpg");
}
.card-header.ch6{
  background-image:url("https://placehold.it/350x250/e868a2/fff/image6.jpg");
}
.card-body{
  padding:15px 15px 5px 15px;
  color:#555;
}
.card-title{
  font-size:1.4em;
  margin-bottom:5px;
}
.card-sub-title{
  color:#b3b3b3;
  font-size:1em;
  margin-bottom:15px;
}
.card-desc{
  font-size:0.85rem;
  line-height:17px;
}
.am-sect{
  padding-top:100px;
  padding-bottom:100px;
  font-family:Helvetica, serif;
}
.img-phone{
  float:left;
}
.am-container{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-around;
}
.am-content{
  float:left;
  padding:7px;
  width:490px;
  color:#444;
  font-weight:100;
  margin-top:50px;
}
.am-pre{
  padding:7px;
  color:#b1b1b1;
  font-size:15px;
}
.am-title{
  padding:7px;
  font-size:25px;
  font-weight:400;
}
.am-desc{
  padding:7px;
  font-size:17px;
  line-height:25px;
}
.am-post{
  padding:7px;
  line-height:25px;
  font-size:13px;
}
.blk-sect{
  padding-top:100px;
  padding-bottom:100px;
  background-color:#222222;
  font-family:Helvetica, serif;
}
.blk-title{
  color:#000;
  font-size:25px;
  text-align:center;
  margin-bottom:15px;
}
.blk-desc{
  color:#b1b1b1;
  font-size:15px;
  text-align:center;
  max-width:700px;
  margin:0 auto;
  font-weight:100;
}
.price-cards{
  margin-top:70px;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-around;
}
.price-card-cont{
  width:300px;
  padding:7px;
  float:left;
}
.price-card{
  margin:0 auto;
  min-height:350px;
  background-color:#d983a6;
  border-radius:5px;
  font-weight:100;
  color:#fff;
  width:90%;
}
.pc-title{
  font-weight:100;
  letter-spacing:3px;
  text-align:center;
  font-size:25px;
  background-color:rgba(0, 0, 0, 0.1);
  padding:20px;
}
.pc-desc{
  padding:75px 0;
  text-align:center;
}
.pc-feature{
  color:rgba(255,255,255,0.5);
  background-color:rgba(0, 0, 0, 0.1);
  letter-spacing:2px;
  font-size:15px;
  padding:10px 20px;
}
.pc-feature:nth-of-type(2n){
  background-color:transparent;
}
.pc-amount{
  background-color:rgba(0, 0, 0, 0.1);
  font-size:35px;
  text-align:center;
  padding:35px 0;
}
.pc-regular{
  background-color:#da78a0;
}
.pc-enterprise{
  background-color:#d66a96;
}
.footer-under{
  background-color:#312833;
  padding-bottom:100px;
  padding-top:100px;
  min-height:500px;
  color:#eee;
  position:relative;
  font-weight:100;
  font-family:Helvetica,serif;
}
.copyright{
  background-color:rgba(0, 0, 0, 0.15);
  color:rgba(238, 238, 238, 0.5);
  bottom:0;
  padding:1em 0;
  position:absolute;
  width:100%;
  font-size:0.75em;
}
.made-with{
  float:left;
  width:50%;
  padding:5px 0;
}
.foot-social-btns{
  display:none;
  float:right;
  width:50%;
  text-align:right;
  padding:5px 0;
}
.footer-container{
  display:flex;
  flex-wrap:wrap;
  align-items:stretch;
  justify-content:space-around;
}
.foot-list{
  float:left;
  width:200px;
}
.foot-list-title{
  font-weight:400;
  margin-bottom:10px;
  padding:0.5em 0;
}
.foot-list-item{
  color:rgba(238, 238, 238, 0.8);
  font-size:0.8em;
  padding:0.5em 0;
}
.foot-list-item:hover{
  color:rgba(238, 238, 238, 1);
}
.foot-form-cont{
  width:300px;
  float:right;
}
.foot-form-title{
  color:rgba(255,255,255,0.75);
  font-weight:400;
  margin-bottom:10px;
  padding:0.5em 0;
  text-align:right;
  font-size:2em;
}
.foot-form-desc{
  font-size:0.8em;
  color:rgba(255,255,255,0.55);
  line-height:20px;
  text-align:right;
  margin-bottom:15px;
}
.sub-input{
  width:100%;
  margin-bottom:15px;
  padding:7px 10px;
  border-radius:2px;
  color:#fff;
  background-color:#554c57;
  border:none;
}
.sub-btn{
  width:100%;
  margin:15px 0;
  background-color:#785580;
  border:none;
  color:#fff;
  border-radius:2px;
  padding:7px 10px;
  font-size:1em;
  cursor:pointer;
}
.sub-btn:hover{
  background-color:#91699a;
}
.sub-btn:active{
  background-color:#573f5c;
}
.bdg-sect{
  padding-top:100px;
  padding-bottom:100px;
  font-family:Helvetica, serif;
  background-color:#fafafa;
}
.bdg-title{
  text-align:center;
  font-size:2em;
  margin-bottom:55px;
  color:#555555;
}
.badges{
  padding:20px;
  display:flex;
  justify-content:space-around;
  align-items:flex-start;
  flex-wrap:wrap;
}
.badge{
  width:290px;
  font-family:Helvetica, serif;
  background-color:white;
  margin-bottom:30px;
  box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius:3px;
  font-weight:100;
  overflow:hidden;
  text-align:center;
}
.badge-header{
  height:115px;
  background-image:url("https://grapesjs.com/img/bg-gr-v.png"), url("https://grapesjs.com/img/work-desk.jpg");
  background-position:left top, center center;
  background-attachment:scroll, fixed;
  overflow:hidden;
}
.badge-name{
  font-size:1.4em;
  margin-bottom:5px;
}
.badge-role{
  color:#777;
  font-size:1em;
  margin-bottom:25px;
}
.badge-desc{
  font-size:0.85rem;
  line-height:20px;
}
.badge-avatar{
  width:100px;
  height:100px;
  border-radius:100%;
  border:5px solid #fff;
  box-shadow:0 1px 1px 0 rgba(0, 0, 0, 0.2);
  margin-top:-75px;
  position:relative;
}
.badge-body{
  margin:35px 10px;
}
.badge-foot{
  color:#fff;
  background-color:#a290a5;
  padding-top:13px;
  padding-bottom:13px;
  display:flex;
  justify-content:center;
}
.badge-link{
  height:35px;
  width:35px;
  line-height:35px;
  font-weight:700;
  background-color:#fff;
  color:#a290a5;
  display:block;
  border-radius:100%;
  margin:0 10px;
}
@media (max-width: 768px){
  .foot-form-cont{
    width:400px;
  }
  .foot-form-title{
    width:autopx;
  }
}
@media (max-width: 480px){
  .foot-lists{
    display:none;
  }
}

.row-fluid{width:100%;*zoom:1}.row-fluid:before,.row-fluid:after{display:table;content:""}.row-fluid:after{clear:both}.row-fluid [class*="span"]{display:block;float:left;width:100%;min-height:28px;margin-left:2.127659574%;*margin-left:2.0744680846382977%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.row-fluid [class*="span"]:first-child{margin-left:0}.row-fluid .span12{width:99.99999998999999%;*width:99.94680850063828%}.row-fluid .span11{width:91.489361693%;*width:91.4361702036383%}.row-fluid .span10{width:82.97872339599999%;*width:82.92553190663828%}.row-fluid .span9{width:74.468085099%;*width:74.4148936096383%}.row-fluid .span8{width:65.95744680199999%;*width:65.90425531263828%}.row-fluid .span7{width:57.446808505%;*width:57.3936170156383%}.row-fluid .span6{width:48.93617020799999%;*width:48.88297871863829%}.row-fluid .span5{width:40.425531911%;*width:40.3723404216383%}.row-fluid .span4{width:31.914893614%;*width:31.8617021246383%}.row-fluid .span3{width:23.404255317%;*width:23.3510638276383%}.row-fluid .span2{width:14.89361702%;*width:14.8404255306383%}.row-fluid .span1{width:6.382978723%;*width:6.329787233638298%}.container-fluid{*zoom:1}.container-fluid:before,.container-fluid:after{display:table;content:""}.container-fluid:after{clear:both}@media(max-width:767px){.row-fluid{width:100%}.row-fluid [class*="span"]{display:block;float:none;width:auto;margin-left:0}}@media(min-width:768px) and (max-width:1139px){.row-fluid{width:100%;*zoom:1}.row-fluid:before,.row-fluid:after{display:table;content:""}.row-fluid:after{clear:both}.row-fluid [class*="span"]{display:block;float:left;width:100%;min-height:28px;margin-left:2.762430939%;*margin-left:2.709239449638298%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.row-fluid [class*="span"]:first-child{margin-left:0}.row-fluid .span12{width:99.999999993%;*width:99.9468085036383%}.row-fluid .span11{width:91.436464082%;*width:91.38327259263829%}.row-fluid .span10{width:82.87292817100001%;*width:82.8197366816383%}.row-fluid .span9{width:74.30939226%;*width:74.25620077063829%}.row-fluid .span8{width:65.74585634900001%;*width:65.6926648596383%}.row-fluid .span7{width:57.182320438000005%;*width:57.129128948638304%}.row-fluid .span6{width:48.618784527%;*width:48.5655930376383%}.row-fluid .span5{width:40.055248616%;*width:40.0020571266383%}.row-fluid .span4{width:31.491712705%;*width:31.4385212156383%}.row-fluid .span3{width:22.928176794%;*width:22.874985304638297%}.row-fluid .span2{width:14.364640883%;*width:14.311449393638298%}.row-fluid .span1{width:5.801104972%;*width:5.747913482638298%}}@media(min-width:1280px){.row-fluid{width:100%;*zoom:1}.row-fluid:before,.row-fluid:after{display:table;content:""}.row-fluid:after{clear:both}.row-fluid [class*="span"]{display:block;float:left;width:100%;min-height:28px;margin-left:2.564102564%;*margin-left:2.510911074638298%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.row-fluid [class*="span"]:first-child{margin-left:0}.row-fluid .span12{width:100%;*width:99.94680851063829%}.row-fluid .span11{width:91.45299145300001%;*width:91.3997999636383%}.row-fluid .span10{width:82.905982906%;*width:82.8527914166383%}.row-fluid .span9{width:74.358974359%;*width:74.30578286963829%}.row-fluid .span8{width:65.81196581200001%;*width:65.7587743226383%}.row-fluid .span7{width:57.264957265%;*width:57.2117657756383%}.row-fluid .span6{width:48.717948718%;*width:48.6647572286383%}.row-fluid .span5{width:40.170940171000005%;*width:40.117748681638304%}.row-fluid .span4{width:31.623931624%;*width:31.5707401346383%}.row-fluid .span3{width:23.076923077%;*width:23.0237315876383%}.row-fluid .span2{width:14.529914530000001%;*width:14.4767230406383%}.row-fluid .span1{width:5.982905983%;*width:5.929714493638298%}}.clearfix{*zoom:1}.clearfix:before,.clearfix:after{display:table;content:""}.clearfix:after{clear:both}.hide{display:none}.show{display:block}.invisible{visibility:hidden}.hidden{display:none;visibility:hidden}.visible-phone{display:none !important}.visible-tablet{display:none !important}.hidden-desktop{display:none !important}@media(max-width:767px){.visible-phone{display:inherit !important}.hidden-phone{display:none !important}.hidden-desktop{display:inherit !important}.visible-desktop{display:none !important}}@media(min-width:768px) and (max-width:1139px){.visible-tablet{display:inherit !important}.hidden-tablet{display:none !important}.hidden-desktop{display:inherit !important}.visible-desktop{display:none !important}}
`;
