import math
import numpy as np


def naloga3(vhod: list, n: int) -> tuple[list, str]:
    izhod = []
    crc = ""
    m = int(math.log2(n))
    k = n - m - 1
    I = np.identity(m, dtype=np.uint8)
    H = generateHamming(n, m)

    crc = crc16Calculator(vhod)

    H = np.concatenate((H, I))

    while len(vhod) > 0:
        sporocilo = vhod[:n]
        vhod = vhod[n:]
        y = sporocilo[:-1]
        paritetni = int(np.remainder(np.sum(sporocilo), 2))

        s = int(("".join([str(i) for i in np.remainder(np.matrix(y).dot(H), 2)[0].tolist()[0]])), 2)

        if paritetni == 1 and s != 0:
            stolpec = 0

            for i in range(len(H)):
                temp = int(("".join([str(i) for i in H[i]])), 2)
                if temp == s:
                    stolpec = i
                    break

            if y[stolpec] == 0:
                y[stolpec] = 1
            else:
                y[stolpec] = 0

        for i in range(k):
            izhod.append(y[i])

    return (izhod, crc)


def generateHamming(n, m):
    H = []

    for i in range(1, n):
        if (math.log2(i) % 1 == 0): continue
        num = bin(i)[2:]
        num = str(num.zfill(m))
        arr = []

        for i in range(len(num)):
            arr.append(int(num[i]))

        H.append(arr)

    return H

def crc16Calculator(data: bytes):

    temp = ''
    for i in data:
        temp += str(i)

    data = int(temp, 2).to_bytes((len(temp) + 7) // 8, byteorder='big')

    crc = 0xFFFF
    poly = 0x1021
  
    for c in data:
        crc = crc ^ (c<<8)
        for _ in range(8): 
            crc = (crc<<1) ^ poly if crc & 0x8000 else crc<<1
  
    return '%.04X'% (crc & 0xFFFF)