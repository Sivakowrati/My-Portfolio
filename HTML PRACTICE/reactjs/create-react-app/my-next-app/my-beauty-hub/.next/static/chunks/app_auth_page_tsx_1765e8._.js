(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_auth_page_tsx_1765e8._.js", {

"[project]/app/auth/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const Auth = ()=>{
    _s();
    const [isSignUp, setIsSignUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleAuth = ()=>{
        if (!formData.email || !formData.password) {
            alert("❌ Please fill in all fields.");
            return;
        }
        if (isSignUp) {
            // Validate sign-up fields
            if (!formData.username || !formData.phone || !formData.confirmPassword) {
                alert("❌ Please fill in all fields.");
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                alert("❌ Passwords do not match.");
                return;
            }
            // Store user data
            const newUser = {
                username: formData.username,
                email: formData.email,
                phone: formData.phone
            };
            localStorage.setItem("user", JSON.stringify(newUser));
            alert("✅ Account Created! Please sign in.");
            setIsSignUp(false);
        } else {
            // Handle Sign In
            const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
            if (storedUser.email === formData.email) {
                alert(`✅ Welcome back, ${storedUser.username}!`);
                router.push("/");
            } else {
                alert("❌ User not found. Please Sign Up first.");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-lg w-96",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4 text-center",
                    children: isSignUp ? "Sign Up" : "Sign In"
                }, void 0, false, {
                    fileName: "[project]/app/auth/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                isSignUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Username",
                            value: formData.username,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    username: e.target.value
                                }),
                            className: "w-full p-2 border rounded-md mb-2"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/page.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Phone Number",
                            value: formData.phone,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    phone: e.target.value
                                }),
                            className: "w-full p-2 border rounded-md mb-2"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/page.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    placeholder: "Email",
                    value: formData.email,
                    onChange: (e)=>setFormData({
                            ...formData,
                            email: e.target.value
                        }),
                    className: "w-full p-2 border rounded-md mb-2"
                }, void 0, false, {
                    fileName: "[project]/app/auth/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    placeholder: "Password",
                    value: formData.password,
                    onChange: (e)=>setFormData({
                            ...formData,
                            password: e.target.value
                        }),
                    className: "w-full p-2 border rounded-md mb-2"
                }, void 0, false, {
                    fileName: "[project]/app/auth/page.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                isSignUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    placeholder: "Confirm Password",
                    value: formData.confirmPassword,
                    onChange: (e)=>setFormData({
                            ...formData,
                            confirmPassword: e.target.value
                        }),
                    className: "w-full p-2 border rounded-md mb-2"
                }, void 0, false, {
                    fileName: "[project]/app/auth/page.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleAuth,
                    className: "w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition",
                    children: isSignUp ? "Sign Up" : "Sign In"
                }, void 0, false, {
                    fileName: "[project]/app/auth/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsSignUp(!isSignUp),
                    className: "mt-4 w-full text-blue-600 text-sm",
                    children: isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"
                }, void 0, false, {
                    fileName: "[project]/app/auth/page.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/page.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/auth/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
};
_s(Auth, "3r2f9+8cAKY7aNRjYWmd+8x9LJ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Auth;
const __TURBOPACK__default__export__ = Auth;
var _c;
__turbopack_refresh__.register(_c, "Auth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/auth/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_auth_page_tsx_1765e8._.js.map