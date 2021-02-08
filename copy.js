// is texture loaded 1024


var Widgets, __extends = this && this.__extends || function() {
    var n = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, e) {
        t.__proto__ = e
    }
    || function(t, e) {
        for (var i in e)
            e.hasOwnProperty(i) && (t[i] = e[i])
    }
    ;
    return function(t, e) {
        function i() {
            this.constructor = t
        }
        n(t, e),
        t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
        new i)
    }
}();
!function(e) {
    var t = (i.update = function() {
        var t = window.getComputedStyle(document.querySelector("body"), ":before").getPropertyValue("content").replace(/[\"\']/g, "");
        e.breakpoint = {
            desktop: "desktop" === t,
            phone: "phone" === t,
            tablet: "tablet" === t,
            value: t
        }
    }
    ,
    i);
    function i() {}
    e.Breakpoint = t
}(Project = Project || {}),
function(t) {
    function e() {
        var t = window.navigator.userAgent
          , e = {
            mobile: !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))),
            ios: /iPad|iPhone|iPod/.test(t),
            mac: 0 <= navigator.platform.toUpperCase().indexOf("MAC"),
            ie: 0 < t.indexOf("MSIE ") || !!t.match(/Trident.*rv\:11\./),
            opera: !!window.opr && !!opr.addons || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/"),
            firefox: -1 < t.toLowerCase().indexOf("firefox"),
            safari: /^((?!chrome|android).)*safari/i.test(t),
            windows: -1 < window.navigator.platform.toLowerCase().indexOf("win"),
            pagespeed: -1 < t.indexOf("Speed Insights") || -1 < t.indexOf("Chrome-Lighthouse")
        };
        return $("html").toggleClass("mac", !e.windows && (e.ios || e.mac)).toggleClass("windows", e.windows && !e.mac && !e.ios).toggleClass("mobile", e.mobile).toggleClass("firefox", e.firefox).toggleClass("safari", e.safari).toggleClass("ie", e.ie),
        e
    }
    t.getBrowser = e;
    var i = (n.update = function() {
        t.browser = e()
    }
    ,
    n);
    function n() {}
    t.Browser = i
}(Project = Project || {}),
function(t) {
    var e = (i.prototype.on = function(t, e) {
        return this.events[t] || (this.events[t] = []),
        this.events[t].push(e),
        this
    }
    ,
    i.prototype.off = function(t, e) {
        if (void 0 === t)
            return this.events = {},
            this;
        if (void 0 === e && this.events[t])
            return this.events[t] = [],
            this;
        if (!this.events[t])
            return this;
        var i = this.events[t].indexOf(e);
        return -1 < i && this.events[t].splice(i, 1),
        this
    }
    ,
    i.prototype.trigger = function(t) {
        for (var e = this, i = [], n = 1; n < arguments.length; n++)
            i[n - 1] = arguments[n];
        if (this.events[t]) {
            var o = arguments;
            this.events[t].forEach(function(t) {
                return t.apply(e, [].slice.call(o, 1))
            })
        }
    }
    ,
    i.prototype.destroy = function() {
        this.events = {}
    }
    ,
    i);
    function i() {
        this.events = {}
    }
    t.Handler = e
}(Project = Project || {}),
function(t) {
    var e = (i.init = function() {
        $doc.off(".access").on("keyup.access", function(t) {
            9 === (t.keyCode || t.which) && (i.tabbedAmunt++,
            $body.toggleClass("accessibility", 2 <= i.tabbedAmunt))
        }).on("mouseup.access", function() {
            $body.removeClass("accessibility"),
            i.tabbedAmunt = 0
        })
    }
    ,
    i.tabbedAmunt = 0,
    i);
    function i() {}
    t.Accessbility = e
}(Widgets = Widgets || {}),
function(c) {
    var t = (e.prototype.init = function() {
        var e = this;
        c.Breakpoint.update(),
        c.Browser.update(),
        this.pushStates = new c.PushStates,
        this.pushStates.on(c.PushStatesEvents.CHANGE, this.onState),
        this.pushStates.on(c.PushStatesEvents.PROGRESS, this.onLoadProgress),
        this.scrolling = new c.Scrolling,
        this.nav = new c.Nav($(".js-nav")),
        this.menu = new c.Menu($(".js-menu")),
        this.cookies = new c.Cookies($(".js-cookies")),
        this.curtain = new c.Curtain($(".js-curtain")),
        this.searchPanel = new c.Panel($("#search")),
        this.subscribePanel = new c.Panel($("#subscribe")),
        this.filtersPanel = new c.Filters($("#filters")),
        this.filtersPanel.on(Pages.PageEvents.CHANGE, this.onPageAppend),
        this.search = new c.Search($(".js-search")),
        this.search.on(Components.ComponentEvents.CHANGE, this.onPageAppend),
        this.offscreen = new c.Offscreen($(".js-offscreen")),
        this.logo = new c.Logo($(".js-logo")),
        this.visibility = new Widgets.Visibility,
        this.visibility.on(Widgets.VisibilityState.HIDDEN, function(t) {
            e.currentPage.turnOff()
        }).on(Widgets.VisibilityState.VISIBLE, function(t) {
            e.currentPage.turnOn()
        }),
        this.setCurrentPage().then(this.onPageLoaded),
        Widgets.Accessbility.init(),
        Widgets.Analytics.TRACKING_ID = $("[data-tracking]").data("tracking"),
        this.loop(),
        c.debug && Utils.stats()
    }
    ,
    e.prototype.setCurrentPage = function() {
        var t = $("[data-page]")
          , e = t.data("page") + "" || "Page"
          , i = t.data("options");
        void 0 === Pages[e] && (e = "Page"),
        1 < t.length || 0 === t.length && (t = $($("#content").find("article")[0] || $("#content").children().first()[0]));
        var n = new Pages[e](t,i);
        return (this.currentPage = n).on(Pages.PageEvents.PROGRESS, this.onPageProgress),
        n.on(Pages.PageEvents.CHANGE, this.onPageAppend),
        this.filtersPanel.reload(),
        this.offscreen.reload(),
        Widgets.All.bind(),
        this.resize(),
        n.preload()
    }
    ,
    e);
    function e() {
        var l = this;
        this.resize = function() {
            c.Breakpoint.update();
            var t = $window.width()
              , e = $window.height()
              , i = !l.lastBreakpoint || l.lastBreakpoint.value !== c.breakpoint.value;
            l.lastBreakpoint = c.breakpoint,
            l.currentPage && l.currentPage.resize(t, e, c.breakpoint, i),
            l.scrolling.resize(t, e),
            l.search.resize(i),
            l.nav.resize(),
            l.menu.resize(),
            l.filtersPanel.resize(),
            l.searchPanel.resize(),
            l.subscribePanel.resize()
        }
        ,
        this.loop = function() {
            l.rAF = requestAnimationFrame(l.loop),
            l.currentPage.animateFrame(),
            l.filtersPanel.animateFrame(),
            l.nav.animateFrame(),
            l.filtersPanel.animateFrame(),
            l.searchPanel.animateFrame(),
            l.subscribePanel.animateFrame()
        }
        ,
        this.onState = function() {
            l.nav.onState(),
            l.menu.onState(),
            l.search.onState(),
            l.searchPanel.onState();
            var t = l.scrolling.onState()
              , e = l.currentPage.onState()
              , i = l.offscreen.onState();
            if (!t && !i && !e) {
                Widgets.Analytics.sendPageview(window.location.pathname);
                var n = l.pushStates.load()
                  , o = l.currentPage.animateOut()
                  , s = l.curtain.show();
                l.scrolling.stop();
                var a = window.scrollY ? window.scrollY : $window.scrollTop();
                l.logo.set(c.LogoStates.WAITING, 0 < a ? .6 : 0),
                $body.addClass("is-loading-content"),
                c.Logo.toggle(!0, !0);
                var r = [s, o, n];
                Promise.all(r).then(l.render)
            }
        }
        ,
        this.onLoadProgress = function(t) {}
        ,
        this.onPageProgress = function(t) {}
        ,
        this.onPageAppend = function(t) {
            c.PushStates.bind(t[0]),
            Widgets.All.bind(t),
            l.scrolling.load(),
            l.resize()
        }
        ,
        this.render = function() {
            l.currentPage && (l.currentPage.off(),
            l.currentPage.destroy(),
            l.currentPage = null),
            l.scrolling.destroy(),
            l.pushStates.render(),
            l.setCurrentPage().then(l.onPageLoaded),
            c.PushStates.setTitle()
        }
        ,
        this.onPageLoaded = function() {
            $body.removeClass("is-not-ready"),
            l.curtain.hide().then(function() {
                l.logo.set(c.LogoStates.NORMAL),
                l.currentPage.animateIn(),
                l.cookies.tryToShow(),
                $body.removeClass("is-loading-content")
            }),
            l.scrolling.scrollToCached(),
            c.Scrolling.scrollToPath(!0),
            l.scrolling.load(),
            l.scrolling.start(),
            l.isReady = !0
        }
        ,
        $doc = $(document),
        $window = $(window),
        $body = $("body"),
        e.instance = this,
        e.lang = $("html").attr("lang"),
        c.pixelRatio = window.devicePixelRatio || 1,
        c.debug = 0 <= window.location.search.indexOf("debug"),
        c.easing = CustomEase.create("custom", "M0,0,C0.5,0,0.3,1,1,1")
    }
    c.Site = t
}(Project = Project || {}),
$(document).ready(function() {
    site = new Project.Site,
    site.init(),
    $window.on("resize", site.resize),
    FastClick.attach(document.body)
}),
function(t) {
    var e = (i.bind = function(t) {
        var i = this
          , e = void 0 !== t ? $(t) : $body;
        $("[data-ga]", e).off(".ga").on("click.ga", function(t) {
            var e = $(t.currentTarget).data("ga");
            i.sendEvent(e[0] || "", e[1] || "", e[2] || "", e[3] || -1)
        })
    }
    ,
    i.sendEvent = function(t, e, i, n) {
        "undefined" != typeof gtag ? gtag("event", e, {
            event_category: t,
            event_label: i,
            value: n
        }) : "undefined" != typeof ga && ga("send", "event", t, e, i, n)
    }
    ,
    i.sendPageview = function(t, e) {
        "undefined" != typeof gtag ? gtag("config", i.TRACKING_ID, {
            page_path: t || "",
            page_title: e
        }) : "undefined" != typeof ga && ga("send", "pageview", t || window.location.pathname, {
            title: e,
            pathname: t || ""
        })
    }
    ,
    i);
    function i() {}
    t.Analytics = e
}(Widgets = Widgets || {}),
function(t) {
    var e = (s.bind = function(t) {
        var e = $(void 0 !== t ? t : "body");
        e.find("[data-api]").not("form").off(".api").on("click.api", s.onAction),
        e.find("form[data-api]").off(".api").on("submit.api", s.onAction).attr("novalidate", "novalidate")
    }
    ,
    s.callIt = function(e, i, n) {
        i.is("form") && (e.url = !e.url && i.attr("action") ? i.attr("action") : e.url,
        e = $.extend(e, i.find(":input").serializeObject())),
        e.form && $(e.form)[0] && delete (e = $.extend(e, $(e.form).serializeObject())).form,
        e.params && delete (e = $.extend(e, e.params)).params,
        i.addClass("is-doing-request"),
        $.ajax({
            url: e.url,
            global: !1,
            type: "POST",
            dataType: "json",
            async: !0,
            data: e
        }).done(function(t) {
            e.callback && s.onSuccess(e, i, t),
            n && "function" == typeof n && n(e, i, t)
        }).fail(function(t) {}).always(function() {
            i.removeClass("is-doing-request")
        })
    }
    ,
    s.beforeCalls = {
        login: function(t, e) {
            $body.hasClass("is-logged") ? s.callIt(t, e) : $(".js-login").last().trigger("click")
        },
        validate: function(t, e) {
            var n = !0
              , o = "";
            e.hasClass("is-done") ? e.removeClass("is-done") : (e.find("[required]:input").each(function(t, e) {
                if ("INPUT" === e.nodeName)
                    switch (e.type) {
                    case "email":
                        var i = e.value;
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(i) ? $(e).removeClass("is-error") : (n = !1,
                        $(e).addClass("is-error"),
                        o = Utils.translations[0 < i.length ? "invalid-email" : "required-field"][Project.Site.lang]);
                        break;
                    case "checkbox":
                        e.checked ? $(e).removeClass("is-error") : (n = !1,
                        $(e).addClass("is-error"),
                        o = o || Utils.translations["required-field"][Project.Site.lang])
                    }
            }),
            n ? (s.callIt(t, e),
            e.find(".js-error").text("")) : (e.addClass("has-errors"),
            e.find(".js-error").text(o)))
        }
    },
    s.callbacks = {
        onCookiesClose: function(t, e, i) {
            e.parent().addClass("is-hidden")
        }
    },
    s.onAction = function(t) {
        t.preventDefault(),
        t.stopPropagation();
        var e = $(t.currentTarget)
          , i = $(t.currentTarget).data("api");
        i.beforeCall && i.beforeCall in s.beforeCalls ? s.beforeCalls[i.beforeCall](i, e) : s.callIt(i, e)
    }
    ,
    s.onSuccess = function(t, e, i) {
        t.callback && t.callback in s.callbacks && s.callbacks[t.callback](t, e, i)
    }
    ,
    s);
    function s() {}
    t.API = e
}(Widgets = Widgets || {}),
function(t) {
    var e = (i.bind = function(t) {
        $(void 0 !== t ? t : "body").find("[data-poczta]").each(function(t, e) {
            var i = atob($(e).data("poczta"));
            e.href = "mailto:" + i,
            e.text = i,
            $(e).removeAttr("data-poczta hidden")
        })
    }
    ,
    i);
    function i() {}
    t.Email = e
}(Widgets = Widgets || {}),
function(t) {
    var e = (i.bind = function(t) {
        $(void 0 !== t ? t : "body").find("[aria-controls]").off().on("click.aria", i.onAriaControlsClick)
    }
    ,
    i.onAriaControlsClick = function(t) {
        t.preventDefault(),
        t.stopPropagation();
        var e = $(t.target)
          , i = e.attr("aria-controls")
          , n = "true" === e.attr("aria-expanded")
          , o = $("#" + i);
        if (o.add(o.children()).css({
            position: "relative",
            overflow: "hidden"
        }),
        n)
            s = o.height(),
            TweenMax.to(o, s / 400, {
                height: 0,
                ease: Project.easing,
                onComplete: function() {
                    e.attr("aria-expanded", "false"),
                    o.attr("aria-hidden", "true"),
                    o.hide()
                }
            }),
            e.data("aria-more") && e.html(e.data("aria-more"));
        else {
            o.show(),
            o.attr("aria-hidden", "false");
            var s = o.children().outerHeight(!0);
            TweenMax.fromTo(o, s / 400, {
                height: 0
            }, {
                height: s,
                ease: Project.easing,
                onComplete: function() {
                    e.attr("aria-expanded", "true")
                }
            }),
            e.data("aria-less") && e.html(e.data("aria-less"))
        }
    }
    ,
    i);
    function i() {}
    t.Expand = e
}(Widgets = Widgets || {}),
function(t) {
    var e = (i.bind = function(t) {
        if ($(void 0 !== t ? t : "body").find("[data-facebook]").off().on("click.fb", i.onFacebookLoginClick),
        "undefined" != typeof FB)
            try {
                FB.XFBML.parse()
            } catch (t) {}
    }
    ,
    i.onFacebookLoginClick = function(t) {
        t.preventDefault(),
        t.stopPropagation();
        var e = $(t.currentTarget).data("facebook");
        return "undefined" != typeof FB ? FB.login(function(t) {
            t.authResponse && FB.api("/me", function() {
                window.location.assign(e + "&token=" + t.authResponse.accessToken)
            })
        }, {
            scope: "email"
        }) : $(t.currentTarget).addClass("is-waiting"),
        !1
    }
    ,
    i);
    function i() {}
    t.Fb = e
}(Widgets = Widgets || {}),
function(s) {
    var t = (a.reset = function(t) {
        var e = t.elements;
        t.reset();
        for (var i = 0; i < e.length; i++) {
            switch (e[i].type.toLowerCase()) {
            case "text":
            case "password":
            case "textarea":
            case "hidden":
                e[i].value = "";
                break;
            case "radio":
            case "checkbox":
                e[i].checked = !1;
                break;
            case "select-one":
            case "select-multi":
                e[i].selectedIndex = 0
            }
            $(e[i]).trigger("change")
        }
    }
    ,
    a.bind = function(t) {
        a.setup();
        var e = $(void 0 !== t ? t : "body");
        $("form", e).not("[novalidate]").each(function(t, e) {
            $(e).parsley(a.formConfig).on("field:validated", function(t) {
                var e = t.$element
                  , i = e.is("[type=radio], [type=checkbox]")
                  , n = "none" === e.css("display")
                  , o = e.closest('[aria-hidden="true"]')[0];
                if (!i && (n || o))
                    return t._ui.$errorsWrapper.css("display", "none"),
                    t.validationResult = !0;
                t._ui.$errorsWrapper.css("display", "")
            }).on("form:validate", function(t) {}).on("form:success", function(t) {}).on("form:error", function(t) {}).on("form:submit", function(t) {
                var e = t.$element
                  , i = e.attr("action") || window.location.pathname
                  , n = Utils.serialize(e)
                  , o = e.is('[method="post"]');
                if (!e.is("[data-api]"))
                    return o ? s.Form.submitAjax(e) : Project.PushStates.goTo(i + "?" + n),
                    !1
            })
        }),
        $("[data-clear-form]").off(".clear-form").on("click.clear-form", function(t) {
            t.preventDefault(),
            t.stopPropagation();
            var e = $($(t.currentTarget).data("clear-form"));
            return s.Form.reset(e[0]),
            e.trigger("submit"),
            !1
        }),
        $body.on("click.filtered", ".js-filtered", function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            TweenMax.to(t.currentTarget, .3, {
                pointerEvents: "none",
                overflow: "hidden",
                margin: 0,
                width: 0,
                opacity: 0,
                onComplete: function() {
                    $("#" + $(t.currentTarget).attr("for")).prop("checked", !1).trigger("change")
                }
            })
        })
    }
    ,
    a.submitAjax = function(e) {
        var t = e.attr("action") || window.location.pathname
          , i = e.serializeObject()
          , n = $.extend(a.defaultOptions, e.data("options") || {});
        e.addClass("is-doing-request"),
        $.ajax({
            context: e[0],
            url: t,
            global: !1,
            type: "POST",
            dataType: n.type,
            data: i,
            async: !0,
            success: function(t) {
                return a.onSuccess(t, e)
            },
            error: function(t) {
                return a.onError(t, e)
            }
        })
    }
    ,
    a.onSuccess = function(t, e) {
        var i = $.extend(a.defaultOptions, e.data("options") || {})
          , n = i.success ? $(i.success) : null
          , o = i.fail ? $(i.fail) : null;
        if (e.removeClass("is-doing-request"),
        n && n[0] && n.toggle(!!t.result),
        o && o[0] && o.toggle(!t.result),
        i.response)
            switch (i.type) {
            case "html":
                a.renderHtml(t, i.response);
                break;
            case "json":
                a.renderJSON(t, i.response, i.template)
            }
        i.hide && t.result && (!0 === i.hide ? e : $(i.hide)).hide(),
        i.reset && t.result && e[0].reset(),
        (i.redirectURL || t.redirectURL) && t.result && setTimeout(function() {
            window.location.replace(i.redirectURL || t.redirectURL)
        }, i.redirectDelay || 1e3)
    }
    ,
    a.renderHtml = function(t, e) {
        var i = $(t).find(e);
        i[0] || (i = $(t).filter(e)),
        i[0] && $(e).replaceWith(i)
    }
    ,
    a.renderJSON = function(t, e, i) {
        var n = Project.Templates.get(t.template || i || "form-response").render(t);
        $(e).html(n)
    }
    ,
    a.setup = function() {
        var t = $("html").attr("lang");
        window.Parsley.setLocale(t)
    }
    ,
    a.formConfig = {
        errorsContainer: function(t) {
            return t.$element.siblings(".error, .form__error")[0] ? t.$element.siblings(".error, .form__error") : t.$element.closest(".form__row").find(".form__error")
        }
    },
    a.defaultOptions = {
        type: "html",
        template: "form-response",
        reset: !1,
        hide: !1,
        redirectDelay: 1e3
    },
    a.onError = function(t, e) {
        var i = $.extend(a.defaultOptions, e.data("options") || {})
          , n = i.success ? $(i.success) : null
          , o = i.fail ? $(i.fail) : null;
        e.removeClass("is-doing-request"),
        o && o[0] && o.show(),
        n && n[0] && n.hide(),
        i.response && "json" === i.type && a.renderJSON({
            message: t.responseText,
            template: "form-response"
        }, i.response)
    }
    ,
    a);
    function a() {}
    s.Form = t
}(Widgets = Widgets || {}),
function(t) {
    var e = (i.bind = function(t) {
        var e = void 0 === t ? $body : t;
        $(e).find("[data-src]").each(function(t, e) {
            e.setAttribute("src", e.getAttribute("data-src")),
            e.removeAttribute("data-src")
        }),
        $(e).find("[data-srcset]").each(function(t, e) {
            e.setAttribute("srcset", e.getAttribute("data-srcset")),
            e.removeAttribute("data-srcset")
        }),
        $(e).find("img.is-loading").each(function(t, e) {
            e.onload = i.onLoad,
            e.onerror = i.onError,
            e.complete && 0 < e.height && e.classList.remove("is-loading")
        })
    }
    ,
    i.onError = function(t) {}
    ,
    i.onLoad = function(t) {
        t.target.classList.remove("is-loading")
    }
    ,
    i);
    function i() {}
    t.Images = e
}(Widgets = Widgets || {}),
function(t) {
    var e = (i.bind = function(t) {
        var e = $(void 0 !== t ? t : "body");
        $.each(e.find(".js-scroll"), function(t, e) {
            if (!$(e).data("scroll")) {
                var i = new IScroll(e,{
                    disableMouse: !0,
                    disablePointer: !0,
                    disableTouch: !0,
                    fadeScrollbars: !0,
                    interactiveScrollbars: !0,
                    mouseWheel: !0,
                    preventDefault: !1,
                    scrollbars: !0,
                    scrollX: !1,
                    scrollY: !0
                });
                $(e).data("scroll", i)
            }
        })
    }
    ,
    i);
    function i() {}
    t.Iscroll = e
}(Widgets = Widgets || {}),
function(t) {
    var i = (e.CHANGE = "change",
    e.HIDDEN = "hidden",
    e.VISIBLE = "visible",
    e.PRERENDER = "prerender",
    e.UNLOADED = "unloaded",
    e);
    function e() {}
    t.VisibilityState = i;
    var n, o = (n = Project.Handler,
    __extends(s, n),
    s.prototype.getState = function() {
        return Modernizr.prefixed("visibilityState", document)
    }
    ,
    s);
    function s() {
        var e = n.call(this) || this;
        if (e.check = function() {
            var t = e.getState();
            e.trigger(i.CHANGE, t),
            e.trigger(t)
        }
        ,
        Modernizr.pagevisibility) {
            var t = void 0 !== document.mozHidden ? "mozvisibilitychange" : "visibilitychange";
            document.addEventListener(t, e.check),
            e.check()
        }
        return e
    }
    t.Visibility = o
}(Widgets = Widgets || {}),
function(t) {
    var e = (i.bind = function(t) {
        $(void 0 !== t ? t : "body").find("[data-copy]").on("click", function(t) {
            t.preventDefault(),
            t.stopPropagation();
            var e = $(t.currentTarget)
              , i = e.data("copy") || window.location.origin + window.location.pathname;
            Clipboard.copy(i),
            e.addClass("is-copied"),
            setTimeout(function() {
                e.removeClass("is-copied")
            }, 1e3)
        })
    }
    ,
    i);
    function i() {}
    t.Copy = e
}(Widgets = Widgets || {}),
function(t) {
    var e = (a.bind = function(t) {
        $(void 0 !== t ? t : "body").find("input[type=date]").each(function(t, e) {
            var i = $(e)
              , n = i.is("[value]") ? i.val() : null
              , o = i.data("min")
              , s = i.data("max");
            i.attr("type", "text").datepicker({
                dateFormat: a.dateFormat,
                defaultDate: n ? new Date(n) : new Date,
                minDate: o ? new Date(o) : null,
                maxDate: s ? new Date(s) : null,
                monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                monthNamesShort: ["Sty", "Lu", "Mar", "Kw", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa", "Lis", "Gru"],
                onSelect: a.onSelect,
                firstDay: 1
            })
        })
    }
    ,
    a.dateFormat = "dd-mm-yy",
    a.onSelect = function(t, e) {
        var i = $(e.input)
          , n = t.split("-").reverse().join("-")
          , o = new Date(n)
          , s = i.data("restrict-min")
          , a = i.data("restrict-max");
        $("#" + s).datepicker("option", "minDate", o),
        $("#" + a).datepicker("option", "maxDate", o),
        i.val(n).trigger("change")
    }
    ,
    a);
    function a() {}
    t.Datepicker = e
}(Widgets = Widgets || {}),
function(t) {
    var e = (n.bind = function(t) {
        $(void 0 !== t ? t : "body").find("[data-cssanimate]").each(function(t, e) {
            var i = $(e).data("cssanimate") || ".js-animate";
            $(e).find(i).off(".cssanim").on("webkitAnimationEnd.cssanim mozAnimationEnd.cssanim animationEnd.cssanim", n.onAnimationEnd)
        }).off(".cssanim").on("mouseenter.cssanim", n.onMouseEnter)
    }
    ,
    n.onAnimationEnd = function(t) {
        $(t.target).closest("[data-cssanimate").removeClass("is-animating")
    }
    ,
    n.onMouseEnter = function(t) {
        $(t.currentTarget).addClass("is-animating")
    }
    ,
    n);
    function n() {}
    t.Animate = e
}(Widgets = Widgets || {}),
function(i) {
    var t = (n.bind = function(t) {
        var e = $(void 0 !== t ? t : $body);
        e.closest('[aria-hidden="true"]')[0] || (i.API.bind(e[0]),
        i.Images.bind(e),
        i.Analytics.bind(e[0]),
        i.Form.bind(e[0]),
        i.Fb.bind(e[0]),
        i.Iscroll.bind(e[0]),
        i.Expand.bind(e[0]),
        i.Email.bind(e[0]),
        i.Copy.bind(e[0]),
        i.Datepicker.bind(e[0]),
        i.Animate.bind(e[0]),
        e.find("[data-share]").off().on("click.share", this.onShareClick),
        e.find("[data-print]").off().on("click.print", this.onPrintClick),
        e.find("[data-scroll-down]").off().on("click.scroll-down", n.onScrollDownClick),
        e.find("[data-scroll-top]").off().on("click.scroll-top", n.onScrollTopClick))
    }
    ,
    n.onShareClick = function(t) {
        t.preventDefault();
        var e = parseInt($(t.currentTarget).attr("data-winwidth"), 10) || 520
          , i = parseInt($(t.currentTarget).attr("data-winheight"), 10) || 350
          , n = screen.height / 2 - i / 2
          , o = screen.width / 2 - e / 2
          , s = t.currentTarget.href
          , a = $(t.currentTarget).data("share");
        return "facebook" !== a && "google" !== a || (s += encodeURIComponent(window.location.href)),
        window.open(s, "sharer" + a, "top=" + n + ",left=" + o + ",toolbar=0,status=0,width=" + e + ",height=" + i),
        !1
    }
    ,
    n.onPrintClick = function(t) {
        return t.preventDefault(),
        window.print(),
        !1
    }
    ,
    n.onScrollDownClick = function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        Project.Scrolling.scroll({
            y: window.innerHeight
        })
    }
    ,
    n.onScrollTopClick = function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        Project.Scrolling.scroll({
            y: 0
        })
    }
    ,
    n);
    function n() {}
    i.All = t
}(Widgets = Widgets || {}),
function(t) {
    var e = (i.CHANGE = "change",
    i);
    function i() {}
    t.ComponentEvents = e;
    var n, o = (n = Project.Handler,
    __extends(s, n),
    s.prototype.preloadImages = function() {
        return []
    }
    ,
    s.prototype.onState = function() {
        return !1
    }
    ,
    s.prototype.animateIn = function(t, e) {}
    ,
    s.prototype.animateOut = function() {
        return Promise.resolve(null)
    }
    ,
    s.prototype.turnOff = function() {}
    ,
    s.prototype.turnOn = function() {}
    ,
    s.prototype.destroy = function() {
        this.view.off(),
        n.prototype.destroy.call(this)
    }
    ,
    s);
    function s(t, e) {
        var i = n.call(this) || this;
        return i.view = t,
        i.options = e,
        i.resize = function(t, e, i, n) {}
        ,
        i
    }
    t.Component = o
}(Components = Components || {}),
function(t) {
    var i, e = (i = t.Component,
    __extends(n, i),
    n.prototype.destroy = function() {
        this.unbind(),
        this.$dropdown.remove(),
        i.prototype.destroy.call(this)
    }
    ,
    n.prototype.build = function() {
        this.view.toggleClass("is-native", !!this.settings.nativeOnMobile && !!Project.browser.mobile);
        var o = '<div class="dropdown__wrap js-dropdown-wrap"><ul class="dropdown__list js-dropdown-list">';
        $.each(this.select.options, function(t, e) {
            var i = e.disabled ? " is-disabled" : ""
              , n = e.selected ? " is-selected" : "";
            o += '<li class="dropdown__option js-dropdown-option' + i + n + '">' + e.text + "</li>"
        }),
        o += '</ul><button class="dropdown__button js-dropdown-button"><i class="icon-dropdown"></i></button></div>',
        this.$dropdown = $(o),
        this.view.append(this.$dropdown),
        this.$list = this.view.find(".js-dropdown-list"),
        this.$wrap = this.view.find(".js-dropdown-wrap"),
        this.$items = this.view.find(".js-dropdown-option"),
        this.$button = this.view.find(".js-dropdown-button"),
        this.iscroll = new IScroll(this.$wrap[0],{
            bounce: !0,
            disableMouse: !0,
            disablePointer: !0,
            disableTouch: !0,
            fadeScrollbars: !1,
            interactiveScrollbars: !0,
            mouseWheel: !0,
            preventDefault: !1,
            scrollbars: "dropdown",
            scrollX: !1,
            scrollY: !0,
            snap: "li"
        })
    }
    ,
    n.prototype.bind = function() {
        this.$items.off(".dropdown").on("click.dropdown", this.onItemClickHandler),
        this.$button.off(".dropdown").on("click.dropdown", this.onButtonClickHandler),
        $doc.off(".dropdown-" + this.uid).on("click.dropdown-" + this.uid, this.onClickAnywhereHandler),
        this.$select.off(".dropdown").on("change.dropdown", this.onSelectChange)
    }
    ,
    n.prototype.unbind = function() {
        this.$items.off(".dropdown"),
        this.$button.off(".dropdown"),
        $doc.off(".dropdown-" + this.uid),
        this.$select.off(".dropdown")
    }
    ,
    n.prototype.updateList = function() {
        var t = this.isOpen ? 0 : Math.min(0, this.shiftY - this.$items.filter(".is-selected").position().top);
        TweenMax.to(this.$list, .3, {
            ease: Project.easing,
            y: t
        })
    }
    ,
    n.prototype.close = function() {
        this.isOpen = !1,
        this.view.removeClass("is-open"),
        this.updateList(),
        TweenMax.to(this.$wrap, .3, {
            height: this.minHeight,
            ease: Project.easing
        })
    }
    ,
    n.prototype.open = function() {
        this.isOpen = !0,
        this.view.addClass("is-open"),
        this.iscroll.scrollTo(0, 0, 0),
        this.updateList(),
        TweenMax.to(this.$wrap, .3, {
            height: Math.min(this.fitInView(), this.$list.outerHeight()),
            ease: Project.easing,
            onComplete: function() {}
        })
    }
    ,
    n.prototype.fitInView = function() {
        this.$wrap.css("max-height", "");
        var t = window.scrollY ? window.scrollY : $window.scrollTop()
          , e = window.innerHeight - this.$wrap.offset().top - 40 + t
          , i = parseInt(this.$wrap.css("max-height"), 10)
          , n = Math.min(i, this.$list.height(), e);
        return this.$wrap.css("max-height", n),
        n
    }
    ,
    n);
    function n(t, e) {
        var o = i.call(this, t) || this;
        return o.view = t,
        o.options = e,
        o.resize = function(t, e, i, n) {
            o.minHeight = parseInt(o.$wrap.css("min-height"), 10),
            o.shiftY = .5 * (o.minHeight - o.$items.eq(1).height()),
            o.close(),
            o.fitInView(),
            o.iscroll.refresh()
        }
        ,
        o.onSelectChange = function(t) {
            var e = o.select.selectedIndex;
            o.$items.eq(e).addClass("is-selected").siblings().removeClass("is-selected"),
            o.close()
        }
        ,
        o.onItemClickHandler = function(t) {
            if (o.isOpen) {
                var e = $(t.currentTarget).index();
                o.select.options[e].selected = !0,
                $(o.select).change()
            } else
                o.open()
        }
        ,
        o.onButtonClickHandler = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            o.isOpen ? o.close() : o.open()
        }
        ,
        o.onClickAnywhereHandler = function(t) {
            $(t.target).closest(o.view).length <= 0 && o.close()
        }
        ,
        o.$select = o.view.find("select"),
        o.select = o.$select[0],
        o.$options = o.$select.find("option"),
        o.uid = Utils.generateUID(),
        o.settings = $.extend({
            nativeOnMobile: !0
        }, e || {}),
        o.build(),
        o.bind(),
        o
    }
    t.Dropdown = e
}(Components = Components || {}),
function(t) {
    var i, e = (i = t.Component,
    __extends(n, i),
    n.prototype.destroy = function() {
        this.stage = null,
        this.container = null,
        this.destroyRenderer(),
        this.texture && (this.texture = null,
        this.originalVertices = null)
    }
    ,
    n.prototype.scroll = function() {
        this.settings.hover || (this.scrollShift += .1 * this.settings.shift)
    }
    ,
    n.prototype.play = function() {
        this.stopped = !1,
        this.renderer && this.renderer.view.classList.remove("is-stopped")
    }
    ,
    n.prototype.pause = function() {
        this.renderer && this.renderer.view.classList.add("is-stopped"),
        this.stopped = !0
    }
    ,
    n.prototype.run = function() {
        this.play(),
        this.settings.destroy && (this.buildRenderer(),
        this.resize())
    }
    ,
    n.prototype.stop = function() {
        this.pause(),
        this.settings.destroy && this.destroyRenderer()
    }
    ,
    n.prototype.build = function() {
        Project.browser.pagespeed || Project.browser.ie && this.settings.hover || Project.breakpoint.phone && this.settings.hover || (this.stage = new PIXI.Container,
        this.container = new PIXI.Container,
        this.stage.addChild(this.container),
        this.settings.hover || this.buildRenderer(),
        this.img = $(this.wrap).find("img")[0],
        (this.settings.image || this.img) && this.loadImage())
    }
    ,
    n.prototype.loadImage = function() {
        var t = this.settings.image || this.img.currentSrc || this.img.src;
        0 !== t.indexOf("data:image") ? (this.textureWaiting = !1,
        this.texture = PIXI.Texture.fromImage(t.split("?")[0], !1),
        this.texture.valid ? this.onTextureLoaded() : this.texture.on("update", this.onTextureLoaded)) : this.textureWaiting = !0
    }
    ,
    n.prototype.buildRenderer = function() {
        this.renderer || this.stage && (Project.browser.ie && this.settings.hover || this.settings.breakpoints.indexOf(Project.breakpoint.value) < 0 || (this.canvas = this.view.find("canvas")[0],
        this.canvas || (this.canvas = document.createElement("canvas"),
        this.wrap.appendChild(this.canvas)),
        this.context = this.canvas.getContext("2d"),
        this.renderer = new PIXI.WebGLRenderer(this.width || this.view.width(),this.height || this.view.height(),{
            sharedLoader: !1,
            resolution: Project.pixelRatio,
            transparent: !0,
            antialias: !0
        }),
        this.canvas.style.opacity = "1",
        this.canvas.style.display = "block",
        this.canvas.classList.add("gradient"),
        this.resizeCanvas()))
    }
    ,
    n.prototype.resizeCanvas = function() {
        this.canvas && (this.canvas.width = this.width * Project.pixelRatio,
        this.canvas.height = this.height * Project.pixelRatio,
        this.canvas.style.width = this.width + "px",
        this.canvas.style.height = this.height + "px")
    }
    ,
    n.prototype.destroyRenderer = function() {
        this.renderer && ($(this.renderer.view).remove(),
        this.renderer.destroy(),
        this.renderer = null),
        this.canvas && (this.canvas.style.opacity = "0")
    }
    ,
    n.prototype.bind = function() {
        this.settings.hover && this.view.off(".gradient").on("mouseenter.gradient", this.onMouseEnter).on("mouseleave.gradient", this.onMouseLeave)
    }
    ,
    n.prototype.createMesh = function() {
        this.container && (this.mesh && this.deleteMesh(),
        this.mesh = new PIXI.mesh.Plane(this.texture,20,20),
        this.mesh.width = this.width + 2 * this.settings.offsetX,
        this.mesh.height = this.height + 2 * this.settings.offsetY,
        this.container.addChild(this.mesh),
        this.originalVertices = this.mesh.vertices.slice(0))
    }
    ,
    n.prototype.deleteMesh = function() {
        this.container && this.container.removeChild(this.mesh),
        this.mesh = null
    }
    ,
    n);
    function n(t, e) {
        var n = i.call(this, t, e) || this;
        return n.view = t,
        n.options = e,
        n.maxScrollShift = 40,
        n.firstPaint = !1,
        n.resize = function() {
            n.width = Math.ceil($(n.wrap).outerWidth()),
            n.height = n.settings.fullHeight ? Math.ceil(.9 * window.innerHeight + $(n.view).outerHeight()) : Math.ceil($(n.wrap).outerHeight()),
            n.ratio = n.img ? n.ratio = (n.img.naturalWidth || n.img.width) / (n.img.naturalHeight || n.img.height) : n.width / n.height,
            n.texture && n.createMesh(),
            n.settings.offsetX = Math.round(n.settings.offsetY * (n.img ? n.ratio : 1)),
            n.img && $(n.img).css({
                marginLeft: Project.breakpoint.desktop ? -n.settings.offsetX : "",
                marginTop: Project.breakpoint.desktop ? -n.settings.offsetY : "",
                width: Project.breakpoint.desktop ? n.width + 2 * n.settings.offsetX : "",
                height: Project.breakpoint.desktop ? n.height + 2 * n.settings.offsetY : "",
                maxWidth: Project.breakpoint.desktop ? "none" : "",
                objectFit: Project.breakpoint.desktop ? "fill" : ""
            }),
            n.container && (n.container.position.x = -n.settings.offsetX,
            n.container.position.y = -n.settings.offsetY),
            n.renderer && n.renderer.resize(n.width, n.height),
            n.resizeCanvas()
        }
        ,
        n.animateFrame = function() {
            if (n.canvas && n.canvas.classList.remove("rendered"),
            n.textureWaiting && n.loadImage(),
            !(!n.loaded || n.stopped && n.firstPaint)) {
                n.canvas && n.canvas.classList.add("rendered"),
                n.count += .03;
                var t = (n.settings.shift + Math.min(n.maxScrollShift, n.scrollShift)) * n.strength;
                if (n.mesh && n.mesh.vertices)
                    for (var e = 0, i = n.mesh.vertices.length; e < i; e++)
                        n.mesh.vertices[e] = n.originalVertices[e] + t * Math.cos(n.count + .15 * e);
                n.scrollShift *= .95,
                n.renderer && (n.renderer.render(n.stage),
                n.firstPaint = !0),
                n.count >= 2 * Math.PI && (n.count = 0),
                n.context && n.renderer && n.renderer.view && 0 < n.renderer.view.width && 0 < n.renderer.view.height && n.context.drawImage(n.renderer.view, 0, 0)
            }
        }
        ,
        n.onMouseEnter = function() {
            n.stopped = !1,
            "single" === n.settings.hoverType ? (n.renderer || n.buildRenderer(),
            (new TimelineMax).to(n, .6, {
                strength: .6
            }).to(n, 1.2, {
                strength: 0,
                onComplete: function() {
                    n.stopped = !0,
                    n.destroyRenderer()
                }
            })) : TweenMax.to(n, .3, {
                strength: 1
            })
        }
        ,
        n.onMouseLeave = function() {
            "single" !== n.settings.hoverType && TweenMax.to(n, .3, {
                strength: 0,
                onComplete: function() {
                    n.stopped = !0
                }
            })
        }
        ,
        n.onTextureLoaded = function() {
            n.view[0] && (n.view.addClass("is-texture-loaded"),
            n.createMesh(),
            n.loaded = !0)
        }
        ,
        n.settings = $.extend({
            shift: 20,
            hover: !1,
            hoverType: "single",
            autoplay: !1,
            wrap: ".js-gradient",
            destroy: !0,
            breakpoints: ["desktop", "tablet", "phone"]
        }, e || {}),
        n.wrap = n.view.find(n.settings.wrap)[0] || n.view[0],
        n.settings.offsetY = Math.round(n.settings.shift + n.maxScrollShift),
        n.settings.offsetX = Math.round(n.settings.shift),
        n.count = 0,
        n.scrollShift = 0,
        n.stopped = !n.settings.autoplay || !!n.settings.hover,
        n.strength = n.settings.hover ? 0 : 1,
        n.build(),
        n.bind(),
        n.view.data("Gradient", n),
        n
    }
    t.Gradient = e
}(Components = Components || {}),
function(t) {
    var o = (e.MOVE = "move",
    e);
    function e() {}
    t.GyroEvents = o;
    var i, n = (i = Project.Handler,
    __extends(s, i),
    s.prototype.destroy = function() {
        this.unbind(),
        i.prototype.destroy.call(this)
    }
    ,
    s.prototype.bind = function() {
        var e = this;
        window.DeviceOrientationEvent ? window.addEventListener("deviceorientation", function(t) {
            return e.handleDeviceOrientation(t)
        }, !1) : window.DeviceMotionEvent && window.addEventListener("devicemotion", function(t) {
            return e.handleDeviceMotion(t)
        }, !1)
    }
    ,
    s.prototype.unbind = function() {}
    ,
    s.prototype.handleDeviceOrientation = function(t) {
        this.onTilt(t.beta, t.gamma)
    }
    ,
    s.prototype.handleDeviceMotion = function(t) {
        this.onTilt(2 * t.acceleration.x, 2 * t.acceleration.y)
    }
    ,
    s.prototype.onTilt = function(t, e) {
        if (t || e) {
            var i = Math.min(1, Math.max(0, (this.settings.maxTiltX + e) / (2 * this.settings.maxTiltX)))
              , n = Math.min(1, Math.max(0, (this.settings.maxTiltY + t) / (2 * this.settings.maxTiltY)));
            this.trigger(o.MOVE, {
                x: i,
                y: n
            })
        }
    }
    ,
    s);
    function s(t) {
        var e = i.call(this) || this;
        return e.options = t,
        e.settings = $.extend({
            maxTiltX: 20,
            maxTiltY: 20
        }, t || {}),
        e.uid = Utils.generateUID(),
        e.bind(),
        e
    }
    t.Gyro = n
}(Components = Components || {}),
function(e) {
    var i, t = (i = e.Component,
    __extends(n, i),
    n.prototype.destroy = function() {
        this.unbind(),
        i.prototype.destroy.call(this)
    }
    ,
    n.prototype.bind = function() {
        var e = this
          , t = this.view.is("form");
        this.view.off(".load"),
        this.view.on((t ? "submit" : "click") + ".load", t ? this.onSubmit : this.onClick),
        this.settings.live && (this.view.find(":input").not("[type=search]").off(".load").on("change.load", function() {
            window.clearTimeout(e.liveTimeout),
            e.liveTimeout = setTimeout(e.onSubmit, 1e3)
        }),
        this.view.find("[type=search]").off(".load").on("keyup.load", function(t) {
            window.clearTimeout(e.liveTimeout),
            3 <= t.currentTarget.value.length && parseInt(t.key, 10) !== Utils.keys.enter && (e.liveTimeout = setTimeout(e.onSubmit, 250))
        }))
    }
    ,
    n.prototype.hideContent = function() {
        var i = this;
        return new Promise(function(t, e) {
            i.isContentHidden ? t() : TweenMax.to(i.$contentElements, .4, {
                opacity: 0,
                ease: Project.easing,
                onComplete: function() {
                    i.isContentHidden = !0,
                    t()
                }
            })
        }
        )
    }
    ,
    n.prototype.showContent = function() {
        this.isContentHidden = !1,
        TweenMax.fromTo(this.$contentElements, .6, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Project.easing
        })
    }
    ,
    n.prototype.load = function(t) {
        var o = this;
        return window.clearTimeout(this.liveTimeout),
        this.view.addClass("is-pending"),
        new Promise(function(e, i) {
            var n = o.xhruid = (new Date).getTime();
            $.ajax({
                url: t,
                global: !1,
                type: "POST",
                dataType: "html",
                async: !0
            }).done(function(t) {
                n === o.xhruid ? (o.loadedHtml = t,
                e()) : i()
            }).fail(function(t) {
                i()
            }).always(function() {
                o.view.removeClass("is-pending")
            })
        }
        )
    }
    ,
    n.prototype.render = function() {
        var o = $(this.loadedHtml);
        0 < this.$contentElements.length && this.$contentElements.each(function(t, e) {
            e.innerHTML = o.find("#" + e.id).html()
        }),
        0 < this.$attrElements.length && this.$attrElements.each(function(t, e) {
            var i = $(e)
              , n = o.find("#" + e.id);
            Array.prototype.slice.call(n[0].attributes).forEach(function(t) {
                i.attr(t.name, t.value)
            })
        });
        var t = this.$contentElements.find('[data-component="Tiles"]').data("Tiles");
        t && "function" == typeof t.onAppend && t.onAppend(this.$contentElements.find(".js-tile")),
        this.trigger(e.ComponentEvents.CHANGE, this.$contentElements),
        o.remove()
    }
    ,
    n.prototype.unbind = function() {
        this.view.off(".load"),
        this.view.find(":input").off(".load")
    }
    ,
    n);
    function n(t, e) {
        var o = i.call(this, t, e) || this;
        return o.view = t,
        o.options = e,
        o.onSubmit = function(t) {
            t && (t.preventDefault(),
            t.stopPropagation());
            var e = o.view.attr("action") || window.location.pathname
              , i = o.settings.extra ? Utils.serialize($(o.settings.extra)) : null
              , n = Utils.serialize(o.view);
            ((n = "" === n ? null : n) || i) && (e += "?" + [i, n].filter(function(t) {
                return !!t
            }).join("&")),
            window.location.search !== e && (Project.PushStates.changePath(e, !0),
            Promise.all([Project.Scrolling.scrollTop(), o.hideContent(), o.load(e)]).then(function() {
                o.render(),
                o.showContent()
            }))
        }
        ,
        o.onClick = function(t) {
            t.preventDefault(),
            t.stopPropagation();
            var e = t.currentTarget.href;
            Project.PushStates.changePath(e, !0),
            Promise.all([o.hideContent(), o.load(e)]).then(function() {
                o.render(),
                o.showContent()
            })
        }
        ,
        o.settings = $.extend({
            contentSelector: ".js-load-content",
            attrSelector: ".js-load-attr",
            live: !1
        }, e || {}),
        o.isContentHidden = !1,
        o.$contentElements = $(o.settings.contentSelector).filter("[id]"),
        o.$attrElements = $(o.settings.attrSelector).filter("[id]"),
        $(o.settings.contentSelector).not("[id]").length,
        $(o.settings.attrSelector).not("[id]").length,
        o.bind(),
        o
    }
    e.Load = t
}(Components = Components || {}),
function(t) {
    var a = (e.NONE = "none",
    e.LAST_COLUMN = "right",
    e.FIRST_COLUMN = "left",
    e);
    function e() {}
    t.TilesPriorities = a;
    var n, i = (n = t.Component,
    __extends(o, n),
    o.prototype.destroy = function() {
        this.$column = null,
        this.$gutter = null,
        this.view.data("Tiles", null),
        n.prototype.destroy.call(this)
    }
    ,
    o.prototype.onAppend = function(t, e) {
        e && (this.settings.hideHangingBottom = !1),
        this.setup(t)
    }
    ,
    o.prototype.setup = function(t) {
        $(void 0 === t ? this.view : t).imagesLoaded().always(function() {
            $window.trigger("resize")
        }),
        $window.trigger("resize")
    }
    ,
    o.prototype.saveCache = function() {
        if (!(this.$column.length < 1 || this.$gutter.length < 1)) {
            var t = this.view.find(this.settings.item).toArray().map(function(t, e) {
                var i = $(t);
                return i.css({
                    top: "",
                    left: ""
                }).addClass("is-pending").removeClass("is-first-column is-last-column is-temporary-hidden"),
                i.is(":visible") ? {
                    $el: i,
                    el: t,
                    width: Math.floor(i.outerWidth()),
                    height: i.outerHeight(!0),
                    priority: i.data("priority") || "none"
                } : null
            }).filter(function(t) {
                return null !== t
            })
              , e = this.view.find(this.settings.filler).toArray().shuffle().map(function(t, e) {
                var i = $(t);
                return i.removeAttr("style").addClass("is-pending"),
                {
                    $el: i,
                    el: t,
                    width: i.outerWidth(),
                    height: i.outerHeight(!0)
                }
            })
              , i = this.view.width()
              , n = "number" == typeof this.settings.column ? parseInt("" + this.settings.column, 10) : this.$column ? this.$column.width() : 0
              , o = "number" == typeof this.settings.gutter ? parseInt("" + this.settings.gutter, 10) : this.$gutter ? this.$gutter.width() : 0
              , s = Math.floor(i / (n + o));
            this.cache = {
                column: n,
                gutter: o,
                columnWithGutter: n + o,
                grid: s,
                width: i,
                elements: t,
                fillers: e
            },
            this.layout()
        }
    }
    ,
    o.prototype.layout = function() {
        var l = this;
        if (this.cache && this.cache.elements && !(this.cache.elements.length < 1)) {
            var c, h = [].slice.call(new Uint8Array(this.cache.grid)), d = [], u = h.concat(), t = !!Project.breakpoint.phone, p = -1;
            if (this.view.find(".gap").remove(),
            $.each(this.cache.elements, function(t, i) {
                var n = Math.ceil((i.width + l.cache.gutter) / l.cache.columnWithGutter)
                  , s = l.getColumnIndex(h, n, d, p, i.height, i.priority)
                  , a = Math.max.apply(null, h.concat().slice(s, s + n))
                  , e = Math.max(0, s * l.cache.columnWithGutter)
                  , o = e + n * l.cache.columnWithGutter
                  , r = a + i.height;
                p = s + n - 1,
                i.$el.removeClass("is-pending").toggleClass("is-first-column", 0 === s).toggleClass("is-last-column", s + n === h.length).css({
                    position: "absolute",
                    top: a,
                    left: e
                }),
                i.bottom = r,
                i.top = a,
                d = d.concat(h.concat().slice(s, s + n).reduce(function(t, e, i, n) {
                    var o = a - e;
                    return o > l.settings.minGapHeight ? t.concat({
                        index: s + i,
                        top: e,
                        height: o,
                        bottom: e + o
                    }) : t
                }, [])),
                h = h.map(function(t, e) {
                    return s <= e && e < s + n ? a + i.height : t
                }),
                u = u.map(function(t, e) {
                    return s <= e && e < s + n ? i : t
                }),
                c = !c || o >= c.right && r > c.bottom ? {
                    right: o,
                    bottom: r,
                    $el: i.$el
                } : c
            }),
            this.settings.hideHangingBottom && !t) {
                var n = Math.min.apply(null, h);
                h = h.concat().map(function(t, e) {
                    var i = t - n > l.settings.maxHangingGapHeight && u[e] && 0 !== u[e].top;
                    return u[e].$el && u[e].$el.toggleClass("is-temporary-hidden", i),
                    i ? t - u[e].height : t
                })
            }
            c && c.$el && c.$el.addClass("is-last").siblings().removeClass("is-last");
            var o = Math.max.apply(null, h);
            if (this.view.css({
                height: o,
                position: "relative"
            }),
            (d = (d = (d = d.concat(h.concat().map(function(t, e) {
                var i = o - t;
                return i > l.settings.minGapHeight ? {
                    index: e,
                    top: t,
                    height: i,
                    bottom: o
                } : null
            })).filter(function(t) {
                return null !== t
            })).concat().filter(function(t, e, i) {
                for (var n = t ? 1 : 0; t && i[n + e] && i[n + e].top === i[e].top; )
                    i[n + e] = null,
                    n++;
                return t && (t.width = n * l.cache.columnWithGutter),
                null !== t
            })).concat().sort(function(t, e) {
                return t.height < e.height ? 1 : t.height > e.height ? -1 : 0
            }).slice(0, this.settings.maxFillers)) && 0 < d.length && 0 !== d[d.length - 1].top) {
                function e(i) {
                    var n = d[i].width
                      , o = d[i].height
                      , t = a.cache.fillers.reduce(function(t, e) {
                        return !e.used && d[i] && e.width <= n && e.height < o && (!t || e.height > t.height) ? e : t
                    }, null);
                    if (t && (t.used = !0,
                    t.$el.css({
                        top: d[i].top,
                        left: d[i].index * a.cache.columnWithGutter
                    }),
                    s.push({
                        filler: t,
                        top: d[i].top,
                        left: d[i].index * a.cache.columnWithGutter,
                        right: d[i].index * a.cache.columnWithGutter + n,
                        bottom: d[i].top + d[i].height,
                        height: o
                    })),
                    d[i] && Project.debug) {
                        var e = $('<div class="gap">');
                        e.css({
                            opacity: .1,
                            background: "red",
                            position: "absolute",
                            left: d[i].index * a.cache.columnWithGutter,
                            height: d[i].height,
                            width: d[i].width,
                            top: d[i].top
                        }),
                        a.view.append(e)
                    }
                }
                for (var s = [], a = this, i = 0; i < d.length; i++)
                    e(i);
                function r(i) {
                    var n = s[i];
                    n && s.concat().filter(function(t, e) {
                        return e === i || n.top >= t.top && n.top < t.bottom || n.bottom <= t.bottom && n.bottom > t.top
                    }).reduce(function(t, e) {
                        return !t || e.height > t.height ? e : t
                    }, null).filler.$el.removeClass("is-pending").css({
                        opacity: 1
                    })
                }
                for (i = 0; i < s.length; i++)
                    r(i)
            }
        }
    }
    ,
    o.prototype.getColumnIndex = function(n, o, t, e, i, s) {
        if (this.settings.horizontalOrder)
            return e + o > n.length ? 0 : e + 1;
        switch (s) {
        case a.FIRST_COLUMN:
            return 0;
        case a.LAST_COLUMN:
            return n.length - o;
        default:
            return n.concat().slice(0, n.length - o + 1).reduce(function(t, e, i) {
                return t.height <= Math.max.apply(null, n.concat().slice(i, i + o)) ? t : {
                    height: e,
                    index: i
                }
            }, {
                height: 1 / 0,
                index: null
            }).index
        }
    }
    ,
    o);
    function o(t, e) {
        var i = n.call(this, t) || this;
        return i.view = t,
        i.resize = function() {
            i.view.css("width", ""),
            Project.breakpoint.phone && i.view.width(2 * Math.floor(.5 * i.view.closest(".grid").width())),
            i.saveCache()
        }
        ,
        i.settings = $.extend({
            item: ".js-tile",
            column: ".js-column-sizer",
            gutter: ".js-gutter-sizer",
            filler: ".js-filler",
            maxFillers: 3,
            minGapHeight: 200,
            maxHangingGapHeight: 300,
            hideHangingBottom: !0,
            horizontalOrder: !1
        }, e),
        i.$column = "string" == typeof i.settings.column ? i.view.find("" + i.settings.column) : null,
        i.$gutter = "string" == typeof i.settings.gutter ? i.view.find("" + i.settings.gutter) : null,
        Project.debug && i.view.find(i.settings.item).shuffle(),
        i.setup(),
        i.view.data("Tiles", i),
        i
    }
    t.Tiles = i
}(Components = Components || {});
var Utils, Project, Components, Pages, Historyjs = History;
!function(o) {
    var s = (t.CHANGE = "state",
    t.PROGRESS = "progress",
    t);
    function t() {}
    o.PushStatesEvents = s;
    var e, i = (e = o.Handler,
    __extends(a, e),
    a.setTitle = function(t) {
        document.title = t || $("#content > [data-title]").data("title")
    }
    ,
    a.goTo = function(t, e) {
        var i = t.replace(window.location.protocol + window.location.host, "")
          , n = i !== window.location.pathname;
        return Modernizr.history ? e ? Historyjs.replaceState({
            randomData: Math.random()
        }, document.title, i) : Historyjs.pushState({
            randomData: Math.random()
        }, document.title, i) : window.location.replace(t),
        n
    }
    ,
    a.changePath = function(t, e, i) {
        a.noChange = !0;
        var n = a.goTo(t, e || !0);
        a.noChange = !1,
        n && a.setTitle(i || document.title)
    }
    ,
    a.bind = function(t) {
        a.instance.bindLinks(t)
    }
    ,
    a.back = function(t) {
        2 < history.length ? Historyjs.back() : t ? Historyjs.replaceState({
            randomData: Math.random()
        }, document.title, t) : Historyjs.replaceState({
            randomData: Math.random()
        }, document.title, "/")
    }
    ,
    a.prototype.load = function() {
        var i = this;
        this.request && this.request.abort();
        var n = window.location.pathname + (window.location.search || "");
        return window.clearTimeout(this.timeout),
        this.timeout = setTimeout(function() {
            i.request && window.location.reload()
        }, a.TIME_LIMIT),
        new Promise(function(t, e) {
            i.request = new XMLHttpRequest,
            i.request.open("GET", n),
            i.request.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            i.request.onload = function() {
                200 === i.request.status ? (i.loadedData = i.request.responseText,
                i.trigger(s.PROGRESS, 1),
                t()) : (e(Error(i.request.statusText)),
                "abort" !== i.request.statusText && window.location.reload()),
                i.request = null,
                window.clearTimeout(i.timeout)
            }
            ,
            i.request.onerror = function() {
                e(Error("Network Error")),
                window.clearTimeout(i.timeout),
                i.request = null
            }
            ,
            i.request.onprogress = function(t) {
                t.lengthComputable && i.trigger(s.PROGRESS, t.loaded / t.total)
            }
            ,
            i.request.send()
        }
        )
    }
    ,
    a.prototype.render = function() {
        var i = this
          , n = this.loadedData
          , o = $(".js-replace, #content").toArray();
        0 < o.length && o.forEach(function(t, e) {
            i.renderElement(t, n, 0 === e && 1 === o.length)
        }),
        this.bindLinks()
    }
    ,
    a.prototype.renderElement = function(t, e, i) {
        var n = null
          , o = "#" + t.id;
        n = i && 0 === e.indexOf("<article") ? e : $($(e).find(o)[0] || $(e).filter(o)[0]).html(),
        $(o).hide().empty().html(n || e).show()
    }
    ,
    a.prototype.bindLinks = function(t) {
        t = t || "body",
        $(t).find("a").not('[data-history="false"]').not("[download]").not('[href^="#"]').not('[href$=".jpg"]').not('[target="_blank"]').not('[href^="mailto:"]').not('[href^="tel:"]').off(".history").on("click.history", this.onClick),
        $(t).find('a[href^="http"]').not('[href^="http://' + window.location.host + '"]').off(".history"),
        $(t).find('a[href^="#"]').not('[href="#"]').off(".history").on("click.history", this.onHashClick)
    }
    ,
    a.prototype.setActiveLinks = function() {
        $("a[href]").removeClass("is-active"),
        $('a[href="' + window.location.pathname + '"]').addClass("is-active")
    }
    ,
    a.TIME_LIMIT = 5e3,
    a.noChange = !1,
    a);
    function a() {
        var t = e.call(this) || this;
        return t.onClick = function(t) {
            t.preventDefault();
            var e = $(t.currentTarget)
              , i = e.attr("href").replace("http://" + window.location.host, "")
              , n = e.attr("data-history");
            "back" === n ? a.back(i) : "replace" === n ? Historyjs.replaceState({
                randomData: Math.random()
            }, document.title, i) : (o.Scrolling.resetScrollCache(i),
            Historyjs.pushState({
                randomData: Math.random()
            }, document.title, i))
        }
        ,
        t.onHashClick = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            o.Scrolling.scrollToElement($(t.currentTarget.hash))
        }
        ,
        t.onState = function() {
            t.setActiveLinks(),
            a.noChange || t.trigger(s.CHANGE)
        }
        ,
        Historyjs && (t.bindLinks(),
        Historyjs.Adapter.bind(window, "statechange", t.onState)),
        (a.instance = t).setActiveLinks(),
        t
    }
    o.PushStates = i
}(Project = Project || {}),
function(r) {
    var n, t = (n = r.Component,
    __extends(e, n),
    e.prototype.destroy = function() {
        $body.removeClass("has-pending-infinite"),
        n.prototype.destroy.call(this)
    }
    ,
    e.prototype.load = function() {
        var a = this;
        if (!this.pending && !this.finished) {
            var t = this.view.attr("href");
            this.pending = !0,
            this.view.addClass("is-doing-request"),
            Project.PushStates.changePath(t),
            $.ajax({
                url: t,
                type: "GET",
                dataType: "html",
                data: {
                    partial: !0
                }
            }).done(function(t) {
                var e = a.settings.contentSelector
                  , i = $($(t).find(e)[0] || $(t).filter(e))
                  , n = $(i.html());
                a.contentEl.append(n);
                var o = $(t).find('[data-component="More"]')
                  , s = o.attr("href");
                0 < o.length && "" !== s ? a.view.attr("href", s) : ($body.removeClass("has-pending-infinite"),
                a.view.hide(),
                a.finished = !0),
                a.contentEl.data("Tiles") ? a.contentEl.data("Tiles").onAppend(n, a.finished) : $window.trigger("resize"),
                a.trigger(r.ComponentEvents.CHANGE, a.contentEl)
            }).fail(function(t) {}).always(function() {
                a.view.removeClass("is-doing-request"),
                setTimeout(function() {
                    a.pending = !1
                }, 250)
            })
        }
    }
    ,
    e);
    function e(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i.options = e,
        i.pending = !1,
        i.finished = !1,
        i.onClick = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            i.load()
        }
        ,
        i.settings = $.extend({}, e),
        i.contentEl = $(i.settings.contentSelector),
        0 < i.contentEl.length ? i.view.off(".more").on("click.more", i.onClick) : i.view.hide(),
        i.view.is('[data-scroll="infinite"]') && !Modernizr.touchevents && ($body.addClass("has-pending-infinite"),
        i.view.addClass("is-hidden").html("")),
        i.view.data("More", i),
        i
    }
    r.More = t
}(Components = Components || {}),
function(i) {
    var n = (t.END = "end",
    t.NEXT = "next",
    t.PREV = "prev",
    t);
    function t() {}
    i.PlayerEvents = n;
    var d = (e.COVER = "cover",
    e.CONTAIN = "contain",
    e.AUTO = "auto",
    e.GALLERY = "gallery",
    e);
    function e() {}
    i.PlayerSize = d;
    var o, s = (o = i.Component,
    __extends(a, o),
    a.pauseAll = function(e) {
        a.instances.forEach(function(t) {
            e !== t.uid && t.pause()
        })
    }
    ,
    a.pauseAllIn = function(e) {
        a.instances.forEach(function(t) {
            t.view.closest(e)[0] && t.pause()
        })
    }
    ,
    a.prototype.hide = function() {
        this.view.hide()
    }
    ,
    a.prototype.show = function() {
        this.view.show()
    }
    ,
    a.prototype.loadPlaylist = function(i) {
        var n = this;
        return new Promise(function(t, e) {
            n.view.addClass("has-playlist"),
            n.playlist.load(i),
            t(i[0])
        }
        )
    }
    ,
    a.prototype.unloadPlaylist = function() {
        this.view.removeClass("has-playlist is-playlist-open"),
        this.playlist.unload()
    }
    ,
    a.prototype.turnOff = function() {
        this.isPaused() ? this.wasPlaying = !1 : (this.wasPlaying = !0,
        this.pause())
    }
    ,
    a.prototype.turnOn = function() {
        this.wasPlaying && this.play()
    }
    ,
    a.prototype.animateIn = function() {
        this.showPlayerBar()
    }
    ,
    a.prototype.destroy = function() {
        TweenMax.killTweensOf(this.view),
        a.instances.splice(a.instances.indexOf(this), 1),
        this.unbind(),
        this.unload(),
        this.view.data("Player", null),
        o.prototype.destroy.call(this)
    }
    ,
    a.prototype.toggleFullscreen = function() {
        screenfull.enabled && screenfull.toggle(this.view[0])
    }
    ,
    a.prototype.buildUI = function() {
        var e = this
          , t = Twig.twig({
            data: $("#tmpl-player").text()
        }).render({});
        this.view.append(t),
        this.controls = {},
        this.controls.poster = this.view.find(".player__poster"),
        this.controls.title = this.view.find(".player__title"),
        this.controls.playerBar = this.view.find(".player__bar"),
        this.controls.toggleBtn = this.view.find(".player__playpause"),
        this.controls.playBtn = this.view.find(".player__toggle"),
        this.controls.fullBtn = this.view.find(".player__full"),
        this.controls.volume = this.view.find(".player__volume"),
        this.controls.volumeBar = this.view.find(".volume__bar"),
        this.controls.volumeValue = this.view.find(".volume__value"),
        this.controls.volumeButton = this.view.find(".volume__button"),
        this.controls.scrubber = this.view.find(".player__scrubber"),
        this.controls.duration = this.view.find(".player__duration"),
        this.controls.time = this.view.find(".player__played"),
        this.controls.loaded = this.view.find(".player__loaded"),
        this.controls.progress = this.view.find(".player__progress"),
        this.controls.prev = this.view.find(".player__prev"),
        this.controls.next = this.view.find(".player__next"),
        this.playlist = new i.Playlist(this.view.find(".playlist")),
        this.playlist.on(i.PlaylistEvents.TOGGLE, function(t) {
            e.view.toggleClass("is-playlist-open", t)
        }),
        this.playlist.on(i.PlaylistEvents.CHANGE, function(t) {
            e.load(t),
            e.play()
        }),
        this.settings.playlist && this.loadPlaylist(this.settings.playlist),
        this.settings.autoplay && this.view.addClass("has-autoplay"),
        this.view.addClass("has-controls"),
        this.settings.muted && this.setVolume(0),
        this.loadPoster(),
        this.controls.time.text(this.mediaEl.duration)
    }
    ,
    a.prototype.bind = function() {
        this.controls && (this.controls.toggleBtn.off().on("click", this.onToggleClick),
        this.controls.playBtn.off().on("click", this.onToggleClick),
        this.controls.fullBtn.off().on("click", this.onFullClick),
        this.controls.prev.off().on("click", this.onPrevClick),
        this.controls.next.off().on("click", this.onNextClick),
        this.controls.volumeButton.off().on("click", this.onVolumeButtonClick),
        this.controls.volumeBar.off().on("mousedown", this.onVolumeDown).off().on("click", this.onVolumeClick),
        this.controls.scrubber.off().on("mousedown", this.onScrubberDown).off().on("click", this.onScrubberClick)),
        this.view.off(".player").on("mousemove.player", this.onMouseMove).on("mouseup.player", this.onMouseUp).on("mouseleave.player", this.onMouseLeave).on("click.player", this.onClick),
        $doc.off(".player-" + this.uid).on("keydown.player-" + this.uid, this.onKeyDown),
        this.bindPlayer()
    }
    ,
    a.prototype.unbind = function() {
        this.controls && (this.controls.toggleBtn.off(),
        this.controls.playBtn.off(),
        this.controls.scrubber.off(),
        this.controls.fullBtn.off(),
        this.controls.volumeBar.off()),
        this.unbindPlayer()
    }
    ,
    a.prototype.onDurationChange = function(t) {}
    ,
    a.prototype.onProgress = function(t) {}
    ,
    a.prototype.onTimeupdate = function(t) {}
    ,
    a.prototype.onCanplay = function() {
        this.view.addClass("is-canplay").removeClass("is-error");
        var t = this.mediaEl[0];
        this.controls.time.text(Utils.parseToTime(t.duration))
    }
    ,
    a.prototype.onPlay = function() {
        !this.view.hasClass("is-started") && this.settings.tracking && Widgets.Analytics.sendEvent(this.settings.tracking[0], this.settings.autoplay ? "autoplay" : "play", this.settings.tracking[1]),
        this.view.addClass("is-started").removeClass("is-ended is-error"),
        a.pauseAll(this.uid)
    }
    ,
    a.prototype.onPlaying = function() {
        this.view.addClass("is-playing").removeClass("is-loading is-error")
    }
    ,
    a.prototype.onPause = function() {
        this.view.removeClass("is-playing")
    }
    ,
    a.prototype.onWaiting = function() {
        this.view.removeClass("is-playing").addClass("is-loading")
    }
    ,
    a.prototype.onEnd = function() {
        this.view.removeClass("is-playing is-started").addClass("is-ended"),
        this.settings.autoplay && this.playlist.next() || this.trigger(n.END)
    }
    ,
    a.prototype.onError = function(t) {
        this.view && t.target.networkState && 3 === t.target.networkState && this.view.addClass("is-error")
    }
    ,
    a.prototype.onVolumeAudioClick = function(t) {
        $(t.currentTarget).find(".player__volume").toggleClass("volume-on"),
        this.toggleMute()
    }
    ,
    a.prototype.loadPoster = function() {
        if (this.settings.poster) {
            var t = Project.browser.mobile && this.settings.poster_mobile && "" !== this.settings.poster_mobile ? this.settings.poster_mobile : this.settings.poster;
            this.controls && this.controls.poster && this.controls.poster.css("background-image", "url(" + t + ")")
        }
    }
    ,
    a.prototype.resetTimeline = function() {
        this.controls && (this.controls.time.text(Utils.parseToTime(0)),
        this.controls.progress.width(0),
        this.controls.loaded.width(0))
    }
    ,
    a.prototype.updateTimeline = function(t, e, i) {
        t && this.controls && (this.controls.duration.text(Utils.parseToTime(t)),
        i && this.controls.time.text(Utils.parseToTime(i || 0)),
        e && this.controls.loaded.width(Math.max(e, i || 0) / t * 100 + "%"),
        this.controls.progress.width((i || 0) / t * 100 + "%"))
    }
    ,
    a.prototype.updateVolume = function(t) {
        this.view.toggleClass("is-muted", t < .1),
        this.controls && this.controls.volumeValue && this.controls.volumeValue.css({
            width: 100 * t + "%"
        })
    }
    ,
    a.prototype.showPlayerBar = function() {
        var t = this;
        this.view.addClass("show-playerbar"),
        setTimeout(function() {
            t.view.removeClass("show-playerbar")
        }, 2500)
    }
    ,
    a.prototype.hideBar = function() {
        this.view.removeClass("is-mousemove")
    }
    ,
    a.instances = [],
    a);
    function a(t, e) {
        var h = o.call(this, t, e) || this;
        return h.view = t,
        h.resize = function() {
            !h.settings.ratio && h.settings.width && h.settings.height && (h.settings.ratio = h.settings.width / h.settings.height);
            var t = h.settings.size
              , e = Project.browser.mobile && h.settings.ratio_mobile ? h.settings.ratio_mobile : h.settings.ratio;
            switch (t) {
            case d.GALLERY:
                h.view.addClass("is-in-gallery");
                break;
            case d.AUTO:
                h.view.css("padding-top", 100 / e + "%").addClass("is-proportional");
                break;
            case d.CONTAIN:
            case d.COVER:
                var i = h.view.parent()
                  , n = i.width()
                  , o = i.height()
                  , s = n / o
                  , a = void 0;
                t === d.CONTAIN ? a = s < e ? n : o * e : t === d.COVER && (a = s < e ? o * e : n);
                var r = a / e
                  , l = Math.min(0, .5 * (n - a))
                  , c = Math.min(0, .5 * (o - r));
                h.view.removeClass("is-proportional").css({
                    width: a,
                    height: r,
                    marginLeft: l,
                    marginTop: c,
                    paddingTop: ""
                })
            }
        }
        ,
        h.onFullClick = function(t) {
            t.stopPropagation(),
            h.toggleFullscreen()
        }
        ,
        h.onNextClick = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            h.playlist.next() || h.trigger(n.NEXT)
        }
        ,
        h.onClick = function(t) {
            0 === $(t.target).closest(".player__bar").length && 0 === $(t.target).closest(".playlist").length && (t.preventDefault(),
            t.stopPropagation(),
            h.toggle())
        }
        ,
        h.onKeyDown = function(t) {
            if (h.settings.hotkeys && (t.keyCode || t.which) === Utils.keys.space)
                return t.preventDefault(),
                t.stopPropagation(),
                h.toggle(),
                !1
        }
        ,
        h.onMouseUp = function(t) {
            if (h.scrubbing) {
                t.stopPropagation();
                var e = (t.pageX - h.controls.scrubber.offset().left) / h.controls.scrubber.width();
                h.seek(e)
            }
            h.scrubbing = !1,
            h.volumeUpdating = !1,
            h.view.removeClass("is-scrubbing")
        }
        ,
        h.onMouseLeave = function(t) {
            h.scrubbing = !1,
            h.volumeUpdating = !1,
            h.view.removeClass("is-scrubbing")
        }
        ,
        h.onMouseMove = function(t) {
            if (h.view.addClass("is-mousemove"),
            window.clearTimeout(h.timeout),
            h.timeout = setTimeout(function() {
                h.hideBar()
            }, 2e3),
            h.scrubbing) {
                t.stopPropagation();
                var e = t.pageX - h.controls.scrubber.offset().left
                  , i = h.controls.scrubber.width()
                  , n = Math.max(0, Math.min(1, e / i));
                h.controls.progress.width(100 * n + "%"),
                h.seek(n)
            }
            if (h.volumeUpdating) {
                t.stopPropagation();
                e = t.pageX - h.controls.volumeBar.offset().left,
                i = h.controls.volumeBar.width(),
                n = Math.max(0, Math.min(1, e / i));
                h.setVolume(n)
            }
        }
        ,
        h.onVolumeClick = function(t) {
            t.stopPropagation();
            var e = h.controls.volumeBar.offset()
              , i = (t.clientX - e.left) / h.controls.volumeBar.outerWidth();
            h.setVolume(i)
        }
        ,
        h.onVolumeButtonClick = function(t) {
            t.preventDefault(),
            h.toggleMute()
        }
        ,
        h.onVolumeDown = function(t) {
            t.stopPropagation(),
            h.volumeUpdating = !0
        }
        ,
        h.onScrubberDown = function(t) {
            t.stopPropagation(),
            h.scrubbing = !0,
            h.view.addClass("is-scrubbing")
        }
        ,
        h.onScrubberClick = function(t) {
            t.stopPropagation();
            var e = (t.pageX - $(t.currentTarget).offset().left) / $(t.currentTarget).width();
            h.seek(e)
        }
        ,
        h.onToggleClick = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            h.toggle()
        }
        ,
        h.onPrevClick = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            h.playlist.prev() || h.trigger(n.PREV)
        }
        ,
        h.settings = $.extend({
            autoplay: !1,
            loop: !1,
            muted: !1,
            controls: !1,
            volume: 1,
            width: 480,
            height: 270,
            size: d.AUTO,
            readyTime: .001,
            hotkeys: !0
        }, e || t.data("options") || {}),
        h.uid = Utils.generateUID(),
        h.setup(),
        h.resize(),
        h.view.data("player", h),
        void 0 === a.instances && (a.instances = []),
        a.instances.push(h),
        h.view.addClass("is-initialized"),
        h
    }
    i.Player = s
}(Components = Components || {}),
function(t) {
    var n, e = (n = t.Component,
    __extends(i, n),
    i);
    function i(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i.onClickHandler = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            i.view.toggleClass("is-shown")
        }
        ,
        i.onClickAnywhereHandler = function(t) {
            $(t.target).closest(".js-share").length <= 0 && i.view.removeClass("is-shown")
        }
        ,
        i.$button = i.view.find(".js-share-btn"),
        i.$button.on("click.share", i.onClickHandler),
        $doc.off(".share").on("click.share", i.onClickAnywhereHandler),
        i
    }
    t.Share = e
}(Components = Components || {}),
function(t) {
    var i = (e.START = "start",
    e.UPDATE = "update",
    e.END = "end",
    e);
    function e() {}
    t.SwipeEvents = i;
    var o = (n.HORIZONTAL = "h",
    n.VERTICAL = "v",
    n);
    function n() {}
    t.SwipeAxes = o;
    var s = (a.LEFT = "left",
    a.RIGHT = "right",
    a.UP = "up",
    a.DOWN = "down",
    a.NONE = "none",
    a.CLICK = "click",
    a);
    function a() {}
    t.SwipeDirections = s;
    var r, l = (r = t.Component,
    __extends(c, r),
    c.prototype.destroy = function() {
        r.prototype.destroy.call(this),
        this.unbind()
    }
    ,
    c.prototype.toggle = function(t) {
        this.disabled = !t,
        this.updateCursor()
    }
    ,
    c.prototype.end = function() {
        this.swiping && (this.endSwipe(),
        this.axe = null)
    }
    ,
    c.prototype.updateCursor = function() {
        var t = !Modernizr.touchevents && !!this.settings.disableMouse;
        this.$handler.toggleClass("is-grabbable", !this.disabled && !t)
    }
    ,
    c.prototype.bind = function() {
        this.view.off(".swipe"),
        this.settings.disableMouse || (this.$handler.on("mousedown.swipe", this.onMouseDown),
        this.view.on("mousemove.swipe", this.onMouseMove).on("mouseup.swipe", this.onMouseUp).on("mouseleave.swipe", this.onMouseUp)),
        this.settings.disableTouch || (this.$handler.on("touchstart.swipe", this.onTouchStart),
        this.view.on("touchmove.swipe", this.onTouchMove),
        $doc.off(".swipe" + this.uid).on("touchend.swipe" + this.uid, this.onTouchEnd))
    }
    ,
    c.prototype.unbind = function() {
        this.view.off(".swipe"),
        $doc.off(".swipe" + this.uid)
    }
    ,
    c.prototype.startSwipe = function() {
        this.disabled || (this.swiping = !0,
        this.dragged = !1,
        this.startX = 0,
        this.startY = 0,
        this.axe = null,
        this.trigger(i.START, {
            target: this.view[0],
            x: this.mouse.startX - this.view.offset().left,
            y: this.mouse.startY - this.view.offset().top,
            instance: this
        }),
        this.$handler.addClass("is-grabbed"))
    }
    ,
    c.prototype.updateSwipe = function() {
        var t = this.startX + this.mouse.x - this.mouse.startX
          , e = this.startY + this.mouse.y - this.mouse.startY;
        this.x = t,
        this.y = e,
        this.trigger(i.UPDATE, {
            target: this.view[0],
            deltaX: this.settings.horizontal ? t : 0,
            deltaY: this.settings.vertical ? e : 0,
            x: this.mouse.x,
            y: this.mouse.y,
            instance: this
        }),
        this.$handler.addClass("is-dragged")
    }
    ,
    c.prototype.endSwipe = function() {
        this.swiping = !1;
        var t = this.axe === o.HORIZONTAL ? this.x < this.startX ? s.LEFT : s.RIGHT : this.y < this.startY ? s.UP : s.DOWN;
        t = this.axe === o.HORIZONTAL && Math.abs(this.mouse.x - this.mouse.startX) < this.settings.minimum ? s.NONE : t,
        t = this.axe === o.VERTICAL && Math.abs(this.mouse.y - this.mouse.startY) < this.settings.minimum ? s.NONE : t,
        t = null === this.axe ? s.NONE : t,
        t = (t = this.axe === o.HORIZONTAL && !this.settings.horizontal || this.axe === o.VERTICAL && !this.settings.vertical ? s.NONE : t) !== s.NONE || this.dragged ? t : s.CLICK,
        this.trigger(i.END, {
            target: this.view[0],
            direction: t,
            instance: this
        }),
        this.$handler.removeClass("is-grabbed is-dragged")
    }
    ,
    c);
    function c(t, e) {
        var n = r.call(this, t, e) || this;
        return n.view = t,
        n.options = e,
        n.resize = function() {
            var t = window.scrollY ? window.scrollY : $window.scrollTop();
            n.offsetX = n.view.offset().left,
            n.offsetY = n.view.offset().top - t
        }
        ,
        n.onMouseDown = function(t) {
            t.which && 3 === t.which || t.button && 2 === t.button || (t.preventDefault(),
            n.mouse.startX = (t.clientX || t.pageX) - n.offsetX,
            n.mouse.startY = (t.clientY || t.pageY) - n.offsetY,
            n.startSwipe())
        }
        ,
        n.onMouseMove = function(t) {
            if (t.preventDefault(),
            n.swiping) {
                n.mouse.x = (t.clientX || t.pageX) - n.offsetX,
                n.mouse.y = (t.clientY || t.pageY) - n.offsetY;
                var e = Math.abs(n.mouse.x - n.mouse.startX)
                  , i = Math.abs(n.mouse.y - n.mouse.startY);
                !n.axe && (12 < e || 12 < i) && (n.axe = i < e ? o.HORIZONTAL : o.VERTICAL),
                (12 < e || 12 < i) && (n.dragged = !0),
                (n.axe === o.HORIZONTAL && n.settings.horizontal || n.axe === o.VERTICAL && n.settings.vertical) && (t.preventDefault(),
                n.updateSwipe()),
                n.view.find("a").css({
                    "pointer-events": "none"
                })
            }
        }
        ,
        n.onMouseUp = function(t) {
            n.swiping && (t.preventDefault(),
            t.stopPropagation(),
            n.endSwipe()),
            n.view.find("a").css({
                "pointer-events": ""
            }),
            n.axe = null
        }
        ,
        n.onTouchStart = function(t) {
            n.mouse.startX = t.originalEvent.touches[0].pageX,
            n.mouse.startY = t.originalEvent.touches[0].pageY,
            n.startSwipe()
        }
        ,
        n.onTouchMove = function(t) {
            if (n.swiping) {
                n.mouse.x = t.originalEvent.touches[0].pageX,
                n.mouse.y = t.originalEvent.touches[0].pageY;
                var e = Math.abs(n.mouse.x - n.mouse.startX)
                  , i = Math.abs(n.mouse.y - n.mouse.startY);
                !n.axe && (12 < e || 12 < i) && (n.axe = i < e ? o.HORIZONTAL : o.VERTICAL),
                (12 < e || 12 < i) && (n.dragged = !0),
                n.axe === o.HORIZONTAL && n.settings.horizontal || n.axe === o.VERTICAL && n.settings.vertical ? (t.preventDefault(),
                n.updateSwipe()) : n.axe && (n.swiping = !1)
            }
        }
        ,
        n.onTouchEnd = function(t) {
            n.swiping && n.endSwipe(),
            n.dragged && t.preventDefault(),
            n.axe = null
        }
        ,
        n.settings = $.extend({
            horizontal: !0,
            vertical: !1,
            minimum: 80,
            disableMouse: !1,
            disableTouch: !1,
            handler: null
        }, e || {}),
        n.mouse = {
            x: 0,
            y: 0
        },
        n.deltaX = 0,
        n.deltaY = 0,
        n.x = 0,
        n.y = 0,
        n.startX = 0,
        n.startY = 0,
        n.offsetX = 0,
        n.offsetY = 0,
        n.dragged = !1,
        n.swiping = !1,
        n.disabled = !1,
        n.$handler = n.settings.handler ? $(n.settings.handler) : n.view,
        n.updateCursor(),
        n.uid = Utils.generateUID(),
        n.bind(),
        n
    }
    t.Swipe = l
}(Components = Components || {}),
function(t) {
    var e, i;
    (i = e = t.MediaState || (t.MediaState = {}))[i.HAVE_NOTHING = 0] = "HAVE_NOTHING",
    i[i.HAVE_METADATA = 1] = "HAVE_METADATA",
    i[i.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA",
    i[i.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA",
    i[i.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA";
    var n, o = (n = t.Player,
    __extends(s, n),
    s.prototype.preload = function() {
        var i = this
          , n = Project.browser.safari ? e.HAVE_METADATA : e.HAVE_ENOUGH_DATA;
        return new Promise(function(t, e) {
            Project.browser.mobile || !i.settings.autoplay ? t(!0) : i.media.readyState >= n ? t(!0) : i.mediaEl.on("loadeddata", function() {
                i.media.readyState >= n && t(!0)
            })
        }
        )
    }
    ,
    s.prototype.load = function(n) {
        var o = this;
        return new Promise(function(t, e) {
            var i = Project.browser.mobile && n.src_mobile && "" !== n.src_mobile ? n.src_mobile : n.src;
            i = o.decodeURL(i),
            o.media.pause(),
            o.media.src = i,
            o.view.removeClass("is-ended is-started is-playing"),
            o.playlist.hide(),
            o.media.load(),
            o.resetTimeline(),
            o.settings.autoplay && o.isShown && o.play(),
            o.settings.ratio = n.ratio,
            o.settings.ratio_mobile = n.ratio_mobile,
            o.resize(),
            o.settings.poster = n.poster,
            o.settings.poster_mobile = n.poster_mobile,
            o.loadPoster(),
            t(!0)
        }
        )
    }
    ,
    s.prototype.animateIn = function() {
        this.isShown = !0,
        this.settings.autoplay && this.play(),
        n.prototype.animateIn.call(this)
    }
    ,
    s.prototype.animateOut = function() {
        var i = this;
        return new Promise(function(t, e) {
            i.pause(),
            t()
        }
        )
    }
    ,
    s.prototype.play = function() {
        var e = this
          , t = this.media.play();
        setTimeout(function() {
            e.view.addClass("should-play")
        }, 1e3),
        void 0 !== t && t.then(function() {
            e.view.removeClass("autoplay-failed")
        }).catch(function(t) {
            e.view.addClass("autoplay-failed")
        })
    }
    ,
    s.prototype.pause = function() {
        !this.view.hasClass("is-paused") && this.view.hasClass("is-playing") && this.media.pause()
    }
    ,
    s.prototype.toggle = function() {
        this.media.paused ? (t.Player.pauseAll(),
        this.media.play(),
        this.playlist.hide()) : this.media.pause()
    }
    ,
    s.prototype.unload = function() {
        this.media && (this.media.pause(),
        this.media.src = "",
        this.media.load())
    }
    ,
    s.prototype.seek = function(t) {
        this.media.currentTime = this.media.duration * t
    }
    ,
    s.prototype.setVolume = function(t) {
        this.media.volume = t,
        this.updateVolume(this.media.volume)
    }
    ,
    s.prototype.toggleMute = function() {
        this.controls.volume.hasClass("volume-on") ? this.controls.volume.removeClass("volume-on") : this.controls.volume.addClass("volume-on"),
        this.media.volume = 0 < this.media.volume ? 0 : 1,
        this.updateVolume(this.media.volume)
    }
    ,
    s.prototype.createPlayer = function() {}
    ,
    s.prototype.isPaused = function() {
        return this.media.paused
    }
    ,
    s.prototype.setup = function() {
        if (this.mediaEl = this.view.find("audio, video"),
        this.mediaEl[0]) {
            this.media = this.mediaEl[0],
            this.isAudio = "AUDIO" === this.media.tagName,
            this.settings.ratio = parseFloat(this.settings.ratio + ""),
            this.settings.ratio_mobile = parseFloat(this.settings.ratio_mobile + ""),
            this.mediaEl.data("src-mobile") && (this.settings.src_mobile = this.mediaEl.data("src-mobile")),
            this.mediaEl.data("src") && (this.settings.src = this.mediaEl.data("src")),
            this.settings.src_mobile && "" !== this.settings.src_mobile || (delete this.settings.ratio_mobile,
            delete this.settings.src_mobile),
            Project.browser.mobile && this.settings.src_mobile && this.settings.src_mobile !== this.media.src ? (this.media.src = this.decodeURL(this.settings.src_mobile),
            this.media.load()) : !Project.browser.mobile && this.settings.src && this.settings.src !== this.media.src && (this.media.src = this.decodeURL(this.settings.src),
            this.media.load()),
            this.settings.volume && (this.media.volume = this.settings.volume),
            (this.media.autoplay || this.settings.autoplay) && (this.settings.autoplay = !0,
            this.media.autoplay = !1),
            this.media.loop && (this.settings.loop = !0),
            this.settings.loop && (this.media.loop = !0);
            var t = this.media;
            t.poster && !this.settings.poster && (this.settings.poster = t.poster,
            this.media.controls && (t.poster = "")),
            (this.media.controls || this.settings.controls) && (this.buildUI(),
            this.media.controls = !1,
            $(this.media).removeAttr("controls")),
            this.updateVolume(this.media.volume),
            this.bind(),
            this.resize(),
            this.settings.autoplay && this.pause()
        }
    }
    ,
    s.prototype.bind = function() {
        this.mediaEl.off(".player").on("click.player", this.onToggleClick),
        n.prototype.bind.call(this)
    }
    ,
    s.prototype.bindPlayer = function() {
        var e = this;
        this.mediaEl.on("durationchange updateMediaState", function() {
            return e.onDurationChange()
        }).on("progress updateMediaState", function() {
            return e.onProgress()
        }).on("timeupdate", function() {
            return e.onTimeupdate()
        }).on("play", function() {
            return e.onPlay()
        }).on("canplay", function() {
            return e.onCanplay()
        }).on("playing", function() {
            return e.onPlaying()
        }).on("pause", function() {
            return e.onPause()
        }).on("waiting", function() {
            return e.onWaiting()
        }).on("ended", function() {
            return e.onEnd()
        }).on("error", function(t) {
            return e.onError(t)
        }),
        screenfull.enabled && document.addEventListener(screenfull.raw.fullscreenchange, function() {
            e.view.toggleClass("is-fullscreen", screenfull.isFullscreen)
        })
    }
    ,
    s.prototype.unbindPlayer = function() {
        this.mediaEl.off()
    }
    ,
    s.prototype.onDurationChange = function() {
        var t = this.media.duration;
        t && this.updateTimeline(null, null, t)
    }
    ,
    s.prototype.onProgress = function() {
        this.updateLoadProgress()
    }
    ,
    s.prototype.onTimeupdate = function() {
        var t = this.media.currentTime;
        t && !this.scrubbing && this.updateTimeline(this.media.duration, null, t)
    }
    ,
    s.prototype.updateLoadProgress = function() {
        var t = this.media.buffered
          , e = t && t.length ? t.end(0) : 0;
        this.updateTimeline(this.media.duration, e, null)
    }
    ,
    s.prototype.decodeURL = function(t) {
        return /\.mp4$/.test(t) ? t : function(e) {
            try {
                var t = window.atob(e);
                return /^wq|x@$/g.test(t) ? t.replace(/^wq|x@$/g, "") : e
            } catch (t) {
                return e
            }
        }(t)
    }
    ,
    s);
    function s(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i.isShown = !1,
        i.view.data("Video", i),
        i
    }
    t.Video = o
}(Components = Components || {}),
function(t) {
    var n, e = (n = t.Player,
    __extends(o, n),
    o.prototype.play = function() {
        this.player.playVideo()
    }
    ,
    o.prototype.pause = function() {
        window.clearTimeout(this.interval),
        this.player && "function" == typeof this.player.pauseVideo && (1 !== this.currentState && 3 !== this.currentState || this.player.pauseVideo())
    }
    ,
    o.prototype.toggle = function(t) {
        switch (t && (t.preventDefault(),
        t.stopPropagation()),
        this.currentState) {
        case 0:
        case -1:
        case 2:
        case 5:
            this.play();
            break;
        case 1:
        case 3:
            this.pause();
            break;
        default:
            this.play()
        }
    }
    ,
    o.prototype.seek = function(t) {
        var e = parseInt("" + this.player.getDuration() * t, 10);
        this.player.seekTo(e, !0),
        this.play()
    }
    ,
    o.prototype.setVolume = function(t) {
        this.player.setVolume(100 * t),
        this.updateVolume(t)
    }
    ,
    o.prototype.toggleMute = function() {
        var t = this.player.isMuted() || 0 === this.player.getVolume() ? 100 : 0;
        this.player.setVolume(t),
        this.updateVolume(t)
    }
    ,
    o.prototype.createPlayer = function() {
        var e = this;
        void 0 !== this.settings.id && (this.timeoutCreateYoutubePlayer = setTimeout(function() {
            var t = {
                autohide: 1,
                autoplay: e.settings.autoplay ? 1 : 0,
                cc_load_policy: 0,
                controls: 0,
                disablekb: 1,
                enablejsapi: 1,
                fs: 0,
                iv_load_policy: 3,
                loop: e.settings.loop ? 1 : 0,
                modestbranding: 1,
                origin: window.location.origin,
                playsinline: 1,
                rel: 0,
                showinfo: 0
            };
            Project.browser.mobile && (t.autoplay = 0,
            e.isNative = !0),
            e.player = new YT.Player(e.id,{
                videoId: e.settings.id,
                width: e.settings.width,
                height: e.settings.height,
                playerVars: t,
                events: {
                    onReady: function() {
                        return e.onPlayerReady()
                    },
                    onStateChange: function(t) {
                        return e.onPlayerStateChange(t)
                    }
                }
            })
        }, 300))
    }
    ,
    o.prototype.preload = function() {
        return Promise.resolve()
    }
    ,
    o.prototype.load = function(t) {
        return this.player.loadVideoById({
            videoId: t.id
        })
    }
    ,
    o.prototype.destroy = function() {
        o.allYoutubeInstances.splice(o.allYoutubeInstances.indexOf(this), 1),
        n.prototype.destroy.call(this)
    }
    ,
    o.prototype.unload = function() {
        this.player && ("function" == typeof this.player.stopVideo && this.player.stopVideo(),
        "function" == typeof this.player.clearVideo && this.player.clearVideo(),
        "function" == typeof this.player.destroy && this.player.destroy())
    }
    ,
    o.prototype.isPaused = function() {
        return this.player && "function" == typeof this.player.getPlayerState && 1 !== this.player.getPlayerState() && 3 !== this.player.getPlayerState()
    }
    ,
    o.prototype.setup = function() {
        var t = this;
        if (this.view.find(".youtube")[0] || this.view.append('<div class="youtube">'),
        this.videoEl = this.view.find(".youtube"),
        this.id = "youtube-" + this.uid,
        this.videoEl.attr("id", this.id),
        Project.browser.mobile) {
            if ("iframe" === this.videoEl[0].nodeName) {
                var e = this.videoEl.attr("src");
                e = e.split("?")[0] + "?showinfo=0&controls=0&rel=0",
                this.videoEl.attr("src", e)
            }
            this.view.addClass("is-native"),
            this.settings.autoplay = !1,
            this.isNative = !0
        }
        this.settings.poster = this.settings.poster || "//img.youtube.com/vi/" + this.settings.id + "/maxresdefault.jpg",
        "undefined" == typeof YT || void 0 === YT.Player ? (window.onYouTubePlayerAPIReady = function() {
            return t.onYouTubeIframeAPIReady()
        }
        ,
        $.getScript("//www.youtube.com/iframe_api")) : this.createPlayer(),
        this.buildUI(),
        this.resize()
    }
    ,
    o.prototype.bindPlayer = function() {
        var t = this;
        screenfull.enabled && document.addEventListener(screenfull.raw.fullscreenchange, function() {
            t.view.toggleClass("is-fullscreen", screenfull.isFullscreen)
        })
    }
    ,
    o.prototype.unbindPlayer = function() {}
    ,
    o.prototype.onPlay = function() {
        var t = this;
        n.prototype.onPlay.call(this),
        window.clearTimeout(this.interval),
        this.interval = setInterval(function() {
            t.onDurationChange(),
            t.onProgress(),
            t.onTimeupdate()
        }, 100)
    }
    ,
    o.prototype.onDurationChange = function() {
        var t = this.player.getDuration();
        t && this.controls.duration.text(Utils.parseToTime(t))
    }
    ,
    o.prototype.onProgress = function() {
        var t = this.player.getVideoLoadedFraction();
        this.controls.loaded.width(100 * t + "%")
    }
    ,
    o.prototype.onTimeupdate = function() {
        var t = this.player.getCurrentTime();
        t && (this.controls.time.text(Utils.parseToTime(t)),
        this.controls.progress.width(t / this.player.getDuration() * 100 + "%"))
    }
    ,
    o.prototype.onEnd = function() {
        n.prototype.onEnd.call(this),
        window.clearTimeout(this.interval)
    }
    ,
    o.prototype.onYouTubeIframeAPIReady = function() {
        o.allYoutubeInstances.forEach(function(t) {
            return t.createPlayer()
        })
    }
    ,
    o.allYoutubeInstances = [],
    o);
    function o(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i.isNative = !1,
        i.currentState = -1,
        i.onPlayerReady = function() {
            i.bind(),
            i.resize()
        }
        ,
        i.onPlayerStateChange = function(t) {
            var e = i.player.getPlayerState();
            switch (e) {
            case -1:
                break;
            case 0:
                i.onEnd();
                break;
            case 1:
                i.onCanplay(),
                i.onPlay(),
                i.onPlaying();
                break;
            case 2:
                i.onPause();
                break;
            case 3:
                i.onWaiting()
            }
            i.currentState = e
        }
        ,
        o.allYoutubeInstances.push(i),
        i
    }
    t.Youtube = e
}(Components = Components || {}),
function(t) {
    var n, e = (n = t.Video,
    __extends(i, n),
    i.prototype.bind = function() {
        var e = this;
        n.prototype.bind.call(this),
        this.$speaker && this.$speaker.on("click", function(t) {
            return e.onVolumeAudioClick(t)
        })
    }
    ,
    i.prototype.onTimeupdate = function() {
        n.prototype.onTimeupdate.call(this);
        var t = this.media.currentTime / this.wavesurfer.getDuration();
        this.wavesurfer.seekAndCenter(t)
    }
    ,
    i.prototype.initPlugin = function() {
        this.wavesurfer = WaveSurfer.create({
            container: this.containerClass,
            waveColor: "#000",
            progressColor: "#FD2B2B",
            cursorWidth: 0,
            height: this.containerHeight,
            maxCanvasWidth: this.containerWidth,
            barHeight: 2,
            barWidth: 3,
            barGap: 2
        }),
        this.wavesurfer.load(this.src),
        this.view.find(this.containerClass).children("wave").css("marginTop", "2px")
    }
    ,
    i);
    function i(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i.src = i.view.find("audio").attr("src"),
        i.containerClass = "." + i.view.find(".js-player-scrubber")[0].classList[1],
        i.containerHeight = i.view.find(i.containerClass).height(),
        i.containerWidth = i.view.find(i.containerClass).width(),
        i.$speaker = i.view.parent().parent().find(".js-speaker"),
        i.bind(),
        i.initPlugin(),
        i
    }
    t.Audio = e
}(Components = Components || {}),
function(t) {
    var n, e = (n = t.Component,
    __extends(i, n),
    i.prototype.bind = function() {
        this.$nav.on("click", this.onArrowClick)
    }
    ,
    i.prototype.collectCounterWidths = function() {
        var t = 0;
        this.itemsWidth = [];
        for (var e = 0; e < this.$images.length; e++)
            t = e < 1 ? this.$images[e].clientHeight - this.$images[e].clientHeight : this.itemsWidth[e - 1] - this.$images[e - 1].clientHeight,
            this.itemsWidth.push(t)
    }
    ,
    i.prototype.update = function() {
        var t = this;
        Project.breakpoint.desktop ? (this.$images.filter("[data-item=" + this.current + "]").addClass("is-active"),
        this.$captions.filter("[data-caption=" + this.current + "]").addClass("is-active"),
        this.$images.css({
            zIndex: "1"
        }),
        TweenMax.set(this.$images, {
            opacity: 0,
            zIndex: 1
        }),
        TweenMax.set(this.$images.filter("[data-item=" + this.current + "]"), {
            opacity: 1,
            zIndex: 2
        })) : (this.$images.removeClass("is-active"),
        setTimeout(function() {
            t.collectCounterWidths()
        }, 500))
    }
    ,
    i.prototype.go = function(t) {
        this.goTo(this.current + t)
    }
    ,
    i.prototype.goTo = function(t) {
        this.previous = this.current,
        this.current = t < 1 ? this.amount : t > this.amount ? 1 : t,
        this.animateCounter(),
        this.animateItem(this.current, this.previous),
        this.pauseVideo()
    }
    ,
    i.prototype.animateItem = function(t, e) {
        TweenMax.to(this.view.find("[data-item=" + t + "]"), .5, {
            opacity: 1,
            zIndex: 2
        }),
        TweenMax.to(this.view.find("[data-item=" + e + "]"), .5, {
            opacity: 0,
            zIndex: -1
        })
    }
    ,
    i.prototype.updateCounter = function() {
        for (var t, e = this.amount < 10 ? "0" + this.amount : this.amount, i = 0; i < this.amount; i++)
            t = i <= 8 ? "0" + (i + 1) : i + 1,
            this.$counterWrapper.find(".js-counter").length < this.amount && (this.$counterWrapper.append('<span class="js-counter"></span>'),
            this.$counterWrapper.find("span").eq(i).text(t + "/" + e));
        this.$counter = this.view.find(".js-counter"),
        this.$counterWrapper.css({
            width: this.$counter.outerWidth(!0) * this.amount,
            display: "flex"
        })
    }
    ,
    i.prototype.animateCounter = function() {
        var t = -this.$counter.outerWidth(!0) * (this.current - 1);
        TweenMax.to(this.$counterWrapper, .5, {
            x: t,
            ease: Sine.easeOut
        })
    }
    ,
    i.prototype.checkPhotoAmount = function() {
        this.amount < 2 && this.$nav.hide()
    }
    ,
    i.prototype.pauseVideo = function() {
        this.videos.forEach(function(t) {
            t.pause()
        })
    }
    ,
    i);
    function i(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i.options = e,
        i.videos = [],
        i.current = 1,
        i.resize = function(t, e, i, n) {}
        ,
        i.onArrowClick = function(t) {
            t.preventDefault();
            var e = $(t.currentTarget).hasClass("js-prev") ? -1 : 1;
            i.go(e)
        }
        ,
        i.$images = i.view.find("[data-item]"),
        i.$captions = i.view.find("[data-caption]"),
        i.$nav = i.view.find(".js-nav"),
        i.$wrapper = i.view.find(".js-gallery"),
        i.$counterWrapper = i.view.find(".js-counter-content"),
        i.counterW = i.$counterWrapper.parent().outerWidth(),
        i.amount = i.view.find("[data-item]").length,
        setTimeout(function() {
            i.videos = i.view.find('[data-component="Video"]').toArray().map(function(t) {
                return $(t).data("Video")
            })
        }, 1),
        i.update(),
        i.updateCounter(),
        i.bind(),
        i.checkPhotoAmount(),
        i
    }
    t.Gallery = e
}(Components = Components || {}),
function(t) {
    var n, e = (n = t.Component,
    __extends(i, n),
    i.prototype.bind = function() {
        this.$cells.off(".cell").on("mouseenter.cell", this.onMouseenter).on("mouseleave.cell", this.onMouseleave),
        $(".js-arr[rel]").off(".calendar").on("click.calendar", this.onArrowClick),
        $(".js-next-month").off(".calendar").on("click.calendar", this.onNextMonthClick)
    }
    ,
    i.prototype.markRowCell = function(t) {
        t.parent().addClass("is-mouseenter").siblings().removeClass("is-mouseenter"),
        t.addClass("hover").siblings().removeClass("hover")
    }
    ,
    i.prototype.unMarkRowCell = function(t) {
        t.parent().removeClass("is-mouseenter"),
        t.removeClass("hover")
    }
    ,
    i);
    function i(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i.options = e,
        i.onMouseenter = function(t) {
            i.markRowCell($(t.currentTarget))
        }
        ,
        i.onMouseleave = function(t) {
            i.unMarkRowCell($(t.currentTarget))
        }
        ,
        i.onArrowClick = function(t) {
            var e = "next" === $(t.currentTarget).attr("rel") ? -1 : 1;
            TweenMax.to(i.$month.children(), .4, {
                yPercent: 100 * e,
                ease: Project.easing
            })
        }
        ,
        i.onNextMonthClick = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            $('.js-arr[rel="next"]').trigger("click")
        }
        ,
        i.$cells = i.view.find(".js-cal-cell"),
        i.$month = $("#current-month"),
        i.bind(),
        i
    }
    t.Calendar = e
}(Components = Components || {}),
function(t) {
    var n, e = (n = t.Gradient,
    __extends(i, n),
    i.prototype.scroll = function() {
        n.prototype.scroll.call(this),
        (new TimelineLite).to(this.position, .3, {
            scale: .85
        }).to(this.position, 3, {
            scale: 1
        });
        var t = window.scrollY ? window.scrollY : $window.scrollTop();
        TweenMax.to(this.position, .3, {
            scrollY: .15 * -t,
            ease: Sine.easeOut
        })
    }
    ,
    i.prototype.animateIn = function() {
        var i = this;
        return new Promise(function(t, e) {
            TweenMax.fromTo(i.position, .7, {
                scale: 0
            }, {
                scale: 1,
                ease: Project.easing,
                onComplete: t
            })
        }
        )
    }
    ,
    i.prototype.addMask = function() {
        var t = new PIXI.Graphics
          , e = .5 * this.view.width();
        this.stage.addChild(t),
        t.beginFill(0),
        t.lineStyle(0),
        t.drawCircle(e, e, e),
        t.endFill(),
        this.container.mask = t,
        this.mask = t
    }
    ,
    i);
    function i(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i.options = e,
        i.move = function() {
            var t = .5 * -i.settings.move + Math.random() * i.settings.move
              , e = .5 * -i.settings.move + Math.random() * i.settings.move;
            TweenMax.to(i.position, 3, {
                shiftX: t,
                shiftY: e,
                ease: Sine.easeOut,
                onComplete: i.move,
                onUpdate: i.onUpdatePosition
            })
        }
        ,
        i.onUpdatePosition = function() {
            i.container && (TweenMax.set(i.view, {
                x: i.position.shiftX,
                y: i.position.shiftY + i.position.scrollY
            }),
            i.container.mask.scale.set(i.position.scale, i.position.scale))
        }
        ,
        i.settings = $.extend(i.settings, {
            move: 100
        }, e || {}),
        i.position = {
            scrollY: 0,
            scale: 0
        },
        i.addMask(),
        i.move(),
        i
    }
    t.Circle = e
}(Components = Components || {}),
function(t) {
    var s = (e.PROGRESS = "progress",
    e.COMPLETE = "complete",
    e.CHANGE = "append",
    e);
    function e() {}
    t.PageEvents = s;
    var n, i = (n = Project.Handler,
    __extends(o, n),
    o.prototype.buildComponents = function(t) {
        for (var e = t.length - 1; 0 <= e; e--) {
            var i = t.eq(e)
              , n = i.data("component");
            if (i.closest('[aria-hidden="true"]').length < 1 && void 0 !== Components[n]) {
                var o = i.data("options")
                  , s = new Components[n](i,o);
                this.components.push(s),
                s.on(Components.ComponentEvents.CHANGE, this.onComponentChange)
            }
        }
    }
    ,
    o.prototype.preload = function() {
        for (var t = this, e = this.view.find("img.preload").toArray().map(function(t) {
            return {
                src: t.currentSrc || t.src,
                element: t
            }
        }), i = 0, n = this.components; i < n.length; i++) {
            var o = n[i];
            e = e.concat(o.preloadImages())
        }
        return Utils.preloadImages(e).then(function() {
            t.trigger(s.COMPLETE)
        })
    }
    ,
    o.prototype.onState = function() {
        for (var t = !1, e = 0, i = this.components; e < i.length; e++) {
            var n = i[e].onState();
            !t && n && (t = !0)
        }
        return t
    }
    ,
    o.prototype.animateFrame = function() {
        this.callAll("animateFrame")
    }
    ,
    o.prototype.animateIn = function(t) {
        for (var e = 0; e < this.components.length; ++e)
            this.components[e].animateIn(e, t);
        TweenMax.fromTo(this.view, .25, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            clearProps: "transform"
        })
    }
    ,
    o.prototype.animateOut = function() {
        var i = this
          , n = new Promise(function(t, e) {
            TweenMax.to(i.view, .25, {
                onComplete: function() {
                    t()
                },
                opacity: 0,
                y: -20
            })
        }
        )
          , o = this.components.map(function(t) {
            return t.animateOut()
        });
        return new Promise(function(e, t) {
            var i = o.concat(n);
            Promise.all(i).then(function(t) {
                e()
            })
        }
        )
    }
    ,
    o.prototype.turnOff = function() {
        this.callAll("turnOff")
    }
    ,
    o.prototype.turnOn = function() {
        this.callAll("turnOn")
    }
    ,
    o.prototype.resize = function(t, e, i, n) {
        this.callAll("resize", t, e, i, n)
    }
    ,
    o.prototype.destroy = function() {
        this.callAll("destroy"),
        this.components = [],
        TweenMax.killTweensOf(this.view),
        this.view = null,
        n.prototype.destroy.call(this)
    }
    ,
    o.prototype.callAll = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        for (var n = 0, o = this.components; n < o.length; n++) {
            var s = o[n];
            "function" == typeof s[t] && s[t].apply(s, [].slice.call(arguments, 1))
        }
    }
    ,
    o);
    function o(t, e) {
        var i = n.call(this) || this;
        return i.view = t,
        i.components = [],
        i.onComponentChange = function(t) {
            i.buildComponents(t.filter("[data-component]").add(t.find("[data-component]"))),
            i.trigger(s.CHANGE, t)
        }
        ,
        TweenMax.set(i.view, {
            opacity: 0
        }),
        i.components = [],
        i.buildComponents(i.view.parent().find("[data-component]")),
        i
    }
    t.Page = i
}(Pages = Pages || {}),
function(s) {
    function t() {}
    s.IPanelOptions = t;
    var a = (e.TOP = "top",
    e.RIGHT = "right",
    e.BOTTOM = "bottom",
    e.LEFT = "left",
    e);
    function e() {}
    s.PanelPositions = a;
    var i, n = (i = s.Handler,
    __extends(o, i),
    o.prototype.onState = function() {
        this.shown && this.hide()
    }
    ,
    o.prototype.toggle = function(t, e, i) {
        var n = this;
        void 0 !== t ? !t || this.shown && !i ? t || !this.shown && !i || this.hide(e) : this.show(e) : (this.shown ? function(t) {
            return n.hide(t)
        }
        : function(t) {
            return n.show(t)
        }
        )(e)
    }
    ,
    o.prototype.animateFrame = function() {
        this.gradient.animateFrame()
    }
    ,
    o.prototype.bind = function() {
        this.$toggle.off(".panel").on("click.panel", this.onToggleClickHandler),
        $doc.off(".panel" + this.uid).on("click.panel" + this.uid, this.onClickAnywhereHandler).on("keydown.panel" + this.uid, this.onKeyDown)
    }
    ,
    o.prototype.unbind = function() {
        this.$toggle.off(".filter"),
        $doc.off(".filter")
    }
    ,
    o.prototype.show = function(t) {
        var e = this;
        this.shown = !0,
        this.view.show(),
        this.$toggle.addClass("is-shown"),
        this.view.find("input[type=search]")[0] ? this.view.find("input[type=search]").first().focus() : this.view.find("button").first().focus(),
        this.settings.position === a.TOP && 0 < (window.scrollY || $window.scrollTop()) && this.view.css({
            zIndex: 1e3
        }),
        TweenMax.killTweensOf(this.view),
        TweenMax.to(this.view, t ? 0 : .4, {
            x: 0,
            y: 0,
            opacity: 1,
            ease: s.easing,
            onComplete: function() {
                e.view.css({
                    zIndex: 1e3
                }),
                e.gradient.resize(),
                $window.off(".panel").on("scroll.panel", e.onScroll)
            }
        });
        var i = this.settings.position
          , n = i === a.LEFT ? this.width : i === a.RIGHT ? -this.width : 0
          , o = i === a.TOP ? this.height : i === a.BOTTOM ? -this.height : 0;
        i === a.BOTTOM && $body.css({
            height: $("#wrapper").outerHeight(!0)
        }),
        TweenMax.killTweensOf(this.$content),
        TweenMax.to(this.$content, t ? 0 : .4, {
            x: n,
            y: o,
            ease: s.easing,
            onComplete: function() {
                s.breakpoint.desktop || i === a.RIGHT && Utils.disableBodyScrolling(0)
            }
        }),
        TweenMax.staggerTo(this.$items, t ? 0 : .5, {
            opacity: 1,
            x: 0,
            ease: s.easing
        }, .01),
        this.gradient && (this.gradient.resize(),
        this.gradient.run()),
        this.iscroll && this.iscroll.refresh()
    }
    ,
    o.prototype.hide = function(t) {
        var e = this;
        $window.off(".panel"),
        this.settings.position === a.TOP && 0 !== (window.scrollY || $window.scrollTop()) || this.view.css({
            zIndex: ""
        }),
        this.view.find(":input").blur();
        var i = this.settings.position
          , n = i === a.LEFT ? -this.width : i === a.RIGHT ? this.width : 0
          , o = i === a.TOP ? -this.height : i === a.BOTTOM ? this.height : 0;
        TweenMax.killTweensOf(this.view),
        TweenMax.to(this.view, t ? 0 : .4, {
            x: .5 * n,
            y: .5 * o,
            opacity: 0,
            ease: s.easing,
            onComplete: function() {
                $body.css({
                    height: ""
                }),
                i === a.RIGHT || s.breakpoint.desktop || e.view.hide(),
                e.view.css({
                    zIndex: ""
                }),
                e.shown = !1,
                e.view.hide()
            }
        }),
        TweenMax.killTweensOf(this.$content),
        TweenMax.to(this.$content, t ? 0 : .4, {
            x: 0,
            y: 0,
            ease: s.easing,
            clearProps: "x, y",
            onComplete: function() {
                e.shown = !1,
                e.gradient && e.gradient.stop(),
                s.breakpoint.desktop || i === a.RIGHT && Utils.enableBodyScrolling(0)
            }
        }),
        TweenMax.staggerTo(this.$items, t ? 0 : .2, {
            opacity: 0,
            x: 40,
            delay: t ? 0 : .4,
            ease: s.easing
        }, .01)
    }
    ,
    o.prototype.setIscroll = function() {
        var t = this.view.find(this.settings.scrollSelector)[0];
        t && (this.iscroll = new IScroll(t,{
            mouseWheel: !0,
            tap: !0,
            click: !1,
            scrollbars: !0,
            fadeScrollbars: !0,
            preventDefault: !1,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/
            }
        }))
    }
    ,
    o);
    function o(t, e) {
        var o = i.call(this) || this;
        return o.view = t,
        o.options = e,
        o.resize = function(t, e, i, n) {
            o.width = o.view.outerWidth(),
            o.height = o.view.outerHeight(),
            o.gradient && o.gradient.resize(),
            n && (o.view.show(),
            o.toggle(!1, !0),
            o.iscroll && o.iscroll.refresh(),
            o.view.hide())
        }
        ,
        o.onClickAnywhereHandler = function(t) {
            t.stopPropagation(),
            o.shown && $(t.target).closest(o.view).length <= 0 && o.hide()
        }
        ,
        o.onToggleClickHandler = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            o.toggle()
        }
        ,
        o.onKeyDown = function(t) {
            (t.keyCode || t.which) === Utils.keys.esc && o.shown && (t.preventDefault(),
            t.stopPropagation(),
            o.hide())
        }
        ,
        o.onScroll = function() {
            s.breakpoint.desktop && o.shown && o.hide()
        }
        ,
        o.uid = Utils.generateUID(),
        o.settings = $.extend({
            contentSelector: ".js-shift",
            scrollSelector: ".js-iscroll",
            position: a.RIGHT
        }, e || t.data("options") || {}),
        o.$toggle = $(o.settings.toggleSelector),
        o.$content = $(o.settings.contentSelector),
        o.width = o.view.width(),
        o.height = o.view.height(),
        o.gradient = new Components.Gradient(o.view,o.view.data("gradientOptions")),
        o.bind(),
        o.hide(),
        o.setIscroll(),
        o
    }
    s.Panel = n
}(Project = Project || {}),
function(t) {
    var n, e = (n = t.Panel,
    __extends(i, n),
    i.prototype.reload = function() {
        var t = $("[data-filters]").children()
          , e = $(this.settings.scrollSelector).children().first();
        0 < t.length ? (this.$toggle = $(this.settings.toggleSelector),
        this.bind(),
        e.html(""),
        t.clone(!0).appendTo(e),
        t.remove(),
        Widgets.All.bind(e),
        this.components = [],
        this.buildComponents(e.find("[data-component]")),
        this.iscroll && this.iscroll.refresh(),
        this.$items = this.view.find(".js-item")) : (this.unbind(),
        e.html(""))
    }
    ,
    i.prototype.animateFrame = function() {
        this.callAll("animateFrame"),
        this.gradient.animateFrame()
    }
    ,
    i.prototype.show = function(t) {
        n.prototype.show.call(this, t),
        $body.addClass("filters-open")
    }
    ,
    i.prototype.hide = function(t) {
        n.prototype.hide.call(this, t),
        $body.removeClass("filters-open")
    }
    ,
    i.prototype.buildComponents = function(t) {
        for (var e = t.length - 1; 0 <= e; e--) {
            var i = t.eq(e)
              , n = i.data("component");
            if (i.closest('[aria-hidden="true"]').length < 1 && void 0 !== Components[n]) {
                var o = i.data("options")
                  , s = new Components[n](i,o);
                this.components.push(s),
                s.on(Components.ComponentEvents.CHANGE, this.onComponentChange)
            }
        }
    }
    ,
    i.prototype.callAll = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        if (this.components)
            for (var n = 0, o = this.components; n < o.length; n++) {
                var s = o[n];
                "function" == typeof s[t] && s[t].apply(s, [].slice.call(arguments, 1))
            }
    }
    ,
    i);
    function i(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i.options = e,
        i.onComponentChange = function(t) {
            i.buildComponents(t.filter("[data-component]").add(t.find("[data-component]"))),
            i.trigger(Pages.PageEvents.CHANGE, t)
        }
        ,
        i
    }
    t.Filters = e
}(Project = Project || {}),
function(e) {
    var t = (i.prototype.onState = function() {
        this.hide()
    }
    ,
    i.prototype.animateFrame = function() {
        this.gradient.animateFrame()
    }
    ,
    i.prototype.build = function() {
        var o = this;
        this.cache = [],
        this.$items.each(function(t, e) {
            var i = $(e)
              , n = i.find("ul").clone(!0);
            i.toggleClass("has-submenu", 0 < n.length),
            n[0] && (o.$wrap.append(n),
            o.cache[t] = {
                $item: i,
                $submenu: n
            })
        }),
        this.gradient = new Components.Gradient(this.$wrap,this.$wrap.data("gradientOptions")),
        this.storeSizes()
    }
    ,
    i.prototype.bind = function() {
        this.$items.off(".nav").on("mouseenter.nav", this.onMouseenter).on("mouseleave.nav", this.onMouseleave),
        this.$card.off(".nav").on("mouseenter.nav", this.onCardMouseenter).on("mouseleave.nav", this.onCardMouseleave)
    }
    ,
    i.prototype.hide = function() {
        var t = this;
        this.$card.removeClass("is-shown"),
        this.$items.removeClass("has-submenu-open"),
        TweenMax.to(this.$card, .3, {
            height: 0,
            ease: e.easing,
            onComplete: function() {
                t.$card.hide(),
                t.shown = !1,
                t.gradient.pause()
            }
        })
    }
    ,
    i.prototype.show = function(t) {
        this.$card.show().addClass("is-shown"),
        this.cache[t].$item.addClass("has-submenu-open").siblings().removeClass("has-submenu-open"),
        this.currentIndex = t,
        this.gradient.play(),
        TweenMax.to(this.$card, this.shown ? .3 : 0, {
            x: this.cache[t].menuX,
            width: this.cache[t].width,
            ease: e.easing
        }),
        TweenMax.to(this.$card, .3, {
            height: this.cache[t].height,
            ease: e.easing
        }),
        TweenMax.to(this.$wrap, this.shown ? .3 : 0, {
            x: -this.cache[t].submenuX,
            ease: e.easing
        }),
        this.shown = !0
    }
    ,
    i.prototype.storeSizes = function() {
        var t = this;
        this.$card.css({
            width: "",
            height: "auto"
        }),
        setTimeout(function() {
            t.$card.show(),
            t.$card.height(),
            t.gradient.resize(),
            t.cache.forEach(function(t) {
                t.menuX = t.$item.position().left,
                t.submenuX = t.$submenu.position().left,
                t.height = t.$submenu.outerHeight(!0),
                t.width = t.$submenu.outerWidth(!0)
            }),
            t.$card.hide(),
            t.$card.css({
                height: 0
            })
        }, 100)
    }
    ,
    i);
    function i(t) {
        var e = this;
        this.view = t,
        this.resize = function() {
            e.storeSizes()
        }
        ,
        this.onMouseenter = function(t) {
            $(t.currentTarget).hasClass("has-submenu") ? e.show($(t.currentTarget).index()) : e.hide()
        }
        ,
        this.onMouseleave = function(t) {
            e.hide()
        }
        ,
        this.onCardMouseenter = function(t) {
            e.show(e.currentIndex)
        }
        ,
        this.onCardMouseleave = function(t) {
            e.hide()
        }
        ,
        this.$card = this.view.find(".js-nav-card"),
        this.$wrap = this.$card.children().first(),
        this.$items = this.view.find(".js-nav-item"),
        this.build(),
        this.bind()
    }
    e.Nav = t
}(Project = Project || {}),
function(p) {
    var t = (l.disable = function() {
        this.disabled = !0
    }
    ,
    l.enable = function() {
        this.disabled = !1
    }
    ,
    l.scrollToPath = function(t) {
        var e = $('[data-path="' + window.location.pathname + '"]');
        return !!e[0] && (l.scrollToElement(e, t),
        !0)
    }
    ,
    l.scrollToElement = function(t, e, i) {
        if (t[0])
            return l.animating = !0,
            this.scroll({
                y: t.offset().top - l.headerHeight + (i || 0),
                speed: e ? 0 : 1,
                animate: !e
            }).then(function() {
                l.animating = !1
            })
    }
    ,
    l.scrollTop = function(t) {
        return l.scroll({
            y: 0,
            speed: t ? 0 : .5,
            ease: Sine.easeOut
        })
    }
    ,
    l.scroll = function(s) {
        return s = $.extend({
            x: 0,
            y: 0,
            speed: 1.2,
            ease: Quad.easeInOut,
            animate: !0,
            relativeSpeed: !1
        }, s),
        l.obj = {
            x: Math.max(document.body.scrollLeft, window.pageXOffset),
            y: Math.max(document.body.scrollTop, window.pageYOffset)
        },
        new Promise(function(t, e) {
            var i = Math.max(Math.abs(s.y - l.obj.y));
            if (s.animate && 0 < s.speed && 1 < i) {
                var n = Math.min(i / $window.height(), 1.5)
                  , o = s.relativeSpeed ? s.speed * n : s.speed;
                TweenMax.killTweensOf(l.obj),
                TweenMax.to(l.obj, o, {
                    onUpdate: function() {
                        window.scrollTo(l.obj.x, l.obj.y)
                    },
                    x: s.x,
                    y: s.y,
                    ease: s.ease,
                    onComplete: t
                })
            } else
                window.scrollTo(s.x, s.y),
                t()
        }
        )
    }
    ,
    l.resetScrollCache = function(t) {
        l.instance.scrollCache[t] = 0
    }
    ,
    l.prototype.onState = function() {
        return !this.changingPath && l.scrollToPath()
    }
    ,
    l.prototype.destroy = function() {
        this.cache = [],
        $window.off(".scrolling")
    }
    ,
    l.prototype.load = function() {
        this.elements = $("[data-scroll]"),
        this.saveCache(),
        $body.imagesLoaded(this.saveCache),
        $window.off(".scrolling").on("scroll.scrolling", this.onScroll)
    }
    ,
    l.prototype.stop = function() {
        l.disable()
    }
    ,
    l.prototype.start = function() {
        l.enable(),
        l.instance.onScroll(!0)
    }
    ,
    l.prototype.scrollToCached = function() {
        l.scroll({
            y: this.scrollCache[window.location.pathname] || 0,
            speed: 0,
            animate: !1
        })
    }
    ,
    l.disabled = !1,
    l.animating = !1,
    l.isScrollingDown = !1,
    l);
    function l() {
        var u = this;
        this.callbacks = {
            hero: function(t, e, i, n, o, s) {
                u.settings.disableTouchDevices && Modernizr.touchevents || p.browser.ie || TweenMax.set(t.$el.children(), {
                    y: .5 * n
                })
            },
            parallax: function(t, e, i, n, o, s) {
                if (!(u.settings.disableTouchDevices && Modernizr.touchevents || p.browser.ie)) {
                    var a = Math.max(-1, Math.min(1, (t.top - n - .5 * o + .5 * t.height) / o * 2));
                    TweenMax.set(t.$el.children(), {
                        y: 40 * a
                    })
                }
            },
            relativeParallax: function(t, e, i, n, o, s) {
                if (!(u.settings.disableTouchDevices && Modernizr.touchevents || p.browser.ie)) {
                    t.childHeight = t.$child.height();
                    var a = t.$child.width() / t.$child.height()
                      , r = t.$child.parent().data("ratio");
                    .95 < a && a < 1.05 && 0 < r && (t.childHeight = t.$child.width() / r);
                    var l = t.childHeight - t.height
                      , c = Math.min(l, t.height + s)
                      , h = (n - t.top + o) / (o + t.height)
                      , d = Math.round((1 - h) * c);
                    d = c < (d = d < 0 ? 0 : d) ? c : d,
                    TweenMax.set(t.$child, {
                        y: Math.min(0, -d)
                    })
                }
            },
            infinite: function(t, e, i) {
                t.$el.is('[data-component="More"]') && t.$el.data("More").load()
            },
            gradient: function(t, e, i) {
                if (t.$el.is('[data-component="Gradient"], [data-component="Circle"]')) {
                    var n = t.$el.data("Gradient");
                    0 === e ? (n.run(),
                    n.scroll()) : n.stop()
                }
            },
            slide: function(t, e, i) {
                if (!(u.settings.disableTouchDevices && Modernizr.touchevents || p.browser.ie) && (!t.shown || 0 !== e && t.shown)) {
                    var n = 0 !== e ? 0 : .5
                      , o = 0 === e ? t.delay : 0;
                    t.shown = 0 === e,
                    TweenMax.killTweensOf(t.$el, {
                        y: !0
                    }),
                    TweenMax.to(t.$el, n, {
                        y: 80 * e,
                        ease: Sine.easeOut,
                        delay: o,
                        clearProps: 0 === e ? "transform" : ""
                    })
                }
            },
            deco: function(t, e, i, n, o, s) {
                u.callbacks.gradient(t, e, i),
                u.callbacks.relativeParallax(t, e, i, n, o, s)
            },
            tile: function(t, e, i, n, o, s) {
                u.callbacks.slide(t, e, i)
            }
        },
        this.scrollCache = {},
        this.resize = function(t, e, i) {
            l.windowHeight = e,
            l.headerHeight = $("#header").outerHeight(),
            u.saveCache()
        }
        ,
        this.saveCache = function() {
            if (u.elements) {
                for (var t = [], e = 0; e < u.elements.length; ++e) {
                    var i = u.elements.eq(e);
                    TweenMax.set(i.add(i.children().first()), {
                        clearProps: "y"
                    });
                    var n = i.data("scroll")
                      , o = i.offset().top
                      , s = i.outerHeight()
                      , a = i.data("delay") || 0
                      , r = i.data("title") || !1
                      , l = i.data("path") || !1
                      , c = {
                        $el: i,
                        role: n,
                        top: o,
                        height: s,
                        bottom: o + s,
                        path: l,
                        title: r,
                        $child: i.children().first(),
                        childHeight: i.children().first().height(),
                        children: {},
                        delay: a
                    };
                    t.push(c),
                    i.data("cache", e)
                }
                u.cache = t,
                u.onScroll()
            }
        }
        ,
        this.onScroll = function(t) {
            var e = window.scrollY ? window.scrollY : $window.scrollTop()
              , i = e + .33 * l.windowHeight
              , n = l.headerHeight
              , o = l.windowHeight
              , s = o + e;
            if (l.disabled || ($body.toggleClass("is-scrolled", 0 < e),
            $body.toggleClass("is-scrolling-down", e > u.lastY && 0 < e),
            $body.toggleClass("scrolled-window-height", o < e),
            $body.toggleClass("scrolled-header-height", l.headerHeight < e),
            p.Logo.toggle(0 === e)),
            p.Scrolling.isScrollingDown = e > u.lastY && 0 < e,
            u.lastY = e,
            u.cache && !l.disabled) {
                u.scrollCache[window.location.pathname] = e;
                for (var a = 0; a < u.cache.length; a++) {
                    var r = u.cache[a];
                    r.top < i && r.top + r.height > i ? (r.$el.addClass("is-in-center"),
                    r.path && !l.animating && (u.changingPath = !0,
                    p.PushStates.changePath(r.path, !0, r.title),
                    u.changingPath = !1)) : r.$el.removeClass("is-in-center"),
                    r.$el.toggleClass("is-past-fold", r.top < e + n),
                    r.$el.toggleClass("is-in-view", r.top < e + o && r.top + r.height >= e),
                    r.$el.toggleClass("is-aligned", r.top === e),
                    r.$el.toggleClass("is-past-bottom", r.top + r.height <= o + e),
                    r.role in u.callbacks && (r.top < s && r.bottom >= e && !r.shown ? u.callbacks[r.role](r, 0, t, e, o, n) : r.top > s && (r.shown || !r.initialized) ? u.callbacks[r.role](r, 1, t, e, o, n) : r.bottom < e && (r.shown || !r.initialized) && u.callbacks[r.role](r, -.5, t, e, o, n))
                }
            }
        }
        ,
        "scrollRestoration"in history && (history.scrollRestoration = "manual"),
        this.settings = {
            disableTouchDevices: !0
        },
        l.instance = this
    }
    p.Scrolling = t
}(Project = Project || {}),
function(i) {
    var o, t = (o = i.Handler,
    __extends(e, o),
    e.prototype.onState = function() {
        var t = this;
        this.hideLiveResults(),
        setTimeout(function() {
            t.$input.val("")
        }, 500)
    }
    ,
    e.prototype.bind = function() {
        this.$form.off(".search").on("submit.search", this.onSubmit),
        this.$input.off(".search").on("keyup.search", this.onType),
        $doc.off(".search").on("click.search", ".js-search-seeall", this.onSubmit).on("keydown.search", this.onKeyDown).on("click.search-exit", this.onClickAnywhereHandler)
    }
    ,
    e.prototype.hideLiveResults = function() {
        var t = this;
        this.isLiveShown = !1,
        TweenMax.to(this.$live, .3, {
            height: 0,
            ease: i.easing,
            onComplete: function() {
                t.$live.html("")
            }
        })
    }
    ,
    e.prototype.showLiveResults = function() {
        this.isLiveShown = !0,
        TweenMax.to(this.$live, .3, {
            height: this.$live.children().outerHeight(),
            ease: i.easing
        })
    }
    ,
    e.prototype.liveResponse = function(t, e, i) {
        i.result ? (this.$live.html(this.liveTemplate.render(i)),
        this.trigger(Components.ComponentEvents.CHANGE, this.$live),
        this.showLiveResults()) : this.hideLiveResults()
    }
    ,
    e.prototype.focusLiveResult = function(t) {
        var e, i = this.$live.find("." + this.liveElClass), n = this.$live.find("." + this.liveElClass + ":focus"), o = i.length;
        o <= 1 || (n.length ? "down" === t ? e = o < (e = n.index()) + 2 ? 0 : e + 1 : "up" === t && (e = (e = n.index()) - 1 < 0 ? o - 1 : e - 1) : e = 0,
        n.blur(),
        i.eq(e).focus())
    }
    ,
    e);
    function e(t, e) {
        var n = o.call(this) || this;
        return n.view = t,
        n.options = e,
        n.resize = function(t) {
            t && n.isLiveShown && n.hideLiveResults()
        }
        ,
        n.onKeyDown = function(t) {
            switch (t.keyCode || t.which) {
            case Utils.keys.esc:
                n.isLiveShown && (t.preventDefault(),
                t.stopPropagation(),
                n.hideLiveResults());
                break;
            case Utils.keys.up:
                n.isLiveShown && (t.preventDefault(),
                t.stopPropagation(),
                n.focusLiveResult("up"));
                break;
            case Utils.keys.down:
                n.isLiveShown && (t.stopPropagation(),
                t.preventDefault(),
                n.focusLiveResult("down"))
            }
        }
        ,
        n.onClickAnywhereHandler = function(t) {
            $(t.target).closest(n.view).length <= 0 && n.hideLiveResults()
        }
        ,
        n.onType = function(t) {
            t.preventDefault();
            var e = t.keyCode || t.which;
            e !== Utils.keys.esc && e !== Utils.keys.enter && (n.$input.val().length < n.settings.liveMinLen ? n.$live.html("") : (clearTimeout(n.timer),
            n.timer = setTimeout(function() {
                var t = {
                    url: n.$form.data("api-url"),
                    form: n.$form[0]
                };
                Widgets.API.callIt(t, n.view, function(t, e, i) {
                    return n.liveResponse(t, e, i)
                })
            }, n.settings.timeout)))
        }
        ,
        n.onSubmit = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            n.$input.val().length < n.settings.liveMinLen || i.PushStates.goTo(n.$form.attr("action") + "?" + Utils.serialize(n.$form))
        }
        ,
        n.settings = $.extend({
            liveMinLen: 3,
            timeout: 250
        }, e || t.data("options") || {}),
        n.$form = i.breakpoint.desktop ? n.view.find(".search__form") : n.view.find("form"),
        n.$input = i.breakpoint.desktop ? n.$form.find(".search__input") : n.$form.find(".search__input--mobile"),
        n.$submit = n.$form.find('[type="submit"]'),
        n.$live = n.view.find(".js-search-live"),
        n.liveTemplate = i.Templates.get(i.TemplateNames.LIVESEARCH),
        n.liveElClass = "livesearch__item",
        n.bind(),
        n
    }
    i.Search = t
}(Project = Project || {}),
function(t) {
    var e = (i.LIVESEARCH = "search-live",
    i.PLAYER = "player",
    i.PLAYLIST = "playlist",
    i.FORM_RESPONSE = "form-response",
    i);
    function i() {}
    t.TemplateNames = e;
    var n = (o.get = function(t) {
        var e = $("#tmpl-" + t);
        return e[0] ? Twig.twig({
            data: e.text()
        }) : null
    }
    ,
    o);
    function o() {}
    t.Templates = n
}(Project = Project || {}),
function(o) {
    o.generateUID = function() {
        return "" + (new Date).getTime() + Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    ,
    o.normalizeURL = function(t) {
        return "/" + t.replace(/#.*$/, "").replace(/^\/|\/$/g, "").replace(/\?.*$/, "")
    }
    ,
    o.getCurrentURL = function() {
        return o.normalizeURL(window.location.pathname)
    }
    ,
    o.downloadFile = function(t, e) {
        var i = document.createElement("A");
        i.href = t,
        e && (i.download = e),
        document.body.appendChild(i),
        i.click(),
        document.body.removeChild(i)
    }
    ,
    o.shake = function(t) {
        TweenMax.fromTo(t, .5, {
            xPercent: -3
        }, {
            xPercent: 0,
            clearProps: "transform",
            ease: Elastic.easeOut.config(2, .2)
        })
    }
    ,
    o.translations = {
        "invalid-email": {
            en: "Invalid email address format",
            pl: "Niepoprawny format adresu e-mail"
        },
        "required-field": {
            en: "Required field",
            pl: "Pole obowiązkowe"
        }
    },
    o.keys = {
        enter: 13,
        esc: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36,
        minus: 109,
        plus: 107
    },
    o.serialize = function(t) {
        var n = t.serializeObject()
          , e = Object.keys(n).map(function(t) {
            var e = n[t]
              , i = typeof e;
            return "" !== e ? t.replace("[]", "") + "=" + ("object" == i ? e.join(",") : e) : null
        }).filter(function(t) {
            return null !== t
        });
        return e ? e.join("&") : ""
    }
    ,
    o.parseToTime = function(t) {
        var e = parseInt("" + t, 10)
          , i = parseInt("" + e / 3600, 10) % 24
          , n = parseInt("" + e / 60, 10) % 60
          , o = e % 60;
        return (0 < i ? (i < 10 ? "0" + i : i) + ":" : "") + (n < 10 ? "0" + n : n) + ":" + (o < 10 ? "0" + o : o)
    }
    ,
    o.updateQueryParam = function(t, e, i) {
        var n = ""
          , o = (t || window.location.href).split("?")
          , s = o[0]
          , a = o[1]
          , r = "";
        if (a) {
            o = a.split("&");
            for (var l = 0; l < o.length; l++)
                o[l].split("=")[0] !== e && (n += r + o[l],
                r = "&")
        }
        return s + "?" + n + (r + "" + e + "=" + i)
    }
    ,
    o.removeQueryParam = function(t, e) {
        var i = t.split("?");
        if (2 <= i.length) {
            for (var n = encodeURIComponent(e) + "=", o = i[1].split(/[&;]/g), s = o.length; 0 < s--; )
                -1 !== o[s].lastIndexOf(n, 0) && o.splice(s, 1);
            return t = i[0] + "?" + o.join("&")
        }
        return t
    }
    ,
    o.stats = function() {
        var e = new Stats;
        return e.showPanel(0),
        $(e.dom).css("pointer-events", "none"),
        document.body.appendChild(e.dom),
        requestAnimationFrame(function t() {
            e.begin(),
            e.end(),
            requestAnimationFrame(t)
        }),
        e
    }
    ,
    o.isImageOk = function(t) {
        return !!t.complete && (void 0 === t.naturalWidth || 0 !== t.naturalWidth)
    }
    ,
    o.setCookie = function(t, e, i) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);
        var o = t + "=" + e + ";" + ("expires=" + n.toUTCString()) + ";path=/";
        document.cookie = o
    }
    ,
    o.getCookie = function(t) {
        t += "=";
        for (var e = decodeURIComponent(document.cookie).split(";"), i = 0; i < e.length; i++) {
            for (var n = e[i]; " " === n.charAt(0); )
                n = n.substring(1);
            if (0 === n.indexOf(t))
                return n.substring(t.length, n.length)
        }
        return null
    }
    ,
    o.enableBodyScrolling = function(t) {
        $body.removeAttr("style"),
        Project.Scrolling.enable(),
        window.scrollTo(0, t)
    }
    ,
    o.disableBodyScrolling = function(t) {
        var e = Project.browser.ie ? "absolute" : "fixed"
          , i = Project.browser.ie ? "" : -t + "px";
        Project.Scrolling.disable(),
        $body.css({
            position: e,
            top: i,
            bottom: "0",
            overflow: "hidden",
            "will-change": "top",
            width: "100%",
            "touch-action": "none"
        })
    }
    ,
    o.setStorageItem = function(t, e) {
        localStorage.setItem(t, e)
    }
    ,
    o.getStorageItem = function(t) {
        return localStorage.getItem(t)
    }
    ,
    o.drawImageProp = function(t, e, i, n, o, s, a, r) {
        2 === arguments.length && (i = n = 0,
        o = t.canvas.width,
        s = t.canvas.height),
        (a = "number" == typeof a ? a : .5) < 0 && (a = 0),
        (r = "number" == typeof r ? r : .5) < 0 && (r = 0),
        1 < a && (a = 1),
        1 < r && (r = 1);
        var l, c, h, d, u = e.width, p = e.height, f = Math.min(o / u, s / p), g = u * f, m = p * f, v = 1;
        g < o && (v = o / g),
        Math.abs(v - 1) < 1e-14 && m < s && (v = s / m),
        (l = (u - (h = u / ((g *= v) / o))) * a) < 0 && (l = 0),
        (c = (p - (d = p / ((m *= v) / s))) * r) < 0 && (c = 0),
        u < h && (h = u),
        p < d && (d = p),
        t.drawImage(e, l, c, h, d, i, n, o, s)
    }
    ,
    o.getShaderCode = function(t) {
        return document.getElementById(t).innerHTML
    }
    ,
    o.preloadImages = function(t) {
        return Promise.all(t.map(function(n) {
            return new Promise(function(t, e) {
                var i = new Image;
                if (i.onload = function() {
                    o.onImageLoaded(n),
                    t()
                }
                ,
                i.onerror = function() {
                    t()
                }
                ,
                i.onabort = function() {
                    return t()
                }
                ,
                i.src = n.src,
                i.complete && 0 < i.height)
                    return o.onImageLoaded(i),
                    void t()
            }
            )
        }))
    }
    ,
    o.onImageLoaded = function(t) {
        t.element && t.element.classList.remove("is-loading")
    }
}(Utils = Utils || {}),
function(e) {
    var t = (i.prototype.tryToShow = function() {
        this.shown || !Modernizr.cookies || !this.view || Utils.getCookie(i.COOKIE_SLUG) ? this.destroy() : this.show()
    }
    ,
    i.prototype.show = function() {
        this.view.show(100);
        var t = !!e.breakpoint.phone;
        this.shown = !0,
        TweenMax.to(this.view, t ? 1 : .6, {
            y: "0%",
            ease: e.easing,
            delay: .6
        })
    }
    ,
    i.prototype.hide = function() {
        var t = this;
        this.shown = !1,
        TweenMax.to(this.view, .4, {
            y: "100%",
            ease: e.easing,
            onComplete: function() {
                t.destroy()
            }
        })
    }
    ,
    i.prototype.destroy = function() {
        this.view && (this.view.remove(),
        this.view = null,
        i.instance = null)
    }
    ,
    i.prototype.bind = function() {
        var e = this;
        this.view.find(".js-cookies-close").on("click", function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            e.hide()
        }),
        this.view.find(".js-cookies-agree").on("click", function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            Utils.setCookie(i.COOKIE_SLUG, "huncwot", 365),
            e.hide()
        })
    }
    ,
    i.COOKIE_SLUG = "ciastko",
    i);
    function i(t) {
        this.view = t,
        this.shown = !1,
        t[0] && (i.instance = this).bind()
    }
    e.Cookies = t
}(Project = Project || {}),
function(n) {
    var t = (e.prototype.show = function() {
        var i = this;
        return new Promise(function(t, e) {
            i.view.show(),
            TweenMax.killChildTweensOf(i.view),
            TweenMax.fromTo(i.view, .5, {
                scaleY: 0,
                transformOrigin: "0% 0%"
            }, {
                scaleY: 1,
                ease: n.easing,
                onComplete: t
            })
        }
        )
    }
    ,
    e.prototype.hide = function() {
        var i = this;
        return new Promise(function(t, e) {
            new TimelineMax({
                onComplete: function() {
                    i.view.hide()
                }
            }).to(i.view, .5, {
                scaleY: 0,
                ease: n.easing,
                onComplete: t
            })
        }
        )
    }
    ,
    e);
    function e(t) {
        this.view = t,
        e.instance = this
    }
    n.Curtain = t
}(Project = Project || {}),
function(e) {
    var i = (t.LOADING = "loading",
    t.NORMAL = "logo",
    t.WAITING = "wait",
    t);
    function t() {}
    e.LogoStates = i;
    var n = (o.toggle = function(t, e) {
        t ? o.instance.show(e) : o.instance.hide(e)
    }
    ,
    o.prototype.set = function(t, e) {
        var i = this;
        this.hideElement(this.current, !1, e).then(function() {
            i.showElement(t),
            i.current = t
        })
    }
    ,
    o.prototype.show = function(t) {
        this.shown || (this.shown = !0,
        TweenMax.killTweensOf(this.$wrap),
        TweenMax.killTweensOf(this),
        TweenMax.to(this.$wrap, t ? 0 : this.duration, {
            opacity: 1,
            ease: e.easing
        }),
        TweenMax.to(this, t ? 0 : this.duration, {
            alpha: 1,
            ease: e.easing
        }))
    }
    ,
    o.prototype.hide = function(t) {
        this.shown && (this.shown = !1,
        TweenMax.to(this.$wrap, t ? 0 : .3, {
            opacity: 0,
            ease: e.easing,
            delay: t ? 0 : .3
        }),
        TweenMax.to(this, t ? 0 : .3, {
            alpha: 0,
            ease: e.easing,
            delay: t ? 0 : .3
        }))
    }
    ,
    o.prototype.build = function() {
        var o = this;
        e.browser.ie || (this.elements = {},
        this.view.find("svg").toArray().forEach(function(t, e) {
            var i = $(t).data("state")
              , n = new Warp(t);
            o.elements[i] = {
                name: i,
                warp: n,
                points: o.getPoints(n),
                svg: t,
                alpha: 0 === e ? 1 : 0
            }
        }),
        this.elements[i.LOADING].svg.style.opacity = "1")
    }
    ,
    o.prototype.getPoints = function(t) {
        var e = [];
        return t.interpolate(16),
        t.transform(function(t) {
            return e.push([t[0], t[1]]),
            t
        }),
        e
    }
    ,
    o.prototype.hideElement = function(t, i, n) {
        var o = this;
        if (!this.elements)
            return Promise.resolve();
        var s = this.elements[t];
        return new Promise(function(t, e) {
            TweenMax.to(s, i ? 0 : o.duration, {
                alpha: 0,
                ease: Sine.easeOut,
                delay: n || 0,
                onComplete: t
            }),
            TweenMax.killTweensOf(s.svg),
            TweenMax.to(s.svg, i ? 0 : o.duration, {
                opacity: 0,
                delay: n || 0,
                ease: Sine.easeOut
            })
        }
        )
    }
    ,
    o.prototype.showElement = function(t, i) {
        var n = this;
        if (!this.elements)
            return Promise.resolve();
        var o = this.elements[t];
        return new Promise(function(t, e) {
            TweenMax.to(o, i ? 0 : 2 * n.duration, {
                alpha: 1,
                ease: Sine.easeOut
            }),
            TweenMax.killTweensOf(o.svg),
            TweenMax.to(o.svg, i ? 0 : n.duration, {
                opacity: 1,
                ease: Sine.easeOut,
                onComplete: t
            })
        }
        )
    }
    ,
    o);
    function o(t) {
        var l = this;
        this.view = t,
        this.update = function() {
            l.elements && ($.each(l.elements, function(t, a) {
                if (0 < a.alpha && a.alpha <= 1) {
                    var r = 0;
                    a.warp.transform(function(t) {
                        var e = a.points[r]
                          , i = 2 * (1 - a.alpha * l.alpha)
                          , n = 12 * (1 - a.alpha * l.alpha)
                          , o = 6 + a.alpha * l.alpha * 18
                          , s = 6 + a.alpha * l.alpha * 18;
                        return r++,
                        [e[0] + i * Math.cos(e[1] / o), e[1] + n * Math.sin(e[0] / s)]
                    })
                }
            }),
            requestAnimationFrame(l.update))
        }
        ,
        this.duration = .6,
        this.alpha = 1,
        this.shown = !0,
        this.current = i.LOADING,
        this.$wrap = this.view.find(".js-logo-wrap"),
        this.build(),
        this.update(),
        o.instance = this
    }
    e.Logo = n
}(Project = Project || {}),
function(o) {
    var t = (e.prototype.onState = function() {
        this.shown && this.hide()
    }
    ,
    e.prototype.toggle = function(t, e, i) {
        var n = this;
        this.shown || (this.sT = window.scrollY ? window.scrollY : $window.scrollTop()),
        void 0 !== t ? !t || this.shown && !i ? t || !this.shown && !i || this.hide(e) : this.show(e) : (this.shown ? function(t) {
            return n.hide(t)
        }
        : function(t) {
            return n.show(t)
        }
        )(e)
    }
    ,
    e.prototype.show = function(t) {
        this.shown = !0,
        this.view.addClass("is-shown"),
        TweenMax.killTweensOf(this.view),
        TweenMax.to(this.view, t ? 0 : .5, {
            x: 0,
            ease: o.easing,
            clearProps: "x",
            onComplete: function() {
                $body.addClass("is-menu-open"),
                window.scrollTo(0, 0)
            }
        }),
        TweenMax.killTweensOf(this.$content),
        TweenMax.to(this.$content, t ? 0 : .3, {
            x: this.width,
            ease: o.easing
        }),
        TweenMax.staggerTo(this.$items, t ? 0 : .4, {
            opacity: 1,
            ease: Sine.easeOut,
            delay: .3
        }, .025)
    }
    ,
    e.prototype.hide = function(t) {
        var i = this;
        this.view.removeClass("is-shown"),
        $body.removeClass("is-menu-open"),
        window.scrollTo(0, this.sT),
        TweenMax.killTweensOf(this.view),
        TweenMax.to(this.view, t ? 0 : .5, {
            x: -this.width,
            ease: o.easing,
            onComplete: function() {
                i.shown = !1,
                i.$items.filter(".is-open").each(function(t, e) {
                    i.closeSubmenu(e, !0)
                })
            }
        }),
        TweenMax.killTweensOf(this.$content),
        TweenMax.to(this.$content, t ? 0 : .3, {
            x: 0,
            ease: o.easing,
            clearProps: "x"
        }),
        TweenMax.staggerTo(this.$items, t ? 0 : .2, {
            opacity: 0,
            ease: Sine.easeOut
        }, .025)
    }
    ,
    e.prototype.resize = function(t, e, i, n) {
        this.width = this.view.outerWidth(!0),
        n && this.toggle(!1, !0)
    }
    ,
    e.prototype.bind = function() {
        this.$toggle.off(".menu").on("click.menu", this.onToggleClick),
        this.$items.filter(".has-submenu").off(".menu").on("click.menu", this.onLinkClick),
        $doc.off(".menu").on("keydown.menu", this.onKeyDown).on("click.menu", this.onClickAnywhereHandler)
    }
    ,
    e.prototype.openSubmenu = function(t) {
        var i = this
          , e = t.find(".menu__subwrap")
          , n = e.children("ul");
        TweenMax.to(e, .3, {
            height: n.outerHeight(),
            ease: o.easing,
            onComplete: function() {
                t.addClass("is-open")
            }
        }),
        t.siblings(".is-open").each(function(t, e) {
            i.closeSubmenu(e)
        })
    }
    ,
    e.prototype.closeSubmenu = function(t, e) {
        $(t).removeClass("is-open"),
        TweenMax.to($(t).find(".menu__subwrap"), e ? 0 : .3, {
            height: 0,
            ease: o.easing
        })
    }
    ,
    e);
    function e(t) {
        var e = this;
        this.view = t,
        this.onToggleClick = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            e.toggle()
        }
        ,
        this.onLinkClick = function(t) {
            $(t.currentTarget).closest(".js-menu-item").hasClass("is-open") || (t.preventDefault(),
            t.stopPropagation(),
            e.openSubmenu($(t.currentTarget).closest(".js-menu-item")))
        }
        ,
        this.onKeyDown = function(t) {
            e.shown && (t.keyCode || t.which) === Utils.keys.esc && e.hide()
        }
        ,
        this.onClickAnywhereHandler = function(t) {
            e.shown && $(t.target).closest(e.view).length <= 0 && e.hide()
        }
        ,
        this.$items = this.view.find(".js-menu-item"),
        this.$toggle = $(".js-toggle-menu"),
        this.$content = $(".js-shift"),
        this.resize(),
        this.hide(),
        this.bind()
    }
    o.Menu = t
}(Project = Project || {}),
function(n) {
    var t = (e.prototype.onState = function() {
        this.sT = window.scrollY ? window.scrollY : $window.scrollTop();
        var t = this.lightbox.onState();
        return window.scrollTo(0, this.sT),
        t ? this.show() : this.shown && n.PushStates.setTitle(),
        t || this.toggleByPathname() || !!this.shown
    }
    ,
    e.prototype.store = function() {
        this.cache = $("[data-lightbox-json]").toArray().map(function(t, e) {
            return $(t).data("lightbox-json")
        })
    }
    ,
    e.prototype.reload = function() {
        this.store(),
        this.toggleByPathname()
    }
    ,
    e.prototype.toggle = function(t, e, i) {
        var n = this;
        void 0 !== t ? !t || this.shown && !i ? t || !this.shown && !i || this.hide(e) : this.show(e) : (this.shown ? function(t) {
            return n.hide(t)
        }
        : function(t) {
            return n.show(t)
        }
        )(e)
    }
    ,
    e.prototype.show = function(t) {
        this.newSt = this.sT,
        this.shown = !0,
        this.view.show(),
        this.lightbox.show(),
        TweenMax.to(this.view, n.breakpoint.desktop && !t ? .6 : 0, {
            y: "0%",
            ease: n.easing,
            onComplete: function() {
                $body.addClass("is-offscreen-open"),
                window.scrollTo(0, 0)
            }
        })
    }
    ,
    e.prototype.hide = function(t) {
        var e = this;
        $body.removeClass("is-offscreen-open"),
        this.lightbox.hide();
        var i = n.breakpoint.desktop ? "100%" : "120%";
        window.scrollTo(0, this.newSt),
        TweenMax.to(this.view, n.breakpoint.desktop && !t ? .6 : 0, {
            y: i,
            ease: n.easing,
            onComplete: function() {
                e.shown = !1,
                e.destroyComponents()
            }
        })
    }
    ,
    e.prototype.resize = function(t, e, i, n) {
        this.lightbox.resize(t, e, i, n)
    }
    ,
    e.prototype.toggleByPathname = function() {
        var t = this.getLightboxByPathname();
        if (t) {
            var e = this.lightbox.build(t);
            this.buildComponents(this.view.find("[data-component]")),
            n.PushStates.bind(e[0]),
            Widgets.All.bind(e),
            this.show()
        } else
            this.shown && this.hide();
        return !!t
    }
    ,
    e.prototype.getLightboxByPathname = function(i) {
        i = null != i ? i : window.location.pathname,
        i = Utils.normalizeURL(i);
        for (var t = 0; t < this.cache.length; t++) {
            var e = this.cache[t];
            if (Utils.normalizeURL(e.url) === i)
                return e;
            if (0 < e.items.filter(function(t, e) {
                return Utils.normalizeURL(t.url) === i
            }).length)
                return e
        }
        return null
    }
    ,
    e.prototype.buildComponents = function(t) {
        this.components = [];
        for (var e = t.length - 1; 0 <= e; e--) {
            var i = t.eq(e)
              , n = i.data("component");
            if (void 0 !== Components[n]) {
                var o = i.data("options")
                  , s = new Components[n](i,o);
                this.components.push(s)
            }
        }
    }
    ,
    e.prototype.destroyComponents = function() {
        this.components && this.components.forEach(function(t) {
            t.destroy()
        })
    }
    ,
    e);
    function e(t) {
        this.view = t,
        this.lightbox = new Components.Lightbox(this.view.find(".js-lightbox")),
        this.hide(!0)
    }
    n.Offscreen = t
}(Project = Project || {}),
function(t) {
    var i, e = (i = t.Component,
    __extends(n, i),
    n.prototype.destroy = function() {
        this.unbind(),
        i.prototype.destroy.call(this)
    }
    ,
    n.prototype.bind = function() {
        this.$items.find("button").off(".accordion").on("click.accordion", this.onItemClickHandler),
        $doc.off(".accordion-" + this.uid).on("click.accordion-" + this.uid, this.onClickAnywhereHandler)
    }
    ,
    n.prototype.unbind = function() {
        this.$items.find("button").off(".accordion"),
        $doc.off(".accordion-" + this.uid)
    }
    ,
    n.prototype.close = function() {
        this.$items.removeClass("is-active"),
        this.animationOut(!0)
    }
    ,
    n.prototype.open = function(t) {
        this.$items.filter(t).addClass("is-active").siblings().removeClass("is-active"),
        this.animationOut(),
        this.animationIn(t)
    }
    ,
    n.prototype.animationIn = function(t) {
        var e = t.find(".js-content");
        e.show(),
        TweenMax.to(t, .4, {
            paddingBottom: e.outerHeight(),
            ease: Sine.easeOut,
            onComplete: function() {
                Project.Scrolling.scrollToElement(t)
            }
        })
    }
    ,
    n.prototype.animationOut = function(t) {
        var e = this;
        void 0 === t && (t = !1),
        TweenMax.to(this.$items, .2, {
            paddingBottom: 0,
            ease: Sine.easeOut,
            onComplete: function() {
                t && e.$items.find(".js-content").hide()
            }
        })
    }
    ,
    n.prototype.init = function() {
        this.$items.length < 2 && (this.open(this.$items.eq(0)),
        this.unbind(),
        this.$items.eq(0).find("button").addClass("disabled"))
    }
    ,
    n);
    function n(t, e) {
        var o = i.call(this, t) || this;
        return o.view = t,
        o.options = e,
        o.resize = function(t, e, i, n) {
            o.height !== e && (o.close(),
            o.height = e)
        }
        ,
        o.onClickAnywhereHandler = function(t) {
            $(t.target).closest(o.view).length <= 0 && o.close()
        }
        ,
        o.onItemClickHandler = function(t) {
            var e = $(t.currentTarget).parent();
            e.hasClass("is-active") ? o.close() : o.open(e)
        }
        ,
        o.$items = o.view.find(".js-item"),
        o.$last = o.$items.eq(-1),
        o.uid = Utils.generateUID(),
        o.height = $window.height(),
        o.bind(),
        o.init(),
        o
    }
    t.Accordion = e
}(Components = Components || {}),
function(t) {
    var n, e = (n = t.Component,
    __extends(i, n),
    i.prototype.bind = function() {
        this.$tabs.off(".agenda").on("click.agenda", this.switchList)
    }
    ,
    i.prototype.checkListHeight = function(t) {
        if (this.$wrapper && Project.breakpoint.desktop && t.hasClass("is-active")) {
            var i = 0;
            t.find("li").map(function(t, e) {
                return i += $(e).outerHeight()
            }),
            i > this.maxHeight && t.find("li:first-child").css("display", "none")
        }
    }
    ,
    i.prototype.setActiveList = function() {
        this.current = 0,
        this.$tabs.filter("[data-tab=" + this.current + "]").addClass("is-active");
        var t = this.view.find("[data-list=" + this.current + "]");
        this.checkListHeight(t)
    }
    ,
    i.prototype.animateListOut = function() {
        var n = this;
        return new Promise(function(t) {
            var e = n.view.find("[data-list=" + n.current + "]")
              , i = e.find("li.agenda__item");
            TweenMax.staggerFromTo(i, .3, {
                opacity: 1,
                y: 0
            }, {
                opacity: 0,
                y: -30,
                easing: Project.easing
            }, .05, function() {
                e.hide(),
                t()
            })
        }
        )
    }
    ,
    i.prototype.animateListIn = function() {
        var t = this.view.find("[data-list=" + this.current + "]")
          , e = t.find("li.agenda__item");
        t.show(),
        TweenMax.set(e, {
            opacity: 0,
            x: 0,
            y: 0
        }),
        TweenMax.staggerFromTo(e, .3, {
            opacity: 0,
            x: -10
        }, {
            opacity: 1,
            x: 0,
            easing: Project.easing
        }, -.05),
        this.checkListHeight(t)
    }
    ,
    i.prototype.animateDate = function(t) {
        var e = parseInt(t.data("tab"), 10)
          , i = -this.height * e;
        TweenMax.to(this.$date, .5, {
            y: i,
            ease: Project.easing
        })
    }
    ,
    i);
    function i(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i.options = e,
        i.resize = function() {
            i.height = i.$date.find("span").outerWidth(!0)
        }
        ,
        i.switchList = function(t) {
            var e = $(t.currentTarget);
            i.animateDate(e),
            e.addClass("is-active").siblings().removeClass("is-active"),
            i.animateListOut().then(function() {
                i.current = parseInt(i.$tabs.parent().find(".is-active").attr("data-tab"), 10);
                var t = i.$lists.filter("[data-list=" + i.current + "]").addClass("is-active")
                  , e = t.siblings().removeClass("is-active");
                t.find("a:first-child").removeAttr("tabindex"),
                e.find("a:first-child").attr("tabindex", "-1"),
                i.animateListIn()
            })
        }
        ,
        i.$tabs = i.view.find("[data-tab]"),
        i.$lists = i.view.find("[data-list]"),
        i.$date = i.view.find(".js-date"),
        i.daysHeight = i.view.find(".agenda__days").outerHeight(),
        i.$wrapper = 0 < i.view.find(".agenda__wrapper").length ? i.view.find(".agenda__wrapper") : null,
        i.maxHeight = i.$wrapper ? i.$wrapper.height() - i.daysHeight : null,
        i.setActiveList(),
        i.bind(),
        i
    }
    t.Agenda = e
}(Components = Components || {}),
function(a) {
    var i, t = (i = a.Component,
    __extends(e, i),
    e.prototype.onState = function() {
        return this.toggleByPathname()
    }
    ,
    e.prototype.build = function(t) {
        var e = this.render(t);
        return this.init(),
        e
    }
    ,
    e.prototype.show = function() {
        this.shown = !0
    }
    ,
    e.prototype.hide = function() {
        this.shown = !1
    }
    ,
    e.prototype.destroy = function() {
        this.unbind(),
        this.$arrowPrev = this.view.find(".js-prev"),
        this.$arrowNext = this.view.find(".js-next"),
        this.$close = this.view.find(".js-close"),
        this.$caption = this.view.find(".js-caption"),
        this.$count = this.view.find(".js-count"),
        this.$list = this.view.find(".js-list"),
        this.$items = this.view.find("[data-lightbox-path]"),
        this.amount = null,
        this.cache = null,
        i.prototype.destroy.call(this)
    }
    ,
    e.prototype.init = function() {
        this.store(),
        this.swipe = new a.Swipe(this.$list,{
            vertical: !0
        }),
        this.toggleByPathname(window.location.pathname, !0),
        this.$zoom[0] && (this.zoom = new a.Zoom(this.$zoom),
        this.checkZoomAvailability()),
        this.bind()
    }
    ,
    e.prototype.render = function(t) {
        var e = Project.Templates.get("lightbox").render(t);
        return this.view.html(e),
        this.view
    }
    ,
    e.prototype.store = function() {
        this.$arrowPrev = this.view.find(".js-prev"),
        this.$arrowNext = this.view.find(".js-next"),
        this.$close = this.view.find(".js-close"),
        this.$caption = this.view.find(".js-caption"),
        this.$count = this.view.find(".js-count"),
        this.$list = this.view.find(".js-list"),
        this.$zoom = this.view.find(".js-zoom"),
        this.$items = this.view.find("[data-lightbox-path]"),
        this.$counterWrapper = this.view.find(".js-photo-counter"),
        this.counterW = this.$counterWrapper.parent().outerWidth(),
        this.amount = this.$items.length,
        this.cache = this.$items.toArray().map(function(t, e) {
            var i = $(t);
            return {
                $el: i,
                index: e,
                path: i.data("lightbox-path")
            }
        }),
        this.setCounterElement()
    }
    ,
    e.prototype.toggleByPathname = function(t, e) {
        var i = this.getItemByPathname(t);
        return i ? this.goToItem(i) : e && this.goToItem(this.cache[0]),
        !!i || !!e
    }
    ,
    e.prototype.getItemByPathname = function(e) {
        return this.cache && this.cache.length ? (e = null != e ? e : window.location.pathname,
        e = Utils.normalizeURL(e),
        this.cache.filter(function(t) {
            return t.path === e
        })[0]) : null
    }
    ,
    e.prototype.bind = function() {
        var e = this;
        this.swipe.off().on(a.SwipeEvents.END, this.onSwipeEnd),
        this.$items.off(".lightbox").on("click.lightbox", ".lightbox__image", this.onImageClick),
        this.$arrowPrev.off(".lightbox").on("click.lightbox", function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            e.go(-1)
        }),
        this.$arrowNext.off(".lightbox").on("click.lightbox", function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            e.go(1)
        }),
        this.$caption.off(".lightbox").on("click.lightbox", ".js-caption-toggle", function(t) {
            e.$caption.toggleClass("is-open")
        }),
        $doc.off(".lightbox").on("keyup.lightbox", this.onKeyUp)
    }
    ,
    e.prototype.unbind = function() {
        this.swipe.off(),
        this.$items.off(".lightbox"),
        this.$arrowPrev.off(".lightbox"),
        this.$arrowNext.off(".lightbox"),
        this.$caption.off(".lightbox"),
        $doc.off(".lightbox")
    }
    ,
    e.prototype.go = function(t) {
        var e = this.currentIndex + t;
        !this.settings.loop && (e < 0 || e > this.amount - 1) || (Project.PushStates.goTo(this.cache[e].path, !0),
        this.animateCounter(t))
    }
    ,
    e.prototype.goToItem = function(t, e) {
        var i = this;
        t && (this.placeImages(t.index),
        this.isReloading = !0,
        this.hideItem(this.currentIndex, e).then(function() {
            return i.showItem(t.index, e)
        }))
    }
    ,
    e.prototype.hideItem = function(n, o) {
        var s = this;
        return new Promise(function(t, e) {
            if (s.animating)
                e();
            else {
                var i = s.$items.eq(n);
                s.$items.removeClass("is-current"),
                s.animating = !0,
                TweenMax.to(i, o ? .01 : .3, {
                    opacity: 0,
                    ease: Sine.easeOut,
                    onComplete: function() {
                        i.removeClass("is-adapted"),
                        s.view.removeClass("has-adapted"),
                        s.animating = !1,
                        t()
                    }
                }),
                a.Player.pauseAllIn(s.view),
                s.$caption.removeClass("is-open"),
                s.hideZoom()
            }
        }
        )
    }
    ,
    e.prototype.showItem = function(t, e) {
        var i = this;
        this.sT = window.scrollY ? window.scrollY : $window.scrollTop(),
        this.currentIndex = t < 0 ? this.amount - 1 : t >= this.amount ? 0 : t,
        void 0 === this.currentIndex && (this.currentIndex = 0);
        var n = this.$items.eq(this.currentIndex);
        n.addClass("is-current").siblings().removeClass("is-current"),
        TweenMax.fromTo(n, e ? .01 : .6, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Sine.easeOut,
            onComplete: function() {
                i.isReloading = !1
            }
        }),
        this.updateArrows(),
        this.updateCaption(),
        TweenMax.set(this.$counterWrapper, {
            x: -this.$counter.outerWidth(!0) * t,
            delay: .2
        })
    }
    ,
    e.prototype.placeImages = function(t) {
        var e = this.$list.find("img[data-src]").toArray();
        t && (e = e.symmetricSort(t)),
        e.forEach(function(t) {
            (new Image).src = t.dataset.src
        }),
        e.forEach(function(t) {
            t.src = t.dataset.src,
            t.removeAttribute("data-src")
        })
    }
    ,
    e.prototype.updateArrows = function() {
        this.$arrowPrev.toggleClass("is-disabled", 0 === this.amount || !this.settings.loop && this.currentIndex <= 0),
        this.$arrowNext.toggleClass("is-disabled", 0 === this.amount || !this.settings.loop && this.currentIndex >= this.amount - 1)
    }
    ,
    e.prototype.updateCaption = function() {
        var t = this.$items.eq(this.currentIndex);
        this.$count.text(("0" + (this.currentIndex + 1)).slice(-2) + "/" + ("0" + this.amount).slice(-2));
        var e = t.find("figcaption");
        this.$caption.empty().html(e.html()).removeClass("is-open").toggleClass("has-description", 0 < e.find(".caption__text").length)
    }
    ,
    e.prototype.checkZoomAvailability = function() {
        this.$items.each(function(t, e) {
            var i = $(e).find("img");
            i.toggleClass("is-zoom-available", i.toArray().some(function(t) {
                var e = parseInt(t.dataset.bigHeight, 10) || parseInt(t.height, 10)
                  , i = parseInt(t.dataset.bigWidth, 10) || parseInt(t.width, 10);
                return e > window.innerHeight || i > window.innerWidth
            }))
        })
    }
    ,
    e.prototype.requestZoom = function(t) {
        var e = $(t).data("deepzoom")
          , i = $(t).parent().find("img").toArray().map(function(t) {
            var e = $(t);
            return {
                src: e.data("big") || t.src,
                height: parseInt(e.data("big-height"), 10) || parseInt(e.attr("height"), 10),
                width: parseInt(e.data("big-width"), 10) || parseInt(e.attr("width"), 10),
                scale: parseFloat(e.data("big-scale")) || 1
            }
        });
        e && this.zoom ? this.zoom.loadDeepzoom(e) : i && this.zoom && $(t).hasClass("is-zoom-available") && this.zoom.load(i)
    }
    ,
    e.prototype.hideZoom = function() {
        return !!this.zoom && this.zoom.hide()
    }
    ,
    e.prototype.setCounterElement = function() {
        for (var t, e = this.amount < 10 ? "0" + this.amount : this.amount, i = 0; i < this.amount; i++)
            t = i <= 8 ? "0" + (i + 1) : i + 1,
            this.$counterWrapper.find(".js-counter-lb").length < this.amount && (this.$counterWrapper.append('<span class="js-counter-lb"></span>'),
            this.$counterWrapper.find("span").eq(i).text(t + "/" + e));
        this.$counter = this.view.find(".js-counter-lb"),
        this.$counterWrapper.css({
            width: this.$counter.outerWidth(!0) * this.amount,
            display: "flex"
        })
    }
    ,
    e.prototype.animateCounter = function(t) {
        var e = -this.$counter.outerWidth(!0) * (this.currentIndex + t);
        TweenMax.to(this.$counterWrapper, .5, {
            x: e,
            ease: Project.easing
        })
    }
    ,
    e);
    function e(t, e) {
        var o = i.call(this, t, e) || this;
        return o.view = t,
        o.resize = function(t, e, i, n) {
            o.checkZoomAvailability(),
            o.zoom && o.zoom.resize()
        }
        ,
        o.onImageClick = function(t) {
            o.isReloading || (o.zoom ? o.requestZoom($(t.target).find("img")[0]) : ($(t.currentTarget).closest(".js-item").toggleClass("is-adapted"),
            o.view.toggleClass("has-adapted", 0 < o.view.find(".is-adapted").length)))
        }
        ,
        o.onKeyUp = function(t) {
            if (o.shown)
                switch (t.keyCode || t.which) {
                case Utils.keys.right:
                    o.go(1);
                    break;
                case Utils.keys.left:
                    o.go(-1);
                    break;
                case Utils.keys.esc:
                    o.hideZoom() || Project.PushStates.back()
                }
        }
        ,
        o.onSwipeEnd = function(t) {
            o.view.hasClass("has-adapted") || o.zoom && o.zoom.isShown() || t.direction && "none" !== t.direction && "click" !== t.direction && (o.go({
                left: 1,
                right: -1
            }[t.direction]),
            o.animateCounter(t.direction))
        }
        ,
        o.settings = $.extend({
            loop: !1
        }, e || {}),
        o.view.children().length && o.init(),
        o
    }
    a.Lightbox = t
}(Components = Components || {}),
function(o) {
    var t = (e.CHANGE = "change",
    e.TOGGLE = "toggle",
    e);
    function e() {}
    o.PlaylistEvents = t;
    var i, n = (i = o.Component,
    __extends(s, i),
    s.prototype.destroy = function() {
        this.unload(),
        i.prototype.destroy.call(this)
    }
    ,
    s.prototype.load = function(t) {
        this.data = t,
        this.render(t),
        this.select(0),
        this.bind()
    }
    ,
    s.prototype.unload = function() {
        this.isOpen = !1,
        this.list.empty(),
        this.data = null,
        this.unbind(),
        this.currentIndex = 0
    }
    ,
    s.prototype.hide = function() {
        this.isOpen = !1,
        this.trigger(t.TOGGLE, !1)
    }
    ,
    s.prototype.play = function(t) {
        this.data && t <= this.data.length - 1 && 0 <= t && (this.currentIndex = t,
        this.update(t))
    }
    ,
    s.prototype.prev = function() {
        var t = this.currentIndex - 1;
        return !!(this.data && 0 <= t) && (this.currentIndex--,
        this.update(t),
        !0)
    }
    ,
    s.prototype.next = function() {
        var t = this.currentIndex + 1;
        return !!(this.data && t <= this.data.length - 1) && (this.currentIndex++,
        this.update(t),
        !0)
    }
    ,
    s.prototype.update = function(t) {
        var e = this.data[t];
        this.select(t),
        this.trigger(o.PlaylistEvents.CHANGE, e)
    }
    ,
    s.prototype.render = function(t) {
        var e = Twig.twig({
            data: $("#tmpl-playlist").text()
        }).render({
            playlist: t
        });
        if (this.list.html(e),
        this.dropdown[0]) {
            var i = "";
            t.forEach(function(t) {
                i += "<option>" + t.name + "</option>"
            }),
            this.dropdown.html(i)
        }
    }
    ,
    s.prototype.select = function(t) {
        this.currentIndex = t,
        this.list.find("li").eq(t).addClass("is-current").siblings().removeClass("is-current"),
        this.toggle.html("<span>" + this.data[t].name + "</span>")
    }
    ,
    s.prototype.bind = function() {
        this.list.find("li a").off().on("click", this.onPlaylistClick),
        this.toggle.off().on("click", this.onPlaylistToggleClick),
        this.dropdown.off().on("change", this.onDropdownChange)
    }
    ,
    s.prototype.unbind = function() {
        this.list.find("li a").off(),
        this.toggle.off()
    }
    ,
    s);
    function s(t, e) {
        var n = i.call(this, t, e) || this;
        return n.view = t,
        n.options = e,
        n.isOpen = !1,
        n.onPlaylistClick = function(t) {
            t.preventDefault(),
            t.stopPropagation();
            var e = $(t.currentTarget).closest("li").index();
            n.update(e)
        }
        ,
        n.onPlaylistToggleClick = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            n.isOpen = !n.isOpen,
            n.trigger(o.PlaylistEvents.TOGGLE, n.isOpen)
        }
        ,
        n.onDropdownChange = function(t) {
            t.preventDefault(),
            t.stopPropagation();
            var e = t.currentTarget.selectedIndex
              , i = n.data[e];
            n.select(e),
            n.trigger(o.PlaylistEvents.CHANGE, i)
        }
        ,
        n.list = n.view.find("ol"),
        n.toggle = n.view.closest(".player").find(".js-playlist-toggle"),
        n.dropdown = n.view.find("select"),
        n
    }
    o.Playlist = n
}(Components = Components || {}),
function(t) {
    var n, e = (n = t.Component,
    __extends(i, n),
    i.prototype.load = function(t) {
        if (this.view.length && t && !(t.length < 1)) {
            for (var e = "", i = 0; i < t.length; i++) {
                var n = t[i];
                e += '<img src="' + n.src + '" width="' + n.width * n.scale + '" height="' + n.height * n.scale + '" alt="" />'
            }
            this.image.html(e).addClass("grabbable"),
            this.view.show(),
            this.imageWrap.show(),
            TweenMax.fromTo(this.view.find(".js-zoom-in, .js-zoom-out"), .4, {
                x: 64
            }, {
                x: 0,
                delay: .1,
                ease: Project.easing
            }),
            $body.addClass("is-zoomed"),
            this.image.imagesLoaded().always(this.onImageLoaded),
            this.shown = !0
        }
    }
    ,
    i.prototype.loadDeepzoom = function(t) {
        $body.addClass("is-zoomed"),
        this.view.show(),
        this.imageWrap.hide(),
        this.shown = !0
    }
    ,
    i.prototype.hide = function() {
        return !(!this.shown || (this.view.hide(),
        this.imageWrap.hide(),
        $body.removeClass("is-zoomed"),
        this.trigger("close"),
        this.shown = !1,
        this.scale = 0))
    }
    ,
    i.prototype.isShown = function() {
        return !!this.shown
    }
    ,
    i.prototype.build = function() {
        this.view.append('<div class="zoom__imagewrap"><div><div class="zoom__image"><div></div></div></div></div><div class="zoom__deep"></div><div class="zoom__buttons"><button class="zoom__button--in button js-zoom-in"><i class="icon-plus"></i></button><button class="zoom__button--out button js-zoom-out"><i class="icon-minus"></i></button></div>'),
        this.imageWrap = this.view.find(".zoom__imagewrap"),
        this.image = this.view.find(".zoom__image"),
        this.iscroll = new IScroll(this.imageWrap[0],{
            freeScroll: !0,
            scrollbars: !1,
            scrollX: !0,
            scrollY: !0,
            mouseWheel: !0
        })
    }
    ,
    i.prototype.bind = function() {
        var e = this;
        this.iscroll.on("scrollCancel", function(t) {
            e.hide()
        }),
        $doc.off(".zoom").on("keyup.zoom", function(t) {
            switch (t.keyCode || t.which) {
            case Utils.keys.plus:
                e.changeScale(1);
                break;
            case Utils.keys.minus:
                e.changeScale(-1)
            }
        }),
        this.view.find(".js-zoom-in").on("click.zoom", function() {
            e.changeScale(1)
        }),
        this.view.find(".js-zoom-out").on("click.zoom", function() {
            e.changeScale(-1)
        })
    }
    ,
    i.prototype.changeScale = function(t) {
        return TweenMax.to(this, .3, {
            scale: Math.max(this.minScale, Math.min(1, this.scale + .1 * t)),
            onUpdate: this.resizeImage,
            ease: Project.easing
        }),
        this.scale
    }
    ,
    i);
    function i(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i.options = e,
        i.resize = function() {
            i.resizeImage()
        }
        ,
        i.onImageLoaded = function() {
            i.resizeImage()
        }
        ,
        i.resizeImage = function() {
            i.image.css("height", "");
            var t = i.image.height();
            i.minScale = 0 !== t ? window.innerHeight / t : 0,
            i.scale < i.minScale && (i.scale = i.minScale),
            i.image.css("height", Math.max(t, window.innerHeight)),
            TweenMax.set(i.image, {
                scale: i.scale,
                transformOrigin: "0 0"
            }),
            i.image.parent().css({
                height: i.image.height() * i.scale,
                width: i.image.width() * i.scale
            }),
            i.iscroll.refresh()
        }
        ,
        i.view.length && (i.scale = 0,
        i.minScale = 0,
        i.build(),
        i.bind()),
        i
    }
    t.Zoom = e
}(Components = Components || {}),
function(t) {
    var n, e = (n = t.Page,
    __extends(i, n),
    i.prototype.animateIn = function(t) {
        return $body.addClass("is-lightboxpage"),
        n.prototype.animateIn.call(this)
    }
    ,
    i.prototype.animateOut = function() {
        return $body.removeClass("is-lightboxpage"),
        n.prototype.animateOut.call(this)
    }
    ,
    i);
    function i(t, e) {
        var i = n.call(this, t, e) || this;
        return i.view = t,
        i
    }
    t.LightboxPage = e
}(Pages = Pages || {});


