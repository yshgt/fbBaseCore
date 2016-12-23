# fbBase Core

## Firebaseプロジェクトの始め方

### 事前準備

#### Gitのインストール
バージョン管理するためのアプリ
- https://git-scm.com からダウンロードしてインストール
- インストールの確認、Powershellを起動して以下のコマンドを実行。
  - バージョン番号が表示されればインストールが正常にできていることを確認できる
```sh
git version
```
- Proxyの設定（Proxyを使っている場合のみ）
```sh
git config --global https.proxy http://proxy.aaaa.com:8080
git config --global http.proxy http://proxy.aaaa.com:8080
# http://proxy.aaaa.com:8080 は適宜書き換え
```

#### node.jsとfirebase-toolsのインストール
Firebaseで開発するために必要なツール
- https://nodejs.org/en/ からダウンロード→インストール
  - インストールの確認、Powershellを起動して以下のコマンドを実行
```sh
npm -version
```
- Proxyの設定
  - Powershellから、以下のコマンドを実行
```sh
npm config set https-proxy http://proxy.aaaa.com:8080
npm config set proxy http://proxy.aaaa.com:8080
```
- Firebaseライブラリのインストール
```sh
npm install -g firebase-tools
```

### 開発用テンプレートを使って初期設定をする
認証やテストユーザー登録など基本機能が実装された開発用テンプレートを使う
- 自分のリポジトリ（プロジェクト）を登録する
  - https://github.com にログイン（ユーザ登録）
  - New Repositoryを登録する
  - リポジトリのアドレスをコピーしておく
    - https://github.com/yshgt/fbBaseCore.git のようなurl
- テンプレートのダウンロード
```sh
git clone https://github.com/yshgt/fbBaseCore.git PROJECTNAME
# PROJECTNAMEに、自分のプロジェクトの名前を入れる（例; rpgChat）
# PEOJECTNAMEのディレクトリーができ、そこにテンプレートのソースがダウンロードされる
```
- Gitの設定
```sh
cd PROJECTNAME # 上記で入力したPROJECTNAMEに移動
rm -rf .git # テンプレートのgit情報を削除
git init # git の初期化
git add . # バージョン管理に追加
git commit -m "first commit" # コミットする
git remote add origin https://github.com/USERNAME/PROJECTNAME.git  # gitのサーバー保存先を設定
git push -u origin master # gitのサーバーに保存（初回はログイン情報を入力する）
```

### 開発を開始する
#### ファイル構成
- PROJECTNAME
  - .gitignore  :git管理対象外にするものを定義しているファイル（変更不要）
  - database.rules.json :firebaseのRealtime Databaseの設定ファイル
  - firebase.json :firebaseの基本設定ファイル
  - README.md :説明ファイル
  - public
    - index.html :メインのhtmlファイル ★ 画面表示の開発で利用する
    - setup.html :初期セットアップ用ファイル
    - 404.html :不正なウェブアクセスの時に表示するファイル
    - favicon.ico :Favicon
    - css
      - bulma.css :cssのライブラリ（変更不要）
      - bulma.css.map :cssのライブラリ（変更不要）
      - index.css :メインのhtml用cssファイル ★ 画面表示の見ばえの開発で利用する
    - js
      - auth.js :認証用のライブラリ（変更不要）
      - initfb.js.example :Firebase設定ファイルのサンプル
      - initfb.js :ダウンロードには含まれていない。↑のサンプルファイルの.sampleを削除して作成する ★ この後初期設定をする
      - main.js :メインのjsファイル ★ 機能を開発する際に利用する

#### 初期設定
- Firebaseのプロジェクトを作成する
  - https://console.firebase.google.com でCreate New Projectから作成する
- Authenticationの設定する
  - 作成したプロジェクトのAuthenticationを開く
  - SIGN-IN METHODを開く
  - ProviderのEmail/Passwordを選び、enableをONにして、Saveをクリック
- Add Firebase to your web app をクリックし、プロジェクトの初期設定情報をコピーする
```javascript
var config = {
  apiKey: "AIzaSyAW3Zdu4DA_OdJ6nw1nwVUEkhsKuxDkZxA",
  authDomain: "picturan-3903f.firebaseapp.com",
  databaseURL: "https://picturan-3903f.firebaseio.com",
  storageBucket: "picturan-3903f.appspot.com",
  messagingSenderId: "183419690298"
};
// ↑この部分だけでいいです
```
- initfb.jsを作成する
  - public/js/initfb.js.example を pubic/js/initfb.jsにリネームする（あるいはコピーする）
  - initfb.jsを開き、該当箇所を上記のコピーした内容に書き換える
- Firebaseプロジェクトに紐付ける
  - cdでプロジェクトディレクトリ直下に移動して、以下のコマンドを実行
```sh
firebase use --add
```
  - Which project do you want to add?
    - 先程作成したプロジェクトを選ぶ
  - What alias do you want to use for this project?
    - projectnameを入力する

#### 動かしてみる
- ローカル環境で起動する。cdでプロジェクトディレクトリ直下に移動して、以下のコマンドを実行
```sh
firebase serve
```
- http://localhost:5000 にアクセスして、↓の表示を確認する
  - ログイン画面が表示される
  - ログイン済みの場合は、mainと書かれた画面が表示される

- テストユーザーを登録する
  - http://localhost:5000/setup.html を開く
  - Create Test Usersボタンをクリック

- http://localhost:5000 にアクセスしてテストユーザーでログインする
