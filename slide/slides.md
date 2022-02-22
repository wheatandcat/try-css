---
theme: apple-basic
background: https://source.unsplash.com/collection/94734566/1920x1080
class: 'text-center'
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
layout: intro
colorSchema: 'light'
---

## CSS clip-pathの紹介

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

<div class="flex pb-5">
  <div class="px-5">
    <div class="rounded-full bg-white w-30 h-30 overflow-hidden border-2 border-black border-dotted border-opacity-20">
      <img
        class="w-40 pt-2"
        src="/account.png"
      />
    </div>
  </div>
  <div class="mt-6">
    <h2>自己紹介</h2>
  </div>
</div>
<br />

- 📝 飯野陽平（[wheatandcat](https://github.com/wheatandcat)）
- 🏢 フリーランスエンジニア（シェアフル株式会社CTO）
- 💻 Blog: https://www.wheatandcat.me/
- 📚 Booth: https://wheatandcat.booth.pm/
- 🛠 今までに作ったもの
  - [memoir](https://memoir-lp-mvbeacmwe-wheatandcat.vercel.app/)
  - [ペペロミア](https://peperomia.app/)
  - [Atomic Design Check List](https://atomic-design-checklist.vercel.app/)


---

# clip-pathとは

<br/>

clip-pathはCSSのプロパティで、<br/>
要素のどの部分を表示するかを設定するクリッピング領域を指定できるCSS。

具体的には、HTMLの要素の一部をトリミングしたり、SVGのPathを指定して動的に表示することができる。


<br/>
<br/>

[MDN clip-path](https://developer.mozilla.org/ja/docs/Web/CSS/clip-path)

---

# 対応ブラウザ

<img
  class="w-full"
  src="/support.png"
/>


https://caniuse.com/?search=clip-path


---

# 使っても大丈夫か？

<br/>
IE11以外のブラウザは、ほぼサポート済み

IE11のサポートも2022年6月15日で終了なので、それ以降は使ってもOK 👌


---

# clip-pathに設定できる値

|  値  |  内容  |
| ---- | ---- |
|  inset  |  四角形を設定  |
|  circle  |  丸を設定  |
|  ellipse  |  楕円を設定  |
|  polygon  |  多角形を設定  |


---
layout: center
class: "text-center"
---

<div class="text-2xl font-700 text-enter w-full">
  <div>実際にサンプルを作ってみた</div>
</div>

---
layout: center
---

## 斜め線を使用したデザイン

[https://try-css.vercel.app/clippath/section](https://try-css.vercel.app/clippath/section)

---
layout: center
---

## clip-pathで四角形を書く

[https://try-css.vercel.app/clippath/inset](https://try-css.vercel.app/clippath/inset)

---
layout: center
---

## clip-pathで丸を書く

[https://try-css.vercel.app/clippath/circle](https://try-css.vercel.app/clippath/circle)

---
layout: center
---

## clip-pathで三角形を書く

[https://try-css.vercel.app/clippath/triangle](https://try-css.vercel.app/clippath/triangle)


---
layout: center
---

## clip-pathでカードにリボンをつける

[https://try-css.vercel.app/clippath/ribbon](https://try-css.vercel.app/clippath/ribbon)

---
layout: center
---

## clip-pathでボタンにアニメーションをつける

[https://try-css.vercel.app/clippath/button](https://try-css.vercel.app/clippath/button)

---
layout: center
---

## clip-pathで画像を切り抜く

[https://try-css.vercel.app/clippath/image](https://try-css.vercel.app/clippath/image)

---
layout: center
---

## clip-pathを使ってデザインしてみる

[https://try-css.vercel.app/clippath/screen](https://try-css.vercel.app/clippath/screen)


---
layout: center
---

## clip-pathを使ってデザインしてみる

[https://try-css.vercel.app/clippath/screen](https://try-css.vercel.app/clippath/screen)



---
layout: center
---

## おまけ: clip-pathでサーチライトっぽいアニメーション

[https://try-css.vercel.app/clippath/light](https://try-css.vercel.app/clippath/light)


---

# まとめ

今までcssのborderで無理やり実装していた箇所が、clip-patでスッキリかけるようになった。

<br/>

アニメーションと組み合わせれば色々できる<br/>
https://digipress.info/tech/revealing-text-by-clip-path/

<br/>

IE11のサポート期間が終わったら、色々な場面でも使用しても良さそう。

---
layout: center
class: "text-center"
---

<div class="text-2xl font-700 text-enter w-full">
  <div>ご清聴ありがとうございました</div>
</div>



<style>
.main {
  display: flex;
  height: 80%;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #46AE35;
}
</style>


