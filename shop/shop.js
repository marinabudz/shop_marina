// $('.pictures__button').click(
//     function(){
//         $('.pictures__list2').removeClass( "pictures__list2" ).addClass( "pictures__list" );
//     }
// );

// $('.header__menuContainerItem').click(
//     function(){
//         $(this).next().fadeToggle(50);
//     }
// );
Vue.component('aheader',{
    
    template: `
  
    <nav class="navbar navbar-default color">
    <div class='container'>
    <div class="navbar-header aheader" >
        <button type="button" 
        class="navbar-toggle collapsed " style="float:left;  border: 0px solid black; color:white; padding-right:35%; background-color:black; margin-top:-0.1px;"
        data-toggle="collapse"
        data-target="#collapsemanu"
        aria-expanded="false"> 
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <button class="btn btn-default hidden-lg" style="background-color: black; border: 0px ; float:right; width:10%;" > <img src="communication/white.png"alt="search"/></button>
        <a href='shop_new.html'><img src="logo/logo-top.png" class="aheader__logo hidden-xs  hidden-sm "></a>
        <div class='logoMobile'><a href='shop_new.html'><img src="logo/logo-bottom.png" class="hidden-lg logoMobile"></a></div>
    </div>
       <div class='header'>
        <div class="collapse navbar-collapse" id="collapsemanu" style="border:0px;">
            <ul class="nav navbar-nav aheader__small">
                <li> 
                    <div class="aheader__items" style='color:gray; padding-left:20px;'>
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="btn" aria-haspopup="true" aria-expanded="false">
                        КАТАЛОГ 
                        <span class="caret hidden-xs  hidden-sm"></span>
                        </a>
                   
                        <ul class="dropdown-menu hidden-xs  hidden-sm ">
                            <li v-for='item in dropdown_list'><a :href="item.url">{{item.name}}</a></li>
                        </ul>
                        </div>
                </li>
                <li>
                    <div class="aheader__items" v-for='element in header_menu'> 
                        <img src="communication/dot.jpg" alt="dot" class='hidden-xs  hidden-sm'>
                        <a :href="element.url">{{element.name}}</a> 
                    </div>
                </li>
                <li> <a href=""><img src='communication/red_heart.png' style ="margin-left: 80px; margin-top:-30px;"/> </a></li>
            </ul>

                </div>
                
            <form class="navbar-form navbar-right hidden-xs  hidden-sm" role="search">
                <div class="form-group">
                    <button class="btn btn-default button"> <img src="communication/search.png"alt="search"/> Пошук</button>
                </div>
            </form>
    
        </div>
        </div>
        </div>
</nav>`, 
        data: function(){
            return{
            dropdown_list: [{'url':'catalog.html','name':'KАТАЛОГ'}, {'url':'#pants','name':'НОВІ ТОВАРИ'}, {'url':'#pants','name':'SALE'}, {'url':'#pants','name':'ШТАНИ'}, {'url':'#','name':'СОРОЧКИ'},{'url':'#','name':'СУКНІ'}, {'url':'#','name':'СВЕДРИ'},{'url':'#','name':'КОСТЮМИ'}, {'url':'#','name':'ПІДЖАКИ'},],
            header_menu: [{'url':'about.html','name':'ПРО НАС'},{'url':'delivery.html','name':'ОПЛАТА ТА ДОСТАВКА'},{'url':'lookbook.html','name':'LOOKBOOK'},{'url':'contact.html','name':'КОНТАКТИ'}]
            }
        }
        })
var alist = new Vue({
    el:'#alist',
        data:{
            
    }
})


Vue.component('catalog',{
    template: `<div class="pictures">

    <div v-for='item in images' class="col-lg-4 col-lg-offset-0 col-md-offset-1 col-md-6 col-xs-offset-2 col-xs-6  pictures__list">
        <a :href='item.url'>
            <span><img :src='item.image'></span>
            <p>{{item.title}}</p>
            <span>{{item.price}}</span> 
        </a>
    </div>
    <div class="pictures__button">
            <button class="btn btn-default pictures__buttonView"> ПОКАЗАТИ БІЛЬШЕ </button>  
    </div>  

</div>`,
    data: function(){
        return{
            images: [
                {'url':'#','image' :'catalog_page/2.jpg', 'title': 'Брюки чорні', 'price': '900₴', 'class': 'item__pants',},
                {'url':'#','image' :'catalog_page/3.jpg', 'title': 'Піджак в шотланську клітинку Khaby', 'price': '1450₴'}, 
                {'url':'#','image' :'catalog_page/4.jpg', 'title': 'Спідниця чорна', 'price': '500₴'}, 
                {'url':'#','image' :'./catalog_page/5.jpg', 'title': 'Светр сірий', 'price': '585₴'}, 
                {'url':'#','image' :'./catalog_page/6.jpg', 'title': 'Сорочка молочна', 'price': '560₴'},
                {'url':'#','image' :'./catalog_page/7.jpg', 'title': 'Сорочка блакитна', 'price': '560₴'}, 
                {'url':'item.html','image' :'./catalog_page/8.jpg', 'title': 'Сукня замшева вишнева', 'price': '620₴'},
                {'url':'#','image' :'./catalog_page/9.jpg', 'title': 'Спідниця хакі', 'price': '500₴'},
                 {'url':'#','image' :'./catalog_page/10.jpg', 'title': 'Сукня замшева темно-зелена', 'price': '620₴'}]
            
    }}
})


