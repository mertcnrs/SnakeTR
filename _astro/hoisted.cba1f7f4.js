import "./Tracking.astro_astro_type_script_index_0_lang.24c5233f.js";
const St = (t="canvas") => document.getElementById(t)
  , wo = (t="canvas") => St(t).getContext("2d", {
    alpha: !1
})
  , f = () => window.innerWidth
  , h = () => window.innerHeight
  , Uo = () => {
    const t = St()
      , o = window.devicePixelRatio
      , e = h() * o !== t.height
      , n = f() * o !== t.width;
    (e || n) && (R("Resize"),
    e && R("Height", `Last: ${t.height}; New: ${h() * o}`),
    n && R("Width", `Last: ${t.width}; New: ${f() * o}`),
    zt("canvas"))
}
  , zt = t => {
    const o = St(t)
      , e = wo(t)
      , n = window.devicePixelRatio
      , s = {
        width: f(),
        height: h()
    };
    o.width = s.width * n,
    o.height = s.height * n,
    e.scale(n, n),
    o.style.width = `${s.width}px`,
    o.style.height = `${s.height}px`
}
  , jt = document.getElementById("canvas")
  , Mo = jt.getContext("2d", {
    alpha: !1
})
  , Do = () => jt
  , ct = () => Mo
  , Fo = (t=1) => {
    const o = Do()
      , e = ct();
    e.fillStyle = `rgba(0, 0, 0, ${t})`,
    e.clearRect(0, 0, o.width, o.height)
}
  , Kt = (t, o, e, n={}) => {
    const s = ct()
      , {width: c=1, debug: i, trackAsGlobal: d=!0} = n
      , u = (o - c) / 2;
    s.strokeStyle = e,
    s.fillStyle = "red",
    s.lineWidth = c,
    s.beginPath(),
    s.arc(t.x, t.y, u, 0, Math.PI * 2),
    s.closePath(),
    s.stroke(),
    s.lineWidth = 1
}
  , Z = (t, o, e, n={}) => {
    const s = ct()
      , c = o / 2
      , i = t.x
      , d = t.y;
    s.fillStyle = e,
    s.beginPath(),
    s.arc(i, d, c, 0, Math.PI * 2),
    s.fill(),
    s.closePath()
}
  , At = (t, o, e, n, s, c={}) => {
    const i = ct()
      , {x: d, y: u} = t;
    let E = n;
    o < 2 * n && (E = o / 2),
    e < 2 * n && (E = e / 2),
    i.strokeStyle = s,
    c.fillColor && (i.fillStyle = c.fillColor),
    c.strokeWidth && (i.lineWidth = c.strokeWidth),
    i.beginPath(),
    i.moveTo(d + E, u),
    i.arcTo(d + o, u, d + o, u + e, E),
    i.arcTo(d + o, u + e, d, u + e, E),
    i.arcTo(d, u + e, d, u, E),
    i.arcTo(d, u, d + o, u, E),
    i.closePath(),
    i.stroke(),
    c.fillColor && i.fill()
}
  , qt = () => "ontouchstart"in document.documentElement;
var F = (t => (t[t.LANDSCAPE = 0] = "LANDSCAPE",
t[t.PORTRAIT = 1] = "PORTRAIT",
t))(F || {});
const v = () => f() > h() ? 0 : 1
  , Lo = t => Math.round(t / 100 * f())
  , Po = t => Math.round(t / 100 * h())
  , a = t => Math.min(Po(t), Lo(t));
var g = (t => (t.UP = "UP",
t.RIGHT = "RIGHT",
t.DOWN = "DOWN",
t.LEFT = "LEFT",
t.STATIONARY = "STATIONARY",
t))(g || {});
const Zt = {
    LEFT: {
        x: -1,
        y: 0
    },
    RIGHT: {
        x: 1,
        y: 0
    },
    UP: {
        x: 0,
        y: -1
    },
    DOWN: {
        x: 0,
        y: 1
    },
    STATIONARY: {
        x: 0,
        y: 0
    }
}
  , p = (t, o) => Math.round(Math.random() * (o - t)) + t
  , Go = t => t[p(0, t.length - 1)]
  , Jt = (t, o, e) => Math.max(o, Math.min(t, e))
  , to = (t, o) => Jt(t, T().left + o / 2, T().right - o / 2)
  , oo = (t, o) => Jt(t, T().top + o / 2, T().bottom - o / 2)
  , $o = ({x: t, y: o}, e) => ({
    x: to(t, e),
    y: oo(o, e)
})
  , Bo = (t=0) => to(p(T().left, T().right), t)
  , Ho = (t=0) => oo(p(T().top, T().bottom), t)
  , T = () => {
    const t = a(98)
      , o = a(.1)
      , e = v() === F.LANDSCAPE
      , n = (f() - t) / 2
      , s = n + t
      , c = e ? (h() - t) / 2 : (h() - t) / 4
      , i = c + t;
    return {
        left: n,
        right: s,
        top: c,
        bottom: i,
        size: t,
        arenaLineWidth: o
    }
}
  , Vo = t => Date.now() - t
  , ko = t => Vo(t) / 1e3
  , it = (t, o, e) => (o - t) / (e - t)
  , ht = (t, o, e) => e * (o - t) + t
  , vo = () => {
    let t = Date.now();
    const o = {
        update: () => t = Date.now(),
        reset: () => t = 0,
        secondsSinceLast: () => ko(t)
    };
    return {
        ...o,
        hasReachedSeconds: e => o.secondsSinceLast() >= e
    }
}
  , S = (t, o, e) => e * t + (1 - e) * o
  , Wo = () => document.getElementById("canvas")
  , Qo = () => Wo().getContext("2d", {
    alpha: !1
})
  , Yo = t => `${Math.round(t * 100) / 100}`
  , Xo = t => !!t.match(/^[\d\.]+$/)
  , zo = t => typeof t == "boolean" ? `${t}` : typeof t == "number" || Xo(t) ? "" + Yo(parseFloat("" + t)) : t
  , Bt = "0, 255, 100"
  , gt = 1
  , jo = .5;
