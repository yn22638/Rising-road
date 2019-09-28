## git创建分支

**上传分支**

1. 首先克隆git项目
2. 然后在项目里创建文件夹
3. git checkout -b 分支名称
4. git add .
5. git commit -m"简述"
6. git push origin 分支名称

## git删除分支

1. 切换主分支``git checkout master``
2. 查看已有的本地及远程分支``git branch -a``
3. 删除远程分支``git push origin --delete 分支名``
4. 删除后，再次查看分支情况``git branch -a``
5. 删除本地分支``git branch -d 分支名``