var picture =new Vue({
    el:'#picture',
    data:{
        images: [
        {'url':'#','image' :'catalog_page/2.jpg', 'title': 'Брюки чорні', 'price': '900₴', 'class': 'item__pants',},
        {'url':'#','image' :'catalog_page/3.jpg', 'title': 'Піджак в шотланську клітинку Khaby', 'price': '1450₴'}, 
        {'url':'#','image' :'catalog_page/4.jpg', 'title': 'Спідниця чорна', 'price': '500₴'}, 
        {'url':'#','image' :'./catalog_page/5.jpg', 'title': 'Светр сірий', 'price': '585₴'}, 
        {'url':'#','image' :'./catalog_page/6.jpg', 'title': 'Сорочка молочна', 'price': '560₴'},
        {'url':'#','image' :'./catalog_page/7.jpg', 'title': 'Сорочка блакитна', 'price': '560₴'}, 
        {'url':'item.html','image' :'./catalog_page/8.jpg', 'title': 'Сукня замшева вишнева', 'price': '620₴'},
        {'url':'#','image' :'./catalog_page/9.jpg', 'title': 'Спідниця хакі', 'price': '500₴'},
         {'url':'#','image' :'./catalog_page/10.jpg', 'title': 'Сукня замшева темно-зелена', 'price': '620₴'}]
    }
})




Vue.component('afooter',{
    template: `
    <div class='afooter'>
    <div class='container'>
        <div class="footer">
            <div class="footer__logo">
                <a href="../../shop/shop_new.html"><img src="logo/logo-bottom.png" alt="logo-bottom"/></a>
                <p>2018 - 2020 KHABY BASE CLOTHES</p>
            </div>
            <div class="footer__links">
                <div v-for='item in footer_links'><a :href="item.url">{{item.name}}</a></div>
            </div>
            <div class="footer__contact">
                <div class='footer__contactDesigner'><div v-for='item in designer_contact'><a :href="item.url"><img :src="item.image"> {{item.contact}}</a></div></div>
                <div class='footer__contactSocial'><div v-for='item in designer_social'><a :href="item.url"><img :src="item.image"></a></div></div>
                <div class='footer__contactDevelop' v-for='item in developers_contact'><a :href="item.url">{{item.name}} <br> {{item.url}}</a></div>
            </div>
        </div>
        </div>
    </div>
`,
    data: function(){
        return {
        footer_links: [{'url':'catalog.html','name':'КАТАЛОГ'},{'url':'about.html','name':'ПРО НАС'},{'url':'lookbook.html','name':'LOOKBOOK'},{'url':'delivery.html','name':'ОПЛАТА ТА ДОСТАВКА'}],
        designer_contact:[{'url':'#','image' :'communication/message.png', 'contact': 'khaby@gmail.com'}, {'url':'#','image' :'communication/phone.png', 'contact': '+38012345678'}],
        designer_social:[{'url':'#','image' :'communication/instagram.png'}, {'url':'#','image' :'communication/facebook.png'}],
        developers_contact: [{'url':'https://www.behance.net/yul6_okb501','name': 'ДИЗАЙН САЙТУ:'},{'url':'https://www.linkedin.com/in/marynabudz-298b5b138/','name': 'РОЗРОБКА САЙТУ:'}]
    
        }
    }

})
var footer = new Vue({
    el:'#footer',
    data:{
        designer_contact:[{'url':'#','image' :'communication/message.jpg', 'contact': 'itatarchuk90@gmail.com'}, {'url':'#','image' :'communication/phone.jpg', 'contact': '+38 096 620 2081'}, {'url':'#','image' :'communication/facebook.jpg','contact': 'www.facebook.com/khabybase/'}, {'url':'#','image' :'communication/insta.jpg','contact':'www.instagram.com/khaby_/?hl=en'}]
       }   
})






