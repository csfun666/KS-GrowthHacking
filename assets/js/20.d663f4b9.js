(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{265:function(a,t,s){"use strict";s.r(t);var e=s(28),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"无埋点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无埋点"}},[a._v("#")]),a._v(" 无埋点")]),a._v(" "),s("p",[a._v("编译时字节码插桩埋点\n实现方案：利用Gradle插件，在编译阶段在代码中插入埋点代码，进行数据采集。\n代表方案：GrowingIO、美团的替换UI控件方案。\n优点：开发效率高，无需手动埋点，编译时插入代码，性能高，支持数据可回溯。\n缺点：埋点灵活性低。")]),a._v(" "),s("h2",{attrs:{id:"劣势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#劣势"}},[a._v("#")]),a._v(" 劣势")]),a._v(" "),s("p",[a._v("流量消耗和数据计算成本较高。")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("1. 部分业务维度无法采集\n    比如，能够知道用户点击了购买，但不知道购买了什么\n2. 滑动等行为，无埋点采集暂时无法实现\n3. 无埋点采集的数据是通过界面位置和上下级关系来标示自己的，一旦界面发生较大变化，会导致数据无法持续采集，需要重新圈选。\n4. 数据准确性也会受客户产品开发框架、开发规范以及能力的影响。\n")])])]),s("h2",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[a._v("#")]),a._v(" 使用场景")]),a._v(" "),s("h3",{attrs:{id:"探索式数据场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#探索式数据场景"}},[a._v("#")]),a._v(" 探索式数据场景")]),a._v(" "),s("p",[a._v("这类场景更适合使用无埋点事件，基本上也只能使用无埋点事件。")]),a._v(" "),s("p",[a._v("场景属性：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("业务属性弱，交互属性强；\n需求及时性强，要快速落地得出结论；\n数据使用周期短，不需要长期监控；\n相比准确性，更需要趋势稳定；\n非核心数据，数据可及性 (access data) 强。\n")])])]),s("p",[a._v("如：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("做了一场运营活动，但没有埋点的产研资源；\n想衡量交互细节，而需要查看的交互细节非常多；\n想查看一个用户在访问时的一切行为轨迹，探索用户使用产品场景；\n产品每周发版，想要快速衡量每次发版的效果；\n要做一个分析，发现没有所需事件，打点和积累数据来不及，又需要尽快产出结论；\n当新功能上线时，你突然发现有一个重要的元素忘了埋点。\n")])])]),s("h3",{attrs:{id:"监控与分析式数据场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控与分析式数据场景"}},[a._v("#")]),a._v(" 监控与分析式数据场景")]),a._v(" "),s("p",[a._v("这类场景是核心 KPI 监控和深度业务分析，建议使用埋点事件，尤其是深度业务分析只能使用埋点事件。")]),a._v(" "),s("p",[a._v("场景属性：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("数据稳定准确，反应真实业务场景；\n需要长期监控，数据需要长期存储；\n业务属性丰富，可以做深度业务分析；\n监控核心 KPI，指标需要少而精；\n需要设置数据权限，数据可及性 (access data) 弱。\n")])])]),s("p",[a._v("如：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("需要每天、每周、甚至每月汇报 KPI 表现；\n需要分析过去一年核心 KPI 的增长情况；\n需要对业务进行深度分析：比如不同 SKU 的购买转化分析；\n需要进行归因分析：比如产品不同入口的带来的销售额分析。\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);