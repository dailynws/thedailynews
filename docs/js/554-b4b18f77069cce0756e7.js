(self.webpackChunk = self.webpackChunk || []).push([[554], {
    8498: function(e, t, n) {
        var o = {
            "./appearance_subscription.js": 2585,
            "./create_follower_subscription.js": 5659,
            "./followee_subscription.js": 6441,
            "channels/appearance_subscription.js": 2585,
            "channels/create_follower_subscription.js": 5659,
            "channels/followee_subscription.js": 6441
        };
        function r(e) {
            var t = i(e);
            return n(t)
        }
        function i(e) {
            if (!n.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return o[e]
        }
        r.keys = function() {
            return Object.keys(o)
        }
        ,
        r.resolve = i,
        e.exports = r,
        r.id = 8498
    },
    1109: function(e, t, n) {
        var o = {
            "./ahoy.coffee": 8459,
            "./aos.js": 2453,
            "./async-intervals.coffee": 6036,
            "./autoscroll.js": 3480,
            "./button-groups.coffee": 4495,
            "./copy.coffee": 7342,
            "./data-disable-with-spinner.js": 5546,
            "./drag-n-drop.coffee": 1981,
            "./html-tooltips.js": 5125,
            "./logo-uploader.js": 8634,
            "./misc.coffee": 8849,
            "./plans.coffee": 1778,
            "./posthog.js": 1966,
            "./prefill_phone_number.coffee": 7410,
            "./routes.js.erb": 1105,
            "./scroll-to.coffee": 9990,
            "./theme.js": 9440,
            "./time-distance.coffee": 5317,
            "./timeago.coffee": 4685,
            "./tooltips.coffee": 5569,
            "./turbo.coffee": 1332,
            "./turbo_betterstack.js": 3676,
            "./useragent.coffee": 4155,
            "common/ahoy.coffee": 8459,
            "common/aos.js": 2453,
            "common/async-intervals.coffee": 6036,
            "common/autoscroll.js": 3480,
            "common/button-groups.coffee": 4495,
            "common/copy.coffee": 7342,
            "common/data-disable-with-spinner.js": 5546,
            "common/drag-n-drop.coffee": 1981,
            "common/html-tooltips.js": 5125,
            "common/logo-uploader.js": 8634,
            "common/misc.coffee": 8849,
            "common/plans.coffee": 1778,
            "common/posthog.js": 1966,
            "common/prefill_phone_number.coffee": 7410,
            "common/routes.js.erb": 1105,
            "common/scroll-to.coffee": 9990,
            "common/theme.js": 9440,
            "common/time-distance.coffee": 5317,
            "common/timeago.coffee": 4685,
            "common/tooltips.coffee": 5569,
            "common/turbo.coffee": 1332,
            "common/turbo_betterstack.js": 3676,
            "common/useragent.coffee": 4155
        };
        function r(e) {
            var t = i(e);
            return n(t)
        }
        function i(e) {
            if (!n.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return o[e]
        }
        r.keys = function() {
            return Object.keys(o)
        }
        ,
        r.resolve = i,
        e.exports = r,
        r.id = 1109
    },
    2585: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(9593)
          , r = n(242)
          , i = n(209);
        window.subscriptions.AppearanceSubscription = o.M.subscriptions.create("AppearanceChannel", {
            initialized: function() {
                this.update = this.update.bind(this),
                this.throttledUpdate = (0,
                i.Z)(this.update, 100)
            },
            refreshOnConnection: !1,
            emitter: (0,
            r.i)(),
            emit: function(e, t) {
                return this.emitter.emit(e, t)
            },
            connected: function() {
                this.install(),
                this.update(),
                this.refreshOnConnection && (this.refreshOnConnection = !1,
                this.refresh())
            },
            disconnected: function() {
                this.uninstall()
            },
            rejected: function() {
                this.uninstall()
            },
            received: function(e) {
                return this.emit("change", e)
            },
            update: function() {
                this.documentIsActive() ? this.appear() : this.away()
            },
            appear: function() {
                var e = {
                    url: window.location.href,
                    state: window.serializeStore(),
                    container_width: window.innerWidth,
                    container_height: window.innerHeight
                };
                this.perform("appear", e)
            },
            away: function() {
                this.perform("away")
            },
            refresh: function() {
                this.perform("refresh") || (this.refreshOnConnection = !0)
            },
            install: function() {
                window.addEventListener("focus", this.update),
                window.addEventListener("blur", this.update),
                document.addEventListener("turbo:load", this.update),
                document.addEventListener("visibilitychange", this.update),
                window.addEventListener("resize", this.throttledUpdate)
            },
            uninstall: function() {
                window.removeEventListener("focus", this.update),
                window.removeEventListener("blur", this.update),
                document.removeEventListener("turbo:load", this.update),
                document.removeEventListener("visibilitychange", this.update),
                window.removeEventListener("resize", this.throttledUpdate)
            },
            documentIsActive: function() {
                return "visible" === document.visibilityState && document.hasFocus()
            }
        })
    },
    9593: function(e, t, n) {
        "use strict";
        n.d(t, {
            M: function() {
                return i
            }
        });
        var o = n(7146);
        window.serializeStore || (window.serializeStore = function() {
            return console.warn("serializeStore was not initialized before calling it"),
            JSON.stringify({
                mainStore: {}
            })
        }
        );
        (0,
        o.zD)();
        var r = new URL(window.cfg.better_stack_url)
          , i = (0,
        o.zD)("wss://" + r.host + "/cable");
        window.subscriptions = {}
    },
    5659: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(9593);
        window.subscriptions.createFollowerSubscription = function(e, t) {
            return o.M.subscriptions.create({
                channel: "FollowerChannel",
                followee: e
            }, {
                received: function(e) {
                    t(e)
                }
            })
        }
    },
    6441: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(9593)
          , r = n(209);
        function i(e) {
            if ("null" === e)
                throw new Error("not a DOM reference");
            for (var t, n = function(e) {
                for (var t = 1, n = e.tagName; e.previousSibling; )
                    1 === (e = e.previousSibling).nodeType && n.toLowerCase() === e.tagName.toLowerCase() && t++;
                return t
            }(e); e.tagName; )
                t = e.localName + (t ? ">" + t : ""),
                e = e.parentNode;
            return t += ":nth-of-type(" + n + ")"
        }
        window.subscriptions.FolloweeSubscription = o.M.subscriptions.create("FolloweeChannel", {
            initialized: function() {
                this.update = this.update.bind(this),
                this.throttledPerform = (0,
                r.Z)(this.perform, 100)
            },
            active: !1,
            connected: function() {
                this.install()
            },
            disconnected: function() {
                this.uninstall()
            },
            rejected: function() {
                this.uninstall()
            },
            received: function(e) {
                "start" === e && (this.active = !0),
                "stop" === e && (this.active = !1)
            },
            update: function(e) {
                if (this.active) {
                    var t = document.activeElement
                      , n = {
                        eventType: e.type,
                        x: e.clientX,
                        y: e.clientY,
                        scrollY: Math.round(window.scrollY),
                        activeElementSelector: i(t),
                        selectionStart: t.selectionStart,
                        selectionEnd: t.selectionEnd,
                        selectionDirection: t.selectionDirection
                    };
                    this.throttledPerform("mousemove", n)
                }
            },
            install: function() {
                document.addEventListener("mousemove", this.update),
                document.addEventListener("scroll", this.update),
                document.addEventListener("focus", this.update),
                document.addEventListener("selectionchange", this.update),
                document.addEventListener("click", this.update)
            },
            uninstall: function() {
                document.removeEventListener("mousemove", this.update),
                document.removeEventListener("scroll", this.update),
                document.removeEventListener("focus", this.update),
                document.removeEventListener("selectionchange", this.update),
                document.removeEventListener("click", this.update)
            }
        })
    },
    4113: function(e, t, n) {
        var o = n(8498);
        o.keys().forEach(o)
    },
    2453: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(3513)
          , r = n.n(o);
        function i() {
            r().init({
                duration: 400,
                once: !0
            })
        }
        i();
        var a = !0;
        document.addEventListener("turbo:load", (function() {
            a ? a = !1 : (document.querySelectorAll(".aos-init, .aos-animate").forEach((function(e) {
                e.classList.remove("aos-init", "aos-animate")
            }
            )),
            i())
        }
        ))
    },
    3480: function() {
        function e(e, n) {
            var o = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (o)
                return (o = o.call(e)).next.bind(o);
            if (Array.isArray(e) || (o = function(e, n) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return t(e, n);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === o && e.constructor && (o = e.constructor.name);
                if ("Map" === o || "Set" === o)
                    return Array.from(e);
                if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                    return t(e, n)
            }(e)) || n && e && "number" === typeof e.length) {
                o && (e = o);
                var r = 0;
                return function() {
                    return r >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[r++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function t(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        document.addEventListener("turbo:load", (function() {
            for (var t, n = e(document.getElementsByClassName("js-autoscroll-horizontal")); !(t = n()).done; ) {
                var o = t.value
                  , r = o.offsetLeft
                  , i = this.getElementsByClassName("js-active");
                if (i.length > 0) {
                    var a = i[0].offsetLeft;
                    o.scrollLeft = a - r
                }
            }
        }
        ))
    },
    5546: function() {
        document.addEventListener("turbo:load", (function() {
            return document.querySelectorAll("[data-disable-with=spinner]").forEach((function(e) {
                var t = e.innerHTML || e.value;
                e.setAttribute("data-original-value", t);
                return e.onclick = e.onsubmit = function(t) {
                    var n = (e = t instanceof Event ? t.target : t).getBoundingClientRect().width + "px"
                      , o = e.getBoundingClientRect().height + "px";
                    e.style.width = n,
                    e.style.height = o
                }
                ,
                e.setAttribute("data-disable-with", '<svg viewBox="0 0 24 24" class="animate-spin h-6 w-4"><g transform="translate(1 1)" fill-rule="nonzero" fill="none"><circle cx="11" cy="11" r="11"></circle><path d="M10.998 22a.846.846 0 0 1 0-1.692 9.308 9.308 0 0 0 0-18.616 9.286 9.286 0 0 0-7.205 3.416.846.846 0 1 1-1.31-1.072A10.978 10.978 0 0 1 10.998 0c6.075 0 11 4.925 11 11s-4.925 11-11 11z" fill="currentColor"></path></g></svg>')
            }
            ))
        }
        ))
    },
    5125: function(e, t, n) {
        var o = n(8291);
        window.initHtmlTooltips = function() {
            o("[data-html-tooltip-id]").each((function() {
                var e = o(this);
                e.tooltip({
                    html: !0,
                    title: o("#" + this.dataset.htmlTooltipId).html(),
                    sanitizeFn: function(e) {
                        return e
                    },
                    trigger: "click hover focus",
                    boundary: "body",
                    placement: this.dataset.placement || "bottom"
                }),
                e.on("inserted.bs.tooltip", (function() {
                    this.dataset.tooltipClass && o("#" + e.attr("aria-describedby")).addClass(this.dataset.tooltipClass)
                }
                )),
                e.on("shown.bs.tooltip", (function() {
                    this.classList.add("hover");
                    var t = null
                      , n = o("#" + e.attr("aria-describedby"));
                    function r() {
                        e.tooltip("hide")
                    }
                    n.on("mouseenter", (function() {
                        clearTimeout(t)
                    }
                    )),
                    n.on("mouseleave", (function() {
                        t = setTimeout(r, 20)
                    }
                    )),
                    e.on("mouseenter", (function() {
                        clearTimeout(t)
                    }
                    )),
                    e.on("mouseleave", (function() {
                        t = setTimeout(r, 20)
                    }
                    )),
                    e.on("hide.bs.tooltip", (function(t) {
                        (e.is(":hover") || n.is(":hover")) && t.preventDefault()
                    }
                    )),
                    o(document).on("touchstart", r)
                }
                ))
            }
            ))
        }
        ,
        document.addEventListener("turbo:load", (function() {
            window.initHtmlTooltips()
        }
        ))
    },
    8634: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return s
            }
        });
        var o = n(7924)
          , r = n.n(o)
          , i = n(4300)
          , a = n.n(i)
          , s = function() {
            function e(e, t) {
                var n = this;
                this.logoFile = null,
                this.logoField = e,
                this.logoInput = t,
                this.uppy = new (r())({
                    autoProceed: !0,
                    restrictions: {
                        allowedFileTypes: ["image/*"]
                    }
                }).use(a(), {
                    companionUrl: "/"
                }),
                this.uppy.on("upload", (function() {
                    n.errorMessages = {}
                }
                )),
                this.uppy.on("upload-success", (function(e, t) {
                    return n.handleUploadSuccess(e)
                }
                )),
                this.uppy.on("upload-error", (function(e) {
                    return n.handleUploadFailure(e)
                }
                ))
            }
            var t = e.prototype;
            return t.onUploadStart = function(e) {
                this.uploadStartCallback = e
            }
            ,
            t.onUploadEnd = function(e) {
                this.uploadEndCallback = e
            }
            ,
            t.onUploadError = function(e) {
                this.uploadErrorCallback = e
            }
            ,
            t.uploadLogo = function(e) {
                var t = e[0];
                t && (this.logoFile = {},
                this.uppy.cancelAll(),
                this.uppy.addFile({
                    source: "file input",
                    name: t.name,
                    type: t.type,
                    data: t
                }),
                this.uploadStartCallback && this.uploadStartCallback())
            }
            ,
            t.handleUploadSuccess = function(e) {
                var t = {
                    id: e.meta.key.match(/^tmp\/(.+)/)[1],
                    storage: "cache",
                    metadata: {
                        size: e.size,
                        filename: e.name,
                        mime_type: e.type
                    }
                };
                this.logoField.value = JSON.stringify(t),
                this.logoInput.value = null,
                this.logoFile = {
                    id: t.id,
                    name: e.name,
                    size: e.size,
                    url: e.xhrUpload.endpoint + "/" + e.meta.key
                },
                this.uploadEndCallback && this.uploadEndCallback()
            }
            ,
            t.handleUploadFailure = function(e) {
                e.error || this.errorMessages[e.id] || (this.errorMessages[e.id] = !0,
                this.logoInput.value = null,
                this.uploadErrorCallback && this.uploadErrorCallback(e.error || "Unknown issue"))
            }
            ,
            e
        }()
    },
    3676: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(2841)
          , r = n.n(o)
          , i = n(8298)
          , a = n(7579);
        function s(e, t, n, o, r, i, a) {
            try {
                var s = e[i](a)
                  , c = s.value
            } catch (u) {
                return void n(u)
            }
            s.done ? t(c) : Promise.resolve(c).then(o, r)
        }
        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function u(e) {
            var t = "function" === typeof Map ? new Map : void 0;
            return u = function(e) {
                if (null === e || (n = e,
                -1 === Function.toString.call(n).indexOf("[native code]")))
                    return e;
                var n;
                if ("function" !== typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if ("undefined" !== typeof t) {
                    if (t.has(e))
                        return t.get(e);
                    t.set(e, o)
                }
                function o() {
                    return l(e, arguments, f(this).constructor)
                }
                return o.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: o,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                d(o, e)
            }
            ,
            u(e)
        }
        function l(e, t, n) {
            return l = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }() ? Reflect.construct : function(e, t, n) {
                var o = [null];
                o.push.apply(o, t);
                var r = new (Function.bind.apply(e, o));
                return n && d(r, n.prototype),
                r
            }
            ,
            l.apply(null, arguments)
        }
        function d(e, t) {
            return d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            d(e, t)
        }
        function f(e) {
            return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            f(e)
        }
        var p = function(e) {
            var t, n;
            function o() {
                return e.apply(this, arguments) || this
            }
            n = e,
            (t = o).prototype = Object.create(n.prototype),
            t.prototype.constructor = t,
            d(t, n);
            var u, l, f, p = o.prototype;
            return p.connectedCallback = function() {
                var e, t = (e = r().mark((function e() {
                    var t, n, o;
                    return r().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return (0,
                                i.connectStreamSource)(this),
                                t = new URL(window.cfg.better_stack_url),
                                n = (0,
                                a.createConsumer)("wss://" + t.host + "/cable"),
                                o = n.subscriptions,
                                e.abrupt("return", o.create(this.channel, {
                                    received: this.dispatchMessageEvent.bind(this)
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                )),
                function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(o, r) {
                        var i = e.apply(t, n);
                        function a(e) {
                            s(i, o, r, a, c, "next", e)
                        }
                        function c(e) {
                            s(i, o, r, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
                );
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            p.disconnectedCallback = function() {
                (0,
                i.disconnectStreamSource)(this),
                this.subscription && this.subscription.unsubscribe()
            }
            ,
            p.dispatchMessageEvent = function(e) {
                var t = new MessageEvent("message",{
                    data: e
                });
                return this.dispatchEvent(t)
            }
            ,
            u = o,
            (l = [{
                key: "channel",
                get: function() {
                    return {
                        channel: this.getAttribute("channel"),
                        signed_stream_name: this.getAttribute("signed-stream-name")
                    }
                }
            }]) && c(u.prototype, l),
            f && c(u, f),
            Object.defineProperty(u, "prototype", {
                writable: !1
            }),
            o
        }(u(HTMLElement));
        customElements.define("turbo-cable-stream-betterstack-source", p)
    },
    6036: function() {
        window.asyncIntervals = [],
        window.clearAsyncIntervals = function() {
            return asyncIntervals.forEach((function(e) {
                return clearInterval(e)
            }
            ))
        }
        ,
        document.addEventListener("turbo:before-visit", window.clearAsyncIntervals)
    },
    4495: function() {
        window.initButtonGroups = function() {
            return document.querySelectorAll('[data-toggle="buttons"] .btn').forEach((function(e) {
                var t;
                return t = e.querySelector('input:not([type="hidden"])'),
                e.classList.toggle("active", t.checked || t.hasAttribute("checked"))
            }
            )),
            document.querySelectorAll('[data-toggle="button"]').forEach((function(e) {
                return e.classList.toggle("active", "true" === e.getAttribute("aria-pressed"))
            }
            ))
        }
        ,
        document.addEventListener("turbo:load", (function() {
            return initButtonGroups()
        }
        ))
    },
    1981: function() {
        var e, t = [].indexOf;
        e = {
            init: function(e, t) {
                return this.container = e,
                this.callback = t,
                this.bind_listeners()
            },
            isSupported: function() {
                var e;
                return e = document.createElement("div"),
                (t.call(e, "draggable") >= 0 || t.call(e, "ondragstart") >= 0 && t.call(e, "ondrop") >= 0) && t.call(window, "FormData") >= 0 && t.call(window, "FileReader") >= 0
            },
            bind_listeners: function() {
                var e = this;
                return this.container.on("drag dragstart dragend dragover dragenter dragleave drop", (function(e) {
                    return e.preventDefault(),
                    e.stopPropagation()
                }
                )).on("dragover dragenter", (function(t) {
                    return e.container.addClass("is-dragover")
                }
                )).on("dragleave dragend drop", (function(t) {
                    return e.container.removeClass("is-dragover")
                }
                )).on("drop", (function(t) {
                    var n;
                    if (n = t.originalEvent.dataTransfer.files,
                    "function" === typeof e.callback)
                        return e.callback(n)
                }
                ))
            }
        },
        window.DragNDrop = e
    },
    8849: function(e, t, n) {
        var o = n(8291);
        document.addEventListener("turbo:load", (function() {
            return o(".js-prevent").on("click", (function(e) {
                return e.preventDefault()
            }
            ))
        }
        ))
    },
    5317: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(9034)
          , r = n.n(o);
        n(6348);
        window.diffHighestMeasures = function(e, t) {
            return void 0 === t && (t = 3),
            (e = e.split(" ")).slice(0, +(2 * t - 1) + 1 || 9e9).join(" ").replace("minutes", "mins")
        }
        ,
        window.initTimeDistance = function() {
            if (document.querySelectorAll(".time-distance").length)
                return document.querySelectorAll(".time-distance").forEach((function(e) {
                    var t, n, o, i, a = e.dataset;
                    return t = a.dateFrom,
                    n = a.dateTo,
                    o = a.measures,
                    n ? (i = diffHighestMeasures(r().preciseDiff(r()(t), r()(n)), o),
                    e.innerText = i) : setInterval((function() {
                        return i = diffHighestMeasures(r().preciseDiff(r()(t), r()()), o),
                        e.innerText = i
                    }
                    ), 1e3)
                }
                ))
        }
        ,
        document.addEventListener("turbo:load", (function() {
            return initTimeDistance()
        }
        ))
    },
    1554: function(e, t, n) {
        "use strict";
        n.d(t, {
            s: function() {
                return a
            }
        });
        var o = n(4290)
          , r = n.n(o)
          , i = (n(9908),
        n(8291));
        r().start(),
        n(4113);
        var a = function(e) {
            return e.keys().forEach(e)
        };
        window.$ = i,
        window.Rails = r(),
        a(n(1109))
    }
}]);
//# sourceMappingURL=554-b4b18f77069cce0756e7.js.map
