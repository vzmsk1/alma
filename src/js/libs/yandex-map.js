(() => {
    'use strict';
    var e,
        r = {
            21176: (e, r, n) => {
                n.d(r, { De: () => t, W$: () => i, _K: () => c, mn: () => l, yY: () => a });
                class t {
                    constructor(e) {
                        (this.description = e), Object.freeze(this);
                    }
                    setExperiments(e) {
                        const r = a(this);
                        if (!r || r.isApplied) throw new Error("ymaps3: can't set up experiments.");
                        const n = r.meta.allowedFeatures.experiments || {};
                        (r.experiments = {}),
                            Object.keys(n).forEach((t) => {
                                r.experiments[t] = Boolean(n[t] && e[t]);
                            });
                    }
                    setApikeys(e) {
                        const r = a(this);
                        if (!r || r.isApplied) throw new Error("ymaps3: can't set up apikeys.");
                        r.apikeys = e;
                    }
                }
                const o = new WeakMap();
                function i(e) {
                    const r = new t(`lang:${e.meta.lang} apikey=${e.meta.apikey}`);
                    return o.set(r, e), r;
                }
                function a(e) {
                    return e && o.get(e);
                }
                let s;
                function c() {
                    return s;
                }
                function l(e) {
                    if (s) throw new Error('ymaps3: config is already set');
                    s = e;
                }
            },
            28399: (e, r, n) => {
                n.d(r, { Q: () => i });
                var t = n(21176);
                const o = { version: '', scaled: !0, hotspotZoomRange: { min: 0, max: 23 } };
                function i(e, r = (0, t._K)()) {
                    if (!e || !e.lang) throw new Error('Lang not specified');
                    const { lang: n, signal: i } = e,
                        a = (0, t.yY)(r);
                    if (!a) throw new Error('Config not specified');
                    const s = a.meta.apikey;
                    if (!s) throw new Error('Apikey must be specified in order to use fetchConfig');
                    let c;
                    try {
                        c = `${a.meta.hosts.apiConfigService}?${new URLSearchParams({ lang: n, apikey: s })}`;
                    } catch (e) {
                        return Promise.reject(e);
                    }
                    return fetch(c, { signal: i })
                        .then((e) => e.json())
                        .then((e) => {
                            for (const r in e.layers)
                                if (e.layers[r].hotspotZoomRange) {
                                    const [n, t] = e.layers[r].hotspotZoomRange;
                                    e.layers[r].hotspotZoomRange = { min: n, max: t };
                                }
                            return (
                                e.layers.map || (e.layers.map = Object.assign({}, o)),
                                (0, t.W$)(Object.assign(Object.assign({}, a), { meta: e }))
                            );
                        });
                }
            },
            698: (e, r, n) => {
                n.d(r, { N: () => c });
                var t = n(9912),
                    o = function (e, r, n, t) {
                        return new (n || (n = Promise))(function (o, i) {
                            function a(e) {
                                try {
                                    c(t.next(e));
                                } catch (e) {
                                    i(e);
                                }
                            }
                            function s(e) {
                                try {
                                    c(t.throw(e));
                                } catch (e) {
                                    i(e);
                                }
                            }
                            function c(e) {
                                var r;
                                e.done
                                    ? o(e.value)
                                    : ((r = e.value),
                                      r instanceof n
                                          ? r
                                          : new n(function (e) {
                                                e(r);
                                            })).then(a, s);
                            }
                            c((t = t.apply(e, r || [])).next());
                        });
                    };
                const i = (0, t.O)();
                let a,
                    s = Promise.resolve();
                const c = function (e) {
                    if (!c.EC4__implCache[e]) {
                        const r = c.loaders.slice();
                        r.push(c.default), (c.EC4__implCache[e] = s.then(() => l(e, r, 0)));
                    }
                    return c.EC4__implCache[e];
                };
                function l(e, r, n) {
                    if (n >= r.length) throw new Error('ymaps3.import: no loader for pkg ' + e);
                    return Promise.resolve(r[n](e)).then(
                        (t) => t || l(e, r, n + 1),
                        () => l(e, r, n + 1)
                    );
                }
                (c.A10__implInit = (e, r) => {
                    (a = e), (s = r);
                }),
                    (c.EC4__implCache = Object.create(null)),
                    (c.B36__implInlineModules = Object.create(null));
                const p = RegExp('^(@yandex/ymaps3-)([^@]*)(?:@(\\d+\\.\\d+\\.\\d+))?$');
                c.default = function (e) {
                    if (!a) return Promise.reject(new Error('ymaps3.import: not initialized'));
                    if (c.B36__implInlineModules[e]) return c.B36__implInlineModules[e]();
                    const r = p.exec(e);
                    if (!r) return Promise.reject(new Error('ymaps3.import: invalid package name format'));
                    const n = r[1],
                        t = r[2],
                        o = r[3];
                    if (
                        !(
                            [
                                'controls-extra',
                                'editors',
                                'tile3d-data-source',
                                'utils',
                                'vector',
                                'vuefy'
                            ].includes(t) ||
                            ([
                                'cartesian-projection',
                                'clusterer',
                                'controls',
                                'hint',
                                'markers',
                                'spherical-mercator-projection'
                            ].includes(t) &&
                                o)
                        )
                    )
                        return Promise.reject(new Error('ymaps3.import: unknown package name'));
                    let i = a;
                    (i += o ? `/${o.replace(/\./g, '-')}` : ''), (i += `/${t}.js`);
                    return d(i, `${n}${t}`);
                };
                const u = ['{package}', '{version}', '{path}'],
                    m = ['{package}'];
                function d(e, r) {
                    return o(this, void 0, void 0, function* () {
                        yield f('script', { src: e });
                        const n = i,
                            t = n[r];
                        return delete n[r], t;
                    });
                }
                function f(e, r, n) {
                    return new Promise((t, o) => {
                        const i = document.createElement(e);
                        Object.assign(i, r),
                            n && Object.assign(i.dataset, n),
                            document.head.appendChild(i),
                            (i.onload = t),
                            (i.onerror = o);
                    });
                }
                function h(e, r) {
                    if (
                        e.length !== r.length ||
                        !e.every((e) => r.includes(e)) ||
                        !r.every((r) => e.includes(r))
                    )
                        throw new Error(
                            'ymaps3.import: invalid template path format. Allowed templates: ' + e.join(' ')
                        );
                }
                (c.cdn = function (e, r) {
                    var n;
                    let t, o;
                    const i = null !== (n = e.match(/{[^}]+}/g)) && void 0 !== n ? n : [];
                    if (Array.isArray(r) || 'string' == typeof r)
                        h(m, i),
                            (t = (function (e) {
                                (e = e.replace('{package}', '{package}@{version}')),
                                    e.endsWith('.js') || (e += '/{path}');
                                return e;
                            })(e)),
                            (o = (function (e) {
                                'string' == typeof e && (e = [e]);
                                return e.reduce((e, r) => {
                                    const n = /^(@?[^@]+)@([\w.-]+)$/.exec(r);
                                    if (!n) throw new Error('ymaps3.import: invalid package name format');
                                    const t = n[1],
                                        o = n[2];
                                    return (e[t] = { version: o, path: 'dist/index.js', export: t }), e;
                                }, {});
                            })(r));
                    else {
                        if ('object' != typeof r || null === r)
                            throw new Error('ymaps3.import: invalid packages type.');
                        h(u, i),
                            (function (e) {
                                for (const r in e) {
                                    if (!e[r].version)
                                        throw new Error('ymaps3.import: packages must have a version field.');
                                    e[r].path || (e[r].path = 'dist/index.js'),
                                        e[r].export || (e[r].export = r);
                                }
                            })(r),
                            (t = e),
                            (o = r);
                    }
                    return function (e) {
                        var r, n;
                        if (!(e in o))
                            return Promise.reject(new Error('ymaps3.import: unknown package name'));
                        return d(
                            t
                                .replace('{package}', e)
                                .replace('{version}', o[e].version)
                                .replace('{path}', null !== (r = o[e].path) && void 0 !== r ? r : ''),
                            null !== (n = o[e].export) && void 0 !== n ? n : ''
                        );
                    };
                }),
                    (c.registerCdn = function (e, r) {
                        c.loaders.push(c.cdn(e, r));
                    }),
                    (c.loaders = []),
                    (c.script = function (e) {
                        return f('script', { src: e });
                    }),
                    (c.cssText = function (e, r) {
                        return f('style', { textContent: e }, { name: r || 'inline' });
                    }),
                    (c.style = function (e) {
                        return f('link', { rel: 'stylesheet', href: e });
                    });
            },
            9912: (e, r, n) => {
                function t() {
                    return 'undefined' != typeof globalThis ? globalThis : this || self;
                }
                n.d(r, { O: () => t });
            }
        },
        n = {};
    function t(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = (n[e] = { id: e, exports: {} });
        return r[e](i, i.exports, t), i.exports;
    }
    (t.m = r),
        (e = []),
        (t.O = (r, n, o, i) => {
            if (!n) {
                var a = 1 / 0;
                for (p = 0; p < e.length; p++) {
                    for (var [n, o, i] = e[p], s = !0, c = 0; c < n.length; c++)
                        (!1 & i || a >= i) && Object.keys(t.O).every((e) => t.O[e](n[c]))
                            ? n.splice(c--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(p--, 1);
                        var l = o();
                        void 0 !== l && (r = l);
                    }
                }
                return r;
            }
            i = i || 0;
            for (var p = e.length; p > 0 && e[p - 1][2] > i; p--) e[p] = e[p - 1];
            e[p] = [n, o, i];
        }),
        (t.n = (e) => {
            var r = e && e.__esModule ? () => e.default : () => e;
            return t.d(r, { a: r }), r;
        }),
        (t.d = (e, r) => {
            for (var n in r)
                t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        }),
        (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (t.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (t.p = '/bundles/'),
        (() => {
            t.b = document.baseURI || self.location.href;
            var e = { 668: 0 };
            t.O.j = (r) => 0 === e[r];
            var r = (r, n) => {
                    var o,
                        i,
                        [a, s, c] = n,
                        l = 0;
                    if (a.some((r) => 0 !== e[r])) {
                        for (o in s) t.o(s, o) && (t.m[o] = s[o]);
                        if (c) var p = c(t);
                    }
                    for (r && r(n); l < a.length; l++) (i = a[l]), t.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return t.O(p);
                },
                n = (self.__chunk_yandex_ymaps3 = self.__chunk_yandex_ymaps3 || []);
            n.forEach(r.bind(null, 0)), (n.push = r.bind(null, n.push.bind(n)));
        })(),
        (t.nc = void 0);
    var o = {};
    (() => {
        t.r(o), t.d(o, { import: () => a.N, ready: () => u });
        var e = t(9912),
            r = t(28399),
            n = t(21176);
        const i = ['fetch', 'AbortController', 'URL', 'URLSearchParams', 'ResizeObserver'];
        var a = t(698);
        const s = (0, e.O)(),
            c = {
                meta: {
                    lang: 'ru_RU',
                    hosts: {
                        apiCoverageService: 'https://api-maps.yandex.ru/services/coverage/',
                        apiRouteService: 'https://api-maps.yandex.ru/services/route/',
                        apiSearchService: 'https://api-maps.yandex.ru/services/search/',
                        apiConfigService: 'https://api-maps.yandex.ru/v3/config',
                        mapTiles: 'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&%c&%l',
                        mapjTiles:
                            'https://core-renderer-tiles.maps.yandex.net/tiles?l=mapj&%c&%l&experimental_disable_toponym_hotspots=true',
                        satTiles: 'https://core-sat.maps.yandex.net/tiles?l=sat&%c&%l',
                        vectorTiles:
                            'https://core-renderer-tiles.maps.yandex.net/vmap2/tiles?lang={{lang}}&x={{x}}&y={{y}}&z={{z}}&zmin={{zmin}}&zmax={{zmax}}&v={{version}}',
                        vectorImages:
                            'https://core-renderer-tiles.maps.yandex.net/vmap2/icons?id={{id}}&scale={{scale}}',
                        vectorMeshes: 'https://core-renderer-tiles.maps.yandex.net/vmap2/meshes?id={{id}}',
                        vectorGlyphs:
                            'https://core-renderer-tiles.maps.yandex.net/vmap2/glyphs?lang={{lang}}&font_id={{fontId}}&range={{range}}',
                        suggestApi: 'https://suggest-maps.yandex.ru/suggest-geo',
                        routerApi: 'https://api.routing.yandex.net/v2/route',
                        searchApi: 'https://search-maps.yandex.ru/'
                    },
                    token: '44f892f250427362456e1a214285cd58',
                    layers: {
                        map: { version: '24.02.06-1-b240129104800', scaled: true, hotspotZoomRange: [1, 23] },
                        skl: { version: '24.02.06-1-b240129104800', scaled: true, hotspotZoomRange: [1, 23] },
                        sta: { version: '2024.02.08.00.27-2_24.02.05-0-18378', scaled: false },
                        stv: { version: '2024.02.08.00.27-2_24.02.05-0-18378', scaled: false },
                        sat: { version: '3.1145.0', scaled: false },
                        trf: { version: '1707383040', scaled: true },
                        trfe: { version: '', scaled: true, hotspotZoomRange: [0, 21] }
                    },
                    allowedFeatures: {
                        vector: true,
                        customization: true,
                        customLayers: false,
                        router: false,
                        experiments: {},
                        deprecatedSuggest: true,
                        deprecatedRouter: true,
                        deprecatedSearch: true,
                        tile3d: false
                    },
                    geolocation: { lat: 59.938951, long: 30.315635, latSpan: 0.611098, longSpan: 1.33442 },
                    metrics: { allowSending: true, counterId: '80578111', pageUrl: 'api-maps.yandex.ru/v3' },
                    copyrights: {
                        userAgreementHost: 'https://yandex.ru/legal/maps_termsofuse/?lang={{lang}}',
                        userAgreementTextLong: 'Условия использования',
                        userAgreementTextShort: 'Условия',
                        logoLang: 'ru',
                        allowRemove: false
                    },
                    ruler: { kmText: 'км', mText: 'м', mileText: 'ми' },
                    apikey: '24d298f1-151c-4481-9e4a-235c4db16ee9'
                },
                src: {
                    base: 'https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/3.0.13348366/build/static/bundles'
                }
            };
        if (s.ymaps3) throw new Error('ymaps3: already defined');
        !(function (e) {
            if (i.filter((r) => !e[r]).length)
                throw new Error(`ymaps3: next webapi's are required ${i.join(',')}`);
        })(s);
        const l = Promise.all([
            a.N.script(`${c.src.base}/main.js`),
            c.adhoc
                ? (0, r.Q)(c.adhoc.options, (0, n.W$)({ meta: c.adhoc.meta, src: c.src }))
                : Promise.resolve((0, n.W$)({ meta: c.meta, src: c.src }))
        ]).then(([, e]) => {
            const r = '@yandex/ymaps3-main';
            Object.assign(s.ymaps3, s[r]), delete s[r], (0, n.mn)(e);
        });
        a.N.B36__implInlineModules['@yandex/ymaps3-reactify'] = () =>
            l.then(() => s.ymaps3.A28__implReactify);
        const p =
                'loading' !== document.readyState
                    ? Promise.resolve()
                    : new Promise(function (e) {
                          window.addEventListener('DOMContentLoaded', e);
                      }),
            u = Promise.all([p, l]).then(() => s.ymaps3);
        a.N.A10__implInit(c.src.base, u);
    })(),
        (o = t.O(o)),
        (self.ymaps3 = o);
})();
