function getIdFromUrl() {
	var hash = location.hash;
	if (hash) {
		return hash.substring(1);
	}
	return undefined;
}



// footer
Vue.component('afooter',{
    template: `
    <div class='afooter'>
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
            <span ></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <button class="btn btn-default hidden-lg" style="background-color: black; border: 0px ; float:right; width:10%;" > <img src="communication/white.png"alt="search"/></button>
        <a href='shop_new.html'><img src="logo/logo-top.png" class="aheader__logo hidden-xs  hidden-sm "></a>
        <div class='logoMobile'><a href='shop_new.html'><img src="logo/logo-bottom.png" class="hidden-lg logoMobile"></a></div>
        <a href=""><img src='communication/red_heart.png' class =" hidden-md  hidden-lg hidden-xl" style ="margin-left: 80%; margin-top:-14%;"/> </a>
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
                   
                        <ul class="dropdown-menu hidden-xs  hidden-sm hidden-md">
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
            </ul>

            </div>
            <a href=""><img src='communication/red_heart.png' class ="hidden-sm hidden-xs" style ="margin-left: 75%; margin-top:-10%;"/> </a>
            <form class="navbar-form navbar-right hidden-xs  hidden-sm hidden-md" role="search">
                <div class="input-group button">
                        <input 
                            type="text" class="form-control" 
                            placeholder="Пошук" aria-label="Пошук" 
                            aria-describedby="basic-addon2"
                            v-model="searchtext"
                            v-on:keyup.enter="search"
                            >
                        <div class="input-group-append">
                            <span class="input-group-text button" id="basic-addon2" v-on:click="search">
                                <img src="communication/search.png"alt="search"/>
                            </span>
                        </div>
                </div>     
            </form>
    
        </div>
        </div>
        </div>
</nav>`, 
        data: function(){
            return{
            searchtext:'',
            dropdown_list: [],
            header_menu: [{'url':'about.html','name':'ПРО НАС'},{'url':'delivery.html','name':'ОПЛАТА ТА ДОСТАВКА'},{'url':'lookbook.html','name':'LOOKBOOK'},{'url':'contact.html','name':'КОНТАКТИ'}]
            }},

        methods:{
            search: function() {
                window.location.href = SITE_URL + "search/"+ this.searchtext;
            }
            },
        
        
        mounted(){
            axios
                .get('/catalog/categories/')
                    .then(response => (this.dropdown_list = response.data));
            }
        })

var alist = new Vue({
    el:'#alist',
        data:{
            
    }
})


Vue.component('catalog',{
    template: `
    <div class="pictures">
        <div v-for='item in images'>
            <a :href='"item.html#"+item.id'>
                <span><img :src='item.src'></span>
                <img src="communication/heart_empty_white.png" alt="heart" style="position: absolute; top:15px; right:20px; width:20px; height:20px;">
                <div class='catalog__new' v-if="item.new_in"> NEW </div>
                <div class='catalog__sale' v-if="item.sale"> SALE </div>
                <p>{{item.name}}</p>
                <span v-bind:class="{catalog__price: item.sale}">{{item.price}}</span> 
                <div class= "catalog__newprice" v-if="item.sale"> {{item.new_price}} </div>
            </a>
        </div>
        <div class="pictures__button">
                <button class="btn btn-default pictures__buttonView"> ПОКАЗАТИ БІЛЬШЕ </button>  
        </div>  
    </div>`,
    data: function(){
        return{
            images: [
                ]}},
    mounted() {
        axios
            .get('/catalog/products/')
                .then(response => (this.images = response.data));
            }
})

// всі продукти 
var picture =new Vue({
    el:'#picture',
    data:{
        images: []},
	mounted() {
        axios
            .get('/catalog/products/')
                .then(response => (this.images = response.data));
        },
        
    
});
// загрузити більше продуктів
var load_more =new Vue({
    el:'#load_more',
    data:{
        more_images: []
    },
    mounted() {
        axios
            .get('/catalog/products/9/10')
                .then(response => (this.more_images = response.data));
        },
})

// кожна категорія
var category = new Vue({
    el:'#category',
    data:{
        category:{}
    },
    mounted(){
        axios
            .get('/catalog/category/' + getIdFromUrl())
                .then(response => (this.category = response.data));
    
    }
})

// продукти по категорії

var products_by_category = new Vue({
    el:'#products_by_category',
    data:{
        products_by_category:[]
    },
    mounted(){
        axios
            .get('/catalog/category/products/' + getIdFromUrl())
                .then(response => (this.products_by_category = response.data));
    
    }
})
// бокове меню в каталозі та кожній секції
Vue.component('amenu',{
    template: ` <div class="section">
                    <div class='section__item'><a href="catalog.html"> КАТАЛОГ </a> </div>
                    <div class='section__item' v-for="item in menu_items">
                        <a :href='"section.html?id="+item.id+"#"+item.id'>{{item.name}}</a>
                    </div>
                </div>`,
    data: function(){
        return{
            menu_items:[],
        }
    },
    mounted() {
        axios
            .get('/catalog/categories/')
                .then(response => (this.menu_items = response.data));
        }

})


// кожен окремий товар
var menu = new Vue({
    el:'#product',
    data:{
        item: {}
    },
        
    mounted() {
        axios
            .get('/catalog/products/'+getIdFromUrl()) 
                .then(response => (this.item = response.data));
        },
    methods: {
        updateProduct: function(index){
        this.selectedVariant = index
    }},
    computed:{
        image(){
        return this.variants[this.selectedVariant].variantImage
    }},
    

})


// модальне вікно
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

// загрузизити більше фото
$('.pictures__buttonView').on('click', function(){
        $('#load_more').show();
    });
    



// слайдер
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
            autoplaySpeed: 3000,
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
            autoplaySpeed:3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '1px',
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
        


 
// Vue.component('category-item', {
//     props: ['href', 'name'],
    // клас 'my-menu-item--active' додається, якщо обчислювана властивість isActive == true
    // посилання береться із обчислюваної властивості isActive
    // template: `<li class="nav-item active">
    //     <a  v-bind:class="{active: isActive }" 
    //         :href="getHref">{{ name }}</a>
    // </li>`, 
    //обчислювані властивості
//     computed: { 
//         // якщо ми знаходимось на сторінці 'href', тоді повертає true
//         isActive: function () {
//             return (this.href === document.location.pathname)
//         },
//         // якщо ми знаходимось на сторінці 'href', тоді повертає #, щоб не переходити сюди ж
//         getHref: function() {
//             if (this.href === document.location.pathname) {
//                 return '#'
//             } else {
//                 return this.href
//             }
//         }
//     }
// })


// Vue.component('amenu',{
//     template: ` <div class="section">
//                     <div class='section__item' v-for="item in menu_items"><a :href='"section.html#"+item.id'><category-item href='section.html' name='item'></category-item></a></div>
//                 </div>`,
//     data: function(){
//         return{
//             menu_items:[],
//         }
//     },
//     mounted() {
//         axios
//             .get('/catalog/categories/')
//                 .then(response => (this.menu_items = response.data));
//         }
// })