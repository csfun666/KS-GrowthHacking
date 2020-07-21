(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{264:function(t,a,r){"use strict";r.r(a);var s=r(28),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"数据埋点（事件跟踪）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据埋点（事件跟踪）"}},[t._v("#")]),t._v(" 数据埋点（事件跟踪）")]),t._v(" "),r("h2",{attrs:{id:"代码埋点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码埋点"}},[t._v("#")]),t._v(" "),r("RouterLink",{attrs:{to:"/DataDriven/EventTracking/CodeET/"}},[t._v("代码埋点")])],1),t._v(" "),r("h2",{attrs:{id:"可视化埋点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可视化埋点"}},[t._v("#")]),t._v(" "),r("RouterLink",{attrs:{to:"/DataDriven/EventTracking/VisualET/"}},[t._v("可视化埋点")])],1),t._v(" "),r("h2",{attrs:{id:"无痕埋点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无痕埋点"}},[t._v("#")]),t._v(" "),r("RouterLink",{attrs:{to:"/DataDriven/EventTracking/NonET/"}},[t._v("无痕埋点")])],1),t._v(" "),r("h2",{attrs:{id:"埋点设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#埋点设计"}},[t._v("#")]),t._v(" 埋点设计")]),t._v(" "),r("h3",{attrs:{id:"确认事件与变量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#确认事件与变量"}},[t._v("#")]),t._v(" 确认事件与变量")]),t._v(" "),r("p",[t._v("事件：指产品中的操作\n变量：指描述事件的属性")]),t._v(" "),r("p",[t._v("可以按照产品流程（用户旅程）来设计关键事件，如果想要进一步描述事件属性，那么就可以将属性作为事件的变量。")]),t._v(" "),r("p",[t._v("以汉光百货「站内转化路径追踪」这一电商行业的核心场景为例：\n其需要追踪的关键指标，是四个产品操作步骤：浏览商品详情页、加入购物车、结算、支付成功。")]),t._v(" "),r("p",[t._v("这四个指标分别代表四个事件。\n如果想要进一步监控不同品牌、不同商品的购买转化率，就需要用品牌和商品的维度去拆解关键指标，那么品牌和商品就是这四个事件的变量。")]),t._v(" "),r("h3",{attrs:{id:"明确事件的触发时机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#明确事件的触发时机"}},[t._v("#")]),t._v(" 明确事件的触发时机")]),t._v(" "),r("p",[t._v("事件的触发时机，往往是影响数据准确性的重要因素。\n以「加入购物车」事件为例，触发时机是点击这个按钮时，还是加入购物车成功时呢？")]),t._v(" "),r("p",[t._v("不同的触发时机代表不同的数据统计口径，我们要尽量选择最贴近业务的统计口径，然后再与开发沟通，在可行性与业务贴合度之间找到最优解。")]),t._v(" "),r("p",[t._v("另外，由于产品中可能有多个入口均可“加入购物车”，触发入口是否已列举完整，也会影响数据准确性。\n这个时候，我们可以采用 MECE 原则，即相互独立，完全穷尽：不要重复列举，但要包含所有入口。")]),t._v(" "),r("h3",{attrs:{id:"规范命名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#规范命名"}},[t._v("#")]),t._v(" 规范命名")]),t._v(" "),r("p",[t._v("对事件进行规范统一的命名，有助于提高数据的实用性及数据管理效率。\n建议使用「动词+名词」或者「名词+动词」的规则来命名，比如“加入购物车”事件，就可以命名为：addToCart。")]),t._v(" "),r("p",[t._v("无论如何，需要确保的是，团队/公司内部必须建立统一的认知，使用同一套命名规则。")]),t._v(" "),r("h3",{attrs:{id:"明确优先级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#明确优先级"}},[t._v("#")]),t._v(" 明确优先级")]),t._v(" "),r("p",[t._v("考虑到埋点的技术实现成本以及资源有限性，在设计埋点方案时，一定要对埋点事件有明确的优先级排布。\n在汉光百货这个案例中，优先级最高的场景是“站内转化路径追踪”。\n我们以这个场景为轴心，了解每个转化步骤的情况，找到优化点对症下药，再对优化点进一步的监控与验证分析，最终实现价值的持续交付。")]),t._v(" "),r("p",[r("img",{attrs:{src:"_pic/EventTracking-Sample.png",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"埋点协作流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#埋点协作流程"}},[t._v("#")]),t._v(" 埋点协作流程")]),t._v(" "),r("p",[r("img",{attrs:{src:"_pic/EventTracking-Workflow.jpg",alt:""}})]),t._v(" "),r("p",[t._v("事实上，如果产品经理等业务人员总是能用上准确的、及时的数据，并能深度分析，\n那么这家公司的组织能力、数据治理的能力，以及数据驱动的文化往往都很优秀。")]),t._v(" "),r("h2",{attrs:{id:"埋点的劣势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#埋点的劣势"}},[t._v("#")]),t._v(" 埋点的劣势")]),t._v(" "),r("p",[t._v("最终可能导致诸如：\n没有埋上点，埋点数据异常，埋点上线业务已经下线，想分析的维度忘了「埋」上去等等。")])])}),[],!1,null,null,null);a.default=v.exports}}]);