Vue.component('amenu',{
    template: ` <div class="section">
    <div class='section__item' v-for="item in menu_items"><a :href='item.url'> {{item.name}}</a></div>
</div>`,
    data: function(){
        return{
            menu_items:[{'url':'#pants','name':'ШТАНИ'}, {'url':'#','name':'СОРОЧКИ'},{'url':'#','name':'СУКНІ'}, {'url':'#','name':'СВЕДРИ'},{'url':'#','name':'КОСТЮМИ'}, {'url':'#','name':'ПІДЖАКИ'}]
        }
    }
})
var menu = new Vue({
    el:'#menu',
    data:{
        product: 'сукня замшева вишнева',
        price: '620₴',
        selectedVariant: 0,
        inventory: 0,
        onSale: true,
        new: false,
        details: [{'name':'ОПИС', "description":"Двостороння еко замша дуже м'який матеріал. Виглядає дуже вишукано. За рахунок мінімалістичного дизайну, сукню можна одягнути на важливі події або на прогулянку. Защібається на гудзичок на спинці. Рукав 34"}, {'name':'СКЛАД', 'description':'Еко замша (95% поліестер, 5% еластан)'}, {'name':'РОЗМІРИ:', 'description':'XS, S, М, L'}, {'name':'ВИРОБНИЦТВО', 'description':'Україна'}],
        variants: [{variantId:1, variantImage:'catalog_page/dresses/2.jpg', variantImageSmall:'catalog_page/dresses/1.jpg'}, {variantId:2, variantImage:'catalog_page/dresses/2.jpg', variantImageSmall:'catalog_page/dresses/2.jpg'},{variantId:3, variantImage:'catalog_page/dresses/3.jpg', variantImageSmall:'catalog_page/dresses/3.jpg'},{variantId:4, variantImage:'catalog_page/dresses/4.jpg', variantImageSmall:'catalog_page/dresses/4.jpg'}]
    },
        methods: {
            updateProduct: function(index){
                this.selectedVariant = index
            }},
        computed:{
            image(){
            return this.variants[this.selectedVariant].variantImage
            }}
    

})

$('.item__button').on('click', function () {
    $('.client-form').show();
    $( 'body' ).addClass( "shadow" );
    $('.thank-form').hide();
})

$('.close-form').on('click', function () {
    $('.client-form').hide();
    $('.thank-form').hide();
    $( 'body' ).removeClass( "shadow" );
})
$('.aform__button').on('click', function () {
    $('.client-form').hide();
    $('.thank-form').show();
    $( 'body' ).addClass( "shadow" );
})


// $('.category__pants').click(
//     function (){
//         $('.item__pants').show()
//         $('.item__shirt').hide()
//         $('.item__dress').hide()
//         $('.item__sweter').hide()
//         $('.item__suit').hide()
//         $('.item__jacket').hide()
// });

// $('.category__shirt').click(
//     function (){
//         $('.item__pants').hide()
//         $('.item__shirt').show()
//         $('.item__dress').hide()
//         $('.item__sweter').hide()
//         $('.item__suit').hide()
//         $('.item__jacket').hide()
// });

// $('.category__dress').click(
//     function (){
//         $('.item__pants').hide()
//         $('.item__shirt').hide()
//         $('.item__dress').show()
//         $('item__sweter').hide()
//         $('.item__suit').hide()
//         $('.item__jacket').hide()
// });

// $('.category__sweter').click(
//     function (){
//         $('.item__pants').hide()
//         $('.item__shirt').hide()
//         $('.item__dress').hide()
//         $('.item__sweter').show()
//         $('.item__suit').hide()
//         $('.item__jacket').hide()
// });

// $('.category__suit').click(
//     function (){
//         $('.item__pants').hide()
//         $('.item__shirt').hide()
//         $('.item__dress').hide()
//         $('.item__sweter').hide()
//         $('.item__suit').show()
//         $('.item__jacket').hide()
// });

// $('.category__jacket').click(
//     function (){
//         $('.item__pants').hide()
//         $('.item__shirt').hide()
//         $('.item__dress').hide()
//         $('.item__sweter').hide()
//         $('.item__suit').hide()
//         $('.item__jacket').show()
// });



$('.review').slick(
        { dots: false,
            arrows:true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '1px',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                  },
                  
                {
                  breakpoint: 770,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                
              ]
        });

$('.video').slick(
        { dots: false,
            arrows:false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '1px',
            asNavFor: '.videoXS',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  },
                  
                {
                  breakpoint: 770,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                
              ]
        });

$('.videoXS').slick(
        { dots: false,
            arrows:true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px',
            asNavFor: '.video',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1
                    }
                  },
                  
                {
                  breakpoint: 770,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                }
                
              ]
        }); 
        

