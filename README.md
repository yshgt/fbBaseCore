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

### 開発用テンプレートで開発を開始する
認証やテストユーザー登録など基本機能が実装された開発用テンプレートを使う
- 自分のリポジトリ（プロジェクト）を登録する
  - https://github.com にログイン（ユーザ登録）
  - New Repositoryを登録する
  - リポジトリのアドレスをコピーしておく
    - https://github.com/yshgt/fbBaseCore.git のようなurl
- テンプレートのダウンロード
```sh
git clone https://github.com/yshgt/fbBaseCore.git PROJECTNAME
# PROJECTNAMEに、自分のプロジェクトの名前を入れる
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
