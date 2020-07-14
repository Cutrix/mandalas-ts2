var EN = {
    "1": "PRINT",
    "2": "DOWNLOAD",
    "3": "Finish",
    "4": "RESET",
    "11": " Items",
    "12": "Size",
    "13": "Rotation",
    "14": "Layer",
    "15": "Pattern",
    "16": "Delete",
    "17": "Finish",
    "20": "1. Choose a layer",
    "21": "2. Choose and edit your pattern",
    "22": "3. Next layer",
    "23": "4. Ready? Let's go!",
    "24": "3. Edit your layer or finish",
    "30": "Please rotate your device."
};

var FR = {
    "1": "IMPRIMER",
    "2": "TELECHARGER",
    "3": "Terminer",
    "4": "REINITIALISER",
    "11": " Elements",
    "12": "Taille",
    "13": "Tourner",
    "14": "Layer",
    "15": "Pattern",
    "16": "Supprimer",
    "17": "Termine",
    "20": "1. Choisir un layer",
    "21": "2. Choisir et modifier votre pattern",
    "22": "3. Layer suivant",
    "23": "4. Etes vous pret ! Allons y",
    "24": "3. Modifier votre layer ou termine",
    "30": "SVP retourner votre terminal."
};

var langs = {
    "de_de": {
        "lang": "de",
        "cc": "de",
        "ga": "UA-24027855-6",
        "url": "www.staedtler.com/de/de/"
    },
    "en_uk": {
        "lang": "en",
        "cc": "uk",
        "ga": "UA-24027855-7",
        "url": "www.staedtler.com/uk/en/"
    },
    "it_it": {
        "lang": "it",
        "cc": "it",
        "ga": "UA-24027855-9",
        "url": "www.staedtler.it/it/"
    },
    "en_dk": {
        "lang": "en",
        "cc": "dk",
        "ga": "UA-24027855-14",
        "url": "www.staedtler.com/dk/en/"
    },
    "fr_fr": {
        "lang": "fr",
        "cc": "fr",
        "ga": "UA-24027855-5",
        "url": "www.staedtler.com/fr/fr/"
    },
    "nl_be": {
        "lang": "nl",
        "cc": "be",
        "ga": "UA-24027855-4",
        "url": "www.staedtler.be/nl/"
    },
    "fr_be": {
        "lang": "fr",
        "cc": "be",
        "ga": "UA-24027855-4",
        "url": "www.staedtler.be/fr/"
    },
    "es_es": {
        "lang": "es",
        "cc": "es",
        "ga": "UA-24027855-19",
        "url": "www.staedtler.com/es/es/"
    },
    "en_us": {
        "lang": "en",
        "cc": "us",
        "ga": "UA-24027855-35",
        "url": "www.staedtler.com/intl/en/"
    },

    "de_at": {
        "lang": "de",
        "cc": "at",
        "ga": "UA-24027855-3",
        "url": "www.staedtler.com/at/de/"
    },
    "en_au": {
        "lang": "en",
        "cc": "au",
        "ga": "UA-24027855-2",
        "url": "www.staedtler.au/en/"
    },
    "en_ca": {
        "lang": "en",
        "cc": "ca",
        "ga": "UA-24027855-15",
        "url": "www.staedtler.ca/en/"
    },
    "fr_ca": {
        "lang": "fr",
        "cc": "ca",
        "ga": "UA-24027855-15",
        "url": "www.staedtler.ca/fr/"
    },
    "en_hk": {
        "lang": "en",
        "cc": "hk",
        "ga": "UA-24027855-8",
        "url": "www.staedtler.com.hk/en/"
    },
    "en_my": {
        "lang": "en",
        "cc": "my",
        "ga": "UA-24027855-11",
        "url": "www.staedtler.com.my/en/"
    },
    "en_nz": {
        "lang": "en",
        "cc": "nz",
        "ga": "UA-24027855-13",
        "url": "www.staedtler.co.nz/en/"
    },
    "en_sg": {
        "lang": "en",
        "cc": "sg",
        "ga": "UA-24027855-17",
        "url": "www.staedtler.com.sg/en/"
    },
    "en_th": {
        "lang": "en",
        "cc": "th",
        "ga": "UA-24027855-20",
        "url": "www.staedtler.co.th/en/"
    },
    "en_us2": {
        "lang": "en",
        "cc": "us",
        "ga": "UA-24027855-35",
        "url": "www.staedtler.us/en/"
    },
    "en_za": {
        "lang": "en",
        "cc": "za",
        "ga": "UA-24027855-18",
        "url": "www.staedtler.co.za/en/"
    },
    "es_mx": {
        "lang": "es",
        "cc": "mx",
        "ga": "UA-24027855-12",
        "url": "www.staedtler.com.mx/es/"
    },


    "test": {
        "lang": "fr",
        "cc": "fr",
        "ga": "UA-93100359-1",
        "url": "dkdevelop.de/projects_html/dc3/"
    }
};

/*
  coming soon..

 "pt_pt": {
 "lang": "pt",
 "cc": "pt",
 "ga": "UA-24027855-16",
 "url": "www.staedtler.pt/pt/"
 },
 "pt_br": {
 "lang": "pt",
 "cc": "br",
 "ga": "UA-24027855-39",
 "url": "www.staedtler.com.br/pt/"
 },
 */

var country;
var language;

function doTranslate(data) {
    $('.translate').each(function (){
        var id = $(this).data('id');
        $(this).html(data[id]);
    });
}

function whichTransitionEvent(){
  var t;
  var el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  };

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent();

function whichAnimationEvent(){
  var t;
  var el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  };

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

var animationEvent = whichAnimationEvent();

function showMoblieMenu() {
    $('.mobile-menu-items').removeClass('fadeOutLeft').addClass('fadeInLeft').removeClass('hidden')
    $('.mobile-menu-button i').removeClass('fa-bars').addClass('fa-arrow-left')
}

