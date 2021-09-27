/* 
 $$ maj.20150909
*/
jQuery(function($) {

    //== si pas de nav (index, 404, ...)
    if($("#box-nav > .contenu").length == 0){  $("#box-menu-burger").remove(); }
        
        
    //== sticky header html v2
	$(window).scroll(function () {
	if($(window).outerWidth() >= 1024){
		if($(window).scrollTop() >= 40){
			$('#box-header').addClass("header-shadow");
			if($(".home").length > 0){
				$('#box-logo').css({ "padding": "6px 0"});
				$('#box-logo img').css({ "width": "40px"});
				$('#acronyme').css({ "font-size": "1.6rem"});
				$('#deroule-acronyme').css({ "font-size": "1rem"});
				$('#box-langs').css({ "display": "none"});
			}
		}else{
			$('#box-header').removeClass("header-shadow");
			if($(".home").length > 0){
				$('#box-logo').css({ "padding": "18px 0"});
				$('#box-logo img').css({ "width": "80px"});
				$('#acronyme').css({ "font-size": "2.5rem"});
				$('#deroule-acronyme').css({ "font-size": "1.25rem"});
				$('#box-langs').css({ "display": "block"});
			}
		}
	}
	});//window
		
		
	//== retour haut de page : affichage du bouton (excepté si le contenu fait peu scroller la page)
	if($("#box-toppage").length > 0 && ($("#box-toppage").offset().top > $(window).outerHeight())){
		$("#box-toppage a").click(function(e){
            e.preventDefault();
            $("html, body").animate({scrollTop :($("#box-nav").offset().top - 120) }, 'slow');
        });
	}else{
        $("#box-toppage").hide();
	}
	


    //== print
	$('#printbutton').click(function(){
		window.print();
	});
		
		
	//== tableau passi qualifié $$ jquery mode
	if($("#table-passi-qualif, #table-passi-qualif-encours").length !=  0){
        $(".hidden").css({"display":"none"});// noJS strategie
        $(".hidden").after("<p class='ico-action-clic' title='Coordonnées'></p>");// noJS 
        
        // tri par défault
        $("#table-passi-qualif tbody > tr, #table-passi-qualif-encours tbody > tr").tsort("td:nth-child(1)", {order:'asc'});
        

        // sur TD : title contenant l'intitulé de colonne
        $("#table-passi-qualif tbody td").each(function(k,v){
            $(this).attr("title", $("#table-passi-qualif thead th:nth-child("+ (this.cellIndex+1)+")").html() );
        } )
       
   
       
        // oui = coche, non = croix
        $("#table-passi-qualif td:nth-child(n+2), #table-passi-qualif-encours td:nth-child(n+2)").each(function() {
            switch($(this).html()){
                case "oui":$(this).html("<div class='indic-qualif oui'>&nbsp;</div>");break;
                case "non":$(this).html("<div class='indic-qualif non'>&nbsp;</div>");break;
                case "encours":$(this).html("<div class='indic-qualif encours'>&nbsp;</div>");break;
                case "lpm":$(this).html("<div class='indic-qualif lpm'>&nbsp;</div>");break;
                /* default:$(this).html("<div class='indic-qualif inconnu'>&nbsp;</div>");break; */
                default:;break;
            }
            
            /*
    		if($(this).html() == "oui"){
    			$(this).html("<div class='indic-qualif oui'>&nbsp;</div>");
    		}else{
    			$(this).html("<div class='indic-qualif non'>&nbsp;</div>");
    		}
    		*/
        });
        
        $("#table-passi-qualif td:first-child, #table-passi-qualif-encours td:first-child").on("click", function() {
        	sec = 100;
        
           if($(this).children(".hidden").is(':hidden')){
        		$(this).children(".hidden").slideDown(sec);
        		$(this).children(".ico-action-clic").addClass("ico-action-clicked");
        		$(this).siblings().children("div").css({"transform":" scale(1)"});
        		
           }else{
        		$(this).children(".hidden").slideUp(sec);
        		$(this).children(".ico-action-clic").removeClass("ico-action-clicked");
        		$(this).siblings().children("div").css({"transform":" scale(0.5)"});
        	}
        });
	}
	
	//== table-secnumcloud-qualif_encours $$ 20161209
	var snc = "table-secnumcloud-qualif-encours";
	if($("#" + snc).length !=  0){

        $(".hidden").css({"display":"none"});// noJS strategie
        $(".hidden").after("<p class='ico-action-clic' title='Coordonnées'></p>");// noJS 
        
        // tri par défault
        $("#"+snc+" tbody > tr").tsort("td:nth-child(1)", {order:'asc'});
;
        $("#"+snc+" td:first-child").on("click", function() {
        	sec = 100;
        
           if($(this).children(".hidden").is(':hidden')){
        		$(this).children(".hidden").slideDown(sec);
        		$(this).children(".ico-action-clic").addClass("ico-action-clicked");
        		$(this).siblings().children("div").css({"transform":" scale(1)"});
        		
           }else{
        		$(this).children(".hidden").slideUp(sec);
        		$(this).children(".ico-action-clic").removeClass("ico-action-clicked");
        		$(this).siblings().children("div").css({"transform":" scale(0.5)"});
        	}
        });
	}
	/////

	//== table-lpm-detection-systemes
	var snc = "table-lpm-detection-systemes";
	if($("#" + snc).length !=  0){

        $(".hidden").css({"display":"none"});// noJS strategie
        $(".hidden").after("<p class='ico-action-clic' title='Coordonnées'></p>");// noJS 
        
        // tri par defaut
        $("#"+snc+" tbody > tr").tsort("td:nth-child(1)", {order:'asc'});

        $("#"+snc+" td:first-child").on("click", function() {
        	sec = 100;
        
           if($(this).children(".hidden").is(':hidden')){
        		$(this).children(".hidden").slideDown(sec);
        		$(this).children(".ico-action-clic").addClass("ico-action-clicked");
        		$(this).siblings().children("div").css({"transform":" scale(1)"});        		
           }else{
        		$(this).children(".hidden").slideUp(sec);
        		$(this).children(".ico-action-clic").removeClass("ico-action-clicked");
        		$(this).siblings().children("div").css({"transform":" scale(0.5)"});
        	}
        });
	}
	/////

	//== table-lpm-detection-prestataires
	var snc = "table-lpm-detection-prestataires";
	if($("#" + snc).length !=  0){

        $(".hidden").css({"display":"none"});// noJS strategie
        $(".hidden").after("<p class='ico-action-clic' title='Coordonnées'></p>");// noJS 
        
        // tri par defaut
        $("#"+snc+" tbody > tr").tsort("td:nth-child(1)", {order:'asc'});

        $("#"+snc+" td:first-child").on("click", function() {
        	sec = 100;
        
           if($(this).children(".hidden").is(':hidden')){
        		$(this).children(".hidden").slideDown(sec);
        		$(this).children(".ico-action-clic").addClass("ico-action-clicked");
        		$(this).siblings().children("div").css({"transform":" scale(1)"});        		
           }else{
        		$(this).children(".hidden").slideUp(sec);
        		$(this).children(".ico-action-clic").removeClass("ico-action-clicked");
        		$(this).siblings().children("div").css({"transform":" scale(0.5)"});
        	}
        });
	}
	/////

    //== salons-recrutement $$ 20160110
    if($("#table-salons-recrutement").length !=  0){
        // fake timestamp pour tri par default (date au format FR : dd/mm/yyyy)
        $("#table-salons-recrutement tbody td:nth-child(1)").each(function(index, value){
            var a_split = $.trim($(this).text()).split("/");
            $(this).attr("data-timestamp", a_split[2]+a_split[1]+a_split[0]);
            $(this).addClass("date");
        });
        $("#table-salons-recrutement tbody > tr").tsort("td:nth-child(1)", {attr:"data-timestamp", order:'asc'});
        
    }    

    //== produits sscd (/administration/produits-certifies/produits-sscd-hsm-certifies/produits-certifies-sscd/salons-recrutement) $$ 20160616
    if($("#produits-sscd").length !=  0){
        // fake timestamp pour tri par default sur col.1 
        $("#produits-sscd tbody td:nth-child(1)").each(function(index, value){
            var a_split = $.trim($(this).text()).split("/");
            $(this).attr("data-timestamp", a_split[0]+a_split[1]+"01");
            $(this).addClass("date");
        });
        $("#produits-sscd tbody > tr").tsort("td:nth-child(1)", {attr:"data-timestamp", order:'desc'});
        
    }
    
   

	//== calcul force pwd (tool)
	$("#toolCalcPwd_btOK").on("click", function(){ 
	    $("#toolCalcPwd_keySize").val(S($("#toolCalcPwd_alphabet").val(), $("#toolCalcPwd_longueur").val()));
	});



    //== Profils et portraits centre cyber
    $(document).on("click", ".sommaire-liste", function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop :($($(this).attr("href")).offset().top - 76) }, 'slow');
    });
        
    //== 4 our fellow friends
	var ua = navigator.userAgent; var reg = new RegExp("Firefox|Chrome|Trident","gi");var ua_arr = ua.match(reg);
	if(ua_arr[0] != "Trident"){
        console.log("%c=== On recrute : %cssi.gouv.fr/recrutement/%c ===", "color:#848484;", "color:#702c6a;text-decoration:underline;","color:#848484;");
	}
    
    //== Réseaux sociaux
	var state = 0;
	$(".bt-partages ").on("click", function(e){
        e.preventDefault(e);
		if(state == 0){
			$(".liste-partages").addClass("liste-partages-on");
			state = 1;
		}else{
			$(".liste-partages").removeClass("liste-partages-on");
			state = 0;
		}
    });
    
    //== formations SSI
    if($("#formations-ssi-masters").length == 1){
        $("#formations-ssi-masters td").removeClass("file-type-pdf");
        $("#formations-ssi-masters td a").html("Description");
    }
    
    if($("#formations-ssi-licences").length == 1){
        $("#formations-ssi-licences td").removeClass("file-type-pdf");
        $("#formations-ssi-licences td a").html("Description");
    }
        

    //== Colonne droite : si vide, supprimer $$ 20160620, 20180104
        if($(".col_1-3").children().length === 0){
            $(".col_2-3").css({"width":"90%", "display":"block", "margin":"46px auto 0 auto"});
            $(".col_1-3").css({"display":"none"})
        }
    
    //== cot-map-image 
    if($(".cot-map-box").length !=  0){
        var obj = $(".cot-map-image");
        var h  = $("<p>").addClass("cot-map-version").html( $(".cot-map-image").attr("data-version"));
        obj.after(h)
    }
    
    //== cot-liste -- ajoute l'intitulé de la colonne pour la version 'responsive' - /agence/cybersecurite/action-territoriale/ $$ 20180515
    if($("#cot-zones-liste").length !=  0){
        var obj = $(".cot-map-image");
        $("#cot-zones-liste tbody td").each(function(i, v){
             $(this).attr("data-col-libelle", $("#cot-zones-liste thead th:nth-child("+ (this.cellIndex+1)+")").html() );
        } )
    }    
  
    //== Sommaire interviews-metiers - /agence/missions/nos-publics-et-nos-actions/interviews-metiers/ $$ 20160916
    if($("#interviews-metiers").length !=  0){
        
        $("<ul>").attr("id", "sommaire").prependTo("#interviews-metiers");
        
        $("#interviews-metiers strong").each(function(i, v){
            $(this).attr("id", "anchor" + i).css({"display":"block"});
            
            $("<div class='return-top'><a href='#' title='revenir au sommaire'><img src='/images/icon_toppage.png'></a></div>").insertBefore($(this));
            
            var li = $("<li>"), ahref = $("<a>")
            ahref.html($(this).text()).attr("href", "#anchor" + i).appendTo(li)
            li.appendTo("#sommaire");
        });
        // goto
	    $(document).on("click", "#sommaire a", function(e){
            e.preventDefault(e);
            $("html, body").animate({scrollTop :($($(this).attr("href")).offset().top - 100) }, 'slow');
	    }); 
	    //gofrom
	    $(document).on("click", ".return-top", function(e){
            e.preventDefault(e);
            $("html, body").animate({scrollTop :($("#interviews-metiers").offset().top - 100) }, 'slow');
	    }); 	    
    }
    
     //== Sommaire CIIP - /en/cybersecurity-in-france/ciip-in-france/ $$ 20161020
    if($(".ciip").length !=  0){
        
        $("<ul>").addClass("sommaire nav-laterale").prependTo(".ciip");
        
        $(".ciip h2").each(function(i, v){
            $(this).attr("id", "anchor" + i);
            
            $("<div class='return-top'><a href='#' title='revenir au sommaire'><img src='/images/icon_toppage.png'></a></div>").insertBefore($(this));
            
            var li = $("<li>"), ahref = $("<a>")
            ahref.html($(this).text()).attr("href", "#anchor" + i).appendTo(li)
            li.appendTo(".sommaire");
        });
        // goto
	    $(document).on("click", ".sommaire a", function(e){
            e.preventDefault(e);
            $("html, body").animate({scrollTop :($($(this).attr("href")).offset().top - 100) }, 'slow');
	    }); 
	    //gofrom
	    $(document).on("click", ".return-top", function(e){
            e.preventDefault(e);
            $("html, body").animate({scrollTop :($(".ciip").offset().top - 100) }, 'slow');
	    }); 	    
    }
  

     //== referentiels-exigences - /administration/qualifications/prestataires-de-services-de-confiance-qualifies/referentiels-exigences/ $$ 201611212 $$ 20170331
    var namespace = "#referentiels-exigences";
    if($(namespace).length !=  0){

        //== paint      
        $("<ul>").addClass("sommaire nav-laterale").prependTo(namespace);
        
        $(namespace + " h3").each(function(i, v){
            $(this).attr("id", "anchor" + (i+1));
            
            $("<div class='return-top'><a href='#' title='revenir au sommaire'><img src='/images/icon_toppage.png'></a></div>").insertBefore($(this));
            
            var li = $("<li>"), ahref = $("<a>")
            ahref.html($(this).text()).attr("href", "#anchor" + (i+1)).appendTo(li)
            li.appendTo(".sommaire");
        });
        // goto
	    $(document).on("click", ".sommaire a", function(e){
            e.preventDefault(e);
            $("html, body").animate({scrollTop :($($(this).attr("href")).offset().top - 100) }, 'slow');
	    }); 
	    //gofrom
	    $(document).on("click", ".return-top", function(e){
            e.preventDefault(e);
            $("html, body").animate({scrollTop :($(".sommaire").offset().top - 100) }, 'slow');
	    }); 

        //== lien direct via hash
    	var LHash = location.hash;
    	if(LHash){
             $("html, body").animate({scrollTop :($(LHash).offset().top - 70) }, 'slow');    
      	}  
      	
    }
    

     //== Secnumedu::faq $$ 20170214
    var namespace = ".secnumedu-faq";
    if($(namespace).length !=  0){
        
        $(namespace + " h3").addClass("close")    ;
    
    	$(namespace + " h3").on("click", function() {
    		sec = 100;
    		if($(this).next("p,div").is(':hidden')){
    		    $(this).next("p,div").slideDown(sec);
    		    $(this).removeClass("close").addClass("open");
    		    
    	   }else{
    			$(this).next("p,div").slideUp(sec);
    			$(this).removeClass("open").addClass("close");
    			
    		}
    	});  
        
    }
    
    
    //==
    var faq_box_ns = ".faq-box";
    if($(faq_box_ns).length !=  0){
        
        $(faq_box_ns + " h3").addClass("close");
        $(faq_box_ns + " h3 + div").css({"display":"none"});
        
    
    	$(faq_box_ns + " h3").on("click", function() {
    		sec = 100;
    		if($(this).next("p,div").is(':hidden')){
    		    $(this).next("p,div").slideDown(sec);
    		    $(this).removeClass("close").addClass("open");
    		    
    	   }else{
    			$(this).next("p,div").slideUp(sec);
    			$(this).removeClass("open").addClass("close");
    			
    		}
    	}); 
    	
    	// sommaire 
        $("<ul>").addClass("sommaire nav-laterale").prependTo(faq_box_ns);
        
        $(faq_box_ns + " h2").each(function(i, v){
            $(this).attr("id", "anchor" + i);
            
            $("<div class='return-top'><a href='#' title='revenir au sommaire'><img src='/images/icon_toppage.png'></a></div>").insertBefore($(this));
            
            var li = $("<li>"), ahref = $("<a>")
            ahref.html($(this).text()).attr("href", "#anchor" + i).appendTo(li)
            li.appendTo(".sommaire");
        });
        // goto
	    $(document).on("click", ".sommaire a", function(e){
            e.preventDefault(e);
            $("html, body").animate({scrollTop :($($(this).attr("href")).offset().top - 100) }, 'slow');
	    }); 
	    //gofrom
	    $(document).on("click", ".return-top", function(e){
            e.preventDefault(e);
            console.log($(namespace))
            
            $("html, body").animate({scrollTop :($(".sommaire").offset().top - 100) }, 'slow');
	    }); 	   
        
    }    
    

    //-- Carte 'dynamique' COT $$  20180523 $$ /agence/cybersecurite/action-territoriale/
    // voir /uploads/2014/10/cot_repartition_map.js
   
    

    //== Ebios v2 - methode RM  -> modif. via js du template par défault  $$ 20180820
    if($(".ebios.rm-method").length !=  0){

        $(".banniere-ebios-rm-method").prependTo("#box-contenu");// deplace la bannière plus haut dans le DOM
        $(".slogan").html($(".titraille h1").html());// insere le contenu du H1 dans .slogan
        $(".titraille").eq(0).css( "display", "none" );  // cache h1
    }//==    
    

    //== ECSM - gallery img $$ 20180821
    if($(".ecsm-gallery").length !=  0){
        $(".ecsm-gallery img").each(function(i,v){
            var val = $(v).attr("alt") ;
            $(v).before("<h4>" + val + "</h4>");
          //  console.log($(v).parent())
        } )
        //$(".slogan").html($(".titraille h1").html());//
       
    }//==


   //== Menu footer : icone silo à droite de son intitulé  $$ 20171211 $$ 20171212 $$ 20180104
   var menusilo = document.querySelectorAll("#menu-footer-vertical > li");
   for(var z=0; z < menusilo.length; z++){
       var img = menusilo[z].querySelector("ul > li:first-child > a > img"); 
       menusilo[z].insertBefore(img, menusilo[z].querySelector("a"));
        img.style.marginRight="5px";   
        img.style.width = "16px"; 
   }

	//== hide / show some blocks
	$(".toggle-target").hide();
	$(".toggle-action").click(function () {
		$(this).closest(".toggle-bloc").find(".toggle-target").slideToggle(200);
		$(this).toggleClass("open");
		return false;
	});

	//== popup modale - zoom image
	$(".zoom").on("click", function(e){
		e.preventDefault();
		zoom($(this));
	})

	//== popup modale - fermeture
	// au click
	$(document).on("click", ".bt-close", function(){
		$(".wrap-modal").fadeOut(500, function(){// disparition + suppr.
			$(".overlay").removeClass("show"); 

			window.setTimeout(function(){
				$(".overlay, .wrap-modal").remove();
			}, 1000 )

			$("body").css("overflow", "auto");
		});
	});
	// touche 'esc' (keycode 27)
	$(document).on("keyup", function(e) {
		if (e.keyCode == 27) {
			if($(".overlay").length){
				$(".wrap-modal").fadeOut(500, function(){// disparition + suppr.
					$(".overlay, .wrap-modal").remove();
					$("body").css("overflow", "auto");
				});	
			}
		}
	});

});// eo.doc.R

