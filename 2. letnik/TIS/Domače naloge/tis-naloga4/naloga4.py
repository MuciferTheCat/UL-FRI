import numpy as np
from numpy.fft import fft, fftfreq
from scipy.signal import argrelextrema

def naloga4(vhod: list, fs: int, t: float) -> str:

    izhod = ''
    N = int(fs * t)
    stevec = 0

    frekvence = {
    '1': [697, 1209],
    '2': [697, 1336],
    '3': [697, 1477],
    '4': [770, 1209],
    '5': [770, 1336],
    '6': [770, 1477],
    '7': [852, 1209],
    '8': [852, 1336],
    '9': [852, 1477],
    '*': [941, 1209],
    '0': [941, 1336],
    '#': [941, 1477],
}

    while (len(vhod) != 0):
        if stevec == 0:
            vzorec = vhod[:N]

            for znak, freq in frekvence.items():
                magnitude = goertzel(vzorec, fs, freq, N)

                if np.all(magnitude > 1.0):
                    izhod += znak
                    break

        else:
            stevec = 0

        vhod = vhod[N:]

    return izhod

def goertzel(vzorec, fs, freq, N):
    window = np.hanning(len(vzorec))

    freq = np.array(freq)
    k = (0.5 + ((N * freq) / fs)).astype(int)
    w_real = 2.0 * np.cos(2.0 * np.pi * k / N)

    d1, d2 = 0.0, 0.0
    y = np.zeros(2)

    for n in range(N):
        y = w_real * d1 - d2 + window[n] * vzorec[n]
        d2, d1 = d1, y

    return np.sqrt(d1**2 + d2**2 - w_real * d1 * d2)