<h1 align="center">
  DocsGPT  🦖
</h1>

<p align="center">
  <strong>智能开源项目文档小助手</strong>
</p>

<p align="left">
  <strong>DocsGPT</strong> 是一个顶尖的开源解决方案，它简化了在项目文档中寻找信息的过程。由于它集成了强大的 <strong>GPT</strong> 模型，开发人员可以轻松地提出文档涉及的相关项目的问题，并得到准确的答案。
  
告别耗时的手动搜索，让 <strong>DocsGPT</strong> 帮助你快速找到需要的信息。它将彻底改变你的项目文档使用体验。欢迎为该项目做出贡献，打造更强大的人工智能助手。
</p>

<div align="center">

  <a href="https://discord.gg/n5BX8dh8rU">![example1](https://img.shields.io/github/stars/arc53/docsgpt?style=social)</a>
  <a href="https://discord.gg/n5BX8dh8rU">![example2](https://img.shields.io/github/forks/arc53/docsgpt?style=social)</a>
  <a href="https://discord.gg/n5BX8dh8rU">![example3](https://img.shields.io/github/license/arc53/docsgpt)</a>
  <a href="https://discord.gg/n5BX8dh8rU">![example3](https://img.shields.io/discord/1070046503302877216)</a>

</div>

## Roadmap

你可以在这里找到我们的 Roadmap，欢迎提交代码或创建 Issue，这将有助于我们打造更强大的 DocsGPT!

## 预览
![example-of-docs-gpt](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-02-14-15-11-zRaWJD.png)

## [在线体验](https://docsgpt.icloudnative.io/)

## [加入 Discord](https://discord.gg/n5BX8dh8rU)


## 项目结构

- Application - flask 应用（主应用程序）

- Extensions - chrome 扩展

- Scripts - 为其他文档创建相似度搜索索引和存储的脚本。

## 快速开始

注意：目前的矢量数据库使用的是 [laf](https://www.lafyun.com/) 文档，因此响应将与该文档相关，如果你想使用其他文档，请遵循以下指南

1. 进入 `/application` 目录
2. 安装依赖
`pip install -r requirements.txt`
1. 准备 .env 文件
将 .env_sample 复制并重命名为 .env，将 OpenAI API Key 填到 .env 中
1. 运行应用
`python app.py`


[如何安装 Chrome 扩展](https://github.com/arc53/docsgpt/wiki#launch-chrome-extension)


## [文档](https://github.com/arc53/docsgpt/wiki)



## [如何使用其他文档库](https://github.com/arc53/docsgpt/wiki/How-to-train-on-other-documentation)

基于 [🦜️🔗 LangChain](https://github.com/hwchase17/langchain) 构建

