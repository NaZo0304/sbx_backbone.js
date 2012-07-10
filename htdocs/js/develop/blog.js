// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
// Backbone.js Router郡
// @see http://qiita.com/items/5acef8dd49f67fd7813c
// @see http://www.ibm.com/developerworks/jp/web/library/wa-backbonejs/
//
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
var Routers = Backbone.Router.extend({

   // Hash maps for routes
   routes : {
      "" : "index",
      "php/blog/:blogId" : "getBlog",
      "*error" : "fourOfour"
   },

   index: function(){
       // Homepage
   },
   getBlog: function (blogId) {
       console.log(blogId);
   },
   fourOfour: function(error) {
       // 404 page
   }
});

// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
// Backbone.js Model郡
// @see http://qiita.com/items/5acef8dd49f67fd7813c
// @see http://www.ibm.com/developerworks/jp/web/library/wa-backbonejs/
//
// this.defaults : JSON Object
//   modelの初期値っすな。説明省きます。
//
// this.initialize: function () {}
//   コンストラクタだよ。
//
// this.validate: function () {}
//   よくあるクライアントチェック処理
//
// this.error: function () {}
//   よくあるvalidate のエラー処理
//
// this.urlRoot : URL String
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv

// BlogModelは、部品のmodelを管理したり　定数管理するのがいいかも？）
var BlogModel = Backbone.Model.extend({
	urlRoot: "php/blog",
    defaults: {
        "blog_id": 0,
        "title": "",
        "content": "",
        "tag": new Array(),
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString()
    },
    initialize: function () {
    },
    validate: function (attrs) {
    },
    error: function (model, error) {
        console.log('hoge');
    }
});


//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
// Backbone.js Collection郡
//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
// 一覧表示系はCollectionを利用
/*
var BlogCollection = Backbone.Collection.extend({
    model: BlogModel
});
*/
//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
// Backbone.js View郡
//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv


// VIEWは、HTMLに対してJQuery で描画やイベントの登録などを行う。
var BlogView = Backbone.View.extend({
    initialize: function () {
    	// どー説明したらいいか・・・＾＾；；；；；；
    	_.bindAll(this, "render");
    	// fetchやset等でmodelが変更されたらrenderがcallbackされるように設定しようぜって事
    	this.model.bind("change", this.render);
    	// initilizeされた時に初期化しちゃおうぜって事(納品されたデザインをそのままでjsで空白にしたりできるから便利かもね)
    	// loading....って事の表示にも利用
    	this.render();
    },
    render: function () {
    	if (_.isEqual(this.model.get("blog_id") , 0)){

    	} else {
	    	$("#blog_id").text(this.model.get("blog_id"));
	    	$("#title").text(this.model.get("title"));
	    	$("#content").text(this.model.get("content"));
	    	$("#tag").text(this.model.get("tag"));
	    	$("#updated_at").text(this.model.get("updated_at"));
	    	$("#created_at").text(this.model.get("created_at"));
    	}
    }
});

//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
// ただのjquery！！
//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
// これは単純なJQueryだ！
$("#searchBtn").click(function(){
    console.log("searchBtn");
    var id = $("#blogIdTxt").val();
    var blog = new BlogModel({id :id});
    blog.fetch();
    var showBlogView = new BlogView({el :$("blog"), model:blog});
});
//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
// 初期処理(ページ読み込み時実行）
//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*vv
(function(){
    console.log("initilize");
    Router = new Routers();
    Backbone.history.start({ pushState: true });
    blogModel = new BlogModel();
    blog = new BlogView({el :$("blog"), model:blogModel});
})();