let y = [];
const R = (t, o, {alwaysOn: e=!1, staleThreshholdScale: n=jo}={}) => {
    const s = y.find(c => c.label === t);
    if (s)
        s.value = o,
        s.timer.update(),
        s.alwaysOn = e,
        s.staleThreshholdScale = n;
    else {
        const c = {
            label: t,
            value: o,
            timer: vo(),
            alwaysOn: e,
            staleThreshholdScale: n
        };
        c.timer.update(),
        y.push(c)
    }
}
  , Ko = t => t.indexOf("fps") !== -1 || t.indexOf("loop") !== -1
  , qo = () => {
    const t = a(2.3)
      , o = Qo();
    o.font = `${t}px monospace`,
    o.textAlign = "left",
    y = y.filter( ({timer: e, alwaysOn: n}) => n || !e.hasReachedSeconds(gt)),
    y.forEach( ({label: e, value: n, timer: s, alwaysOn: c, staleThreshholdScale: i}, d) => {
        const u = s.secondsSinceLast()
          , E = i * gt
          , b = c || u < E ? 0 : it(E, u, gt);
        Ko(e) ? o.fillStyle = "red" : o.fillStyle = b ? `rgba(${Bt}, ${1 - b})` : `rgb(${Bt})`;
        const _ = n ? `${e}: ${zo(n)}` : e;
        o.fillText(_, a(1.15), (d + 1) * t)
    }
    )
}
;
let pt = [];
const Ht = (t, o) => {
    pt.push({
        label: t,
        circle: o
    })
}
  , Zo = () => {
    pt.forEach( ({circle: {position: t, size: o}}) => {
        Kt(t, o, "red")
    }
    )
}
  , Jo = () => {
    qo(),
    Zo()
}
  , te = () => {
    pt.length = 0,
    y.length = 0
}
  , Vt = localStorage.getItem("audio");
