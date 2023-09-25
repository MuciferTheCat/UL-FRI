    .data
    .org 0x400
A:  .word 0x40000000
    
    
    
    
    
    
    .code
    .org 0x0

    addi r1,r0,#16          ; r1=16
    addi r1,r0,#0x10        ; r1=16=0000...00001 0000=0x0000 0010

    addi r2,r0,0x8000       ; r2=0x FFFF 8000
    addui r2,r0,0x8000      ; r2=0x 0000 8000
    addi r1,r0,0x80000000   ; r1=0x0000 0000

    lw r3,A(r0)             ; r3=0x40000000
    lw r4,A(r0)             ; r4=0x40000000
    add r5,r3,r4            ; r5=0x80000000
    addu r6,r3,r4           ; r6=0x80000000
    addu r6,r6,r6           ; r6=0x00000000

    addi r7,r0,2            ; r7=0 000...0000 0010=2
    slli r7,r7,1            ; r7=  000...0000 0100=4 logicni pomik v levo je mnozenje z 2
    slli r7,r7,1            ; r7=   00...0000 1000=8 -||-
    ; slli r1,r1,n   r1=r1*2^n
    addi r7,r0,16           ; r7=   0000...0000 0001 000  0=16
    srli r7,r7,1            ; r7=0  0000...0000 0000 1000  =8
    srli r7,r7,1            ; r7=00 0000...0000 0000 0100  =4
    ; srli r1,r1,n   r1=r1/2^n  velja samo za pozitivna stevila

    addi r8,r0,0xFFFE       ; r8= 1111...1111 1110=-2
    srli r9,r8,1            ; r9=01111...1111 111
    srai r10,r8,1           ; r10=11111...1111 111=-1
    ;srai  r1,r1,n  r1=r1/2^n