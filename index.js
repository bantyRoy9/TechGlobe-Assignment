
let productCard = '<div class="productCard"><div class="cardImg"><img src="./assests/images/products/001.png" ></div><div><span class="readMore">Read Mode</span></div></div>';
$(document).ready(function(){
    var cardList="",product="",product1="",testimonials="",testimonials1="";
  for (let index = 0; index <= 4; index++) {
    cardList +=productCard;
  } 
  let profileList =[12,13,14,15,16,17] 
  $(profileList).each(function(idx,el){
    let profileSection ='<div class="profileCard"><img src="./assests/images/product-category/'+el+'.png" alt=""></div>'
    if(el <14){
        product += profileSection;
    }else{
        product1 += profileSection;
    }
  });

  for (let index = 1; index <= 8; index++) {
    let testinomalImage='<div class="testinomalImage"><img src="./assests/images/testimonials/00'+index+'.png"></div>';
    if(index<=5){
        testimonials+=testinomalImage
    }else{
        testimonials1+=testinomalImage
    }
  }
  $(".testinomalImagesList").find(".testinomalImages:eq(0)").append(testimonials)
  $(".testinomalImagesList").find(".testinomalImages:eq(1)").append(testimonials1)
  $(".profileSection").append(product);
  $(".profileSection1").append(product1)
  $(".productSection").append(cardList)
})