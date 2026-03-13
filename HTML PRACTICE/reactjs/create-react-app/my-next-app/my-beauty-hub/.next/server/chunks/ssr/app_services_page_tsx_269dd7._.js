module.exports = {

"[project]/app/services/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Services data
const services = [
    {
        name: "Body Massage",
        image: "/Body Massage.jpg",
        price: "999",
        description: "A therapeutic treatment that relaxes muscles, improves circulation, and relieves stress through skilled touch and pressure techniques.",
        rating: 4.5
    },
    {
        name: "Body Polishing",
        image: "/Body Polishing.jpg",
        price: "1,999",
        description: "A skincare treatment that exfoliates, hydrates, and rejuvenates the skin for a smooth and radiant glow.",
        rating: 4
    },
    {
        name: "Full Body Spa",
        image: "/Full Body Spa.jpg",
        price: "2,999",
        description: "A luxurious wellness treatment that combines massage, exfoliation, and hydration to relax the body and rejuvenate the skin.",
        rating: 5
    },
    {
        name: "Basic Hair Cut",
        image: "/Basic Haircut.jpg",
        price: "149",
        description: "A simple and stylish trim to maintain or refresh your haircut with precision and ease.",
        rating: 5
    },
    {
        name: "Advance Hair Cut",
        image: "/Advance Haircut.jpg",
        price: "349",
        description: "A customized haircut with expert styling techniques for a trendy, tailored, and polished look.",
        rating: 4.5
    },
    {
        name: "Manicure & Pedicure",
        image: "/Manicure Pedicure.png",
        price: "749",
        description: "A luxurious hand and foot care treatment that includes nail grooming, exfoliation, and hydration for healthy, polished nails and soft skin.",
        rating: 5
    },
    {
        name: "Head Massage",
        image: "/Head Massage.jpg",
        price: "249",
        description: "A relaxing treatment that soothes the scalp, relieves stress, and improves blood circulation for overall well-being.",
        rating: 5
    },
    {
        name: "Advance Head Massage",
        image: "/Advance Head Massage.jpg",
        price: "499",
        description: "A rejuvenating head massage using advanced techniques to relieve tension, boost circulation, and promote deep relaxation.",
        rating: 4.5
    },
    {
        name: "Highlight Starting",
        image: "/Highlight.jpg",
        price: "1,999",
        description: "A hair coloring technique that adds dimension and brightness by lightening selected strands for a stylish, radiant look.",
        rating: 5
    },
    {
        name: "Facial Detan with Eyebrow",
        image: "/Facial Dtan Eyebrow.jpg",
        price: "499",
        description: "A skin treatment that removes tan, brightens the complexion, and includes eyebrow shaping for a refreshed and polished appearance.",
        rating: 5
    },
    {
        name: "Facial + Bleach + Eyebrow",
        image: "/Facial Bleach Eyebrow.jpg",
        price: "499",
        description: "A treatment that lightens facial hair and skin tone, coupled with eyebrow shaping to enhance your natural features and create a glowing look.",
        rating: 5
    },
    {
        name: "O3 Professional Facial only",
        image: "/O3 Facial.jpg",
        price: "1,199",
        description: "An advanced facial treatment that uses O3 technology to deep cleanse, brighten, and rejuvenate the skin for a radiant, refreshed complexion.",
        rating: 5
    },
    {
        name: "Hydra Facial only",
        image: "/Hydra Facial.jpg",
        price: "2,499",
        description: "A non-invasive facial treatment that deeply hydrates, exfoliates, and revitalizes the skin for a smooth, glowing complexion.",
        rating: 5
    },
    {
        name: "Normal Wax Full Hand",
        image: "/Normal Wax Hand.jpg",
        price: "299",
        description: "A hair removal treatment using traditional wax to smoothly remove hair from the full length of the arms.",
        rating: 5
    },
    {
        name: "Normal Wax Full leg",
        image: "/Normal Wax Leg.jpg",
        price: "299",
        description: "A hair removal treatment using traditional wax to remove hair from the full length of the legs, leaving smooth, soft skin.",
        rating: 5
    },
    {
        name: "Rica Wax Full Hand",
        image: "/Rica Wax Hand.jpg",
        price: "399",
        description: "A gentle hair removal treatment using Rica wax that effectively removes hair from the full arms while nourishing and soothing the skin.",
        rating: 5
    },
    {
        name: "Rica Wax Full leg",
        image: "/Rica Wax Leg.WEBP",
        price: "399",
        description: "A hair removal treatment using Rica wax that smoothly removes hair from the full legs, leaving the skin soft, hydrated, and irritation-free.",
        rating: 5
    },
    {
        name: "Nail Art",
        image: "/Nail Art.jpg",
        price: "399",
        description: "A creative and decorative treatment that enhances nails with unique designs, colors, and embellishments for a stylish and personalized look.",
        rating: 5
    },
    {
        name: "Mehandi",
        image: "/Mehandi.jpeg",
        price: "399",
        description: "A traditional art of applying intricate henna designs on the skin, creating beautiful and temporary body adornments.",
        rating: 5
    },
    {
        name: "MakeUp Services",
        image: "/Makeup.png",
        price: "399",
        description: "Professional makeup application for various occasions, enhancing natural features with customized techniques for a flawless look.",
        rating: 5
    }
];
const Services = ()=>{
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return [];
    });
    const addToCart = (serviceName)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        "TURBOPACK unreachable";
        const existingCart = undefined;
        let cartData;
        const service = undefined;
        const newCartItem = undefined;
    };
    const renderStars = (rating)=>{
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const totalStars = 5;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex",
            children: [
                [
                    ...Array(fullStars)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStar"], {
                        className: "text-yellow-500"
                    }, `full-${i}`, false, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this)),
                halfStar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStarHalfAlt"], {
                    className: "text-yellow-500"
                }, "half", false, {
                    fileName: "[project]/app/services/page.tsx",
                    lineNumber: 192,
                    columnNumber: 22
                }, this),
                [
                    ...Array(totalStars - fullStars - (halfStar ? 1 : 0))
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRegStar"], {
                        className: "text-yellow-500"
                    }, `empty-${i}`, false, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/app/services/page.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-center mb-6",
                children: "We serve only at Kalyan & Dombivli locations now."
            }, void 0, false, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-xl font-bold text-center mb-6",
                children: "Add your services into cart. We are also available through Call & Whatsapp"
            }, void 0, false, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border p-4 rounded-lg shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: service.image,
                                alt: service.name,
                                width: 500,
                                height: 300,
                                className: "w-full h-48 object-cover rounded-md mb-4"
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: service.name
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-2",
                                children: service.description
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-bold mt-2",
                                children: [
                                    "₹",
                                    service.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mt-4",
                                children: [
                                    renderStars(service.rating),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>addToCart(service.name),
                                        className: "text-blue-600 hover:text-blue-800 transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaShoppingCart"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/services/page.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Services;
}}),
"[project]/app/services/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=app_services_page_tsx_269dd7._.js.map