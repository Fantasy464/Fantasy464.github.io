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
