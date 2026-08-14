#File System (FS Module): directly communicate with OS rather that browser. The commmon opetrations on a file or folder are:
1. File -> rightFile, readFile, appendFile
2. Folder -> mkdir/md, rem/rmdir, readdir
3. File metadat -> Stat, lStat, rStat
4. Watch -> watch, unwatch
5. Stream -> readStream(), writeStream()
all fxns are promise, so it must be called with 'await' keyword

#CRUD Project
assume we are making cart related project
1. user can add any product (id,name,price,qty) into cart
2. user can see all the items if cart
3. user can remove item from cart
4. user can also update qty od product
5. all the items should be stored after termination of project