function hideMobileMenu() {
    if($('.mobile-menu-items').is(':visible'))
    {
        $('.mobile-menu-items').removeClass('fadeInLeft').addClass('fadeOutLeft')
        $('.mobile-menu-items').one(animationEvent, function(){
            $('.mobile-menu-items').addClass('hidden')
        })
        $('.mobile-menu-button i').addClass('fa-bars').removeClass('fa-arrow-left')
    }
}

function postData(verb, url, data, target) {
  var form = document.createElement("form");
  form.action = url;
  form.method = verb;
  form.target = target || "_self";
  if (data) {
    for (var key in data) {
      var input = document.createElement("textarea");
      input.name = key;
      input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
      form.appendChild(input);
    }
  }
  form.style.display = 'none';
  document.body.appendChild(form);
  form.submit();
}

function chk_scroll(e) {
    var elem = $(e.currentTarget);

    if (elem[0].scrollHeight - elem.scrollTop() == elem.outerHeight() || elem[0].scrollWidth - elem.scrollLeft() == elem.outerWidth())
    {
        //we are at the buttom
        $('.scrollButtonDown').hide();
    }
    else if(elem.scrollTop() == 0 && elem.scrollLeft() == 0)
    {
        //we are at the top
        $('.scrollButtonUp').hide();
    }
    else
    {
        $('.scrollButtonDown').show();
        $('.scrollButtonUp').show();
    }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function gaSSDSLoad(analyticsId) {
    var disableStrId = 'ga-disable-' + analyticsId
    if (document.cookie.indexOf(disableStrId + '=true') > -1) {
        window[disableStrId] = true;
    }
    ga('create', analyticsId, 'auto', {siteSpeedSampleRate: 100});
    ga('set', 'forceSSL', true);
    ga('set', 'anonymizeIp', true);
    ga('require', 'linker', {});
    ga('linker:autoLink', [/^(.*)\.(staedtler|staedtler-([a-zA-Z0-9]{1,}))\.([a-z.]{2,6})$/]);
    ga('send', 'pageview');
    ga('globalRollupDomain.send', 'pageview');
}

$('.layer-options-tab-button').on('click', function(){
    if($('.tut3-mobile').is(':visible'))
    {
        $('.tut3-mobile').removeClass('fadeInDown').addClass('fadeOutUp')
        $('.tut3-mobile').one(animationEvent, function(){
            $('.tut3-mobile').addClass('hidden')
        })
    }

    $('.layer-options-tab-button').removeClass('active')
    $(this).addClass('active')
    if ($(this).hasClass('layer'))
    {
        $('.layer-options-mobile .basic-layer-options').removeClass('hidden')
        $('.layer-options-mobile .basic-image-options').addClass('hidden')
    }
    else if ($(this).hasClass('pattern'))
    {
        $('.layer-options-mobile .basic-layer-options').addClass('hidden')
        $('.layer-options-mobile .basic-image-options').removeClass('hidden')
    }
})

$('.select-layer').on('click', function(){
    if($('.tut3-mobile').is(':visible'))
    {
        $('.tut3-mobile').removeClass('fadeInDown').addClass('fadeOutUp')
        $('.tut3-mobile').one(animationEvent, function(){
            $('.tut3-mobile').addClass('hidden')
        })
    }
})

$(function(){
    doTranslate(EN);

    for (var key in langs) {
        if(window.location.href.search(langs[key].url)>0)
        {
            $.getJSON('translation/mandalator_'+langs[key].lang+'.json', function(data){
                if(typeof data != "undefined")
                    doTranslate(data)
            })
            country = langs[key].cc;
            language = langs[key].lang;
            //load google analytics
            gaSSDSLoad(langs[key].ga);
        }
    }


    $('.scrollButtonDown').on('click',function(){
        document.getElementById('image-select-container').scrollTop += 100;
        document.getElementById('image-select-container-mobile').scrollLeft += 100;
    })

    $('.scrollButtonUp').on('click',function(){
        document.getElementById('image-select-container').scrollTop -= 100;
        document.getElementById('image-select-container-mobile').scrollLeft -= 100;
    })

    $('#image-select-container').bind('scroll', chk_scroll);
    $('#image-select-container-mobile').bind('scroll', chk_scroll);

    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });



    $('.mobile-menu-button').on('click', function(e){
        e.stopPropagation();
        if ($('.mobile-menu-items').hasClass('fadeInLeft'))
            hideMobileMenu()
        else
            showMoblieMenu();
    })

    $(window).on('click', function(){
        hideMobileMenu();
    })
})


var layerData = function(layernum, img, imgamount) {

  this.imgAmount = imgamount;
  this.oldAmount = imgamount;
  this.num = layernum;
  this.$layerEl = $('.layer[data-rel="'+this.num+'"]');
  this.refImage = "";
  this.clones = "";
  this.img = img;
  this.layerRotation = 0;
  this.imgRotation = 0;
  this.imgScale = 1;
  this.emptyFlag = true;
  this.layerSize = (this.num + 1)/10;
  this.layerDefaultSize = this.layerSize;

  this.init = function() {

    var l = this;

      l.layerSize = (l.num + 1)/10;
      // debug
      l.updateLayer();
      if(l.img != ""){
          l.updateLayer();
      }

  };

   this.clearLayer = function(){

       var l = this;
       l.emptyFlag = true;
       l.$layerEl.find('.img-container').remove();
       l.img = "";
       l.refImage = "";
       l.clones = "";

   };

  this.updateLayer = function(){

    var l = this;
    // clear images

    if(l.img != ""){
        l.emptyFlag = false;
    }

    // update image arrangement
    var rotatestep = Math.ceil(360 / l.imgAmount);
    var counter = 0;
    l.$layerEl.find('.img-container').each(function(){
        $(this).css({
              "-webkit-transform": "rotate(" + rotatestep * counter + "deg)",
              "-moz-transform": "rotate(" + rotatestep * counter + "deg)",
              "-ms-transform": "rotate(" + rotatestep * counter + "deg)",
              "transform":   "rotate(" + rotatestep * counter + "deg)",
        });
      counter ++;
    });

    // upadte Layer Rotation
    //l.layer.rotation(l.layerRotation);
    //l.paper.project.activeLayer.rotate(l.layerRotation);

    // update image
    l.$layerEl.find('.img-container img').attr('src', l.img);

    // upadte image rotation && scale

    l.$layerEl.find('img').css({
      "-webkit-transform": "rotate(" + l.imgRotation + "deg) scale(" + l.imgScale + ")",
      "-moz-transform": "rotate(" + l.imgRotation + "deg) scale(" + l.imgScale + ")",
      "-ms-transform": "rotate(" + l.imgRotation + "deg) scale(" + l.imgScale + ")",
      "transform":   "rotate(" + l.imgRotation + "deg) scale(" + l.imgScale + ")",
    });


    l.$layerEl.css({
      "width": l.layerSize + "%",
      "height": l.layerSize + "%",
      "marginLeft": -l.layerSize/2 + "%",
      "marginTop": -l.layerSize/2 + "%"

    });

  };

};

