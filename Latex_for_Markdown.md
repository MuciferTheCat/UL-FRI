---
geometry: margin=2cm
header-includes: \usepackage{xcolor}
header-includes: \usepackage{fontawesome}
title: LATEX Math Symbols for Markdown with Pandoc
---

Last updated 27th September 2023.

# Greek and Hebrew letters

|       Sign | Meaning    |      Sign | Meaning   |       Sign | Meaning    |          Sign | Meaning       |      Sign | Meaning   |       Sign | Meaning    |
| ---------: | :--------- | --------: | :-------- | ---------: | :--------- | ------------: | :------------ | --------: | :-------- | ---------: | :--------- |
|   $\alpha$ | `\alpha`   |  $\kappa$ | `\kappa`  |     $\psi$ | `\psi`     |    $\digamma$ | `\digamma`    |  $\Delta$ | `\Delta`  |   $\Theta$ | `\Theta`   |
|    $\beta$ | `\beta`    | $\lambda$ | `\lambda` |     $\rho$ | `\rho`     | $\varepsilon$ | `\varepsilon` |  $\Gamma$ | `\Gamma`  | $\Upsilon$ | `\Upsilon` |
|     $\chi$ | `\chi`     |     $\mu$ | `\mu`     |   $\sigma$ | `\sigma`   |   $\varkappa$ | `\varkappa`   | $\Lambda$ | `\Lambda` |      $\Xi$ | `\Xi`      |
|   $\delta$ | `\delta`   |     $\nu$ | `\nu`     |     $\tau$ | `\tau`     |     $\varphi$ | `\varphi`     |  $\Omega$ | `\Omega`  |            |            |
| $\epsilon$ | `\epsilon` |         o | `o`       |   $\theta$ | `\theta`   |      $\varpi$ | `\varpi`      |    $\Phi$ | `\Phi`    |   $\aleph$ | `\aleph`   |
|     $\eta$ | `\eta`     |  $\omega$ | `\omega`  | $\upsilon$ | `\upsilon` |     $\varrho$ | `\varrho`     |     $\Pi$ | `\Pi`     |    $\beth$ | `\beth`    |
|   $\gamma$ | `\gamma`   |    $\phi$ | `\phi`    |      $\xi$ | `\xi`      |   $\varsigma$ | `\varsigma`   |    $\Psi$ | `\Psi`    |  $\daleth$ | `\daleth`  |
|    $\iota$ | `\iota`    |     $\pi$ | `\pi`     |    $\zeta$ | `\zeta`    |   $\vartheta$ | `\vartheta`   |  $\Sigma$ | `\Sigma`  |   $\gimel$ | `\gimel`   |

# LATEX math constructs

