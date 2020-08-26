# PSV插件使用教程  

### 说明  
资料来源于网友整理，插件的安装目前需要基于3.60变革系统。  

### NoNpDrm插件  
###### 一、NoNpDrm插件安装方法  
1. 下载相应的文件nonpdrm.skprx，拷贝到机器内,例如路径``ux0:tai``
2. 修改``ux0:tai/config.txt``文档，可以用vitashell修改。增加代码``*KERNEL  换行ux0:tai/nonpdrm.skprx``
3. 重启机器，生效。

###### 二、NoNpDrm版游戏制作方法  
1. 安装NoNpDrm插件（推荐使用网友一直改的vita工具箱）
2. PSV插卡运行正版游戏
3. 根目录会生成nonpdrm文件夹，里面有rif格式对应游戏伪装授权文件
4. 将其改名work.bin，复制到本游戏的`sce_sys/package`文件夹内，完成

### psvitacheat金手指插件  
###### 一、psvitacheat插件安装方法（z04 beta版）
1. 将vitacheat.suprx插件文件放到PSV主机的 ``ux0:vitacheat/`` 目录下
2. 将vitacheat.skprx插件文件放到PSV主机的 ``ur0:vitacheat/`` 目录下
3. 将font.dat字体文件放到PSV主机的 ``ux0:vitacheat/font/`` 目录下
4. 将 ux0:tai/ 和 uma0:tai/ 目录下的config.txt文件改为其他文件后缀名 比如config.bak等 如果没使用卡套的可以忽略uma0相关设置
5. 修改 ur0:tai/ 目录下的 config.txt 文件``*KERNEL 换行ur0:vitacheat/vitacheat.skprx``
6. 关机重启，插件生效

###### 二、psvitacheat使用方法
1. 游戏中按下 L+→ 快捷键，呼出PSVC界面使用。
2. psv金手指文件格式，文件编码格式为ANSI，文件名为游戏ID比如PCSG00196，后缀名为.psv
3. psv金手指文件路径``ux0:vitacheat/db/``

### Pkgi游戏下载及安装教程
1. 首先需要安装NoNpDrm
2. 在ux0中新建pkgi文件夹，将config.txt传输进本文件夹
3. 安装pkgi.vpk
4. 安装完毕打开，选菜单内刷新，显示游戏列表。不支持后台下载。

### 常用插件
#### rePatch插件  
###### 一、插件补丁安装方法
1. 安装方式，与其他内核插件一样。将其添加到config.txt的* KERNEL部分。
2. 创建文件夹``ux0 : repatch``（文件夹需要用Vitashell或者其他工具自行创建）
3. 在rePatch文件夹中用要修补的游戏的ID创建一个文件夹。
4. 将想替换的解密的内容放在此游戏 ID文件夹中。不包括sce_sys文件夹。
5. 如果需要，可以删除原始补丁（patch）文件夹或应用（app）文件夹中的重复文件，以节省空间。（保留无影响且更加安全）
这之后应该有3个单独的文件夹：
1. 原始应用程序的``ux0:app``文件夹。（不包括正在通过rePatch修补的那些）
2. 包含官方更新/补丁文件的``ux0:patch``文件夹。（不包括正在通过rePatch修补的那些）
3. 一个ux0 : repatch文件夹，其中包含应用程序和修补程序中本身就存在的文件的修改版本  

###### 二、DLC用法
Repatch插件的另一个功能是让NND版本的游戏使用Mai版（完全解密）的DLC，使用方法如下：
ux0：reAddcont 文件夹需要用Vitashell或者其他工具自行创建（注意文件夹的拼写，错误的拼写会导致无法识别）
1. 确保``ux0：addcont / <游戏 ID>``不存在。这将使游戏DLC从readdcont文件夹加载。
1. 将完全解密（mai）的内容放入：``ux0:readdcont/<游戏 ID>/<DLC ID>``
1. 现在，您可以像使用MaiDump或VITAMIN一样直接修改DLC。

###### 三、作者主页
https://github.com/dots-tb/rePatch-reDux0/

#### r0syscall6插件  
