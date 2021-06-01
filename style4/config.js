var date  = new Date()           <!--获得日期数据-->
var year  = date.getFullYear();     <!--年-->
var month = date.getMonth()+1;      <!--月，这里的月份必须要+1才是当前月份-->
var day   = date.getDate();         <!--日，getDay是获得当前星期几（0-6），getDate是获得当前日期-->

var config = {
    // 网页标题
	title: '网址导航 | BioIT 爱好者',
    headerTitle: '网址导航',
    // seo关键字
	keywords:'BioIT,导航,网址',
    // 网站描述
	description:'简单但实用的导航',
    // logo图片
    logo: './static/img/search.svg',
    // 网页背景图片
    bodyBackgroundImage:'https://pc-index-skin.cdn.bcebos.com/hiphoto/56611704245.jpg',
    // 设置网页背景图片怎么显示，取值和css属性background-repeat相同
    backgroundRepeat: 'repeat',
    // 版权声明
    copyright: '<p>本站内容源自互联网，如有内容侵犯了你的权益，请联系删除相关内容，联系邮箱：ishenweiyan@foxmail.com</p><p>© 2021-'+year+' <a href="https://www.bioitee.com">BioIT 爱好者</a> | <a href="http://beian.miit.gov.cn/">粤ICP备16023717号</a></p>',
    //子导航项目默认图标
    baseIcon: 'https://apps-db.oss-cn-shenzhen.aliyuncs.com/',
    navigationIcon: './static/img/default_url.ico',
    //子导航项目默认图标存储库
    baseIconPath: 'http://apps-db.oss-cn-shenzhen.aliyuncs.com/%E5%AF%BC%E8%88%AA/',
    defaultSearchEngineIndex: 0,
    // 默认搜索引擎图标,icon加载途径优先级  配置文件自定义icon > 搜索引擎网站icon > 默认搜索icon
    defaultSearchEngineIcon: "data:image/png;base64,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",
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
        name: '知乎',
        url: 'https://www.zhihu.com/search?type=content&q='
    },
    {
        name: '微博',
        url: 'https://s.weibo.com/weibo/'
    },
    {
        name: 'B站',
        url: 'http://search.bilibili.com/all?keyword='
    },
    {
        name: '豆瓣',
        url: 'https://www.douban.com/search?source=suggest&q='
    }],

    //导航列表
    navigations: [{
    	// 导航分组名字
        groupName: '常用 · 站点',
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
                icon: "https://dss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/导航List_QQ邮箱.png"
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
                icon: "微信公众号.png"
            },
            {
                name: "Coding",
                description: "个人 coding 代码托管。",
                url: "http://shenweiyan.coding.net/",
                icon: "coding.png"
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
                icon: "http://md.aclickall.com/favicon.ico"
            },
            {
                name: "搜狗微信",
                description: "搜狗微信搜索，一搜即达。",
                url: "https://weixin.sogou.com/",
                icon: "https://weixin.sogou.com/favicon.ico"
            },
            {
                name: "简书",
                description: "简书创作社区。",
                url: "https://www.jianshu.com/",
                icon: "简书.png"
            },
            {
                name: "知乎",
                description: "知乎社区。",
                url: "https://www.zhihu.com/",
                icon: "知乎.png"
            },
            {
                name: "V2EX",
                description: "V2EX 创意工作者的社区。",
                url: "https://www.v2ex.com/",
                icon: "https://www.v2ex.com/static/icon-192.png"
            },
            {
                name: "语雀彩蛋",
                url: 'https://www.yuque.com/shenweiyan/wow',
                icon: 'yq-cool.png',
                description: '好看的皮囊千篇一律，有趣的灵魂万里挑一！'
            }
        ]
    },
    {
        groupName: '知识 · 导航',
        navigationItems: [{
                name: "NCBI",
                description: "National Center for Biotechnology Information.",
                url: "https://www.ncbi.nlm.nih.gov/",
                icon: "ncbi.svg"
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
        groupName: '工具 · 云端',
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
                icon: "华为云.png"
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
                icon: "极云普惠云电脑.png"
            },
            {
                name: "青椒云",
                description: "云桌面,一站式云电脑服务平台。",
                url: "https://www.qingjiaocloud.com/",
                icon: "https://www.qingjiaocloud.com/icons/icon-48x48.png"
            }
        ]
    },
    {
        groupName: '娱乐 · 视频',
        navigationItems: [{
                name: "腾讯视频",
                description: "v.qq.com.",
                url: "http://v.qq.com/",
                icon: "腾讯视频.png"
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
        groupName: '工具 · 软件',
        navigationItems: [
            {
                name: "有道词典",
                description: "免费，即时的多语种在线翻译。",
                url: "https://www.youdao.com/",
                icon: "有道词典.png"
            },
            {
                name: "有道翻译",
                description: "有道翻译。",
                url: "http://fanyi.youdao.com/",
                icon: "有道词典.png"
            },
            {
                name: "谷歌翻译",
                description: "Google 翻译。",
                url: "https://translate.google.cn/",
                icon: "https://ssl.gstatic.com/translate/favicon.ico"
            },
            {
                name: 'Greasy Fork',
                url: 'https://greasyfork.org/zh-CN',
                icon: 'greasyfork.png',
                description: '安全、实用的用户脚本大全。'
            },
            {
                name: 'Crx4Chrome',
                url: 'https://www.crx4chrome.com/',
                icon: 'crx4chrome.png',
                description: '英文 Chrome 插件下载网。'
            },
            {
                name: '扩展迷',
                url: 'https://www.extfans.com/',
                icon: 'https://www.extfans.com/favicon.ico',
                description: 'Chrome 插件扩展下载网。'
            },
            {
                name: '小众软件',
                url: 'https://www.appinn.com/',
                icon: 'https://img3.appinn.net/static/wp-content/uploads/Appinn-icon-32.jpg',
                description: '分享免费、小巧、实用、有趣、绿色的软件。'
            }
        ]
    },
    {
        groupName: '资讯 · 博客',
        navigationItems:[
            {
                name: 'Inoreader',
                url: 'https://www.inoreader.com/',
                icon: 'https://www.inoreader.com/favicon.ico',
                description: '重新掌控你的新闻订阅源。'
            },
            {
                name: 'Hacker News',
                url: 'https://news.ycombinator.com/',
                icon: 'https://news.ycombinator.com/favicon.ico',
                description: '一家关于计算机黑客和创业公司的社会化新闻网站。'
            },
            {
                name: '经管之家',
                url: 'https://bbs.pinggu.org/',
                icon: 'https://bbs.pinggu.org/favicon.ico',
                description: '国内活跃的经济、管理、金融、统计在线教育和咨询网站。'
            }
        ]
    },
    {
        groupName: '资源 · 下载',
        navigationItems: [
            {
                name: "百度网盘",
                description: "pan.baidu.com.",
                url: "http://pan.baidu.com/",
                icon: "https://pan.baidu.com/m-static/base/static/images/favicon.ico"
            },
            {
                name: "天翼云盘",
                description: "家庭云|网盘|文件备份|资源分享。",
                url: "https://cloud.189.cn/",
                icon: "https://cloud.189.cn/logo.ico"
            },
            {
                name: "坚果云",
                description: "坚果云官网。",
                url: "https://www.jianguoyun.com/",
                icon: "坚果云.png"
            },
            {
                name: 'IconFont',
                url: 'https://www.iconfont.cn/',
                icon: 'https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg',
                description: '阿里巴巴矢量图标库。'
            },
            {
                name: 'Easyicon',
                url: 'https://www.easyicon.net/',
                icon: 'https://cdn-img.easyicon.net/image/2019/panda-index.svg',
                description: 'ICON(SVG/PNG/ICO/ICNS)图标搜索下载。'
            }
        ]
    },
    {
        groupName: '书籍 · 阅读',
        navigationItems: [
            {
                name: '微信读书',
                url: 'https://weread.qq.com/',
                icon: 'https://rescdn.qqmail.com/node/wr/wrpage/style/images/independent/favicon/favicon_48h.png',
                description: '微信读书电脑版。'
            },
            {
                name: '书栈网',
                url: 'https://www.bookstack.cn/',
                icon: 'https://www.bookstack.cn/favicon.ico',
                description: 'IT 互联网开源编程书籍免费阅读与下载。'
            }
        ]
    },
    {
        groupName: '游戏 · 论坛',
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
                icon: "战地之王.png"
            },
        ]
    },
    ]
}