//=  calcul force pwd
function S(lnN, L) {return (Math.round( parseFloat(lnN) * L));}

//== popup modale
function zoom(p_jqObj){
	var href = p_jqObj.attr("href"), title = p_jqObj.attr("title"), ratio = 0, _imgO = {};

	// overlay
	$("<div>").addClass("overlay").appendTo("body");
	$("body").css("overflow", "hidden");

	// Fenetre modale
	$("<div class='wrap-modal'><div class='bt-close' title=\"Fermer (touche 'Echap')\">&times;</div><div class='modal'></div></div>").appendTo(".overlay");

	$('<h2>').html(title).appendTo(".modal");

	var z = $('<img>').attr("src", href).appendTo(".modal").addClass("gallery")//;.css({ "width":"auto"});

	$("<img>")
	.attr("src", href)
		.load(function() {
			_imgO = {"raw_dim" : {"width": this.width, "height" :this.height }}
			_imgO.comp_dim = {"width": z.width(), "height": z.height() }
			_imgO.ratio = (this.height / this.width);
			_imgO.format = ( _imgO.ratio > 1) ? "portrait" : "paysage";
			
			if(_imgO.format == "portrait"){
				$(".gallery").css({ "width":"auto", "max-width":"98%"});
				$(".modal").css({ "overflow-y":"scroll", "overflow-x":"hidden"});
			}else{
				$(".gallery").css({ "height":"100%"});
				$(".modal").css({ "overflow-x":"scroll", "overflow-y":"hidden"});
			}
		});

// console.log(_imgO);
$(".overlay").addClass("show");        
}
