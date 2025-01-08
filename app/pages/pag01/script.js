events.on("ready",function(){$(".boxInteraction").each(function(){let t=$(this);t.find(".btn").on("click",function(){var n=$(this).data("target"),e=t.find(".boxMessage .msg"),s=t.find(".btn");e.addClass("hide"),t.find(n).removeClass("hide"),s.removeClass("open"),$(this).addClass("open")})})});
//# sourceMappingURL=script.js.map