let G = typeof Vt == "string" ? parseInt(Vt) : 0;
const L = new Audio("/projects/soung_css/cartoon-slurp.mp3")
  , z = new Audio("/projects/soung_css/crash.mp3")
  , eo = t => () => {
    G || (new AudioContext,
    t())
}
  , no = eo( () => {
    L.volume = .1,
    L.paused || (L.currentTime = 0),
    L.playbackRate = 1.5,
    L.play()
}
)
  , oe = eo( () => {
    z.volume = .1,
    z.paused || (z.currentTime = 0),
    z.play()
}
)
  , ee = () => G
  , ne = () => {
    G = 1 - G,
    localStorage.setItem("audio", G ? "1" : "0")
}
;
var x = (t => (t[t.EASE = 0] = "EASE",
t[t.EASE_IN = 1] = "EASE_IN",
t[t.EASE_OUT = 2] = "EASE_OUT",
t[t.EASE_IN_OUT = 3] = "EASE_IN_OUT",
t[t.EASE_IN_SINE = 4] = "EASE_IN_SINE",
t[t.EASE_OUT_SINE = 5] = "EASE_OUT_SINE",
t[t.EASE_IN_OUT_SINE = 6] = "EASE_IN_OUT_SINE",
t[t.EASE_IN_QUAD = 7] = "EASE_IN_QUAD",
t[t.EASE_OUT_QUAD = 8] = "EASE_OUT_QUAD",
t[t.EASE_IN_OUT_QUAD = 9] = "EASE_IN_OUT_QUAD",
t[t.EASE_IN_CUBIC = 10] = "EASE_IN_CUBIC",
t[t.EASE_OUT_CUBIC = 11] = "EASE_OUT_CUBIC",
t[t.EASE_IN_OUT_CUBIC = 12] = "EASE_IN_OUT_CUBIC",
t[t.EASE_IN_QUART = 13] = "EASE_IN_QUART",
t[t.EASE_OUT_QUART = 14] = "EASE_OUT_QUART",
t[t.EASE_IN_OUT_QUART = 15] = "EASE_IN_OUT_QUART",
t[t.EASE_IN_QUINT = 16] = "EASE_IN_QUINT",
t[t.EASE_OUT_QUINT = 17] = "EASE_OUT_QUINT",
t[t.EASE_IN_OUT_QUINT = 18] = "EASE_IN_OUT_QUINT",
t[t.EASE_IN_EXPO = 19] = "EASE_IN_EXPO",
t[t.EASE_OUT_EXPO = 20] = "EASE_OUT_EXPO",
t[t.EASE_IN_OUT_EXPO = 21] = "EASE_IN_OUT_EXPO",
t[t.EASE_IN_CIRC = 22] = "EASE_IN_CIRC",
t[t.EASE_OUT_CIRC = 23] = "EASE_OUT_CIRC",
t[t.EASE_IN_OUT_CIRC = 24] = "EASE_IN_OUT_CIRC",
t[t.CUSTOM = 25] = "CUSTOM",
t))(x || {});
const se = {
    0: [.25, .1, .25, 1],
    1: [.42, 0, 1, 1],
    2: [0, 0, .58, 1],
    3: [.42, 0, .58, 1],
    4: [.47, 0, .745, .715],
    5: [.39, .575, .565, 1],
    6: [.445, .05, .55, .95],
    7: [.55, .085, .68, .53],
    8: [.25, .46, .45, .94],
    9: [.455, .03, .515, .955],
    10: [.55, .055, .675, .19],
    11: [.215, .61, .355, 1],
    12: [.645, .045, .355, 1],
    13: [.895, .03, .685, .22],
    14: [.165, .84, .44, 1],
    15: [.77, 0, .175, 1],
    16: [.755, .05, .855, .06],
    17: [.23, 1, .32, 1],
    18: [.86, 0, .07, 1],
    19: [.95, .05, .795, .035],
    20: [.19, 1, .22, 1],
    21: [1, 0, 0, 1],
    22: [.6, .04, .98, .335],
    23: [.075, .82, .165, 1],
    24: [.785, .135, .15, .86],
    25: [.1, .2, .11, 1.1]
}
  , ut = (t, o) => {
    const e = se[o]
      , n = [[0, 0], [e[0], e[1]], [e[2], e[3]], [1, 1]]
      , s = t
      , c = 1 * Math.pow(1 - s, 3) * Math.pow(s, 0) * n[0][0] + 3 * Math.pow(1 - s, 2) * Math.pow(s, 1) * n[1][0] + 3 * Math.pow(1 - s, 1) * Math.pow(s, 2) * n[2][0] + 1 * Math.pow(1 - s, 0) * Math.pow(s, 3) * n[3][0]
      , i = 1 * Math.pow(1 - s, 3) * Math.pow(s, 0) * n[0][1] + 3 * Math.pow(1 - s, 2) * Math.pow(s, 1) * n[1][1] + 3 * Math.pow(1 - s, 1) * Math.pow(s, 2) * n[2][1] + 1 * Math.pow(1 - s, 0) * Math.pow(s, 3) * n[3][1];
    return [c, i]
}
  , ce = (t, o) => {
    var e = 1e-4;
    let n = 0
      , s = 1
      , c = (s + n) / 2;
    for (var i = ut(c, o)[0]; Math.abs(t - i) > e; )
        t > i ? n = c : s = c,
        c = (s + n) / 2,
        i = ut(c, o)[0];
    return ut(c, o)[1]
}
  , ie = (t, o) => o === void 0 ? t : ce(t, o)
  , re = 60
  , so = 1.25
  , tt = 5
  , co = 3.4
  , io = .15
  , ae = .2
  , J = .35
  , le = 1.7
  , ro = .3
  , B = .7
  , Et = x.EASE_OUT_QUART
  , W = B * 1
  , Q = x.EASE_OUT_QUART
  , ao = (t, o) => Math.round(Math.sqrt((t.x - o.x) * (t.x - o.x) + (t.y - o.y) * (t.y - o.y)))
  , de = (t, o) => {
    var e = ao(t.position, o.position);
    return e < (t.size - o.size) / 2
}
  , kt = (t, o) => {
    var e = ao(t.position, o.position);
    const n = (t.size + o.size) / 2;
    return e <= n
}
  , j = (t, o) => t.x >= o.left && t.x <= o.right && t.y >= o.top && t.y <= o.bottom
  , ge = (t, o=ro) => {
    let e;
    const n = Date.now()
      , s = n + o * 1e3
      , c = () => {
        const i = Date.now()
          , d = Math.min(1, it(n, i, s));
        t(d),
        i < s && (e = requestAnimationFrame(c))
    }
    ;
    return c(),
    () => cancelAnimationFrame(e)
}
  , It = t => o => {
    let e = t.cleanObjectValuesFunction(o), n, s;
    const c = () => {
        n && n(),
        s = void 0
    }
    ;
    return {
        getCurrentValue: () => e,
        getStringValue: () => t.computeToString(e),
        changeTo: _ => {
            c(),
            e = t.cleanObjectValuesFunction(_)
        }
        ,
        transitionTo: (_, yo={}) => {
            c();
            const {seconds: Ro=ro, bezierCurve: Pt} = yo
              , No = t.cleanObjectValuesFunction(e)
              , Gt = t.cleanObjectValuesFunction(_);
            t.comparisonFunction(e, Gt) || (n = ge($t => {
                s = Pt !== void 0 ? ie($t, Pt) : $t,
                e = t.transformBasedOnScaleFunction(No, Gt, s)
            }
            , Ro))
        }
        ,
        getTransitionScale: () => s
    }
}
  , ft = (t, o) => typeof t == "number" ? t : o
  , ue = (t, o) => t.red === o.red && t.green === o.green && t.blue === o.blue && t.alpha === o.alpha
  , lo = t => ({
    red: Math.round(t.red),
    green: Math.round(t.green),
    blue: Math.round(t.blue),
    alpha: ft(t.alpha, 1)
})
  , he = (t, o, e) => lo({
    red: S(o.red, t.red, e),
    green: S(o.green, t.green, e),
    blue: S(o.blue, t.blue, e),
    alpha: S(ft(o.alpha, 1), ft(t.alpha, 1), e)
})
  , Ee = t => `rgba(${t.red}, ${t.green}, ${t.blue}, ${t.alpha})`
  , O = It({
    transformBasedOnScaleFunction: he,
    comparisonFunction: ue,
    cleanObjectValuesFunction: lo,
    computeToString: Ee
})
  , fe = t => t
  , Te = (t, o) => t === o
  , _e = (t, o, e) => S(o, t, e)
  , me = t => `${t}`
  , go = It({
    transformBasedOnScaleFunction: _e,
    comparisonFunction: Te,
    cleanObjectValuesFunction: fe,
    computeToString: me
});
let bt;
const uo = () => {
    const t = T();
    bt = {
        x: p(t.left + t.size / 4, t.right - t.size / 4),
        y: p(t.top + t.size / 4, t.bottom - t.size / 4)
    }
}
;
uo();
const ho = (t, o, e) => ({
    position: e,
    index: t,
    isCollidable: !1,
    color: O({
        red: 0,
        green: 55 + 150 / o * (o - t),
        blue: 50
    }),
    size: go(Eo(t, o))
});
let r;
const Se = () => {
    r?.body.length && (r.body.length = 0)
}
  , Ae = () => {
    r = {
        body: Array(tt).fill(1).map( (t, o) => ho(o, tt, bt)),
        direction: Zt[Go([g.LEFT, g.RIGHT, g.UP, g.DOWN])]
    },
    fo(),
    setTimeout( () => {
        for (const t of r.body)
            t.isCollidable = !0
    }
    , (J + so) * 1e3)
}
  , Eo = (t, o) => a(co) + (o - t) * .25
  , pe = () => r.body[0].size.getCurrentValue() * ae
  , Ie = (t, o) => {
    let e, n;
    const s = r.body.length
      , c = t.size
      , i = pe()
      , u = 1 - (t.index + 1) / s
      , E = .3
      , b = .2;
    let _ = u * (E - b) + b;
    return t.isCollidable || (_ = _ / 4),
    o ? (e = S(o.position.x, t.position.x, _),
    n = S(o.position.y, t.position.y, _)) : (e = t.position.x + r.direction.x * i,
    n = t.position.y + r.direction.y * i),
    {
        ...t,
        position: $o({
            x: e,
            y: n
        }, c.getCurrentValue())
    }
}
  , be = () => {
    r.body = r.body.map(t => {
        const e = t.index === 0 ? void 0 : r.body[t.index - 1];
        return Ie(t, e)
    }
    ),
    Oe()
}
  , xe = () => {
    const t = r.body.length;
    r.body.map(o => {
        const e = 1 - it(0, o.index, t)
          , n = ht(5, 40, e);
        o.color.transitionTo({
            red: n,
            green: n,
            blue: n
        }, {
            seconds: W,
            bezierCurve: Q
        })
    }
    )
}
  , fo = (t=!1) => {
    const o = r.body.length;
    r.body.map(e => {
        if (!e.isCollidable)
            return;
        const n = 1 - it(0, e.index, o)
          , s = 0
          , c = ht(55, 205, n)
          , i = ht(0, 50, n);
        e.color.changeTo({
            red: s,
            green: c,
            blue: i
        }),
        e.size.changeTo(Eo(e.index, o))
    }
    )
}
  , Oe = () => {
    const t = He();
    t.length > 0 && (Ao(),
    no(),
    t.forEach(e => {
        const n = ho(r.body.length, r.body.length + 1, e.position)
          , s = n.color.getCurrentValue();
        n.color.changeTo(e.color.getCurrentValue()),
        n.color.transitionTo(s, {
            seconds: J
        });
        const c = n.size.getCurrentValue();
        n.size.changeTo(e.size),
        n.size.transitionTo(c, {
            seconds: J
        }),
        r.body.push(n),
        setTimeout( () => {
            r.body[n.index].isCollidable = !0,
            !Y() && fo()
        }
        , J * 1e3)
    }
    )),
    Ve() && Qt(),
    ke() && Qt()
}
  , To = t => {
    const o = Zt[t];
    o.x && r.direction.x || o.y && r.direction.y || (r.direction = o)
}
  , Ce = () => {
    const t = r?.direction;
    return t.x === 1 ? g.RIGHT : t.x === -1 ? g.LEFT : t.y === 1 ? g.DOWN : t.y === -1 ? g.UP : g.STATIONARY
}
  , ot = t => ({
    position: t.position,
    size: t.size.getCurrentValue()
})
  , ye = () => document.getElementById("canvas")
  , Re = () => ye().getContext("2d", {
    alpha: !1
})
  , l = a(2)
  , U = {
    red: 0,
    green: 55 + 150,
    blue: 50,
    alpha: 0
}
  , vt = {
    red: 0,
    green: 55 + 150,
    blue: 50,
    alpha: .3
}
  , Wt = {
    red: 0,
    green: 55 + 150,
    blue: 50,
    alpha: .7
}
  , rt = () => ({
    top: T().bottom + l,
    bottom: h() - l / 2,
    left: l / 2,
    right: f() - l / 2
})
  , xt = () => {
    const t = T();
    return {
        top: l / 2,
        bottom: h() - l / 2,
        left: l / 2,
        right: t.left - l
    }
}
  , Ot = () => {
    const t = T();
    return {
        top: l / 2,
        bottom: h() - l / 2,
        left: t.right + l,
        right: f() - l / 2
    }
}
  , Ct = {
    text: "Left",
    color: O(U),
    getBounds: () => {
        if (v() === F.PORTRAIT) {
            const t = rt()
              , o = (t.right - t.left - 2 * l) / 4;
            return [{
                top: t.top,
                bottom: t.bottom,
                left: t.left,
                right: t.left + o
            }]
        } else {
            const t = xt()
              , o = (t.right - t.left - l) / 2;
            return [{
                top: t.top,
                bottom: t.bottom,
                left: t.left,
                right: t.left + o
            }]
        }
    }
}
  , yt = {
    text: "Right",
    color: O(U),
    getBounds: () => {
        if (v() === F.PORTRAIT) {
            const t = rt()
              , o = (t.right - t.left - 2 * l) / 4;
            return [{
                top: t.top,
                bottom: t.bottom,
                left: t.right - o,
                right: t.right
            }]
        } else {
            const t = Ot()
              , o = (t.right - t.left - l) / 2;
            return [{
                top: t.top,
                bottom: t.bottom,
                left: t.right - o,
                right: t.right
            }]
        }
    }
}
  , Rt = {
    text: "Down",
    color: O(U),
    getBounds: () => {
        if (v() === F.PORTRAIT) {
            const t = rt()
              , o = (t.bottom - t.top - l) / 2
              , e = (t.right - t.left) / 2;
            return [{
                top: t.bottom - o,
                bottom: t.bottom,
                left: t.left + e / 2 + l,
                right: t.right - e / 2 - l
            }]
        } else {
            const t = Ot()
              , o = xt()
              , e = (o.right - o.left - l) / 2
              , n = (o.bottom - o.top - l) / 2;
            return [{
                top: o.bottom - n,
                bottom: o.bottom,
                left: o.right - e,
                right: o.right
            }, {
                top: t.bottom - n,
                bottom: t.bottom,
                left: t.left,
                right: t.left + e
            }]
        }
    }
}
  , Nt = {
    text: "Up",
    color: O(U),
    getBounds: () => {
        if (v() === F.PORTRAIT) {
            const t = rt()
              , o = (t.bottom - t.top - l) / 2
              , e = (t.right - t.left) / 2;
            return [{
                top: t.top,
                bottom: t.top + o,
                left: t.left + e / 2 + l,
                right: t.right - e / 2 - l
            }]
        } else {
            const t = Ot()
              , o = xt()
              , e = (o.right - o.left - l) / 2
              , n = (o.bottom - o.top - l) / 2;
            return [{
                top: o.top,
                bottom: o.top + n,
                left: o.right - e,
                right: o.right
            }, {
                top: t.top,
                bottom: t.top + n,
                left: t.left,
                right: t.left + e
            }]
        }
    }
}
  , K = t => {
    const o = t.color.getStringValue();
    t.getBounds().forEach(n => {
        At({
            x: n.left,
            y: n.top
        }, n.right - n.left, n.bottom - n.top, a(2), o, {
            strokeWidth: 1
        });
        const s = a(6)
          , c = Re();
        c.font = `${s}px Comfortaa`,
        c.beginPath(),
        c.textAlign = "center",
        c.fillStyle = o,
        c.fillText(t.text, n.left + (n.right - n.left) / 2, n.top + (n.bottom - n.top) / 2 + s / 4),
        c.closePath()
    }
    )
}
  , Ne = () => {
    K(Ct),
    K(yt),
    K(Rt),
    K(Nt)
}
  , wt = (t, o) => {
    const e = t === g.LEFT || t === g.RIGHT
      , n = t === g.UP || t === g.DOWN
      , s = t ? e ? vt : Wt : U
      , c = t ? n ? vt : Wt : U;
    Ct.color.transitionTo(s, o),
    yt.color.transitionTo(s, o),
    Nt.color.transitionTo(c, o),
    Rt.color.transitionTo(c, o)
}
  , we = t => {
    let o = null;
    const e = t.touches[t.touches.length - 1]
      , n = {
        x: e.clientX,
        y: e.clientY
    };
    Nt.getBounds().some(s => j(n, s)) && (o = g.UP),
    Rt.getBounds().some(s => j(n, s)) && (o = g.DOWN),
    Ct.getBounds().some(s => j(n, s)) && (o = g.LEFT),
    yt.getBounds().some(s => j(n, s)) && (o = g.RIGHT),
    o !== null && (To(o),
    wt(o, {
        seconds: .2,
        bezierCurve: x.EASE_OUT
    }))
}
  , Ue = () => {
    wt(null, {
        seconds: W,
        bezierCurve: Q
    })
}
  , Me = () => {
    const t = Ce();
    wt(t, {
        seconds: .2,
        bezierCurve: x.EASE_OUT
    })
}
;
var $ = (t => (t.CLICKED_BUTTON_TEXT = "clicked_button_text",
t.GAME_DURATION = "game_duration",
t.GAME_FODD_ITEMS_EATEAN = "game_food_items_eaten",
t.GAME_SCORE = "game_score",
t))($ || {});
const Ut = (t, o) => {
    window.gtag("event", t, o)
}
;
var at = (t => (t.GAME_START = "game_start",
t.GAME_END = "game_end",
t.BUTTON_CLICK = "button_click",
t))(at || {});
let H = !1, lt = !0, Tt = !1, V, C, _o, _t;
const Mt = O({
    red: 0,
    green: 0,
    blue: 0
})
  , De = () => {
    if (V) {
        const t = (Date.now() - V) / 1e3
          , o = r.body.length - tt;
        return o * o / t * 100
    }
    return 0
}
  , Fe = () => !lt && H
  , Y = () => lt
  , mo = () => Tt
  , Le = () => H = !H
  , Qt = () => {
    oe(),
    _t && _t(),
    H = !1,
    lt = !0,
    Be(),
    C = Math.round(De()),
    _o = C;
    const t = So();
    C > t && localStorage.setItem("highScore", "" + C),
    Mt.transitionTo({
        red: 0,
        green: 0,
        blue: 0
    }, {
        seconds: W,
        bezierCurve: Q
    }),
    xe(),
    Ue(),
    Ut(at.GAME_END, {
        [$.GAME_DURATION]: V && Math.round((Date.now() - V) / 1e3),
        [$.GAME_FODD_ITEMS_EATEAN]: r.body.length - tt,
        [$.GAME_SCORE]: C
    })
}
  , Pe = t => {
    Ut(at.GAME_START),
    _t = t,
    C = void 0,
    lt = !1,
    Tt = !0,
    uo(),
    Se(),
    te(),
    Mt.transitionTo({
        red: 0,
        green: 55 + 150,
        blue: 50
    }, {
        seconds: B,
        bezierCurve: Et
    }),
    setTimeout( () => {
        Ae(),
        Ao(),
        Tt = !1,
        V = Date.now(),
        Me(),
        setTimeout( () => H = !0, so * 1e3)
    }
    , B * 1e3)
}
  , Ge = () => _o
  , So = () => parseInt(localStorage.getItem("highScore") || "0");
