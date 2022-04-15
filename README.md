# 说明

这是一个玩具工程，实现简易的git客户端，只是为了学习，加深对git内部原理的理解

采用nodejs开发，使用到commander组件解析命令行参数

## 如何使用
执行 npm link 设置命令行

```
git-cli init .
git-cli clone https://www.github.com/git/git.git
git-cli add .
git-cli commit -m 'test a commit'
git-cli push origin master
git-cli pull
git-cli merge fetaure/v1.0
git-cli branch 
```

目前还在实现中
