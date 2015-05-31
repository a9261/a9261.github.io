---
layout: post
title: "Jekyll Pagination分頁設定"
description: "Jekyll 預設是沒有開啟分頁的噢，是不是覺得文章一多要一直拉一直拉很煩呢？，現在就一起來看看怎麼做Pagination分頁設定吧! :)"
category: Jekyll 
tags: [教學]
---
{% include JB/setup %}
預設Jekyll是沒有開啟分頁功能的，所以當你的文章一多的時候

就會發現怎麼文章永遠顯示的都是最新的，後面的只能透過文章列表頁面來尋找

是不是感覺不太人性化呢？這篇就會簡單的教你如何快速的開啟分頁功能噢 :)

希望對大家有一些些幫助

<!-- more -->

首先我們要注意到一點就是，如果你是用[jekyll-bootstrap](http://jekyllbootstrap.com)的話

記得要將首頁的index.md改成index.html，這是為什麼呢？

![官方Pagination說明]({{ post.url }}/assets/images/20150531/01.png)

因為jekyll在做分頁的時候，其實背後的原理是透過程式將index.html做為樣版

然後會產出像下面格式的資料夾，來達到**分頁**的效果

![分頁產生結果]({{ post.url }}/assets/images/20150531/02.png)

改完了，就可以先到根目錄底下的_config.yml進行設定的動作了

要加入的設定也非常簡單，我們只要指定每一頁要顯示的筆數跟分頁連結的格式即可

![_config.yml設定檔修改]({{ post.url }}/assets/images/20150531/03.png)

一般來說如果不想特別改的話，可以照官方的[範例](http://jekyllrb.com/docs/pagination/)設定即可  

    paginate_path: "/blog/page:num/"

設定完後我們還需要調整一下我們原本文章列表呈現的程式碼噢!!

以jekyllbootstrap當例子

我們需要先到_includes\themes\bootstrap-3底下找到他的default.html

你可能會看到長的下面的內容

![範例]({{ post.url }}/assets/images/20150531/04.png)

接下來我們就要換成分頁專用的語法了 :)

可以參考我的截圖

![分頁範例]({{ post.url }}/assets/images/20150531/05.png)

主要的重點就是在利用**迴圈**來做呈現。至於會顯示幾筆，就是會依照我們在_config.yml設定的**顯示筆數**囉！

    {% for post in paginator.posts %}
    {% endfor %}

來總結一下設定的步驟吧！

1. 確定根目錄有index.html
2. 設定_config.yml
3. 利用for post in paginator.posts 迴圈來呈現我們每頁的內容

今天就到這裡了，謝謝大家~