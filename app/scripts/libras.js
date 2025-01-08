events.on("ready",function(){"pt-br"==navigate.currentScreen.model.language?navigate.currentScreen.model.acessibility.customLibras&&(scorm.saveObject("libras",navigate.currentScreenUid),$(".librasDiv").draggable({containment:"#main",zIndex:!0,iframeFix:!0}),$(".btnLibras").on("click",function(){activeLibras()}),$(".librasDiv .closeLibras").on("click",function(){closeLibras()}),$("[data-libras]").on("click",function(){scorm.saveObject("libras",$(this).attr("data-libras")),liberateLibras()}),$("body").on("libras",function(i,a){scorm.saveObject("libras",a),liberateLibras()}),liberateLibras()):$(".btnLibras").addClass("hide")});var liberateLibras=function(){1==scorm.loadObject("librasActive")&&($(".librasDiv").fadeIn(),$(".librasDiv").css("display","flex"),callLibras())},activeLibras=function(){scorm.saveObject("librasActive",!0),liberateLibras()},callLibras=function(){var i=navigate.currentScreenUid;scorm.loadObject("libras")&&(i=scorm.loadObject("libras")),console.log("*Libras ID: "+i);var a=`<video src="${`../../assets/video/libras/${i}.mp4`}"
                          class="videoLibras" 
                          width="100%" 
                          height="100%" 
                          controls 
                          autoplay 
                          muted 
                          type="video/mp4">
                  </video>`;setTimeout(function(){$(".librasDiv").find(".video").empty(),$(".librasDiv").find(".video").html(a),$("body").trigger("callVideoLibras")},500)},closeLibras=function(){scorm.saveObject("librasActive",!1),$(".librasDiv").css("display","none"),$(".librasDiv").find(".video").empty()};
//# sourceMappingURL=libras.js.map
