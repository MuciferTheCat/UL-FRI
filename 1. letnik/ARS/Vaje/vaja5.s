    .data
    .org 0x12345678 ;to je šestnajstiški zapis!!!!
A:  .byte 0x6A

    .code
    .org 0x0

    ; A=0x12345678
    ;lb r1, A(r0)        ;r1 <- 0x6A    NE DELUJE! ker rabimo za zapis A 32 bitov
    ; A + 0 = A + r0 = r2 + 0

    ; r2 <- A
    addui r2, r0, 0x1234        ; r2 = 0x 0000 1234
    slli r2, r2, 16             ; r2 = 0x 1234 0000
    addui r2, r2, 0x5678        ; r2 = 0x 1234 5678

    lhi r2, 0x12345678          ; r2 = 0x 1234 0000
    addui r2, r2, 0x12345678    ; r2 = 1234 5678

    lhi r2, A
    addui r2, r2, A             ; r2 <- A

    lb r1, 0(r2)                ; r1 = 0x 0000 006A

    ; logične operacije (delujejo nad posameznimi biti)
    andi r3, r1, 0x3C
    ; x * 0 = 0      x * 1 = x      uporabimo za filtriranje bitov
    ; r1      = 0000....0000 0110 1010   =0x6A
    ; maska   = 0000....0000 0011 1100   =0x3C (mask, takojšnji operand)
    ; r3      = 0000....0000 0010 1000


    ori r3, r1, 0x3C
    ; x V 0 = x    x V 1 = 1     uporabimo za nastavljanje bitov (na 1)
    ; r1      = 0000....0000 0110 1010
    ; maska   = 0000....0000 0011 1100
    ; r3      = 0000....0000 0111 1110

    xori r3, r1, 0x3C
    ; x + 0 = x    x + 1 = -x      uporabimo za flipanje bitov
    ; r1      = 0000....0000 0110 1010
    ; maska   = 0000....0000 0011 1100
    ; r3      = 0000....0000 0101 0110

    not r3, r1, r1
    ; r1      = 0000....0000 0110 1010
    ; r3      = 1111....1111 1001 0101



    ; set ukazi (delujejo nad celotno vrednostjo)

    ; slt
    ; sgt


    ; r1 <- 1111....11111111
    not r1, r0, r0

    sgti r4, r1, 1
    ; r1 > 1: r4 = 1 (=0000....00000001)
    ; r1 <= 1: r4 = 0 (=0000....00000000)
    ; 1111....11111111 >? 0000....00000000
    ;     -1      >       0      ne drži
    ; r4 = 0



    sgtui r5, r1, 0
    ; 1111....11111111 >? 0000....00000000
    ;      2^32 - 1   >       0        drži
    ; r5 = 1

    halt