let N = [];
const $e = t => ({
    x: Bo(t * 6),
    y: Ho(t * 6)
})
  , Be = () => N.length = 0
  , Ao = () => {
    const t = a(le)
      , o = {
        position: $e(t),
        size: t,
        speedX: p(-1, 1),
        speedY: p(-1, 1),
        color: O({
            red: 0,
            green: 0,
            blue: 0
        })
    };
    N.push(o),
    o.color.transitionTo({
        red: p(0, 150),
        green: p(0, 50),
        blue: p(150, 255)
    }, {
        bezierCurve: x.EASE_IN
    })
}
  , He = () => {
    const t = r.body[0]
      , o = ot(t)
      , e = N.filter(n => kt(o, n));
    return N = N.filter(n => !kt(o, n)),
    e
}
  , Ve = () => {
    const [t,o,...e] = r.body
      , n = {
        position: t.position,
        size: t.size.getCurrentValue() * io
    }
      , s = e.filter( ({isCollidable: c}) => c).filter(c => de(ot(c), n));
    return s.length && (Ht("1", n),
    Ht("2", ot(s[0]))),
    s.length > 0
}
  , ke = () => {
    const [t] = r.body
      , o = t.size.getCurrentValue()
      , e = T()
      , n = {
        top: t.position.y - o / 2,
        bottom: t.position.y + o / 2,
        left: t.position.x - o / 2,
        right: t.position.x + o / 2
    };
    if (n.top <= e.top || n.left <= e.left || n.right >= e.right || n.bottom >= e.bottom)
        return !0
}
  , ve = () => {
    r && [...r.body].reverse().map(t => {
        const o = t.index === 0
          , e = ot(t)
          , n = t.color.getStringValue();
        if (Z(e.position, e.size, n),
        Z(e.position, e.size * .75, "black"),
        o) {
            const s = e.size * io;
            Z({
                x: e.position.x,
                y: e.position.y
            }, s, n)
        }
    }
    )
}
  , We = () => {
    N.forEach(t => {
        const o = t.size / 4;
        Kt(t.position, t.size, t.color.getStringValue(), {
            width: o
        })
    }
    )
}
  , Qe = () => {
    const t = T()
      , o = t.arenaLineWidth;
    At({
        x: t.left - o / 2,
        y: t.top - o / 2
    }, t.size + o, t.size + o, a(2), Mt.getStringValue(), {
        strokeWidth: o
    })
}
;
let Yt, P = [];
const Ye = t => (P.indexOf(t) === -1 && P.push(t),
() => P = P.filter(o => o !== t))
  , Xe = t => {
    Yt = {
        x: t.clientX,
        y: t.clientY
    },
    P.forEach(o => o(Yt))
}
  , po = t => ({
    top: Math.round(t.top),
    right: Math.round(t.right),
    bottom: Math.round(t.bottom),
    left: Math.round(t.left)
})
  , ze = (t, o) => Math.round(t.top) === Math.round(o.top) && Math.round(t.right) === Math.round(o.right) && Math.round(t.bottom) === Math.round(o.bottom) && Math.round(t.left) === Math.round(o.left)
  , je = (t, o, e) => po({
    top: S(o.top, t.top, e),
    right: S(o.right, t.right, e),
    bottom: S(o.bottom, t.bottom, e),
    left: S(o.left, t.left, e)
})
  , Ke = t => `top: ${t.top}, right: ${t.right}, bottom: ${t.bottom}, left: ${t.left}`
  , qe = It({
    transformBasedOnScaleFunction: je,
    comparisonFunction: ze,
    cleanObjectValuesFunction: po,
    computeToString: Ke
})
  , Ze = () => document.getElementById("canvas")
  , X = () => Ze().getContext("2d", {
    alpha: !1
})
  , Dt = 255
  , M = 55 + 150
  , Je = 100
  , k = go(1)
  , Io = () => a(co)
  , bo = () => Io() / 8
  , q = () => Io() - bo();
