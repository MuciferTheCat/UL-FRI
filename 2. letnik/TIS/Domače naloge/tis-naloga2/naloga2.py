def kodiranje(vhod):
    slovar = {}
    for i in range(0, 256):
        slovar[chr(i)] = i

    izhod = []
    N = ''
    for i in vhod:
        z = i
        if N + z in slovar:
            N = N + z
        else:
            izhod.append(slovar[N])
            if (len(slovar) < 4096):
                slovar[N + z] = len(slovar)

            N = z

    izhod.append(slovar[N])
    return izhod


def dekodiranje(vhod):
    slovar = {}
    for i in range(0, 256):
        slovar[i] = chr(i)
    izhod = []
    k = vhod[0]
    N = slovar[k]
    izhod.append(N)
    K = N
    for i in range(1, len(vhod)):
        k = vhod[i]
        if k in slovar:
            N = slovar[k]
        else:
            N = K + K[0]
        for j in N:
            izhod.append(j)
        if (len(slovar) < 4096):
            slovar[len(slovar)] = K + N[0]

        K = N

    return izhod


def naloga2(vhod: list, nacin: int) -> tuple[list, float]:
    izhod = []
    if nacin == 0:
        izhod = kodiranje(vhod)
        R = float((len(vhod) * 8) / (len(izhod) * 12))
    elif nacin == 1:
        izhod = dekodiranje(vhod)
        R = float((len(izhod) * 8) / (len(vhod) * 12))
    return (izhod, R)