var mandalatorView = function() {

    this.SliderCountImage = document.getElementById('slider-count');
    this.SliderRotateImage = document.getElementById('slider-rotate');
    this.SliderRotateLayer = document.getElementById('slider-circle-rotate');
    this.SliderScaleImage = document.getElementById('slider-scale');
    this.SliderScaleLayer = document.getElementById('slider-circle-scale');

    this.SliderCountImage2 = document.getElementById('slider-count2');
    this.SliderRotateImage2 = document.getElementById('slider-rotate2');
    this.SliderRotateLayer2 = document.getElementById('slider-circle-rotate2');
    this.SliderScaleImage2 = document.getElementById('slider-scale2');
    this.SliderScaleLayer2 = document.getElementById('slider-circle-scale2');

    this.initLayerNum = 6;
    this.stageWidth = 800;
    this.defaultImage = "assets/elements/ELEMENTE-05.svg";
    this.LayersArray = [];
    this.initImgNum = 10;
    this.activeLayer = '';
    this.activepaperLayer = "";
    this.imagecontainer = $('.image-select-container');
    this.paper = "";
    this.timeout = "";


    this.init = function(){

        // init paperjs
        var m = this;

        var canvas = document.getElementById('paper');
        // Create an empty project and a view for the canvas:
        paper.setup(canvas);
        m.paper = paper;

        var stageWidth = paper.view.size.width;
        var stageHeight = paper.view.size.height;

        this.initSliders();
        this.initLayers();
        this.initGUI();
        this.initListeners();
        //this.setActiveLayer(5);

    };

    this.initSliders = function(){


        // init sliders

        // image scale

        noUiSlider.create(this.SliderScaleImage, {
            start: 1,
            step:.1,
            connect: "lower",
            orientation: "horizontal",
            range: {
                'min': 0,
                'max': 2
            }
        });

        // circle scale
        noUiSlider.create(this.SliderScaleLayer, {
            start: 0.5,
            step: 0.05,
            connect: "lower",
            orientation: "horizontal",
            range: {
                'min': 0,
                'max': 1
            }
        });

        // circle rotate
        noUiSlider.create(this.SliderRotateLayer, {
            start: 0,
            step: 1,
            connect: "lower",
            orientation: "horizontal",
            range: {
                'min': 0,
                'max': 360
            }
        });

        // image rotate
        noUiSlider.create(this.SliderRotateImage, {
            start: 180,
            step: 1,
            connect: "lower",
            orientation: "horizontal",
            range: {
                'min': 0,
                'max': 360
            }
        });

        // image count
        noUiSlider.create(this.SliderCountImage, {
            start: 20,
            step: 1,
            connect: "lower",
            orientation: "horizontal",
            range: {
                'min': 3,
                'max': 20
            }
        });





        // image scale

        noUiSlider.create(this.SliderScaleImage2, {
            start: 1,
            step:.1,
            connect: "lower",
            orientation: "horizontal",
            range: {
                'min': 0,
                'max': 2
            }
        });

        // circle scale
        noUiSlider.create(this.SliderScaleLayer2, {
            start: 0.5,
            step: 0.05,
            connect: "lower",
            orientation: "horizontal",
            range: {
                'min': 0,
                'max': 1
            }
        });

        // circle rotate
        noUiSlider.create(this.SliderRotateLayer2, {
            start: 0,
            step: 1,
            connect: "lower",
            orientation: "horizontal",
            range: {
                'min': 0,
                'max': 360
            }
        });

        // image rotate
        noUiSlider.create(this.SliderRotateImage2, {
            start: 180,
            step: 1,
            connect: "lower",
            orientation: "horizontal",
            range: {
                'min': 0,
                'max': 360
            }
        });

        // image count
        noUiSlider.create(this.SliderCountImage2, {
            start: 20,
            step: 1,
            connect: "lower",
            orientation: "horizontal",
            range: {
                'min': 3,
                'max': 20
            }
        });



    };

    this.resetStage = function(){

        var m = this;

        for(var i = 0; i < m.LayersArray.length; i++){

            m.LayersArray[i].clearLayer();
            m.paper.project.layers[i].removeChildren();
            m.updateLayerList();
            m.updateLayerOptions();

        }

    };

    this.updateLayerOptions = function(){

        var m = this;

        // set active image

        $('.current-image img').remove();
        if(m.activeLayer.img != ""){
            $('.current-image').html('<img src="'+m.activeLayer.img+'" />');
        }else{

            $('.current-image').html('<img src="assets/img/Icon_fragezeichen_active.svg" class="black"/>');

        }

        // set name
        $('.layerNumber').text(m.activeLayer.num);

    };

    this.initGUI = function(){

        var m = this;

        // mouse overs

        // download
        $('.button.download').on('mouseenter', function(){
            $(this).find('img').attr('src', 'assets/img/Icon_download_active.svg')
        });
        $('.button.download').on('mouseleave', function(){
            $(this).find('img').attr('src', 'assets/img/Icon_download.svg')
        });

        // print
        $('.button.print').on('mouseenter', function(){
            $(this).find('img').attr('src', 'assets/img/Icon_print_active.svg')
        });

        $('.button.print').on('mouseleave', function(){
            $(this).find('img').attr('src', 'assets/img/Icon_print.svg')
        });

        // clear
        $('.button.quit').on('mouseenter', function(){
            $(this).find('img').attr('src', 'assets/img/Icon_quit_active.svg')
        });

        $('.button.quit').on('mouseleave', function(){
            $(this).find('img').attr('src', 'assets/img/Icon_quit.svg')
        });

        $('.blueButton.reset').on('click', function(){
            $('.tut1').removeClass('fadeOutUp').addClass('fadeInDown').removeClass('hidden')

            if($('.tut2').is(':visible'))
            {
                $('.tut2').removeClass('fadeInDown').addClass('fadeOutUp')
                $('.tut2').one(animationEvent, function(){
                    $('.tut2').addClass('hidden')
                })
            }

            if($('.tut3').is(':visible'))
            {
                $('.tut3').removeClass('fadeInDown').addClass('fadeOutUp')
                $('.tut3').one(animationEvent, function(){
                    $('.tut3').addClass('hidden')
                })
            }

            if($('.tut3-mobile').is(':visible'))
            {
                $('.tut3-mobile').removeClass('fadeInDown').addClass('fadeOutUp')
                $('.tut3-mobile').one(animationEvent, function(){
                    $('.tut3-mobile').addClass('hidden')
                })
            }

            if($('.tut4').is(':visible'))
            {
                $('.tut4').removeClass('fadeInDown').addClass('fadeOutUp')
                $('.tut4').one(animationEvent, function(){
                    $('.tut4').addClass('hidden')
                })
            }
            $('.layer-options').removeClass('show')
            $('.layer-options-mobile').removeClass('show')
            $('.scrollContainer').removeClass('show')
            $('.layer-list-item').removeClass('active')
            $('.layer-options-tabs').removeClass('hidden');
            hideMobileMenu();
            m.resetStage();
        })

        // image list

        $.getJSON("elements.json", function(data){
            var html = '<div class="image-items-container">';
            $.each(data, function (key,val){
                html += '<div class="profileContainer" style="background-color: '+val.color+'">'
                html += '   <div class="profile">'
                html += '       <span class="profileImageContainer">'
                html += '           <img src="assets/img/profileImages/'+val.img+'.jpg">'
                html += '       </span>'
                if(val.user != "")
                {
                    html += '       <span class="profileText"><span>'+val.kat+':</span> <span class="username">'+val.user+'</span></span>'
                }
                else
                    html += '       <span class="profileText"><span class="username" style="color: #00458b">'+val.kat+'</span></span>'
                html += '   </div>'
                $i=0;
                $.each(val.elem, function(k,v) {
                    $i++;
                    if ($i == 1)
                        html += '<div class="image-item-container">';
                    html += '<div><a href="#" class="image-item"><img src="assets/elements/'+v+'.svg" /></a></div>';
                    if ($i == 3)
                    {
                        html += '</div>';
                        $i = 0;
                    }
                });
                if ($i)
                {
                    html += '</div>';
                }

                html += '<div class="clear"></div>';
                html += '</div>'
            });
            html += '</div>'
            $('.image-select-container').html(html);

            //enable horizontal scrolling
            var container_width = 50 * $("#image-select-container-mobile .image-item-container").length;
            $("#image-select-container-mobile .image-items-container").css("width", container_width+"px");

            //dirty workaround, cause css was not working
            $( "#image-select-container-mobile .profileContainer" ).each(function() {
              var container_width = 50 * $('.image-item-container', this ).length;
              $(this).css('width', container_width)
            });


        });

        // build-Layer-list

        for (var i = 0; i <  m.LayersArray.length; i++){

            var num = i; num++;

          //  $('.layers-list .wrapper').append('<div class="layer-list-item" data-rel="'+i+'"><a href="#" class="select-layer" data-rel="'+i+'"><div class="border"><img class="default" src="assets/img/Icon_0'+num+'.svg" /><img class="activeimg" src="assets/img/Icon_0'+num+'_active.svg" /></div></a><a href="#" class="del" data-rel="'+i+'"><div class="border"><img src="assets/img/Icon_delete.svg" /></div></a></div>');

        }

        m.updateLayerList();

        // ***************************** //
        // **** basic Layer options **** //
        // ***************************** //

        // Layer scale

        $('.layer-options .basic-layer-options a.scale_more').on('click', function(){

            if(m.activeLayer.layerSize < 1){

                m.activeLayer.layerSize = parseFloat(m.activeLayer.layerSize) +  0.05

                m.activeLayer.layerSize = m.activeLayer.layerSize + 0.05;

            }else{
                m.activeLayer.layerSize = 1;
            }

            m.reInitalSliders('layer_scale');

        });


        $('.layer-options .basic-layer-options .scale_less').on('click', function(){

            if(m.activeLayer.layerSize > 0){
                m.activeLayer.layerSize -= 0.05;
            }else{
                m.activeLayer.layerSize = 0;
            }

            m.activeLayer.updateLayer();
            m.reInitalSliders('layer_scale');
        });

        $('.layer-options .basic-layer-options .scale_reset').on('click', function(){

            m.activeLayer.layerSize = m.activeLayer.layerDefaultSize;
            m.activeLayer.updateLayer();
            m.reInitalSliders('layer_scale');
        });

        // Layer Rotation

        $('.layer-options .basic-layer-options a.rotate_more').on('click', function(){

            m.activeLayer.layerRotation++;   // layerRotation
            m.rotateLayer();
            m.reInitalSliders('layer_rotate');


        });

        $('.layer-options .basic-layer-options .rotate_less').on('click', function(){

            m.activeLayer.layerRotation--;   // layerRotation
            m.rotateLayer();
            m.reInitalSliders('layer_rotate');
        });

        // ***************************** //
        // **** Image Layer options **** //
        // ***************************** //


        $('.layer-options .basic-image-options a.rotate_more').on('click', function(){

            if(m.activeLayer.imgRotation < 360){

                m.activeLayer.imgRotation++;   // layerRotation
                //m.redrawimages();
                m.reInitalSliders("image_rotate");
            }


        });

        $('.layer-options .basic-image-options .rotate_less').on('click', function(){

            if(m.activeLayer.imgRotation > 0) {
                m.activeLayer.imgRotation--;   // layerRotation
                m.redrawimages();
                m.reInitalSliders("image_rotate");
            }
        });

        // update image count

        $('.layer-options .basic-image-options .count_less').on('click', function(){

            if(m.activeLayer.imgAmount > 4){

                m.activeLayer.imgAmount -= 2;

            }else{

                m.activeLayer.imgAmount = 4;
            }

            //m.redrawimages();
            m.reInitalSliders("image_count");
        });


        $('.layer-options .basic-image-options .count_more').on('click', function(){

            if(m.activeLayer.imgAmount < 20) {

                m.activeLayer.imgAmount = parseInt(m.activeLayer.imgAmount) + 2;
            }

            m.reInitalSliders("image_count");
        });

        // update image

        $(document).on('click', '.image-select-container a.image-item', function(){

            var newimage = $(this).find('img').attr('src');
            m.activeLayer.img = newimage ;   // upadte img
            $('.scrollContainer').removeClass('show');
            $('.layer-options-mobile .basic-image-options').removeClass('hidden');
            $('.options-header .current-image').removeClass('show');
            $('.layer-options-mobile .layer-options-tabs').removeClass('hidden');
            m.updateLayerOptions();
            m.redrawimages(true);
            m.activeLayer.updateLayer();
            m.updateLayerList();

            //show tut3 on mobile
            if($('.layers-list-mobile').is(':visible'))
                $('.tut3-mobile').removeClass('fadeOutUp').addClass('fadeInDown').removeClass('hidden')

            //remove the attenion seeker
            $('.current-image').removeClass('tada')

        });

      /*
      $('.image-select-container a.image-item').on('click', function(){

            var newimage = $(this).find('img').attr('src');
            m.activeLayer.img = newimage ;   // upadte img
            m.imagecontainer.removeClass('show');
            m.activeLayer.updateLayer();
            m.updateLayerOptions();

        });
        */

        // upadte image scale

        $('.layer-options .basic-image-options a.scale_more').on('click', function(){

            m.activeLayer.imgScale = parseFloat(m.activeLayer.imgScale) + .1;   // scale
            m.redrawimages();
            m.activeLayer.updateLayer();
            m.reInitalSliders("image_scale");

        });

        $('.layer-options .basic-image-options a.scale_less').on('click', function(){

            if(m.activeLayer.imgScale > 0){

                m.activeLayer.imgScale -=.1;   // scale

            }else{
                m.activeLayer.imgScale = .1;   // scale
            }
            m.redrawimages();
            m.activeLayer.updateLayer();
            m.reInitalSliders("image_scale");

        });

        $('.layer-options .basic-image-options a.scale_reset').on('click', function(){

            m.activeLayer.imgScale = 1;   // scale
            m.activeLayer.updateLayer();

        });


        $('.options-header .current-image').on('click', function(){


            if($('.scrollContainer').hasClass('show')){
                $('.scrollContainer').removeClass('show');
                $('.layer-options .options-header .current-image').removeClass('show');
            }else{
                $('.scrollContainer').addClass('show');
                $('.layer-options .options-header .current-image').addClass('show');
                $('.layer-options-mobile .basic-image-options').addClass('hidden');
                $('.layer-options-mobile .layer-options-tabs').addClass('hidden');
            }

            //close tut2 on mobile
            if($('.layers-list-mobile').is(':visible'))
            {
                if($('.tut2').is(':visible'))
                {
                    $('.tut2').removeClass('fadeInDown').addClass('fadeOutUp')
                    $('.tut2').one(animationEvent, function(){
                        $('.tut2').addClass('hidden')
                    })
                }
            }

        });


    };

    this.updateLayerList = function(){

        var m = this;
        for (var i = 0; i <  m.LayersArray.length; i++){

            if(m.LayersArray[i].emptyFlag){

                // is empty

                $('.layer-list-item[data-rel="'+i+'"]').addClass('empty');

            }else{

                // is not empty
                $('.layer-list-item[data-rel="'+i+'"]').removeClass('empty');

            }

        }

    };

    this.redrawimages = function(newimage){

        var m = this;
        var l =  m.activeLayer;

        var radius = 450*l.layerSize;
        var imgScale = l.imgScale;
        var imgRotation = l.imgRotation;
        // Draw the view now
        var src = l.img;

        var imgNum = l.imgAmount;
        var imgSize = 100;
        var theta = (Math.PI*2) / imgNum;
        var step = Math.ceil(360 / imgNum);

        var stageWidth = m.paper.view.size.width;
        var stageHeight = m.paper.view.size.height;


        drawSVG(0);

        function drawSVG(i){

            if(newimage){

                var clonesGroup = new paper.Group();

                // remove all items
                m.paper.project.activeLayer.removeChildren();

                m.paper.project.importSVG(src,{
                    expandShapes: true,
                    onLoad : function(item) {
                        var symbol = new paper.Symbol(item);
                        var angle = i * theta;
                        var dx = radius * Math.cos(angle);
                        var dy = radius * Math.sin(angle);
                        var imgX = parseInt(stageWidth / 2 + dx);
                        var imgY = parseInt(stageHeight / 2 + dy);
                        var p = symbol.place(new paper.Point(imgX, imgY));

                        l.refImage = p;
                        p.scale(imgScale);
                        p.visible = false;
                        p.rotate(imgRotation + 0);
                        p.data.filePath = src;

                        for (var c = 0; c < imgNum; c ++){

                            var angle = c * theta;
                            //angle = c * (l.layerRotation * Math.PI / 180.0)
                            var dx = radius * Math.cos(angle + (l.layerRotation * Math.PI / 180.0));
                            var dy = radius * Math.sin(angle + (l.layerRotation * Math.PI / 180.0));
                            var imgX = parseInt(stageWidth / 2 + dx);
                            var imgY = parseInt(stageHeight / 2 + dy);
                            var copy = l.refImage.symbol.clone();
                            var nc = copy.place(new paper.Point(imgX, imgY));

                            nc.scale(imgScale);
                            var rotation = parseInt(imgRotation) + step * c + parseInt(l.layerRotation);
                            nc.rotate(rotation);
                            l.clones = clonesGroup;
                            l.clones.addChild(nc);

                        }

                        m.paper.project.activeLayer.addChild(clonesGroup);
                        paper.view.draw();
                    }
                });

            }else{


                if(l.refImage != ""){

                    l.clones.remove();

                    drawclones();
                    paper.view.draw();

                }

            }

        }

        function drawclones(){

            var clonesGroup = new paper.Group();
            for (var c = 0; c < imgNum; c ++){

                var angle = c * theta;
                //angle = c * (l.layerRotation * Math.PI / 180.0)
                var dx = radius * Math.cos(angle + (l.layerRotation * Math.PI / 180.0));
                var dy = radius * Math.sin(angle + (l.layerRotation * Math.PI / 180.0));
                var imgX = parseInt(stageWidth / 2 + dx);
                var imgY = parseInt(stageHeight / 2 + dy);
                var copy = l.refImage.symbol.clone();
                var nc = copy.place(new paper.Point(imgX, imgY));
                nc.scale(imgScale);
                var rotation = parseInt(imgRotation) + step * c + parseInt(l.layerRotation);
                nc.rotate(rotation);
                l.clones = clonesGroup;
                l.clones.addChild(nc);

            }
            m.paper.project.activeLayer.addChild(clonesGroup);

        }

        l.oldAmount = l.imgAmount;

    };

    this.initLayers  = function(){

        var m = this;

        var stageWidth = m.paper.view.size.width;
        var stageHeight = m.paper.view.size.height;

        // initial Layer rotation
        var step = Math.ceil(360 / m.initLayerNum);
        var counter = 0;
        for(var i = m.initLayerNum; i > 0; i--){

            var _layerData = new layerData(i, '', m.initImgNum);
            _layerData.layerRotation = counter * step;
            _layerData.init();
            m.LayersArray.push(_layerData);

            var layer = new m.paper.Layer({
                //children: [path, path2],
                strokeColor: 'black',
                position: m.paper.view.center
            });

            layer.sendToBack();

            counter++;

        }

        m.paper.project.layers = m.paper.project.layers.reverse();

        var logo = new m.paper.Layer()
        m.paper.project.importSVG('assets/img/staedler.svg',function(item){
            var symbol = new m.paper.Symbol(item)
            var size = m.paper.view.size.width/10
            // first place it to get the dimension
            var p = symbol.place(new m.paper.Point(m.paper.view.size.width-size,size/2));
            // resize it 1:10
            p.scale(m.paper.view.size.width/10/p.bounds.height)
            // now place it at the end position
        })

        m.paper.view.draw();

    };

    this.setActiveLayer = function(rel){
        var m = this;
        var rel = rel;

        var stageWidth = m.paper.view.size.width;
        var stageHeight = m.paper.view.size.height;

        m.activeLayer = m.LayersArray[rel];

        m.paper.project.layers[rel].activate();


        if(m.paper.project.activeLayer.children.length == 0){
            // var myCircle = new paper.Path.Circle(new m.paper.Point(stageWidth/2, stageHeight/2), 450*m.activeLayer.layerSize);
            // myCircle.strokeColor = 'blue';
        }
        $('.layer.active').removeClass('active');
        $('.layer[data-rel="'+rel+'"]').addClass('active');

        // show layer options
        $('.layer-options').addClass('show');
        $('.layer-options-mobile').addClass('show');

        $('.layer-options-mobile .basic-layer-options').addClass('hidden')
        $('.layer-options-mobile .layer-options-tabs').removeClass('hidden');
        $('.layer-options-mobile .basic-image-options').removeClass('hidden')

        $('.layer-options-tab-button').removeClass('active')
        $('.layer-options-tab-button.pattern').addClass('active')
        m.updateLayerOptions();

        // hide image selector
        $('.scrollContainer').removeClass('show');
        $('.options-header .current-image').removeClass('show');

        // update Layers List
        $('.layers-list div.active').removeClass('active');
        $('.layers-list-mobile div.active').removeClass('active');
        $('.layers-list div[data-rel="'+rel+'"]').addClass('active');
        $('.layers-list-mobile div[data-rel="'+rel+'"]').addClass('active');

        if($('.layers-list-mobile').is(':visible'))
        {
            if($('.tut1').is(':visible'))
            {
                $('.tut1').removeClass('fadeInDown').addClass('fadeOutUp')
                $('.tut1').one(animationEvent, function(){
                    $('.tut1').addClass('hidden')
                })
            }
        }

        $('.tut2').removeClass('fadeOutUp').addClass('fadeInDown').removeClass('hidden')

        if($('.current-image img').attr('src') == 'assets/img/Icon_fragezeichen_active.svg')
            $('.current-image').addClass('animated').addClass('tada')

        m.reInitalSliders();

    };

    this.rotateLayer = function(){

        var m = this;
        m.paper.project.activeLayer.rotate(m.activeLayer.layerRotation);

    }

    this.scaleLayer = function(){

        var m = this;
        //m.paper.project.activeLayer.scale(m.activeLayer.layerSize);

    };

    this.reInitalSliders = function(slider){

        var m = this;

        switch(slider) {
            case "layer_scale":
                m.SliderScaleLayer.noUiSlider.updateOptions({
                    start: m.activeLayer.layerSize,
                    step: 0.05,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 1
                    }
                });
                m.SliderScaleLayer2.noUiSlider.updateOptions({
                    start: m.activeLayer.layerSize,
                    step: 0.05,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 1
                    }
                });
                break;
            case "image_scale":
                m.SliderScaleImage.noUiSlider.updateOptions({
                    start: m.activeLayer.imgScale,
                    step:.1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 2
                    }
                });
                m.SliderScaleImage2.noUiSlider.updateOptions({
                    start: m.activeLayer.imgScale,
                    step:.1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 2
                    }
                });
                break;

            case "layer_rotate":
                m.SliderRotateLayer.noUiSlider.updateOptions({
                    start: m.activeLayer.layerRotation,
                    step: 1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 360
                    }
                });
                m.SliderRotateLayer2.noUiSlider.updateOptions({
                    start: m.activeLayer.layerRotation,
                    step: 1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 360
                    }
                });
                break;

            case "image_rotate":
                m.SliderRotateImage.noUiSlider.updateOptions({
                    start: m.activeLayer.imgRotation,
                    step: 1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 360
                    }
                });
                m.SliderRotateImage2.noUiSlider.updateOptions({
                    start: m.activeLayer.imgRotation,
                    step: 1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 360
                    }
                });
                break;

            case "image_count":
                m.SliderCountImage.noUiSlider.updateOptions({
                    start: m.activeLayer.imgAmount,
                    step: 2,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 2,
                        'max': 20
                    }
                });
                m.SliderCountImage2.noUiSlider.updateOptions({
                    start: m.activeLayer.imgAmount,
                    step: 2,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 2,
                        'max': 20
                    }
                });
                break;

            case undefined:

                m.SliderScaleLayer.noUiSlider.updateOptions({
                    start: m.activeLayer.layerSize,
                    step: 0.05,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 1
                    }
                });

                m.SliderScaleImage.noUiSlider.updateOptions({
                    start: m.activeLayer.imgScale,
                    step:.1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 2
                    }
                });
                m.SliderRotateLayer.noUiSlider.updateOptions({
                    start: m.activeLayer.layerRotation,
                    step: 1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 360
                    }
                });
                m.SliderRotateImage.noUiSlider.updateOptions({
                    start: m.activeLayer.imgRotation,
                    step: 1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 360
                    }
                });
                m.SliderCountImage.noUiSlider.updateOptions({
                    start: m.activeLayer.imgAmount,
                    step: 2,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 2,
                        'max': 20
                    }
                });

                //mobile
                m.SliderScaleLayer2.noUiSlider.updateOptions({
                    start: m.activeLayer.layerSize,
                    step: 0.05,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 1
                    }
                });

                m.SliderScaleImage2.noUiSlider.updateOptions({
                    start: m.activeLayer.imgScale,
                    step:.1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 2
                    }
                });
                m.SliderRotateLayer2.noUiSlider.updateOptions({
                    start: m.activeLayer.layerRotation,
                    step: 1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 360
                    }
                });
                m.SliderRotateImage2.noUiSlider.updateOptions({
                    start: m.activeLayer.imgRotation,
                    step: 1,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 0,
                        'max': 360
                    }
                });
                m.SliderCountImage2.noUiSlider.updateOptions({
                    start: m.activeLayer.imgAmount,
                    step: 2,
                    connect: "lower",
                    orientation: "horizontal",
                    range: {
                        'min': 2,
                        'max': 20
                    }
                });

                break;
        }






    };

    this.resizemanager = function(){

        //iPhone
        if($(window).width() > 100 && $(window).width() < 768)
        {
            var stageWidth = $(window).innerWidth() - 16;
            var stageHeight = $(window).innerHeight() - 8;
        }
        else
        {
            var stageWidth = $(window).innerWidth() - 350;
            var stageHeight = $(window).innerHeight() - 30;
        }

        var newDimension = 0;

        if(stageWidth < stageHeight){
            newDimension = stageWidth;
        }else{
            newDimension = stageHeight;
        }

        $('#paper').css({
           width:  newDimension,
           height: newDimension
        });


    };

    this.initListeners = function(){

        var m = this;

        // resize listener

        m.resizemanager(); // initial call

        window.onresize = function(){

            setTimeout(m.resizemanager, 200);

        };

        $('.print').on('click', function(){
            if (!$('.layers-list-mobile').is(':visible') || $('.mobile-menu-items').hasClass('fadeInLeft'))
            {
                //send google analytics event
                ga('send', 'event', 'mandalacreator', 'print', 'pdf');
                ga('globalRollupDomain.send', 'event', 'mandalacreator', 'print', 'pdf');

                var canvas = document.getElementById("paper");
                var img = canvas.toDataURL('image/png')
                startPrinting(img);
            }
        })


        //TODO ici le lien du telechargement rediriger vers une page php puis telecharger
        $('.download').click(function() {
            //send google analytics event
            ga('send', 'event', 'mandalacreator', 'download', 'pdf');
            ga('globalRollupDomain.send', 'event', 'mandalacreator', 'download', 'pdf');
            var imgData = $("#paper")[0].toDataURL('image/png');
            var staedler = 'data:image/png;base64,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'
            var doc = new jsPDF('l', 'mm', 'a4');

            var imgData = $("#paper")[0].toDataURL();
            //postData('POST', 'http://localhost:8000/pdf.php', {img: imgData, cc: language+'_'+country}, '_blank')

            var doc = new jsPDF('p', 'mm', 'a4');
            doc.addImage($("#paper")[0], 'PNG', 5, 5, 200, 200);
            doc.save('drawing.pdf');

            doc.addImage(imgData, 'PNG', 10, 35, 277, 139);
            doc.addImage(staedler, 'PNG', 5, 5, 15, 15);
        });


        // slider

        m.SliderScaleLayer.noUiSlider.on('update', function( values, handle ) {
            var val = values[handle];
            if(m.activeLayer != ""){
                m.activeLayer.layerSize = val;

                m.redrawimages();
            }
        });

        m.SliderScaleImage.noUiSlider.on('update', function( values, handle ) {
            var val = values[handle];
            if(m.activeLayer != ""){
                m.activeLayer.imgScale= val;
                m.redrawimages();
                m.activeLayer.updateLayer();
            }
        });

        m.SliderCountImage.noUiSlider.on('update', function( values, handle ) {
            var val = values[handle];
            $('.xitems').html(parseInt(val))
            if(m.activeLayer != ""){
                m.activeLayer.imgAmount = val;
                m.redrawimages();
                m.activeLayer.updateLayer();
            }
        });

        m.SliderRotateImage.noUiSlider.on('update', function( values, handle ) {
            var val = values[handle];
            if(m.activeLayer != ""){
                m.activeLayer.imgRotation = val;
                m.redrawimages();
                m.activeLayer.updateLayer();
            }
        });

        m.SliderRotateLayer.noUiSlider.on('update', function( values, handle ) {
            var val = values[handle];
            if(m.activeLayer != ""){

                m.activeLayer.layerRotation = val;
                m.redrawimages();

            }
        });


        //mobile
        m.SliderScaleLayer2.noUiSlider.on('update', function( values, handle ) {
            var val = values[handle];
            if(m.activeLayer != ""){
                m.activeLayer.layerSize = val;

                m.redrawimages();
            }
        });

        m.SliderScaleImage2.noUiSlider.on('update', function( values, handle ) {
            var val = values[handle];
            if(m.activeLayer != ""){
                m.activeLayer.imgScale= val;
                m.redrawimages();
                m.activeLayer.updateLayer();
            }
        });

        m.SliderCountImage2.noUiSlider.on('update', function( values, handle ) {
            var val = values[handle];
            $('.xitems').html(parseInt(val))
            if(m.activeLayer != ""){
                m.activeLayer.imgAmount = val;
                m.redrawimages();
                m.activeLayer.updateLayer();
            }
        });

        m.SliderRotateImage2.noUiSlider.on('update', function( values, handle ) {
            var val = values[handle];
            if(m.activeLayer != ""){
                m.activeLayer.imgRotation = val;
                m.redrawimages();
                m.activeLayer.updateLayer();
            }
        });

        m.SliderRotateLayer2.noUiSlider.on('update', function( values, handle ) {
            var val = values[handle];
            if(m.activeLayer != ""){

                m.activeLayer.layerRotation = val;
                m.redrawimages();

            }
        });



        // settings done
        $('.settings-done').on('click', function(e){
            e.stopPropagation();
            if($('.tut1').is(':visible'))
            {
                $('.tut1').removeClass('fadeInDown').addClass('fadeOutUp');
                $('.tut1').one(animationEvent, function(){
                    $('.tut1').addClass('hidden')
                })
            }

            if($('.tut2').is(':visible'))
            {
                $('.tut2').removeClass('fadeInDown').addClass('fadeOutUp');
                $('.tut2').one(animationEvent, function(){
                    $('.tut2').addClass('hidden')
                })
            }
            $('.tut3').removeClass('fadeOutUp').addClass('fadeInDown').removeClass('hidden')
            $('.tut4').removeClass('fadeOutUp').addClass('fadeInDown').removeClass('hidden')
            showMoblieMenu();
            // deselect
            m.deselect();
        });

        // // select layer
        // $('.layer').on('click', function(){
        //     // set active layer
        //     var rel = $(this).attr('data-rel')
        //     m.setActiveLayer(rel);

        // });

        $('.select-layer').on('click', function(){
            if($('.tut3').is(':visible'))
            {
                $('.tut3').removeClass('fadeInDown').addClass('fadeOutUp')
                $('.tut3').one(animationEvent, function(){
                    $('.tut3').addClass('hidden')
                })
            }

            if($('.tut4').is(':visible'))
            {
                $('.tut4').removeClass('fadeInDown').addClass('fadeOutUp')
                $('.tut4').one(animationEvent, function(){
                    $('.tut4').addClass('hidden')
                })
            }

            var rel = $(this).attr('data-rel')

            if($('.layer-list-item[data-rel="'+rel+'"]').hasClass('active')){
                $('.layer-options-tabs').removeClass('hidden');
                // deselect
                m.deselect();
                //remove the attenion seeker
                $('.current-image').removeClass('tada')

            }else{
                m.setActiveLayer(rel);
            }

        });

        $('.layerDelete').on('click', function(){
            var currentLayer = 6-m.activeLayer.num;
            m.LayersArray[currentLayer].clearLayer();
            m.paper.project.layers[currentLayer].removeChildren();

            m.updateLayerList();
            m.updateLayerOptions();
        });


        $('.layers-list a').on('mouseenter', function(){

            var rel = $(this).attr('data-rel');
            $('.layer[data-rel="'+rel+'"]').addClass('active');

        });

        $('.layers-list a').on('mouseleave', function(){

            var rel = $(this).attr('data-rel');
            $('.layer[data-rel="'+rel+'"]').removeClass('active');

        });


        // deselect layer
        $('#mandalator-stage .bg').on('click', function(){

          m.deselect();

        });

    };

    this.deselect = function(){

        var m = this;
        $('.layer.active').removeClass('active');
        $('.layer-options').removeClass('show');
        $('.layer-options-mobile').removeClass('show');
        $('.scrollContainer').removeClass('show');
        $('.options-header .current-image').removeClass('show');
        $('.layers-list div.active').removeClass('active');
        $('.layers-list-mobile div.active').removeClass('active');

        if($('.layers-list-mobile').is(':visible'))
            $('.tut1').removeClass('fadeOutUp').addClass('fadeInDown').removeClass('hidden')

        $('.tut2').removeClass('fadeInDown').addClass('fadeOutUp')
        $('.tut2').one(animationEvent, function(){
            $('.tut2').addClass('hidden')
        })
    };
}