let I, m, Xt, w, et = !1;
const D = (t, o=k.getCurrentValue()) => `rgb(0, ${t}, 50, ${o})`
  , tn = (t=k.getCurrentValue()) => `rgba(255, 255, 255, ${t})`
  , on = t => {
    const o = X();
    o.font = `${a(17.4)}px Rubik Vinyl`,
    o.textAlign = "center",
    o.fillStyle = D(M),
    o.fillText(t, f() / 2, h() * .32)
}
  , en = () => {
    Pe( () => {
        et = !1,
        I.changeTo(st(r.body[0].position)),
        m = void 0,
        Oo(),
        k.transitionTo(1, {
            seconds: W,
            bezierCurve: Q
        })
    }
    ),
    I.transitionTo(st(bt), {
        bezierCurve: Et,
        seconds: B
    }),
    et = !0,
    k.transitionTo(0, {
        seconds: B,
        bezierCurve: Et
    })
}
  , nn = [{
    text: "Hareket etmek için ok tuşlarını veya WASD'yi kullanın",
    getFont: () => `${a(2.9)}px ${nt}`,
    getCenter: () => ({
        x: f() * .5,
        y: h() * .425
    }),
    getPadding: () => ({
        horizontal: a(1.7),
        vertical: a(1.3)
    })
}]
  , nt = "Comfortaa"
  , dt = [{
    text: "Başla",
    getFont: () => `${a(5.8)}px ${nt}`,
    getCenter: () => ({
        x: f() / 2,
        y: h() * .6
    }),
    getPadding: () => ({
        horizontal: a(2.9),
        vertical: a(2.2)
    }),
    onClick: en
}, {
    text: () => `Ses: ${ee() ? "Kapalı" : "Açık"}`,
    getFont: () => `${a(2.3)}px ${nt}`,
    getCenter: () => ({
        x: f() / 2,
        y: h() - a(5.8)
    }),
    getPadding: () => ({
        horizontal: a(1.7),
        vertical: a(1.3)
    }),
    onClick: () => ne()
}]
  , xo = ({text: t, getCenter: o, getFont: e}) => {
    const n = X()
      , s = o();
    n.font = e(),
    n.textAlign = "center";
    const c = n.measureText(typeof t == "string" ? t : t())
      , i = c.width
      , d = c.actualBoundingBoxAscent + c.actualBoundingBoxDescent
      , u = s.x - i / 2
      , E = s.y - c.actualBoundingBoxAscent - c.actualBoundingBoxDescent / 2
      , b = u + i
      , _ = E + d;
    return {
        left: u,
        top: E,
        right: b,
        bottom: _,
        width: i,
        height: d
    }
}
  , sn = t => {
    const {text: o, getCenter: e, getFont: n} = t
      , s = X()
      , c = e();
    s.font = n(),
    s.textAlign = "center",
    s.fillStyle = tn(),
    s.fillText(typeof o == "string" ? o : o(), c.x, c.y)
}
  , cn = t => {
    const {text: o, getCenter: e, getFont: n} = t
      , s = X()
      , c = e()
      , i = t === m
      , d = t === A;
    s.font = n(),
    s.textAlign = "center",
    s.fillStyle = D(S(d ? Dt : M, Je, i ? I.getTransitionScale() || 1 : 0)),
    s.fillText(typeof o == "string" ? o : o(), c.x, c.y)
}
  , Ft = (t, o) => {
    const e = xo(t)
      , n = t.getPadding();
    return !(o.x < e.left - n.horizontal || o.x > e.right + n.horizontal || o.y > e.bottom + n.vertical || o.y < e.top - n.vertical)
}
  , rn = () => {
    if (!w)
        return;
    const o = m && m === A ? Dt : M;
    Z(w, a(.6), D(o))
}
  , an = () => {
    if (!I)
        return;
    const t = mo()
      , o = I.getCurrentValue()
      , n = m && m === A ? Dt : M;
    At({
        x: o.left,
        y: o.top
    }, o.right - o.left, o.bottom - o.top, 1e3, D(n, t ? 1 : void 0), {
        strokeWidth: bo(),
        fillColor: `rgba(0, 20, 0, ${et ? 0 : .8})`
    })
}
;
let A;
const ln = t => {
    Lt(t);
    const o = {
        x: t.clientX,
        y: t.clientY
    }
      , e = dt.find(n => Ft(n, o));
    e && (A = e)
}
  , dn = t => {
    Lt(t);
    const o = {
        x: t.clientX,
        y: t.clientY
    }
      , e = dt.find(n => Ft(n, o));
    e && e === A && (A.onClick(),
    no(),
    Ut(at.BUTTON_CLICK, {
        [$.CLICKED_BUTTON_TEXT]: typeof A.text == "string" ? A.text : A.text()
    })),
    A = void 0
}
  , st = t => ({
    top: t.y - q() / 2,
    right: t.x + q() / 2,
    bottom: t.y + q() / 2,
    left: t.x - q() / 2
})
  , Oo = t => {
    I || (I = qe(st(w)));
    const o = dt.find(e => Ft(e, w));
    if (m !== o && (m = o,
    m)) {
        const e = m.getPadding()
          , n = xo(m)
          , s = n.top - e.vertical
          , c = n.right + e.horizontal
          , i = n.bottom + e.vertical
          , d = n.left - e.horizontal;
        I.transitionTo({
            top: s,
            right: c,
            bottom: i,
            left: d
        }, {
            bezierCurve: x.EASE_OUT_QUART
        })
    }
    m || requestAnimationFrame( () => {
        I.transitionTo(st(w), {
            bezierCurve: t ? x.EASE_OUT_QUART : Q,
            seconds: t ? .1 : W
        })
    }
    )
}
  , Lt = t => {
    w = t,
    et || Oo(!0)
}
  , gn = () => {
    const t = Ge()
      , o = So();
    if (R("typeof score ", typeof t),
    typeof t == "number" && typeof o == "number") {
        const e = X();
        e.font = `${a(3.5)}px ${nt}`;
        const n = `rgba(170, 170, 170, ${k.getCurrentValue()})`;
        e.textAlign = "left";
        const s = Math.max(`${t}`.length, `${o}`.length)
          , c = a(5.75) + s * a(1.15);
        e.fillStyle = n,
        e.fillText("Score:", f() * .5 - c, h() * .7),
        e.fillStyle = t === o ? D(M) : n,
        e.fillText("Best:", f() * .5 - c, h() * .7 + a(4.6)),
        e.fillStyle = n,
        e.textAlign = "right",
        e.fillText(`${Math.round(t)}`, f() * .5 + c, h() * .7),
        e.fillStyle = t === o ? D(M) : n,
        e.fillText(`${Math.round(o)}`, f() * .5 + c, h() * .7 + a(4.6))
    }
}
  , un = t => {
    Xt || (Xt = Ye(Lt)),
    on("SnakeTR"),
    gn(),
    nn.forEach(sn),
    an(),
    dt.forEach(cn),
    rn()
}
  , hn = new URLSearchParams(location.search);
