from collections import Counter
from math import log2

jo = dict()


def naloga1(znacilnice, razredi, koraki):

    for z in range(0, koraki):
        global jo
        razred = list(razredi)
        entropija = -1
        jo1 = jo
        niz = ''
        for atribut, values in znacilnice.items():
            vrednosti = list(set(values))
            leaf = dict()
            ind = dict()

            if (z == 0):
                for v in vrednosti:
                    l = []
                    i = []
                    for temp in range(0, len(values)):
                        if values[temp] == v:
                            l.append(razred[temp])
                            i.append(temp)

                    leaf[v] = l
                    ind[v] = i

            else:
                for listi_cur, indexi_cur in jo.items():

                    for v in vrednosti:
                        l = []
                        i = []
                        for temp in range(0, len(indexi_cur)):
                            if values[indexi_cur[temp]] == v:
                                l.append(razred[indexi_cur[temp]])
                                i.append(indexi_cur[temp])

                        t = listi_cur + v
                        leaf[t] = l
                        ind[t] = i

            st_primerkov = []
            verjetnosti = []

            for i, j in leaf.items():
                st_primerkov.append(len(j))
                verjetnosti.append(Counter(j))

            H = entropija2(izracunEntropije(
                verjetnosti, st_primerkov), len(razred), st_primerkov)

            if entropija < 0 or H < entropija:
                entropija = H
                niz = atribut
                jo1 = ind

        znacilnice.pop(niz)
        jo = jo1

    tocnost = vecinskiRazred(jo, razred) / len(razred)
    return (entropija, tocnost)


def izracunEntropije(verjetnosti, st_primerkov):

    temp = []

    for n in range(len(st_primerkov)):
        H = sum(-(verjetnosti[n][p] / st_primerkov[n]) *
                log2(verjetnosti[n][p] / st_primerkov[n]) for p in verjetnosti[n])

        temp.append(H)

    return temp


def entropija2(temp, zapisi, st_primerkov):

    H = 0

    for i in range(0, len(st_primerkov)):
        H += st_primerkov[i] / zapisi * temp[i]

    return H


def vecinskiRazred(ji, razred):

    tocni = 0

    for _, indeksi in ji.items():
        temp = []
        for k in indeksi:
            temp.append(razred[k])

        counter = Counter(temp)
        vecinski = counter.most_common(1)

        for i in indeksi:
            if razred[i] == vecinski[0][0]:
                tocni += 1

    return tocni
