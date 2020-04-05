(this.webpackJsonpcovid19india = this.webpackJsonpcovid19india || []).push([
    [0], {
        169: function(e, t, a) {
            e.exports = a(198)
        },
        174: function(e, t, a) {},
        198: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                c = a(99),
                i = a.n(c),
                s = a(22),
                l = a(17),
                o = a(216),
                d = a(217),
                m = a(218),
                u = a(219),
                h = (a(174), a(23)),
                f = a.n(h),
                p = a(31),
                v = a(2),
                g = a(19),
                E = a.n(g),
                b = a(220),
                y = {
                    "01": "Jan",
                    "02": "Feb",
                    "03": "Mar",
                    "04": "Apr",
                    "05": "May",
                    "06": "Jun",
                    "07": "Jul",
                    "08": "Aug",
                    "09": "Sep",
                    10: "Oct",
                    11: "Nov",
                    12: "Dec"
                },
                j = function(e) {
                    var t = e.slice(0, 2),
                        a = e.slice(3, 5),
                        n = e.slice(6, 10),
                        r = e.slice(11);
                    return "".concat(n, "-").concat(a, "-").concat(t, "T").concat(r, "+05:30")
                },
                w = function(e) {
                    var t = e.slice(0, 2),
                        a = e.slice(3, 5),
                        n = e.slice(11);
                    return "".concat(t, " ").concat(y[a], ", ").concat(n.slice(0, 5), " IST")
                },
                N = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = new Date;
                    t.setHours(0, 0, 0, 0);
                    var a = ["dailyconfirmed", "dailydeceased", "dailyrecovered", "totalconfirmed", "totaldeceased", "totalrecovered"];
                    return e.filter((function(e) {
                        return a.every((function(t) {
                            return e[t]
                        })) && e.date
                    })).filter((function(e) {
                        return a.every((function(t) {
                            return Number(e[t]) >= 0
                        }))
                    })).filter((function(e) {
                        var a = t.getFullYear();
                        return new Date(e.date + a) < t
                    }))
                },
                O = a(28),
                k = a(24),
                D = a(199),
                C = a(200);
            var x = function(e) {
                var t = Object(n.useState)(e.state),
                    a = Object(v.a)(t, 2),
                    c = a[0],
                    i = a[1],
                    s = Object(n.useState)(e.districts),
                    l = Object(v.a)(s, 2),
                    o = l[0],
                    d = l[1],
                    m = Object(n.useState)(e.districts),
                    u = Object(v.a)(m, 2),
                    h = u[0],
                    f = u[1],
                    p = Object(n.useState)({
                        sortColumn: localStorage.getItem("district.sortColumn") ? localStorage.getItem("district.sortColumn") : "confirmed",
                        isAscending: !!localStorage.getItem("district.isAscending") && "true" === localStorage.getItem("district.isAscending")
                    }),
                    g = Object(v.a)(p, 2),
                    E = g[0],
                    y = g[1];
                Object(n.useEffect)((function() {
                    i(e.state)
                }), [e.state]), Object(n.useEffect)((function() {
                    d(e.districts), f(e.districts)
                }), [e.districts]);
                var N = function() {
                        e.handleReveal(e.state.state)
                    },
                    O = Object(n.useCallback)((function(e) {
                        var t = {};
                        e && (Object.keys(e).sort((function(t, a) {
                            var n = E.sortColumn,
                                r = "district" === n ? t : parseInt(e[t].confirmed),
                                c = "district" === n ? a : parseInt(e[a].confirmed),
                                i = r > c || r === c && t > a ? 1 : -1;
                            return E.isAscending ? i : -1 * i
                        })).forEach((function(a) {
                            t[a] = e[a]
                        })), f(t))
                    }), [E.isAscending, E.sortColumn]),
                    k = function(e) {
                        var t = E.sortColumn === e ? !E.isAscending : "district" === E.sortColumn;
                        y({
                            sortColumn: e,
                            isAscending: t
                        }), localStorage.setItem("district.sortColumn", e), localStorage.setItem("district.isAscending", t)
                    };
                return Object(n.useEffect)((function() {
                    O(o)
                }), [o, E, O]), r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
                    className: "dropdown ".concat(e.reveal ? "rotateRightDown" : "rotateDownRight"),
                    style: {
                        display: e.total ? "none" : ""
                    },
                    onClick: function() {
                        N()
                    }
                }, r.a.createElement(D.a, null)), r.a.createElement("tr", {
                    className: e.total ? "state is-total" : "state",
                    onMouseEnter: function() {
                        var t;
                        return null === (t = e.onHighlightState) || void 0 === t ? void 0 : t.call(e, c, e.index)
                    },
                    onMouseLeave: function() {
                        var t;
                        return null === (t = e.onHighlightState) || void 0 === t ? void 0 : t.call(e)
                    },
                    touchstart: function() {
                        var t;
                        return null === (t = e.onHighlightState) || void 0 === t ? void 0 : t.call(e, c, e.index)
                    },
                    onClick: e.total ? null : N,
                    style: {
                        background:  ""
                    }
                }, r.a.createElement("td", {
                    style: {
                        fontWeight: 600
                    }
                }, c.state), r.a.createElement("td", null, r.a.createElement("span", {
                    className: "deltas",
                    style: {
                        color: "#ff073a"
                    }
                }, c.deltaconfirmed > 0 && r.a.createElement(C.a, null), c.deltaconfirmed > 0 ? "".concat(c.deltaconfirmed) : ""), 0 === parseInt(c.confirmed) ? "-" : c.confirmed), r.a.createElement("td", {
                    style: {
                        color: 0 === parseInt(c.active) ? "#B5B5B5" : "inherit"
                    }
                }, 0 === parseInt(c.active) ? "-" : c.active), r.a.createElement("td", {
                    style: {
                        color: 0 === parseInt(c.recovered) ? "#B5B5B5" : "inherit"
                    }
                }, r.a.createElement("span", {
                    className: "deltas",
                    style: {
                        color: "#28a745"
                    }
                }, c.deltarecovered > 0 && r.a.createElement(C.a, null), c.deltarecovered > 0 ? "".concat(c.deltarecovered) : ""), 0 === parseInt(c.recovered) ? "-" : c.recovered), r.a.createElement("td", {
                    style: {
                        color: 0 === parseInt(c.deaths) ? "#B5B5B5" : "inherit"
                    }
                }, r.a.createElement("span", {
                    className: "deltas",
                    style: {
                        color: "#6c757d"
                    }
                }, c.deltadeaths > 0 && r.a.createElement(C.a, null), c.deltadeaths > 0 ? "".concat(c.deltadeaths) : ""), 0 === parseInt(c.deaths) ? "-" : c.deaths)), r.a.createElement("tr", {
                    className: "state-last-update",
                    style: {
                        display: e.reveal && !e.total ? "" : "none"
                    }
                }, r.a.createElement("td", {
                    colSpan: 2
                }, r.a.createElement("div", {
                    className: "last-update"
                }, r.a.createElement("h6", null, "Last Updated\xa0"), r.a.createElement("h6", {
                    title: isNaN(Date.parse(j(e.state.lastupdatedtime))) ? "" : w(e.state.lastupdatedtime)
                }, isNaN(Date.parse(j(e.state.lastupdatedtime))) ? "" : "".concat(Object(b.a)(new Date(j(e.state.lastupdatedtime)), new Date), " Ago"))))), r.a.createElement("tr", {
                    className: "district-heading",
                    style: {
                        display: e.reveal && !e.total ? "" : "none"
                    }
                }, r.a.createElement("td", {
                    onClick: function(e) {
                        return k("district")
                    }
                }, r.a.createElement("div", {
                    className: "heading-content"
                }, r.a.createElement("abbr", {
                    title: "District"
                }, "District"), r.a.createElement("div", {
                    style: {
                        display: "district" === E.sortColumn ? "initial" : "none"
                    }
                }, E.isAscending ? r.a.createElement("div", {
                    className: "arrow-up"
                }) : r.a.createElement("div", {
                    className: "arrow-down"
                })))), r.a.createElement("td", {
                    onClick: function(e) {
                        return k("confirmed")
                    }
                }, r.a.createElement("div", {
                    className: "heading-content"
                }, r.a.createElement("abbr", {
                    className: "".concat(window.innerWidth <= 769 ? "is-cherry" : ""),
                    title: "Confirmed"
                }, window.innerWidth <= 769 ? window.innerWidth <= 375 ? "C" : "Cnfmd" : "Confirmed"), r.a.createElement("div", {
                    style: {
                        display: "confirmed" === E.sortColumn ? "initial" : "none"
                    }
                }, E.isAscending ? r.a.createElement("div", {
                    className: "arrow-up"
                }) : r.a.createElement("div", {
                    className: "arrow-down"
                }))))), h && Object.keys(h).filter((function(e) {
                    return "unknown" !== e.toLowerCase()
                })).map((function(t, a) {
                    return "unknown" !== t.toLowerCase() ? r.a.createElement("tr", {
                        key: a,
                        className: "district",
                        style: {
                            display: e.reveal && !e.total ? "" : "none",
                            background: a % 2 === 0 ? "#f8f9fa" : ""
                        },
                        onMouseEnter: function() {
                            var a;
                            return null === (a = e.onHighlightDistrict) || void 0 === a ? void 0 : a.call(e, t, c, e.index)
                        },
                        onMouseLeave: function() {
                            var t;
                            return null === (t = e.onHighlightDistrict) || void 0 === t ? void 0 : t.call(e)
                        },
                        touchstart: function() {
                            var a;
                            return null === (a = e.onHighlightDistrict) || void 0 === a ? void 0 : a.call(e, t, c, e.index)
                        }
                    }, r.a.createElement("td", {
                        style: {
                            fontWeight: 600
                        }
                    }, t), r.a.createElement("td", null, r.a.createElement("span", {
                        className: "deltas",
                        style: {
                            color: "#ff073a"
                        }
                    }, h[t].delta.confirmed > 0 && r.a.createElement(C.a, null), h[t].delta.confirmed > 0 ? "".concat(h[t].delta.confirmed) : ""), h[t].confirmed)) : null
                })), (null === h || void 0 === h ? void 0 : h.Unknown) && r.a.createElement("tr", {
                    className: "district",
                    style: {
                        display: e.reveal && !e.total ? "" : "none"
                    }
                }, r.a.createElement("td", {
                    style: {
                        fontWeight: 600
                    }
                }, "Unknown"), r.a.createElement("td", null, r.a.createElement("span", {
                    className: "deltas",
                    style: {
                        color: "#ff073a"
                    }
                }, h.Unknown.delta.confirmed > 0 && r.a.createElement(C.a, null), h.Unknown.delta.confirmed > 0 ? "".concat(h.Unknown.delta.confirmed) : ""), h.Unknown.confirmed)), r.a.createElement("tr", {
                    className: "spacer",
                    style: {
                        display: e.reveal && !e.total ? "" : "none"
                    }
                }, r.a.createElement("td", null), r.a.createElement("td", null), r.a.createElement("td", null)))
            };
            var I = function(e) {
                var t = Object(n.useState)(e.states),
                    a = Object(v.a)(t, 2),
                    c = a[0],
                    i = a[1],
                    l = Object(n.useState)({}),
                    o = Object(v.a)(l, 2),
                    d = o[0],
                    m = o[1],
                    u = Object(n.useState)({}),
                    h = Object(v.a)(u, 2),
                    f = h[0],
                    p = h[1],
                    g = Object(n.useState)(0),
                    E = Object(v.a)(g, 2),
                    b = E[0],
                    y = E[1],
                    j = Object(n.useState)({
                        sortColumn: localStorage.getItem("state.sortColumn") ? localStorage.getItem("state.sortColumn") : "confirmed",
                        isAscending: !!localStorage.getItem("state.isAscending") && "true" === localStorage.getItem("state.isAscending")
                    }),
                    w = Object(v.a)(j, 2),
                    N = w[0],
                    D = w[1];
                Object(n.useEffect)((function() {
                    !0 === e.summary ? i(e.states.slice(0, 9)) : i(e.states)
                }), [e.states, e.summary]), Object(n.useEffect)((function() {
                    e.states[0] && m(e.states.reduce((function(e, t) {
                        return Object(k.a)({}, e, Object(O.a)({}, t.state, !1))
                    }), {}))
                }), [e.states]), Object(n.useEffect)((function() {
                    c.length > 0 && y(c.slice(1).filter((function(e) {
                        return e && e.confirmed > 0
                    })).length)
                }), [c]), Object(n.useEffect)((function() {
                    p(e.stateDistrictWiseData)
                }), [e.stateDistrictWiseData]);
                var C = function(e, t) {
                        var a = e.currentTarget.querySelector("abbr").getAttribute("title").toLowerCase(),
                            n = N.sortColumn === a ? !N.isAscending : "state" === N.sortColumn;
                        D({
                            sortColumn: a,
                            isAscending: n
                        }), localStorage.setItem("state.sortColumn", a), localStorage.setItem("state.isAscending", n)
                    },
                    I = function(e) {
                        m(Object(k.a)({}, d, Object(O.a)({}, e, !d[e])))
                    };
                return function(e, t) {
                    var a = c.splice(0, 1);
                    c.sort((function(e, t) {
                        var a = N.sortColumn,
                            n = e[a],
                            r = t[a];
                        return "state" !== a && (n = parseInt(e[a]), r = parseInt(t[a])), N.isAscending ? n > r || n === r && e.state > t.state ? 1 : -1 : n < r || n === r && e.state > t.state ? 1 : -1
                    })), c.unshift(a[0])
                }(), r.a.createElement(r.a.Fragment, null, r.a.createElement("h5", {
                    className: "table-fineprint fadeInUp",
                    style: {
                        animationDelay: "1s",
                        display:"none"
                    }
                }, "Compiled from State Govt. numbers ", r.a.createElement(s.b, {
                    to: "/faq"
                }, "Know More")), r.a.createElement("table", {
                    className: "table fadeInUp",
                    style: {
                        animationDelay: "1s"
                    }
                }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", {
                    className: "sticky state-heading",
                    onClick: function(e) {
                        return C(e)
                    }
                }, r.a.createElement("div", {
                    className: "heading-content"
                }, r.a.createElement("abbr", {
                    title: "State"
                }, "State/UT"), r.a.createElement("div", {
                    style: {
                        display: "state" === N.sortColumn ? "initial" : "none"
                    }
                }, N.isAscending ? r.a.createElement("div", {
                    className: "arrow-up"
                }) : r.a.createElement("div", {
                    className: "arrow-down"
                })))), r.a.createElement("th", {
                    className: "sticky",
                    onClick: function(e) {
                        return C(e)
                    }
                }, r.a.createElement("div", {
                    className: "heading-content"
                }, r.a.createElement("abbr", {
                    className: "".concat(window.innerWidth <= 769 ? "is-cherry" : ""),
                    title: "Confirmed"
                }, window.innerWidth <= 769 ? window.innerWidth <= 375 ? "C" : "Cnfmd" : "Confirmed"), r.a.createElement("div", {
                    style: {
                        display: "confirmed" === N.sortColumn ? "initial" : "none"
                    }
                }, N.isAscending ? r.a.createElement("div", {
                    className: "arrow-up"
                }) : r.a.createElement("div", {
                    className: "arrow-down"
                })))), r.a.createElement("th", {
                    className: "sticky",
                    onClick: function(e) {
                        return C(e)
                    }
                }, r.a.createElement("div", {
                    className: "heading-content"
                }, r.a.createElement("abbr", {
                    className: "".concat(window.innerWidth <= 769 ? "is-blue" : ""),
                    title: "Active"
                }, window.innerWidth <= 769 ? window.innerWidth <= 375 ? "A" : "Actv" : "Active"), r.a.createElement("div", {
                    style: {
                        display: "active" === N.sortColumn ? "initial" : "none"
                    }
                }, N.isAscending ? r.a.createElement("div", {
                    className: "arrow-up"
                }) : r.a.createElement("div", {
                    className: "arrow-down"
                })))), r.a.createElement("th", {
                    className: "sticky",
                    onClick: function(e) {
                        return C(e)
                    }
                }, r.a.createElement("div", {
                    className: "heading-content"
                }, r.a.createElement("abbr", {
                    className: "".concat(window.innerWidth <= 769 ? "is-green" : ""),
                    title: "Recovered"
                }, window.innerWidth <= 769 ? window.innerWidth <= 375 ? "R" : "Rcvrd" : "Recovered"), r.a.createElement("div", {
                    className: "recovered" === N.sortColumn ? "sort-black" : ""
                }), r.a.createElement("div", {
                    style: {
                        display: "recovered" === N.sortColumn ? "initial" : "none"
                    }
                }, N.isAscending ? r.a.createElement("div", {
                    className: "arrow-up"
                }) : r.a.createElement("div", {
                    className: "arrow-down"
                })))), r.a.createElement("th", {
                    className: "sticky",
                    onClick: function(e) {
                        return C(e)
                    }
                }, r.a.createElement("div", {
                    className: "heading-content"
                }, r.a.createElement("abbr", {
                    className: "".concat(window.innerWidth <= 769 ? "is-gray" : ""),
                    title: "Deaths"
                }, window.innerWidth <= 769 ? window.innerWidth <= 375 ? "D" : "Dcsd" : "Deceased"), r.a.createElement("div", {
                    style: {
                        display: "deaths" === N.sortColumn ? "initial" : "none"
                    }
                }, N.isAscending ? r.a.createElement("div", {
                    className: "arrow-up"
                }) : r.a.createElement("div", {
                    className: "arrow-down"
                })))))), r.a.createElement("tbody", null, c.map((function(t, a) {
                    return 0 !== a && t.confirmed > 0 ? r.a.createElement(x, {
                        key: a,
                        index: a,
                        state: t,
                        total: !1,
                        reveal: d[t.state],
                        districts: Object.keys(f).length - 1 > 0 ? f[t.state].districtData : [],
                        onHighlightState: e.onHighlightState,
                        onHighlightDistrict: e.onHighlightDistrict,
                        handleReveal: I
                    }) : null
                }))), r.a.createElement("tbody", null, c.length > 1 && !1 === e.summary && r.a.createElement(x, {
                    key: 0,
                    state: c[0],
                    total: !0
                }))), r.a.createElement("h5", {
                    className: "table-fineprint fadeInUp",
                    style: {
                        animationDelay: "1s"
                    }
                }, b, " States/UTS Affected"))
            };
            var S = function(e) {
                    var t = Object(n.useState)(e.data),
                        a = Object(v.a)(t, 2),
                        c = a[0],
                        i = a[1],
                        s = Object(n.useState)(0),
                        l = Object(v.a)(s, 2),
                        o = l[0],
                        d = l[1],
                        m = Object(n.useState)(0),
                        u = Object(v.a)(m, 2),
                        h = u[0],
                        f = u[1],
                        p = Object(n.useState)(0),
                        g = Object(v.a)(p, 2),
                        E = g[0],
                        b = g[1],
                        y = Object(n.useState)(0),
                        j = Object(v.a)(y, 2),
                        w = j[0],
                        N = j[1],
                        O = Object(n.useState)(0),
                        k = Object(v.a)(O, 2),
                        D = k[0],
                        C = k[1];
                    return Object(n.useEffect)((function() {
                        i(e.data)
                    }), [e.data]), Object(n.useEffect)((function() {
                        ! function() {
                            var e = 0,
                                t = 0,
                                a = 0,
                                n = 0,
                                r = {};
                            c.forEach((function(c, i) {
                                0 !== i ? (e += parseInt(c.confirmed), t += parseInt(c.active), a += parseInt(c.recovered), n += parseInt(c.deaths)) : r = {
                                    confirmed: parseInt(c.deltaconfirmed),
                                    deaths: parseInt(c.deltadeaths),
                                    recovered: parseInt(c.deltarecovered)
                                }
                            })), d(e), f(t), b(a), N(n), C(r)
                        }()
                    }), [c]), r.a.createElement("div", {
                        className: "Level fadeInUp",
                        style: {
                            animationDelay: "0.8s",
                            marginBottom: "30px",
                            display:"inline",
                            textAlign:"center",
                            width:"100%"
                        }
                    }, r.a.createElement("div", {
                        className: "level-item is-cherry",
                         style: {
                            display:"inline-block",
                            width:"45%",
                            marginLeft:"0px"
                        }
                    }, r.a.createElement("h5", null, "Confirmed"), r.a.createElement("h4", null, "[", D ? D.confirmed >= 0 ? "+" + D.confirmed : "+0" : "", "]"), r.a.createElement("h1", null, o, " ")), r.a.createElement("div", {
                        className: "level-item is-blue",
                         style: {
                            display:"inline-block",
                            width:"45%"
                        }
                    }, r.a.createElement("h5", {
                        className: "heading"
                    }, "Active"), r.a.createElement("h4", null, "\xa0"), r.a.createElement("h1", {
                        className: "title has-text-info"
                    }, h)), r.a.createElement("div", {
                        className: "level-item is-green",
                         style: {
                            display:"inline-block",
                            width:"45%"
                        }
                    }, r.a.createElement("h5", {
                        className: "heading"
                    }, "Recovered"), r.a.createElement("h4", null, "[", D ? D.recovered >= 0 ? "+" + D.recovered : "+0" : "", "]"), r.a.createElement("h1", {
                        className: "title has-text-success"
                    }, E, " ")), r.a.createElement("div", {
                        className: "level-item is-gray",
                         style: {
                            display:"inline-block",
                            width:"45%",
                            marginRight:"0px"
                        }
                    }, r.a.createElement("h5", {
                        className: "heading"
                    }, "Deceased"), r.a.createElement("h4", null, "[", D ? D.deaths >= 0 ? "+" + D.deaths : "+0" : "", "]"), r.a.createElement("h1", {
                        className: "title has-text-grey"
                    }, w)))
                },
                T = a(1),
                A = a(103),
                M = a(41),
                F = "country",
                _ = "state",
                R = {
                    country: "st_nm",
                    state: "district"
                };
            var U = function(e) {
                    var t = e.statistic,
                        a = e.mapData,
                        c = e.setHoveredRegion,
                        i = e.mapMeta,
                        s = e.changeMap,
                        l = e.selectedRegion,
                        o = Object(n.useRef)(null),
                        d = Object(n.useState)(0),
                        m = Object(v.a)(d, 2),
                        u = m[0],
                        h = m[1],
                        g = Object(n.useCallback)((function(e) {
                            T.s("svg#chart > *").remove();
                            var n = R[i.mapType],
                                r = T.r(o.current),
                                l = +r.attr("width"),
                                d = +r.attr("height"),
                                m = M.a(e, e.objects[i.graphObjectName]),
                                u = T.g();
                            i.mapType === F ? u.fitSize([l, d], m) : u.fitExtent([
                                [90, 20],
                                [l, d]
                            ], m);
                            var h = T.h(u),
                                f = null;
                            r.append("g").attr("class", "states").selectAll("path").data(m.features).enter().append("path").attr("class", "path-region").attr("fill", (function(e) {
                                var r = parseInt(a[e.properties[n]]) || 0;
                                return 0 === r ? "#ffffff" : T.i(.8 * r / (t.maxConfirmed || .001))
                            })).attr("d", h).attr("pointer-events", "all").on("mouseover", (function(e) {
                                ! function(e) {
                                    try {
                                        c(e, i)
                                    } catch (t) {
                                        console.log("err", t)
                                    }
                                }(e.properties[n]);
                                var t = T.d.target;
                                T.r(t.parentNode.appendChild(t)).attr("class", "map-hover")
                            })).on("mouseleave", (function(e) {
                                var t = T.d.target;
                                T.r(t).attr("class", "path-region map-default"), f === e && (f = null)
                            })).on("touchstart", (function(e) {
                                f = f === e ? null : e
                            })).on("click", (function(e) {
                                f || i.mapType !== _ && s(e.properties[n], i.mapType)
                            })).style("cursor", "pointer").append("title").text((function(e) {
                                var r = a[e.properties[n]] || 0;
                                return Number(parseFloat(r / (t.total || .001) * 100).toFixed(2)).toString() + "% from " + E(e.properties[n])
                            })), r.append("path").attr("stroke", "#ff073a20").attr("fill", "none").attr("stroke-width", 2).attr("d", h(M.b(e, e.objects[i.graphObjectName])))
                        }), [a, i, t.total, t.maxConfirmed, s, c]),
                        E = function(e) {
                            e = e.toLowerCase().split(" ");
                            for (var t = 0; t < e.length; t++) e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
                            return e.join(" ")
                        },
                        b = Object(n.useCallback)((function() {
                            var e, a, n = T.r(o.current),
                                r = T.p(T.i).domain([0, t.maxConfirmed / .8 || 10]);
                            a = function(e) {
                                var t = e.i,
                                    a = e.genLength,
                                    n = e.generatedLabels;
                                e.labelDelimiter;
                                if (t === a - 1) {
                                    var r = Math.floor(n[t]);
                                    return "".concat(r, "+")
                                }
                                var c = 1 + Math.floor(n[t]),
                                    i = Math.floor(n[t + 1]);
                                return "".concat(c, " - ").concat(i)
                            };
                            var c = Math.floor((t.maxConfirmed < 6 ? 6 : t.maxConfirmed) / 5);
                            e = Array.from(Array(6).keys()).map((function(e) {
                                return e * c
                            })), n.append("g").attr("class", "legendLinear").attr("transform", "translate(1, 335)");
                            var i = Object(A.a)().shapeWidth(36).shapeHeight(10).cells(e).titleWidth(3).labels(a).title("Confirmed Cases").orient("vertical").scale(r);
                            n.select(".legendLinear").call(i).selectAll("text").style("font-size", "10px")
                        }), [t.maxConfirmed]);
                    return Object(n.useEffect)((function() {
                        Object(p.a)(f.a.mark((function e() {
                            var a;
                            return f.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, T.j(i.geoDataFile);
                                    case 2:
                                        a = e.sent, t && o.current && (g(a), b(), h((function(e) {
                                            return e + 1
                                        })));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [i.geoDataFile, t, b, g]), Object(n.useEffect)((function() {
                        var e;
                        e = l, T.s(".path-region").classed("map-hover", (function(t, a, n) {
                            var r = "district" in t.properties ? R.state : R.country;
                            return e === t.properties[r] && (n[a].parentNode.appendChild(n[a]), !0)
                        }))
                    }), [u, l]), r.a.createElement("div", {
                        className: "svg-parent"
                    }, r.a.createElement("svg", {
                        id: "chart",
                        width: "480",
                        height: "450",
                        viewBox: "0 0 480 450",
                        preserveAspectRatio: "xMidYMid meet",
                        ref: o
                    }))
                },
                W = {
                    India: {
                        name: "India",
                        geoDataFile: "".concat("/maps", "/india.json"),
                        mapType: F,
                        graphObjectName: "india"
                    },
                    "Andaman and Nicobar Islands": {
                        name: "Andaman and Nicobar Islands",
                        geoDataFile: "".concat("/maps", "/andamannicobarislands.json"),
                        mapType: _,
                        graphObjectName: "andamannicobarislands_district"
                    },
                    "Arunachal Pradesh": {
                        name: "Arunachal Pradesh",
                        geoDataFile: "".concat("/maps", "/arunachalpradesh.json"),
                        mapType: _,
                        graphObjectName: "arunachalpradesh_district"
                    },
                    "Andhra Pradesh": {
                        name: "Andhra Pradesh",
                        geoDataFile: "".concat("/maps", "/andhrapradesh.json"),
                        mapType: _,
                        graphObjectName: "andhrapradesh_district"
                    },
                    Assam: {
                        name: "Assam",
                        geoDataFile: "".concat("/maps", "/assam.json"),
                        mapType: _,
                        graphObjectName: "assam_district"
                    },
                    Bihar: {
                        name: "Bihar",
                        geoDataFile: "".concat("/maps", "/bihar.json"),
                        mapType: _,
                        graphObjectName: "bihar_district"
                    },
                    Chhattisgarh: {
                        name: "Chhattisgarh",
                        geoDataFile: "".concat("/maps", "/chhattisgarh.json"),
                        mapType: _,
                        graphObjectName: "chhattisgarh_district"
                    },
                    Delhi: {
                        name: "Delhi",
                        geoDataFile: "".concat("/maps", "/delhi.json"),
                        mapType: _,
                        graphObjectName: "delhi_district"
                    },
                    Karnataka: {
                        name: "Karnataka",
                        geoDataFile: "".concat("/maps", "/karnataka.json"),
                        mapType: _,
                        graphObjectName: "karnataka_district"
                    },
                    Kerala: {
                        name: "Kerala",
                        geoDataFile: "".concat("/maps", "/kerala.json"),
                        mapType: _,
                        graphObjectName: "kerala_district"
                    },
                    Goa: {
                        name: "Goa",
                        geoDataFile: "".concat("/maps", "/goa.json"),
                        mapType: _,
                        graphObjectName: "goa_district"
                    },
                    Gujarat: {
                        name: "Gujarat",
                        geoDataFile: "".concat("/maps", "/gujarat.json"),
                        mapType: _,
                        graphObjectName: "gujarat_district"
                    },
                    Haryana: {
                        name: "Haryana",
                        geoDataFile: "".concat("/maps", "/haryana.json"),
                        mapType: _,
                        graphObjectName: "haryana_district"
                    },
                    "Himachal Pradesh": {
                        name: "Himachal Pradesh",
                        geoDataFile: "".concat("/maps", "/himachalpradesh.json"),
                        mapType: _,
                        graphObjectName: "himachalpradesh_district"
                    },
                    "Jammu and Kashmir": {
                        name: "Jammu and Kashmir",
                        geoDataFile: "".concat("/maps", "/jammukashmir.json"),
                        mapType: _,
                        graphObjectName: "jammukashmir_district"
                    },
                    Jharkhand: {
                        name: "Jharkhand",
                        geoDataFile: "".concat("/maps", "/jharkhand.json"),
                        mapType: _,
                        graphObjectName: "jharkhand_district"
                    },
                    Ladakh: {
                        name: "Ladakh",
                        geoDataFile: "".concat("/maps", "/ladakh.json"),
                        mapType: _,
                        graphObjectName: "ladakh_district"
                    },
                    "Madhya Pradesh": {
                        name: "Madhya Pradesh",
                        geoDataFile: "".concat("/maps", "/madhyapradesh.json"),
                        mapType: _,
                        graphObjectName: "madhyapradesh_district"
                    },
                    Maharashtra: {
                        name: "Maharashtra",
                        geoDataFile: "".concat("/maps", "/maharashtra.json"),
                        mapType: _,
                        graphObjectName: "maharashtra_district"
                    },
                    Manipur: {
                        name: "Manipur",
                        geoDataFile: "".concat("/maps", "/manipur.json"),
                        mapType: _,
                        graphObjectName: "manipur_district"
                    },
                    Meghalaya: {
                        name: "Meghalaya",
                        geoDataFile: "".concat("/maps", "/meghalaya.json"),
                        mapType: _,
                        graphObjectName: "meghalaya_district"
                    },
                    Mizoram: {
                        name: "Mizoram",
                        geoDataFile: "".concat("/maps", "/mizoram.json"),
                        mapType: _,
                        graphObjectName: "mizoram_district"
                    },
                    Nagaland: {
                        name: "Nagaland",
                        geoDataFile: "".concat("/maps", "/nagaland.json"),
                        mapType: _,
                        graphObjectName: "nagaland_district"
                    },
                    Odisha: {
                        name: "Odisha",
                        geoDataFile: "".concat("/maps", "/odisha.json"),
                        mapType: _,
                        graphObjectName: "odisha_district"
                    },
                    Punjab: {
                        name: "Punjab",
                        geoDataFile: "".concat("/maps", "/punjab.json"),
                        mapType: _,
                        graphObjectName: "punjab_district"
                    },
                    Rajasthan: {
                        name: "Rajasthan",
                        geoDataFile: "".concat("/maps", "/rajasthan.json"),
                        mapType: _,
                        graphObjectName: "rajasthan_district"
                    },
                    Sikkim: {
                        name: "Sikkim",
                        geoDataFile: "".concat("/maps", "/sikkim.json"),
                        mapType: _,
                        graphObjectName: "sikkim_district"
                    },
                    "Tamil Nadu": {
                        name: "Tamil Nadu",
                        geoDataFile: "".concat("/maps", "/tamil-nadu.json"),
                        mapType: _,
                        graphObjectName: "tamilnadu_district"
                    },
                    Telangana: {
                        name: "Telangana",
                        geoDataFile: "".concat("/maps", "/telangana.json"),
                        mapType: _,
                        graphObjectName: "telangana_district"
                    },
                    Tripura: {
                        name: "Tripura",
                        geoDataFile: "".concat("/maps", "/tripura.json"),
                        mapType: _,
                        graphObjectName: "tripura_district"
                    },
                    Uttarakhand: {
                        name: "Uttarakhand",
                        geoDataFile: "".concat("/maps", "/uttarakhand.json"),
                        mapType: _,
                        graphObjectName: "uttarakhand_district"
                    },
                    "Uttar Pradesh": {
                        name: "Uttar Pradesh",
                        geoDataFile: "".concat("/maps", "/uttarpradesh.json"),
                        mapType: _,
                        graphObjectName: "uttarpradesh_district"
                    },
                    "West Bengal": {
                        name: "West Bengal",
                        geoDataFile: "".concat("/maps", "/westbengal.json"),
                        mapType: _,
                        graphObjectName: "westbengal_district"
                    }
                },
                H = function(e) {
                    var t = e.states,
                        a = e.stateDistrictWiseData,
                        c = e.regionHighlighted,
                        i = Object(n.useState)({}),
                        s = Object(v.a)(i, 2),
                        l = s[0],
                        o = s[1],
                        d = Object(n.useState)({}),
                        m = Object(v.a)(d, 2),
                        u = m[0],
                        h = m[1],
                        f = Object(n.useState)(W.India),
                        p = Object(v.a)(f, 2),
                        g = p[0],
                        E = p[1];
                    if (Object(n.useEffect)((function() {
                            var e = I(t[1]);
                            h(e)
                        }), [t]), !u) return null;
                    var y = Object(n.useMemo)((function() {
                            var e = {
                                    total: 0,
                                    maxConfirmed: 0
                                },
                                n = {};
                            if (g.mapType === F) n = t.reduce((function(t, a) {
                                if ("Total" === a.state) return t;
                                var n = parseInt(a.confirmed);
                                return e.total += n, n > e.maxConfirmed && (e.maxConfirmed = n), t[a.state] = a.confirmed, t
                            }), {});
                            else if (g.mapType === _) {
                                var r = (a[g.name] || {
                                    districtData: {}
                                }).districtData;
                                n = Object.keys(r).reduce((function(t, a) {
                                    var n = parseInt(r[a].confirmed);
                                    return e.total += n, n > e.maxConfirmed && (e.maxConfirmed = n), t[a] = r[a].confirmed, t
                                }), {})
                            }
                            return [e, n]
                        }), [g, t, a]),
                        N = Object(v.a)(y, 2),
                        O = N[0],
                        D = N[1],
                        C = Object(n.useCallback)((function(e, n) {
                            if (n.mapType === F) h(I(t.filter((function(t) {
                                return e === t.state
                            }))[0]));
                            else if (n.mapType === _) {
                                var r = (a[n.name] || {
                                    districtData: {}
                                }).districtData[e];
                                r || (r = {
                                    confirmed: 0,
                                    active: 0,
                                    deaths: 0,
                                    recovered: 0
                                }), h(x(r, e))
                            }
                        }), [a, t]);
                    Object(n.useEffect)((function() {
                        if (void 0 !== c)
                            if (null !== c)
                                if (!("district" in c)) {
                                    E(W.India);
                                    var e = I(c.state);
                                    h(e), o(e.name)
                                } else {
                                    var t = W[c.state.state];
                                    if (!t) return;
                                    E(t), C(c.district, t), o(c.district)
                                }
                        else o(null)
                    }), [c, g.mapType, C]);
                    var x = function(e, t) {
                            if (e) {
                                var a = Object(k.a)({}, e);
                                return a.name || (a.name = t), a
                            }
                        },
                        I = function(e) {
                            if (e) {
                                var t = Object(k.a)({}, e);
                                return t.name || (t.name = t.state), t
                            }
                        },
                        S = Object(n.useCallback)((function(e) {
                            var n = W[e];
                            if (n)
                                if (E(n), n.mapType === F) C(t[1].state, n);
                                else if (n.mapType === _) {
                                var r = (a[e] || {
                                        districtData: {}
                                    }).districtData,
                                    c = Object.keys(r).filter((function(e) {
                                        return "Unknown" !== e
                                    })).sort((function(e, t) {
                                        return r[t].confirmed - r[e].confirmed
                                    }))[0];
                                C(c, n)
                            }
                        }), [C, a, t]),
                        T = u.name,
                        A = u.lastupdatedtime;
                    return r.a.createElement("div", {
                        className: "MapExplorer fadeInUp",
                        style: {
                            animationDelay: "1.2s"
                        }
                    }, r.a.createElement("div", {
                        className: "header"
                    }, r.a.createElement("h1", null, g.name), r.a.createElement("h6", null, window.innerWidth <= 769 ? "Tap" : "Hover", " over a", " ", g.mapType === F ? "state/ut" : "district", " ", "for more details"), window.innerWidth <= 769 && r.a.createElement("h6", {
                        style: {
                            marginTop: "1rem"
                        }
                    }, r.a.createElement("span", {
                        style: {
                            fontWeight: 900,
                            color: "#fff",
                            background: "#000",
                            padding: "0.25rem",
                            borderRadius: "2.5px",
                            marginRight: "0.25rem"
                        }
                    }, "Update!"), " ", "Tap twice on states to view districts!")), r.a.createElement("div", {
                        className: "map-stats"
                    }, r.a.createElement("div", {
                        className: "stats"
                    }, r.a.createElement("h5", null, "Confirmed"), r.a.createElement("div", {
                        className: "stats-bottom"
                    }, r.a.createElement("h1", null, u.confirmed), r.a.createElement("h6", null))), r.a.createElement("div", {
                        className: "stats is-blue"
                    }, r.a.createElement("h5", null, "Active"), r.a.createElement("div", {
                        className: "stats-bottom"
                    }, r.a.createElement("h1", null, u.active || ""), r.a.createElement("h6", null))), r.a.createElement("div", {
                        className: "stats is-green"
                    }, r.a.createElement("h5", null, "Recovered"), r.a.createElement("div", {
                        className: "stats-bottom"
                    }, r.a.createElement("h1", null, u.recovered || ""), r.a.createElement("h6", null))), r.a.createElement("div", {
                        className: "stats is-gray"
                    }, r.a.createElement("h5", null, "Deceased"), r.a.createElement("div", {
                        className: "stats-bottom"
                    }, r.a.createElement("h1", null, u.deaths || ""), r.a.createElement("h6", null)))), r.a.createElement("div", {
                        className: "meta"
                    }, r.a.createElement("h2", null, T), A && r.a.createElement("div", {
                        className: "last-update ".concat(g.mapType === _ ? "district-last-update" : "state-last-update")
                    }, r.a.createElement("h6", null, "Last Updated"), r.a.createElement("h3", {
                        title: isNaN(Date.parse(j(A))) ? "" : w(A)
                    }, isNaN(Date.parse(j(A))) ? "" : Object(b.a)(new Date(j(A)), new Date) + " Ago")), g.mapType === _ && D.Unknown > 0 ? r.a.createElement("h4", {
                        className: "unknown"
                    }, "Districts unknown for ", D.Unknown, " people") : null, g.mapType === _ ? r.a.createElement("div", {
                        className: "button back-button",
                        onClick: function() {
                            return S("India")
                        }
                    }, "Back") : null), r.a.createElement(U, {
                        statistic: O,
                        mapMeta: g,
                        mapData: D,
                        setHoveredRegion: C,
                        changeMap: S,
                        selectedRegion: l
                    }))
                };
            var L = function(e) {
                var t = Object(n.useState)([]),
                    a = Object(v.a)(t, 2),
                    c = a[0],
                    i = a[1],
                    s = Object(n.useState)({}),
                    l = Object(v.a)(s, 2),
                    o = l[0],
                    d = l[1],
                    m = Object(n.useState)(10),
                    u = Object(v.a)(m, 2),
                    h = u[0],
                    f = u[1],
                    p = Object(n.useState)(e.mode),
                    g = Object(v.a)(p, 2),
                    E = g[0],
                    b = g[1],
                    y = Object(n.useState)(e.logMode),
                    j = Object(v.a)(y, 2),
                    w = j[0],
                    N = j[1],
                    O = Object(n.useState)(-1),
                    k = Object(v.a)(O, 2),
                    D = k[0],
                    C = k[1],
                    x = Object(n.useRef)(null),
                    I = Object(n.useRef)(null),
                    S = Object(n.useRef)(null),
                    A = Object(n.useRef)(null),
                    M = Object(n.useRef)(null),
                    F = Object(n.useRef)(null);
                Object(n.useEffect)((function() {
                    e.timeseries.length > 1 && i(e.timeseries)
                }), [e.timeseries]), Object(n.useEffect)((function() {
                    b(e.mode), C((function(e) {
                        return e + 1
                    }))
                }), [e.mode]), Object(n.useEffect)((function() {
                    N(e.logMode), C((function(e) {
                        return e + 1
                    }))
                }), [e.logMode]);
                var _ = Object(n.useCallback)((function(e) {
                        var t = e;
                        d(e[e.length - 1]), f(e.length - 1);
                        var a = T.r(x.current),
                            n = T.r(I.current),
                            r = T.r(S.current),
                            c = T.r(A.current),
                            i = T.r(M.current),
                            s = T.r(F.current),
                            l = 0,
                            o = 20,
                            m = 650 - o - 20,
                            u = 200 - l - 50,
                            h = new Date(t[0].date + "2020");
                        h.setDate(h.getDate() - 1);
                        var p = new Date(t[e.length - 1].date + "2020");
                        p.setDate(p.getDate() + 1);
                        var g = T.q().domain([h, p]).range([o, m]),
                            b = T.n().domain([0, e.length]).range([o, m]),
                            y = [a, n, r, c, i, s],
                            j = ["totalconfirmed", "totalrecovered", "totaldeceased", "dailyconfirmed", "dailyrecovered", "dailydeceased"],
                            N = ["#ff073a", "#28a745", "#6c757d", "#ff073a", "#28a745", "#6c757d"],
                            O = new Set(["totalconfirmed", "totalrecovered", "totaldeceased"]),
                            k = j.reduce((function(e, a) {
                                return e[a] = T.l(t, (function(e) {
                                    return +e[a]
                                })), e
                            }), {}),
                            D = Object.entries(k).map((function(e) {
                                var t = Object(v.a)(e, 2),
                                    a = t[0],
                                    n = t[1],
                                    r = function(e) {
                                        return w && O.has(a) ? T.o().domain([1, 1.1 * e]).nice() : T.n().domain([0, 1.1 * e]).nice()
                                    };
                                return r(E ? a.match("^total") ? k.totalconfirmed : k.dailyconfirmed : n).range([u, l])
                            })),
                            C = function(e, t) {
                                var a = D[e],
                                    n = j[e];
                                return a(w && O.has(n) ? Math.max(1, t[n]) : t[n])
                            },
                            _ = y.map((function(a, n) {
                                return a.append("g").append("circle").attr("fill", N[n]).attr("stroke", N[n]).attr("r", 5).attr("cx", g(new Date(t[e.length - 1].date + "2020"))).attr("cy", C(n, t[e.length - 1]))
                            }));

                        function R() {
                            d(t[e.length - 1]), f(e.length - 1), _.forEach((function(a, n) {
                                a.attr("cx", g(new Date(t[e.length - 1].date + "2020"))).attr("cy", C(n, t[e.length - 1]))
                            }))
                        }

                        function U() {
                            var a = T.m(this)[0],
                                n = Math.round(b.invert(a));
                            if (0 <= n && n < e.length) {
                                var r = t[n];
                                d(r), f(n), _.forEach((function(e, t) {
                                    e.attr("cx", g(new Date(r.date + "2020"))).attr("cy", C(t, r))
                                }))
                            }
                        }
                        y.forEach((function(e, a) {
                            e.append("g").attr("transform", "translate(0," + u + ")").attr("class", "axis").call(T.a(g)), e.append("g").attr("transform", "translate(".concat(m, ", ", 0, ")")).attr("class", "axis").call(T.b(D[a]).ticks(function(e) {
                                var t = j[e];
                                return w && O.has(t) ? Math.ceil(Math.log10(D[e].domain()[1])) : 5
                            }(a)).tickPadding(5).tickFormat(T.f("~s"))), e.on("mousemove", U).on("touchmove", U).on("mouseout", R).on("touchend", R);
                            var n = e.selectAll(".dot").data(t).enter().append("circle").attr("fill", N[a]).attr("stroke", N[a]).attr("cursor", "pointer").attr("cx", (function(e) {
                                return g(new Date(e.date + "2020"))
                            })).attr("cy", (function(e) {
                                return C(a, e)
                            }));
                            a < Math.floor(y.length / 2) ? (e.append("path").datum(t).attr("fill", "none").attr("stroke", N[a] + "99").attr("stroke-width", 5).attr("cursor", "pointer").attr("d", T.k().x((function(e) {
                                return g(new Date(e.date + "2020"))
                            })).y((function(e) {
                                return C(a, e)
                            })).curve(T.c)), n.attr("r", 3)) : (e.selectAll("stem-line").data(t).enter().append("line").attr("x1", (function(e) {
                                return g(new Date(e.date + "2020"))
                            })).attr("y1", u).attr("x2", (function(e) {
                                return g(new Date(e.date + "2020"))
                            })).attr("y2", (function(e) {
                                return C(a, e)
                            })).style("stroke", N[a] + "99").style("stroke-width", 4), n.attr("r", 2))
                        }))
                    }), [w, E]),
                    R = Object(n.useCallback)((function() {
                        for (var e = [x, I, S, A, M, F], t = 0; t < e.length; t++) T.r(e[t].current).selectAll("*").remove()
                    }), []);
                Object(n.useEffect)((function() {
                    D > 0 && R()
                }), [D, R]), Object(n.useEffect)((function() {
                    c.length > 1 && _(c)
                }), [c, _]);
                var U = new Date;
                U.setDate(U.getDate() - 1);
                var W = new Date(o.date + "2020"),
                    H = W.getMonth() === U.getMonth() && W.getDate() === U.getDate();
                return r.a.createElement("div", {
                    className: "TimeSeries-Parent fadeInUp",
                    style: {
                        animationDelay: "1.7s"
                    }
                }, r.a.createElement("div", {
                    className: "timeseries",
                    style: {
                        display: 1 === e.type ? "flex" : "none"
                    }
                }, r.a.createElement("div", {
                    className: "svg-parent"
                }, r.a.createElement("div", {
                    className: "stats"
                }, r.a.createElement("h5", null, "Confirmed"), r.a.createElement("h5", null, H ? "".concat(o.date, " Yesterday") : o.date), r.a.createElement("div", {
                    className: "stats-bottom"
                }, r.a.createElement("h2", null, o.totalconfirmed), r.a.createElement("h6", null, c.length > 0 && 0 !== h ? c[h].totalconfirmed - c[h - 1].totalconfirmed >= 0 ? "+" + (c[h].totalconfirmed - c[h - 1].totalconfirmed) : c[h].totalconfirmed - c[h - 1].totalconfirmed : ""))), r.a.createElement("svg", {
                    ref: x,
                    width: "650",
                    height: "200",
                    viewBox: "0 0 650 200",
                    preserveAspectRatio: "xMidYMid meet"
                })), r.a.createElement("div", {
                    className: "svg-parent is-green"
                }, r.a.createElement("div", {
                    className: "stats is-green"
                }, r.a.createElement("h5", null, "Recovered"), r.a.createElement("h5", null, H ? "".concat(o.date, " Yesterday") : o.date), r.a.createElement("div", {
                    className: "stats-bottom"
                }, r.a.createElement("h2", null, o.totalrecovered), r.a.createElement("h6", null, c.length > 0 && 0 !== h ? c[h].totalrecovered - c[h - 1].totalrecovered >= 0 ? "+" + (c[h].totalrecovered - c[h - 1].totalrecovered) : c[h].totalrecovered - c[h - 1].totalrecovered : ""))), r.a.createElement("svg", {
                    ref: I,
                    width: "650",
                    height: "200",
                    viewBox: "0 0 650 200",
                    preserveAspectRatio: "xMidYMid meet"
                })), r.a.createElement("div", {
                    className: "svg-parent is-gray"
                }, r.a.createElement("div", {
                    className: "stats is-gray"
                }, r.a.createElement("h5", null, "Deceased"), r.a.createElement("h5", null, H ? "".concat(o.date, " Yesterday") : o.date), r.a.createElement("div", {
                    className: "stats-bottom"
                }, r.a.createElement("h2", null, o.totaldeceased), r.a.createElement("h6", null, c.length > 0 && 0 !== h ? c[h].totaldeceased - c[h - 1].totaldeceased >= 0 ? "+" + (c[h].totaldeceased - c[h - 1].totaldeceased) : c[h].totaldeceased - c[h - 1].totaldeceased : ""))), r.a.createElement("svg", {
                    ref: S,
                    width: "650",
                    height: "200",
                    viewBox: "0 0 650 200",
                    preserveAspectRatio: "xMidYMid meet"
                }))), r.a.createElement("div", {
                    className: "timeseries",
                    style: {
                        display: 2 === e.type ? "flex" : "none"
                    }
                }, r.a.createElement("div", {
                    className: "svg-parent"
                }, r.a.createElement("div", {
                    className: "stats"
                }, r.a.createElement("h5", null, "Confirmed"), r.a.createElement("h5", null, H ? "".concat(o.date, " Yesterday") : o.date), r.a.createElement("div", {
                    className: "stats-bottom"
                }, r.a.createElement("h2", null, o.dailyconfirmed), r.a.createElement("h6", null, c.length > 0 && 0 !== h ? c[h].dailyconfirmed - c[h - 1].dailyconfirmed >= 0 ? "+" + (c[h].dailyconfirmed - c[h - 1].dailyconfirmed) : c[h].dailyconfirmed - c[h - 1].dailyconfirmed : ""))), r.a.createElement("svg", {
                    ref: A,
                    width: "650",
                    height: "200",
                    viewBox: "0 0 650 200",
                    preserveAspectRatio: "xMidYMid meet"
                })), r.a.createElement("div", {
                    className: "svg-parent is-green"
                }, r.a.createElement("div", {
                    className: "stats is-green"
                }, r.a.createElement("h5", null, "Recovered"), r.a.createElement("h5", null, H ? "".concat(o.date, " Yesterday") : o.date), r.a.createElement("div", {
                    className: "stats-bottom"
                }, r.a.createElement("h2", null, o.dailyrecovered), r.a.createElement("h6", null, c.length > 0 && 0 !== h ? c[h].dailyrecovered - c[h - 1].dailyrecovered >= 0 ? "+" + (c[h].dailyrecovered - c[h - 1].dailyrecovered) : c[h].dailyrecovered - c[h - 1].dailyrecovered : ""))), r.a.createElement("svg", {
                    ref: M,
                    width: "650",
                    height: "200",
                    viewBox: "0 0 650 200",
                    preserveAspectRatio: "xMidYMid meet"
                })), r.a.createElement("div", {
                    className: "svg-parent is-gray"
                }, r.a.createElement("div", {
                    className: "stats is-gray"
                }, r.a.createElement("h5", null, "Deceased"), r.a.createElement("h5", null, H ? "".concat(o.date, " Yesterday") : o.date), r.a.createElement("div", {
                    className: "stats-bottom"
                }, r.a.createElement("h2", null, o.dailydeceased), r.a.createElement("h6", null, c.length > 0 && 0 !== h ? c[h].dailydeceased - c[h - 1].dailydeceased >= 0 ? "+" + (c[h].dailydeceased - c[h - 1].dailydeceased) : c[h].dailydeceased - c[h - 1].dailydeceased : ""))), r.a.createElement("svg", {
                    ref: F,
                    width: "650",
                    height: "200",
                    viewBox: "0 0 650 200",
                    preserveAspectRatio: "xMidYMid meet"
                }))))
            };
            var B = function(e) {
                var t = Object(n.useState)([]),
                    a = Object(v.a)(t, 2),
                    c = a[0],
                    i = a[1],
                    s = Object(n.useRef)(null),
                    l = Object(n.useRef)(null),
                    o = Object(n.useRef)(null),
                    d = Object(n.useRef)(null);
                Object(n.useEffect)((function() {
                    e.timeseries.length > 1 && i(e.timeseries.slice(e.timeseries.length - 20))
                }), [e.timeseries]);
                var m = Object(n.useCallback)((function(t) {
                    if (t.length <= 1) return 0;
                    var a = t,
                        n = T.r(s.current),
                        r = 100 - 0 - 10,
                        c = 100 - 30 - 30,
                        i = T.r(l.current),
                        m = T.r(o.current),
                        u = T.r(d.current),
                        h = T.q().domain(T.e(a, (function(e) {
                            return new Date(e.date + "2020")
                        }))).range([0, r]),
                        f = T.n().domain([0, T.l(a, (function(e) {
                            return +e.dailyconfirmed
                        }))]).range([c, 0]),
                        p = n.append("path").datum(a).attr("fill", "none").attr("stroke", "#ff073a99").attr("stroke-width", 3).attr("cursor", "pointer").attr("d", T.k().x((function(e) {
                            return h(new Date(e.date + "2020"))
                        })).y((function(e, t) {
                            return f(e.dailyconfirmed)
                        })).curve(T.c)),
                        v = p.node().getTotalLength();
                    p.attr("stroke-dasharray", v + " " + v).attr("stroke-dashoffset", v).transition().duration(e.animate ? 2e3 : 0).attr("stroke-dashoffset", 0), n.selectAll(".dot").data(a.slice(a.length - 1)).enter().append("circle").attr("fill", "#ff073a").attr("stroke", "#ff073a").attr("r", 2).attr("cursor", "pointer").attr("cx", (function(e) {
                        return h(new Date(e.date + "2020"))
                    })).attr("cy", (function(e) {
                        return f(e.dailyconfirmed)
                    })).on("mouseover", (function(e) {
                        T.r(T.d.target).attr("r", "5")
                    })).on("mouseout", (function(e) {
                        T.r(T.d.target).attr("r", "2")
                    })).style("opacity", 0).transition().duration(e.animate ? 3e3 : 0).style("opacity", 1);
                    var g = i.append("path").datum(a).attr("fill", "none").attr("cursor", "pointer").attr("stroke", "#007bff99").attr("stroke-width", 3).attr("cursor", "pointer").attr("cursor", "pointer").attr("d", T.k().x((function(e) {
                            return h(new Date(e.date + "2020"))
                        })).y((function(e, t) {
                            return f(e.dailyconfirmed - e.dailyrecovered - e.dailydeceased)
                        })).curve(T.c)),
                        E = g.node().getTotalLength();
                    g.attr("stroke-dasharray", E + " " + E).attr("stroke-dashoffset", E).transition().duration(e.animate ? 2e3 : 0).attr("stroke-dashoffset", 0), i.selectAll(".dot").data(a.slice(a.length - 1)).enter().append("circle").attr("fill", "#007bff").attr("stroke", "#007bff").attr("r", 2).attr("cursor", "pointer").attr("cx", (function(e) {
                        return h(new Date(e.date + "2020"))
                    })).attr("cy", (function(e) {
                        return f(e.dailyconfirmed - e.dailyrecovered - e.dailydeceased)
                    })).on("mouseover", (function(e) {
                        T.r(T.d.target).attr("r", "5")
                    })).on("mouseout", (function(e) {
                        T.r(T.d.target).attr("r", "2")
                    })).style("opacity", 0).transition().duration(e.animate ? 3e3 : 0).style("opacity", 1);
                    var b = m.append("path").datum(a).attr("fill", "none").attr("stroke", "#28a74599").attr("stroke-width", 3).attr("cursor", "pointer").attr("d", T.k().x((function(e) {
                            return h(new Date(e.date + "2020"))
                        })).y((function(e, t) {
                            return f(e.dailyrecovered)
                        })).curve(T.c)),
                        y = p.node().getTotalLength();
                    b.attr("stroke-dasharray", y + " " + y).attr("stroke-dashoffset", y).transition().duration(e.animate ? 2e3 : 0).attr("stroke-dashoffset", 0), m.selectAll(".dot").data(a.slice(a.length - 1)).enter().append("circle").attr("fill", "#28a745").attr("stroke", "#28a745").attr("r", 2).attr("cursor", "pointer").attr("cx", (function(e) {
                        return h(new Date(e.date + "2020"))
                    })).attr("cy", (function(e) {
                        return f(e.dailyrecovered)
                    })).on("mouseover", (function(e) {
                        T.r(T.d.target).attr("r", "5")
                    })).on("mouseout", (function(e) {
                        T.r(T.d.target).attr("r", "2")
                    })).style("opacity", 0).transition().duration(e.animate ? 3e3 : 0).style("opacity", 1);
                    var j = u.append("path").datum(a).attr("fill", "none").attr("cursor", "pointer").attr("stroke", "#6c757d99").attr("stroke-width", 3).attr("cursor", "pointer").attr("cursor", "pointer").attr("d", T.k().x((function(e) {
                            return h(new Date(e.date + "2020"))
                        })).y((function(e, t) {
                            return f(e.dailydeceased)
                        })).curve(T.c)),
                        w = j.node().getTotalLength();
                    j.attr("stroke-dasharray", w + " " + w).attr("stroke-dashoffset", w).transition().duration(e.animate ? 2e3 : 0).attr("stroke-dashoffset", 0), u.selectAll(".dot").data(a.slice(a.length - 1)).enter().append("circle").attr("fill", "#6c757d").attr("stroke", "#6c757d").attr("r", 2).attr("cursor", "pointer").attr("cx", (function(e) {
                        return h(new Date(e.date + "2020"))
                    })).attr("cy", (function(e) {
                        return f(e.dailydeceased)
                    })).on("mouseover", (function(e) {
                        T.r(T.d.target).attr("r", "5")
                    })).on("mouseout", (function(e) {
                        T.r(T.d.target).attr("r", "2")
                    })).style("opacity", 0).transition().duration(e.animate ? 3e3 : 0).style("opacity", 1)
                }), [e.animate]);
                return Object(n.useEffect)((function() {
                    m(c)
                }), [c, m]), r.a.createElement("div", {
                    className: "Minigraph",
                     style: {
                        display: "none"
                    }
                }, r.a.createElement("div", {
                    className: "svg-parent fadeInUp",
                    style: {
                        animationDelay: "0.6s"
                    }
                }, r.a.createElement("svg", {
                    ref: s,
                    width: "100",
                    height: "100",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "xMidYMid meet"
                })), r.a.createElement("div", {
                    className: "svg-parent is-blue fadeInUp",
                    style: {
                        animationDelay: "0.7s"
                    }
                }, r.a.createElement("svg", {
                    ref: l,
                    width: "100",
                    height: "100",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "xMidYMid meet"
                })), r.a.createElement("div", {
                    className: "svg-parent is-green fadeInUp",
                    style: {
                        animationDelay: "0.8s"
                    }
                }, r.a.createElement("svg", {
                    ref: o,
                    width: "100",
                    height: "100",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "xMidYMid meet"
                })), r.a.createElement("div", {
                    className: "svg-parent is-gray fadeInUp",
                    style: {
                        animationDelay: "0.9s"
                    }
                }, r.a.createElement("svg", {
                    ref: d,
                    width: "100",
                    height: "100",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "xMidYMid meet"
                })))
            };
            var P = function(e) {
                var t = Object(n.useState)([]),
                    a = Object(v.a)(t, 2),
                    c = a[0],
                    i = a[1],
                    s = Object(n.useState)({}),
                    l = Object(v.a)(s, 2),
                    o = l[0],
                    d = l[1],
                    m = Object(n.useState)(!1),
                    u = Object(v.a)(m, 2),
                    h = u[0],
                    g = u[1],
                    y = Object(n.useState)(1),
                    O = Object(v.a)(y, 2),
                    k = O[0],
                    D = O[1],
                    C = Object(n.useState)(""),
                    x = Object(v.a)(C, 2),
                    T = x[0],
                    A = x[1],
                    M = Object(n.useState)([]),
                    F = Object(v.a)(M, 2),
                    _ = F[0],
                    R = F[1],
                    U = Object(n.useState)(!0),
                    W = Object(v.a)(U, 2),
                    P = W[0],
                    Y = W[1],
                    q = Object(n.useState)(!1),
                    J = Object(v.a)(q, 2),
                    G = J[0],
                    K = J[1],
                    z = Object(n.useState)(void 0),
                    V = Object(v.a)(z, 2),
                    Q = V[0],
                    $ = V[1];
                Object(n.useEffect)((function() {
                    !1 === h && X()
                }), [h]);
                var X = function() {
                    var e = Object(p.a)(f.a.mark((function e() {
                        var t, a, n, r;
                        return f.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Promise.all([E.a.get("https://api.covid19india.org/data.json"), E.a.get("https://api.covid19india.org/state_district_wise.json")]);
                                case 3:
                                    t = e.sent, a = Object(v.a)(t, 2), n = a[0], r = a[1], i(n.data.statewise), R(N(n.data.cases_time_series)), A(n.data.statewise[0].lastupdatedtime), d(r.data), g(!0), e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(0), console.log(e.t0);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 14]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return r.a.createElement("div", {
                    className: "Home",
                      style: {
                        backgroundColor: "black"
                    }
                }, r.a.createElement("div", {
                    className: "home-left"
                }, r.a.createElement("div", {
                    className: "header fadeInUp",
                    style: {
                        animationDelay: "0.5s"
                    }
                }, r.a.createElement("div", {
                    className: "header-mid"
                }, r.a.createElement("div", {
                    className: "titles"
                }, r.a.createElement("h1", null, "India CORONA Tracker"), r.a.createElement("h6", {
                    style: {
                        fontWeight: 600
                    }
                }, " ")), r.a.createElement("div", {
                    className: "last-update"
                }, r.a.createElement("h6", null, "Last Updated"), r.a.createElement("h6", {
                    style: {
                        color: "#28a745",
                        fontWeight: 600
                    }
                }, isNaN(Date.parse(j(T))) ? "" : Object(b.a)(new Date(j(T)), new Date) + " Ago"), r.a.createElement("h6", {
                    style: {
                        color: "#28a745",
                        fontWeight: 600
                    }
                }, isNaN(Date.parse(j(T))) ? "" : w(T))))), c.length > 1 && r.a.createElement(S, {
                    data: c
                }), r.a.createElement(B, {
                    timeseries: _,
                    animate: !0
                }), r.a.createElement(I, {
                    states: c,
                    summary: !1,
                    stateDistrictWiseData: o,
                    onHighlightState: function(e, t) {
                        $(e || t ? {
                            state: e,
                            index: t
                        } : null)
                    },
                    onHighlightDistrict: function(e, t, a) {
                        $(t || a || e ? {
                            district: e,
                            state: t,
                            index: a
                        } : null)
                    }
                }))
                // , 
                // r.a.createElement("div", {
                //     className: "home-right"
                // }, h && r.a.createElement(r.a.Fragment, null, r.a.createElement(H, {
                //     states: c,
                //     stateDistrictWiseData: o,
                //     regionHighlighted: Q
                // }), r.a.createElement("div", {
                //     className: "timeseries-header fadeInUp",
                //     style: {
                //         animationDelay: "1.5s"
                //     }
                // }, r.a.createElement("h1", null, "Spread Trends"), r.a.createElement("div", {
                //     className: "tabs"
                // }, r.a.createElement("div", {
                //     className: "tab ".concat(1 === k ? "focused" : ""),
                //     onClick: function() {
                //         D(1)
                //     }
                // }, r.a.createElement("h4", null, "Cumulative")), r.a.createElement("div", {
                //     className: "tab ".concat(2 === k ? "focused" : ""),
                //     onClick: function() {
                //         D(2)
                //     }
                // }, r.a.createElement("h4", null, "Daily"))), r.a.createElement("div", {
                //     className: "scale-modes"
                // }, r.a.createElement("label", null, "Scale Modes"), r.a.createElement("div", {
                //     className: "timeseries-mode"
                // }, r.a.createElement("label", {
                //     htmlFor: "timeseries-mode"
                // }, "Uniform"), r.a.createElement("input", {
                //     type: "checkbox",
                //     checked: P,
                //     className: "switch",
                //     "aria-label": "Checked by default to scale uniformly.",
                //     onChange: function(e) {
                //         Y(!P)
                //     }
                // })), r.a.createElement("div", {
                //     className: "timeseries-logmode ".concat(1 !== k ? "disabled" : "")
                // }, r.a.createElement("label", {
                //     htmlFor: "timeseries-logmode"
                // }, "Logarithmic"), r.a.createElement("input", {
                //     type: "checkbox",
                //     checked: 1 === k && G,
                //     className: "switch",
                //     disabled: 1 !== k,
                //     onChange: function(e) {
                //         K(!G)
                //     }
                // })))), r.a.createElement(L, {
                //     timeseries: _,
                //     type: k,
                //     mode: P,
                //     logMode: G
                // })))
                )
            };
            var Y = function(e) {
                return "/summary" !== window.location.pathname ? r.a.createElement("div", {
                    className: "Navbar",
                    style: {
                        animationDelay: "0.5s",
                        height: "/clusters" === window.location.pathname ? "2.5rem" : "",
                        transition: "all 0.3s ease-in-out",
                        display:"none"
                    }
                },  r.a.createElement("div", {
                    className: "navbar-left"
                }, e.pages.map((function(e, t) {
                    return r.a.createElement(s.b, {
                        to: e.pageLink,
                        key: t
                    }, r.a.createElement("span", (a = e.pageLink, n = e.animationDelayForNavbar, {
                        className: "fadeInUp ".concat(window.location.pathname === a ? "focused" : ""),
                        style: {
                            animationDelay: "".concat(n, "s")
                        }
                    }), e.displayName));
                    var a, n
                }))), r.a.createElement("div", {
                    className: "navbar-right"
                })) : r.a.createElement("div", null)
            };
            var q = function(e) {
                return r.a.createElement("div", {
                    className: "Links"
                }, r.a.createElement("div", {
                    className: "link fadeInUp",
                    style: {
                        animationDelay: "0.2s"
                    }
                }, r.a.createElement("h3", null, "HELPLINE NUMBERS [by State]"), r.a.createElement("a", {
                    href: "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf")), r.a.createElement("div", {
                    className: "link fadeInUp",
                    style: {
                        animationDelay: "0.3s"
                    }
                }, r.a.createElement("h3", null, "Ministry of Health and Family Welfare, Gov. of India"), r.a.createElement("a", {
                    href: "https://www.mohfw.gov.in/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "https://www.mohfw.gov.in/")), r.a.createElement("div", {
                    className: "link fadeInUp",
                    style: {
                        animationDelay: "0.4s"
                    }
                }, r.a.createElement("h3", null, "WHO : COVID-19 Home Page"), r.a.createElement("a", {
                    href: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "https://www.who.int/emergencies/diseases/novel-coronavirus-2019")), r.a.createElement("div", {
                    className: "link fadeInUp",
                    style: {
                        animationDelay: "0.5s"
                    }
                }, r.a.createElement("h3", null, "CDC"), r.a.createElement("a", {
                    href: "https://www.cdc.gov/coronavirus/2019-ncov/faq.html",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "https://www.cdc.gov/coronavirus/2019-ncov/faq.html")), r.a.createElement("div", {
                    className: "link fadeInUp",
                    style: {
                        animationDelay: "0.6s"
                    }
                }, r.a.createElement("h3", null, "Crowdsourced list of Resources & Essentials from across India"), r.a.createElement("a", {
                    href: "https://bit.ly/covid19resourcelist",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "https://bit.ly/covid19resourcelist")), r.a.createElement("div", {
                    className: "link fadeInUp",
                    style: {
                        animationDelay: "0.7s"
                    }
                }, r.a.createElement("h3", null, "COVID-19 Global Tracker"), r.a.createElement("a", {
                    href: "https://coronavirus.thebaselab.com/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "https://coronavirus.thebaselab.com/")))
            };
            var J = function(e) {
                var t = Object(n.useState)([]),
                    a = Object(v.a)(t, 2),
                    c = a[0],
                    i = a[1];
                Object(n.useEffect)((function() {
                    s()
                }), []);
                var s = function() {
                    E.a.get("https://api.covid19india.org/website_data.json").then((function(e) {
                        i(e.data.faq)
                    })).catch((function(e) {
                        console.log(e)
                    }))
                };
                return r.a.createElement("div", {
                    className: "FAQ"
                }, c.map((function(e, t) {
                    return r.a.createElement("div", {
                        key: t,
                        className: "faq fadeInUp",
                        style: {
                            animationDelay: "".concat(.5 + .1 * t, "s")
                        }
                    }, r.a.createElement("h2", {
                        className: "question"
                    }, e.question), r.a.createElement("h2", {
                        className: "answer",
                        dangerouslySetInnerHTML: {
                            __html: e.answer
                        }
                    }))
                })))
            };
            var G = function(e) {
                    var t = Object(n.useState)([]),
                        a = Object(v.a)(t, 2),
                        c = a[0],
                        i = a[1],
                        s = Object(n.useState)(),
                        l = Object(v.a)(s, 2),
                        o = l[0],
                        d = l[1];
                    Object(n.useEffect)((function() {
                        E.a.get("https://api.covid19india.org/website_data.json").then((function(e) {
                            i(e.data.factoids || []), d(e.data.factoids[Math.floor(Math.random() * (e.data.factoids.length - 1 - 0) + 0)] || "")
                        })).catch((function(e) {
                            console.log(e)
                        }))
                    }), []);
                    var m = Object(n.useCallback)((function(e, t) {
                        var a = Math.random() * (t - e) + e;
                        d(c[Math.floor(a)])
                    }), [c]);
                    return Object(n.useEffect)((function() {
                        var e = setInterval((function() {
                            m(0, c.length - 1)
                        }), 1e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), [m, c])
                    , r.a.createElement("div", {
                        onClick: function() {
                            return m(0, c.length - 1)
                        },
                        className: "Banner fadeInUp",
                        style: {
                            animationDelay: "0.2s",
                            display: "none"
                        }
                    }
                    , r.a.createElement("div", {
                        className: "snippet"
                    }, o ? o.banner : "", " \xa0")
                    )
                },
                K = a(10).createBrowserHistory;
            var z = function() {
                var e = [{
                    pageLink: "/",
                    view: P,
                    displayName: "Home",
                    animationDelayForNavbar: .2
                }];
                return r.a.createElement("div", {
                    className: "App"
                }, r.a.createElement(s.a, {
                    history: K
                }, r.a.createElement(l.b, {
                    render: function(t) {
                        var a = t.location;
                        return r.a.createElement("div", {
                            className: "Almighty-Router"
                        }, r.a.createElement(Y, {
                            pages: e
                        }), r.a.createElement(G, null), r.a.createElement(l.b, {
                            exact: !0,
                            path: "/",
                            render: function() {
                                return r.a.createElement(l.a, {
                                    to: "/"
                                })
                            }
                        }), r.a.createElement(l.d, {
                            location: a
                        }, e.map((function(e, t) {
                            return r.a.createElement(l.b, {
                                exact: !0,
                                path: e.pageLink,
                                component: e.view,
                                key: t
                            })
                        })), r.a.createElement(l.a, {
                            to: "/"
                        })))
                    }
                })), r.a.createElement("footer", {
                    className: "fadeInUp",
                    style: {
                        animationDelay: "2s",
                        display:"none"
                    }
                }, r.a.createElement("h5", null, "We stand with everyone fighting on the frontlines"), r.a.createElement("div", {
                    className: "link"
                }, r.a.createElement("a", {
                    href: "https://github.com/covid19india",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "covid19india")), r.a.createElement("a", {
                    href: "https://github.com/covid19india/covid19india-react",
                    className: "button github",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, r.a.createElement(o.a, null), r.a.createElement("span", null, "Open Sourced on GitHub")), r.a.createElement("a", {
                    className: "button excel",
                    href: "https://bit.ly/patientdb",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, r.a.createElement(d.a, null), r.a.createElement("span", null, "Crowdsourced Patient Database\xa0")), r.a.createElement("a", {
                    href: "https://twitter.com/covid19indiaorg",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "button twitter",
                    style: {
                        justifyContent: "center"
                    }
                }, r.a.createElement(m.a, null), r.a.createElement("span", null, "View updates on Twitter")), r.a.createElement("a", {
                    href: "https://bit.ly/covid19crowd",
                    className: "button telegram",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, r.a.createElement(u.a, null), r.a.createElement("span", null, "Join Telegram to Collaborate!"))))
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            i.a.render(r.a.createElement(z, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        }
    },
    [
        [169, 1, 2]
    ]
]);