let mt = typeof hn.get("debug") == "string";
zt("canvas");
const En = ["a", "A", "ArrowLeft"]
  , fn = ["d", "D", "ArrowRight"]
  , Tn = ["w", "W", "ArrowUp"]
  , _n = ["s", "S", "ArrowDown"]
  , mn = [{
    keys: En,
    direction: g.LEFT
}, {
    keys: fn,
    direction: g.RIGHT
}, {
    keys: Tn,
    direction: g.UP
}, {
    keys: _n,
    direction: g.DOWN
}]
  , Sn = t => {
    mn.forEach( ({keys: o, direction: e}) => {
        o.includes(t.key) && To(e)
    }
    ),
    t.key === " " && Le(),
    t.key === "q" && (mt = !mt)
}
;
document.addEventListener("mousemove", Xe);
document.addEventListener("keydown", Sn);
document.addEventListener("contextmenu", t => t.preventDefault());
qt() && document.addEventListener("touchstart", t => {
    R("HERE"),
    Y() || we(t)
}
);
document.addEventListener("mousedown", t => {
    Y() && ln(t)
}
);
document.addEventListener("mouseup", t => {
    Y() && dn(t)
}
);
const An = () => {
    qt() && Ne(),
    Qe(),
    ve(),
    We()
}
  , pn = () => {
    be()
}
  , Co = () => {
    Fo();
    const t = Y()
      , o = mo();
    An(),
    (t || o) && un(),
    mt && Jo(),
    requestAnimationFrame(Co)
}
  , In = () => {
    Fe() ? pn() : R("Game status", "PAUSED", {
        staleThreshholdScale: 0
    })
}
  , bn = () => {
    Uo()
}
;
requestAnimationFrame(Co);
setInterval(bn, 100);
setInterval(In, 1e3 / re);
