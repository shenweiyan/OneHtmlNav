var date  = new Date()           <!--获得日期数据-->
var year  = date.getFullYear();     <!--年-->
var month = date.getMonth()+1;      <!--月，这里的月份必须要+1才是当前月份-->
var day   = date.getDate();         <!--日，getDay是获得当前星期几（0-6），getDate是获得当前日期-->

var config = {
    // 网页标题
	title:'导航',
    // seo关键字
	keywords:'BioIT,导航,网址',
    // 网站描述
	description:'简单但实用的导航',
    // logo图片
    logo: './assets/search_icon.svg',
    // 网页背景图片
    bodyBackgroundImage:'https://pc-index-skin.cdn.bcebos.com/hiphoto/56611704245.jpg',
    // 设置网页背景图片怎么显示，取值和css属性background-repeat相同
    backgroundRepeat:'repeat',
    // 版权声明
    copyright: '<p>本站内容源自互联网，如有内容侵犯了你的权益，请联系删除相关内容，联系邮箱：ishenweiyan@foxmail.com</p><p>Copyright © 2020-'+year+' <a href="https://github.com/xiaodai945/WEBJIKE">小呆导航（webjike.com）</a> All Rights Reserved.</p>',
	//页面中默认搜索引擎索引，在searchEngines数组中查找
    defaultSearchEngineIndex: 1,
    // 默认搜索引擎图标,icon加载途径优先级  配置文件自定义icon > 搜索引擎网站icon > 默认搜索icon
    defaultSearchEngineIcon: "",
    //配置搜索引擎
    searchEngines: [
    {
        name: '百度',
        url: 'https://www.baidu.com/s?wd='
    },
    {
        name: '谷歌',
        url: 'https://www.google.com/search?q='
    },
    {
        name: '必应',
        url: 'https://cn.bing.com/search?q='
    },
    {
        name: '淘宝',
        url: 'https://s.taobao.com/search?q='
    },
    {
        name: '京东',
        url: 'http://search.jd.com/Search?keyword='
    },
    {
        name: '天猫',
        url: 'https://list.tmall.com/search_product.htm?q='
    },
    {
        name: '1688',
        url: 'https://s.1688.com/selloffer/offer_search.htm?keywords='
    },
    {
        name: '知乎',
        url: 'https://www.zhihu.com/search?type=content&q='
    },
    {
        name: '微博',
        url: 'https://s.weibo.com/weibo/'
    },
    {
        name: 'Bilibili',
        url: 'http://search.bilibili.com/all?keyword='
    },
    {
        name: '豆瓣',
        url: 'https://www.douban.com/search?source=suggest&q='
    },
    {
        name: 'GitHub',
        url: 'https://github.com/search?q='
    }],
    //导航列表
    navigations: [{
    	// 导航分组名字
        groupName: '常用·站点',
        // 分组下的子导航项目
        navigationItems: [{
                name: "语雀",
                description: "专业的云端知识库。",
                url: "https://www.yuque.com/",
                icon: "https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*CUIoT4xopNYAAAAAAAAAAABkARQnAQ"
            },
            {
                name: "QQ 邮箱",
                description: "腾讯 QQ 邮箱。",
                url: "http://mail.qq.com/",
                icon: "https://mail.qq.com/zh_CN/htmledition/images/favicon/qqmail_favicon_48h.png"
            },
            {
                name: "开源中国",
                description: "中文开源技术交流社区。",
                url: "https://www.oschina.net/",
                icon: "https://static.oschina.net/new-osc/img/favicon.ico"
            },
            {
                name: "公众号平台",
                description: "再小的个体也有自己的品牌。",
                url: "https://mp.weixin.qq.com/",
                icon: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico"
            },
            {
                name: "Coding",
                description: "Coding 代码托管。",
                url: "https://coding.net/",
                icon: ""
            },
            {
                name: "GitHub",
                description: "GitHub 开源社区。",
                url: "https://github.com/",
                icon: "https://github.com/fluidicon.png"
            },
            {
                name: "MD2All",
                description: "Markdown 排版利器。",
                url: "http://md.aclickall.com/",
                icon: ""
            },
            {
                name: "搜狗微信",
                description: "搜狗微信搜索，一搜即达。",
                url: "https://weixin.sogou.com/",
                icon: ""
            },
            {
                name: "简书",
                description: "简书创作社区。",
                url: "https://www.jianshu.com/",
                icon: ""
            },
            {
                name: "知乎",
                description: "知乎社区。",
                url: "https://www.zhihu.com/",
                icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.8f6c52aa.png"
            },
            {
                name: "V2EX",
                description: "V2EX 创意工作者的社区。",
                url: "https://www.v2ex.com/",
                icon: ""
            },
        ]
    },
    {
        groupName: '知识·工具',
        navigationItems: [{
                name: "NCBI",
                description: "National Center for Biotechnology Information.",
                url: "https://www.ncbi.nlm.nih.gov/",
                icon: "https://www.ncbi.nlm.nih.gov/favicon.ico"
            },
            {
                name: "Bioconda",
                description: "Bioconda :: Anaconda.org.",
                url: "https://anaconda.org/bioconda/",
                icon: "https://binstar-static-prod.s3.amazonaws.com/latest/img/apple-touch-icon.png"
            },
            {
                name: "CPAN",
                description: "Search the CPAN.",
                url: "https://metacpan.org/",
                icon: "https://metacpan.org/static/icons/favicon.ico"
            },
            {
                name: "Gitter Galaxy",
                description: "Galaxy Gitter Community.",
                url: "https://gitter.im/galaxyproject",
                icon: "https://cdn03.gitter.im/_s/a96b504f5/images/favicon-read.ico"
            },
            {
                name: "R Project",
                description: "https://www.r-project.org/.",
                url: "https://www.r-project.org/",
                icon: "https://www.r-project.org/favicon-32x32.png"
            },
            {
                name: "Bioconductor",
                description: "http://www.bioconductor.org/.",
                url: "http://www.bioconductor.org/",
                icon: "http://www.bioconductor.org/favicon.ico"
            }
        ]
    },
    {
        groupName: '实用·工具',
        navigationItems: [{
                name: "阿里云",
                description: "www.aliyun.com.",
                url: "https://www.aliyun.com/",
                icon: "https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico"
            },
            {
                name: "腾讯云",
                description: "产业智变，云启未来。",
                url: "https://cloud.tencent.com/",
                icon: "https://cloud.tencent.com/favicon.ico?t=201902181234"
            },
            {
                name: "华为云",
                description: "www.huaweicloud.com.",
                url: "https://www.huaweicloud.com/",
                icon: "https://res-static3.huaweicloud.com/content/dam/cloudbu-site/archive/commons/web_resoure/framework/favicon/favicon.ico?sttl=202101282146"
            },
            {
                name: "云筏科技",
                description: "云筏 - 科研云。",
                url: "https://my.cloudraft.cn/",
                icon: ""
            },
            {
                name: "极云普惠云电脑",
                description: "云电脑-云游戏-手机变电脑软件。",
                url: "https://www.ji-cloud.cn/",
                icon: ""
            },
            {
                name: "青椒云",
                description: "云桌面,一站式云电脑服务平台。",
                url: "https://www.qingjiaocloud.com/",
                icon: ""
            },
            {
                name: "百度网盘",
                description: "pan.baidu.com.",
                url: "http://pan.baidu.com/",
                icon: ""
            },
            {
                name: "天翼云盘",
                description: "家庭云|网盘|文件备份|资源分享。",
                url: "https://cloud.189.cn/",
                icon: ""
            },
            {
                name: "坚果云",
                description: "坚果云官网。",
                url: "https://www.jianguoyun.com/",
                icon: ""
            },
            {
                name: "有道词典",
                description: "免费，即时的多语种在线翻译。",
                url: "https://www.youdao.com/",
                icon: ""
            },
            {
                name: "有道翻译",
                description: "坚果云官网。",
                url: "http://fanyi.youdao.com/",
                icon: ""
            },
            {
                name: "谷歌翻译",
                description: "Google 翻译。",
                url: "https://translate.google.cn/",
                icon: ""
            }
        ]
    },
    {
        groupName: '娱乐·视频',
        navigationItems: [{
                name: "腾讯视频",
                description: "v.qq.com.",
                url: "http://v.qq.com/",
                icon: ""
            },
            {
                name: "优酷",
                description: "优酷 - 这个世界很酷。",
                url: "http://www.youku.com/",
                icon: ""
            },
            {
                name: "爱奇艺",
                description: "爱奇艺在线视频。",
                url: "https://www.iqiyi.com/",
                icon: ""
            },
            {
                name: "哔哩哔哩",
                description: "Bilibili 视频弹幕网站。",
                url: "https://www.bilibili.com/",
                icon: ""
            },
            {
                name: "QQ 音乐",
                description: "QQ 音乐,在线听歌。",
                url: "https://y.qq.com/",
                icon: ""
            },
            {
                name: "网易云音乐",
                description: "163 网易云音乐。",
                url: "https://music.163.com/",
                icon: ""
            },
        ]
    },
    {
        groupName: '游戏·论坛',
        navigationItems: [
            {
                name: "百度贴吧",
                description: "百度贴吧。",
                url: "https://tieba.baidu.com/index.html",
                icon: ""
            },
            {
                name: "台服战地",
                description: "台服战地之王。",
                url: "https://ava.mangot5.com/ava/index",
                icon: ""
            },
        ]
    },
    ]
}
