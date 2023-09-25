ukaz1:  IF  ID  EX  ME  WB   ; tipična shema
ukaz2:      IF  ID  EX  ME  WB
ukaz3:          IF  ID  EX  ME  WB
ukaz4:              IF  ID  EX  ME  WB
ukaz5:                  IF  ID  EX  ME  WB

; latenca je število stopenj v cevovodu minus ena (5 stopenjski cevovod - ker ma 5 stopenj hahah)
; v petih urinih periodah se izvede 5 ukazov => idealni CPI=1
; osnova cevovoda je kako pospešiti izvajanje programov


; za vsak ukaz rabimo 5 urinih enot
; zgoraj zapisani ukazi se izvajajo zaporedno, če bi jih pisali enega za drugim bi se izvajali vzporedno
; naprej se izvede IF prvega ukaza, potem ID prvega in IF drugega ukaza itd itd
; na tak način lahko vzporedno izvajamo več ukazov


STRUKTURNE NEVARNOSTI (jih ni v hip, lahko se pojavijo v kakšnih drugih kompleksnejših sistemih)
PODATKOVNE NEVARNOSTI (do njih pride zaradi podatkovnih odvisnosti)
 - RAW (read after write)
 - WAR (se ne pojavijo v hip)
 - WAW
 - RAR
