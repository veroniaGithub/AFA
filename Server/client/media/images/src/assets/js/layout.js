var Layout = function() {
    var t = function() {
            $(window).scrollTop() > 60 ? $("body").addClass("page-on-scroll") : $("body").removeClass("page-on-scroll")
        },
        o = function() {
            $(".navbar").offset().top > 150 && $(".navbar-fixed-top").addClass("top-nav-collapse"), $(window).scroll(function() {
                $(".navbar").offset().top > 150 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
            });
            var t = 0;
            t = $(".navbar-fixed-top").height() - 20, $(".js_nav-item a").bind("click", function(o) {
                var a = $($(this).attr("href")).offset().top;
                $("html, body").stop().animate({
                    scrollTop: a - t
                }, 600), o.preventDefault()
            });
            $("body").scrollspy({
                target: ".navbar-fixed-top",
                offset: t + 2
            });
            $(window).scroll(function() {
                $(".navbar-collapse.in").collapse("hide")
            })
        },
        a = function() {
            var t = $(".carousel .item"),
                o = $(window).height();
            t.eq(0).addClass("active"), t.height(o), t.addClass("full-screen"), $(".carousel img").each(function() {
                var t = $(this).attr("src"),
                    o = $(this).attr("data-color");
                $(this).parent().css({
                    "background-image": "url(" + t + ")",
                    "background-color": o
                }), $(this).remove()
            }), $(window).on("resize", function() {
                o = $(window).height(), t.height(o)
            })
        },
        e = function() {
            $("[data-auto-height]").each(function() {
                var t = $(this),
                    o = $("[data-height]", t),
                    a = 0,
                    e = t.attr("data-mode"),
                    i = parseInt(t.attr("data-offset") ? t.attr("data-offset") : 0);
                o.each(function() {
                    "height" == $(this).attr("data-height") ? $(this).css("height", "") : $(this).css("min-height", "");
                    var t = "base-height" == e ? $(this).outerHeight() : $(this).outerHeight(!0);
                    t > a && (a = t)
                }), a += i, o.each(function() {
                    "height" == $(this).attr("data-height") ? $(this).css("height", a) : $(this).css("min-height", a)
                }), t.attr("data-related") && $(t.attr("data-related")).css("height", t.height())
            })
        },
        i = function() {
            var t = $(".work-popup-overlay"),
                o = $(".work-popup-close"),
                a = $(".work-popup-trigger");
            a.on("click", function() {
                $(this).find(".work-popup-overlay").removeClass("work-popup-overlay-show"), $(this).find(".work-popup-overlay").addClass("work-popup-overlay-show")
            }), o.on("click", function(o) {
                o.stopPropagation(), t.removeClass("work-popup-overlay-show")
            })
        };
    return {
        init: function() {
            t(), o(), a(), e(), i(), $(window).scroll(function() {
                t()
            })
        },
        getViewPort: function() {
            var t = window,
                o = "inner";
            return "innerWidth" in window || (o = "client", t = document.documentElement || document.body), {
                width: t[o + "Width"],
                height: t[o + "Height"]
            }
        }
    }
}();
$(document).ready(function() {
    Layout.init()
});