|              Sign | Meaning           |              Sign | Meaning           |                   Sign | Meaning                |
| ----------------: | :---------------- | ----------------: | :---------------- | ---------------------: | :--------------------- |
| $\frac{abc}{xyz}$ | `\frac{abc}{xyz}` |  $\overline{abc}$ | `\overline{abc}`  | $\overrightarrow{abc}$ | `\overrightarrow{abc}` |
|              $f'$ | `f'`              | $\underline{abc}$ | `\underline{abc}` |  $\overleftarrow{abc}$ | `\overleftarrow{abc}`  |
|      $\sqrt{abc}$ | `\sqrt{abc}`      |   $\widehat{abc}$ | `\widehat{abc}`   |      $\overbrace{abc}$ | `\overbrace{abc}`      |
|  $\sqrt[n] {abc}$ | `\sqrt[n] {abc}`  | $\widetilde{abc}$ | `\widetilde{abc}` |     $\underbrace{abc}$ | `\underbrace{abc}`     |

# Delimiters

|      Sign | Meaning            |         Sign | Meaning           |           Sign | Meaning        |           Sign | Meaning        |
| --------: | :----------------- | -----------: | :---------------- | -------------: | :------------- | -------------: | :------------- |
|       $($ | `(`                |          $)$ | `)`               |     $\uparrow$ | `\uparrow`     |     $\Uparrow$ | `\Uparrow`     |
|       $[$ | `[` or `\lbrack`   |          $]$ | `]` or `\rbrack`  |   $\downarrow$ | `\downarrow`   |   $\Downarrow$ | `\Downarrow`   |
| $\lbrace$ | `\{` or  `\lbrace` |    $\rbrace$ | `\}` or `\rbrace` | $\updownarrow$ | `\updownarrow` | $\Updownarrow$ | `\Updownarrow` |
| $\langle$ | `\langle`          |    $\rangle$ | `\rangle`         |        $\vert$ | `\vert`        |        $\Vert$ | `\Vert`        |
| $\lfloor$ | `\lfloor`          |    $\rfloor$ | `\rfloor`         |       $\lceil$ | `\lceil`       |       $\rceil$ | `\rceil`       |
|       $/$ | `/`                | $\backslash$ | `\backslash`      |       $\empty$ | `\empty`       |                |                |

You can also use pairs: `\left`$s_1$ and `\right`$s_2$ to match height of delimiter $s_1$ and $s_2$ to the height of the contents.

# Large Delimiters (not really working for me) & AMS Delimiters

|         Sign | Meaning      |         Sign | Meaning      |          Sign | Meaning       |          Sign | Meaning       |
| -----------: | :----------- | -----------: | :----------- | ------------: | :------------ | ------------: | :------------ |
|    $\lgroup$ | `\lgroup`    |    $\rgroup$ | `\rgroup`    | $\lmoustache$ | `\lmoustache` | $\rmoustache$ | `\rmoustache` |
| $\arrowvert$ | `\arrowvert` | $\Arrowvert$ | `\Arrowvert` |  $\bracevert$ | `\bracevert`  |               |               |

|        Sign | Meaning     |        Sign | Meaning     |        Sign | Meaning     |        Sign | Meaning     |
| ----------: | :---------- | ----------: | :---------- | ----------: | :---------- | ----------: | :---------- |
| $\ulcorner$ | `\ulcorner` | $\urcorner$ | `\urcorner` | $\llcorner$ | `\llcorner` | $\lrcorner$ | `\lrcorner` |

# BIG Operators

|      Sign | Meaning   |    Sign | Meaning |        Sign | Meaning     |         Sign | Meaning      |        Sign | Meaning     |
| --------: | :-------- | ------: | :------ | ----------: | :---------- | -----------: | :----------- | ----------: | :---------- |
|    $\sum$ | `\sum`    |  $\int$ | `\int`  | $\biguplus$ | `\biguplus` |  $\bigoplus$ | `\bigoplus`  |   $\bigvee$ | `\bigvee`   |
|   $\prod$ | `\prod`   | $\oint$ | `\oint` |   $\bigcap$ | `\bigcap`   | $\bigotimes$ | `\bigotimes` | $\bigwedge$ | `\bigwedge` |
| $\coprod$ | `\coprod` | $\iint$ | `\iint` |   $\bigcup$ | `\bigcup`   |   $\bigodot$ | `\bigodot`   | $\bigsqcup$ | `\bigsqcup` |

# Binary Operators

|             Sign | Meaning          |               Sign | Meaning            |             Sign | Meaning          |
| ---------------: | :--------------- | -----------------: | :----------------- | ---------------: | :--------------- |
|              $+$ | `+`              |                $-$ | `-`                |                  |                  |
|            $\pm$ | `\pm`            |              $\mp$ | `\mp`              |  $\triangleleft$ | `\triangleleft`  |
|          $\cdot$ | `\cdot`          |             $\div$ | `\div`             | $\triangleright$ | `\triangleright` |
|         $\times$ | `\times`         |        $\setminus$ | `\setminus`        |          $\star$ | `\star`          |
|           $\cup$ | `\cup`           |             $\cap$ | `\cap`             |           $\ast$ | `\ast`           |
|         $\sqcup$ | `\sqcup`         |           $\sqcap$ | `\sqcap`           |          $\circ$ | `\circ`          |
|           $\lor$ | `\vee`,`\lor`    |            $\land$ | `\wedge`,`\land`   |        $\bullet$ | `\bullet`        |
|         $\oplus$ | `\oplus`         |          $\ominus$ | `\ominus`          |       $\diamond$ | `\diamond`       |
|          $\odot$ | `\odot`          |          $\oslash$ | `\oslash`          |         $\uplus$ | `\uplus`         |
|        $\otimes$ | `\otimes`        |         $\bigcirc$ | `\bigcirc`         |         $\amalg$ | `\amalg`         |
| $\bigtriangleup$ | `\bigtriangleup` | $\bigtriangledown$ | `\bigtriangledown` |        $\dagger$ | `\dagger`        |
|           $\lhd$ | `\lhd`           |             $\rhd$ | `\rhd`             |       $\ddagger$ | `\ddagger`       |
|         $\unlhd$ | `\unlhd`         |           $\unrhd$ | `\unrhd`           |            $\wr$ | `\wr`            |

|          Sign | Meaning       |   Sign | Meaning |        Sign | Meaning     |      Sign | Meaning   |
| ------------: | :------------ | -----: | :------ | ----------: | :---------- | --------: | :-------- |
|  $\centerdot$ | `\centerdot`  | $\Box$ | `\box`  | $\barwedge$ | `\barwedge` | $\veebar$ | `\veebar` |
| $\circledast$ | `\circledast` |        |         |             |             |           |           |





$\faBluetooth$