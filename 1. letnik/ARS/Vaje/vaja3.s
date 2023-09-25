; Vaja03 primer load/store

        .data
        .org 0x400
A:      .byte 96
B:      .byte 0x05
        .align 4 ; naslednji naslov deljiv s 4
C:      .space 4
D:      .word16 -16


; oznake                 A    B              C                   D
; naslovi       0x     400  401  402  403  404  405  406  407  408  409  40A  40B  40C  .....
; vrednosti     0x      60   05   ??   ??   ??   ??   ??   ??   FF   F0   ??   ??   ??  
;                                           60   60   60             00
;                       FF   FF   FF   00   00   FF


; A=0x400
; r0=0=0x 0000 0000


        .code
        .org 0x0
        lb r1, 0x400(r0)      ; NASLOV: 0X400+0=0x400  r1=96=0x0000 0060
        sb 0x406(r0), r1      ; naslov: 0x406+0=0x406
        sb C(r0), r1          ; naslov: C+0=0x404+0=0x404
        sb C+1(r0), r1        ; naslov: (C+1)+0=(0x404+1)+0=0x405
        lb r2, 0x401(r0)      ; r2=0x0000 0005
        sb C(r2), r0          ; naslov: C+0x05=0x404+0x05=0x409
        lh r3, D(r0)          ; r3=0xFFFF FF00
        sw A(r0), r3          ; naslov: 0x400+0=0x400
        lbu r1, B(r0)         ; r1=0x   00 00 00 FF
        SH C(r0), r1          ; naslov: 0x404
        lw r3, C(r0)          ; r3=0x 00 FF 60 ??
        halt