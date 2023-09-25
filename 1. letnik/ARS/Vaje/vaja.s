
    .data
    .org 0x40000b00
    A:   .word16  0x2557, 12
    B:   .word 0

    
    .code
    .org 0x0
    lhi r9, A
        ori r9, r9, A
	lw r1, 0(r9)
        sh 6(r9), r1
        sb 5(r9), r1