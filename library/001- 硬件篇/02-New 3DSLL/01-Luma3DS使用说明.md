# Luma3DS 使用说明

### 设置说明  
资料来源于网友整理和luma3ds作者[AuroraWright的Options and usage](https://github.com/AuroraWright/Luma3DS/wiki/Options-and-usage)



如果luma目录下没有config.bin（保存luma设置的文件），开机后将自动进Luma3DS设置菜单（以后可以在系统启动时按住Select键进入）。

**Luma3DS设置菜单简要说明：**  

"Default EmuNAND:1( ) 2( ) 3( ) 4( )"--默认EmuNAND的设置，最多支持4个EmuNAND
"Screen-init brightness: 4( ) 3( ) 2( ) 1( )"：--四级亮度调整，1是最暗，4是最亮。仅限noscreeninit的A9LH用户使用  
"Splash:Off( ) Before( ) After( ) payloads" --显示启动画面，关闭、在加载payloads前、在加载payloads后  
"PIN lock:Off( ) 4( ) 6( ) 8( ) digits" --PIN锁选项：关闭、4位、6位、8位，可用按键有A、B、X、Y和数字方向键  
"New 3DS CPU: Off( ) L2( ) Clock( ) L2+Clock( )"：--N3DS提升CPU的频率、开启扩展的L2 Cache，有需要的可以选  
"Dev.features:Off( ) ErrDisp( ) UNITINFO( )" --开发者功能：关闭、显示debug错误信息、开发机模式（在线功能将无法使用）


"( ) Autoboot SysNAND"：--自动启动真实系统，有需要的选  
"( ) Autoboot EmuNAND"：--自动启动虚拟系统，有需要的选  
"( ) Use SysNAND FIRM if booting with R (A9LH)"：--A9LH下如果按住R启动使用SysNAND的FIRM，有需要的可以选  
"( ) Use second EmuNAND as default"：--SD卡有两个虚拟系统时才用得到，一般不用选  
"( ) Enable region/language emu. and ext. .code"：--启用区域/语言模拟等，有需要的可以选  
"( ) Show current NAND in System Settings"：--在系统设置里显示NAND模式，例如"SysE"表示真实系统&使用首个虚拟系统的FIRM。显示系统标识和自定义标识，即勾选后，真实系统会显示sys，虚拟显示emu，如果不勾选，都显示ver xxxx。为了便于区别，可以勾选。
"( ) Show GBA boot screen in patched AGB_FIRM"：--运行GBAVC游戏时显示GBA开机画面，出于兼容性考虑一般不用选  
"( ) Display splash screen before payloads"：--加载payloads前显示启动画面，一般不用选  

"( ) SysNAND is updated (A9LH-only)"--更新的真实系统（仅限A9LH使用），有需要的可以选  
"( ) Force A9LH detection" --强制A9LH检测，选中的话9.0系统用户使用非A9LH入口的CFW将强制从A9LH入口启动，一般不用选  
"( ) Enable FRIMS and Modules loading form SD"--允许从SD卡启动FRIMS和系统模块，一般不选  
"( ) Use custom path"--使用自定义的payload路径  
"( ) Enable region/language emulation"--启用区域/语言模拟，有需要的可以选  
"( ) Enable game patching" --启用游戏区域/语言或修改补丁等，有需要的可以选  
"( ) Show NAND or user string in System Settings" --在系统设置里显示NAND模式或自定义用户字符串，有需要的可以选  
"( ) Patch SVC/service/archive/ARM9 access" --禁用SVC、service、archive、ARM9 access等，一般不建议选  
"( ) Set developer UNITINFO" --设置开发单独信息，一般不建议选  
"( ) Enable exception handlers" --允许异常的处理程序，一般不建议选  
"( ) Enable splash screen with no screen-init"--noscreeninit的A9LH用户启用开机画面，一般不用选     

**3DS系统设置内的显示解释**  
LUMA3DS的这个设置选项会影响这个显示，“Show current NAND in System Settings”：版本号显示真实或虚拟。  
具体：  
Emu：第一个虚拟系统用自己系统的固件加载（简单来讲，就是你现在在虚拟系统，下同）  
EmuA：第一个虚拟系统用真实系统的固件加载  
Emu2：第二个虚拟系统用自己系统的固件加载  
Sys：真实系统用自己系统的固件加载(简单来说就是你现在在真实系统，不过不排除虚拟真实的可能性，最简单验证方法就是，在开机的情况下拔掉SD卡，如果主机还能操作就是真实系统)  
SysA：真实系统用第一个虚拟系统的固件加载  
Ver：版本号的意思，没有对系统进行任何操作的情况下，官方的系统就会显示这个前缀。

### 升级说明  
1. 离线更新的方式，替换更新根目录的arm9loaderhax.bin  
A9LH（Arm9LoaderhaX）破解，luma3ds最高支持版本为v7.0.5。高于此版本的luma3ds支持boot9strap破解。  
2. 在线更新方式，安装lumaupdater的CIA，然后机器联网更新。  

**Luma3DS不同版本的跨区路径：**
luma6.6跨区路径是：/luma/locales/<titleID>.txt
luma7.0的路径是：/luma/titles/<titleID>/locale.txt

### SD卡目录结构说明
**Luma3DS v7.1 boot9strap例子**

SD卡文件目录结构说明  
SD:.  
│  boot.firm          --Luma3DS 现在普通版和开发版都是同一文件  
│  
├─files9                      --新的D9、E9、H9、GM9等的统一工作目录  
│  │  aeskeydb.bin            --整合slot0x25keyX,slot0x18keyX,slot0x1BkeyX,slot0x24keyY  
│  │  d9logo.bin              --Decrypt9下屏开机画面  
│  │  seeddb.bin              --This file is needed to decrypt seed crypto NCCHs and CIAs.  
│  │  
│  └─D9Game    
│    
└─luma  
    │  lumaupdater.cfg        --Luma3DS updater的配置文件  
    │  
    └─payloads  
            x_H9.firm         --Hourglass9  
            down_D9.firm      --Decrypt9WIP  
            up_G9.firm        --GodMode9  
            y_E9.firm         --EmuNAND9  
