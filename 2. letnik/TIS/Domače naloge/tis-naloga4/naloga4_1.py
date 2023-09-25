import numpy as np
from numpy.fft import fft, fftfreq
from scipy.signal import argrelextrema

def naloga4(vhod: list, fs: int, t: float) -> str:

    izhod = ''
    N = int(fs * t)
    freq = fftfreq(N, d = 1./fs)

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

    for i in range(0, len(vhod), N * 2):

        vzorec = vhod[i:i + N]
        ampl = np.abs(fft(vzorec))
        print(freq)
        middle = int(len(ampl) / 2)
        maximums = argrelextrema(ampl[:middle], np.greater)[0]
        amp_max = []
        for am in maximums:
            amp_max.append(ampl[am])
        
        while len(amp_max) > 2:
            min_value = min(amp_max)
            min_index = amp_max.index(min_value)
            amp_max.remove(min_value)
            maximums = np.delete(maximums, min_index)

        achord = []
        for i in maximums:
            print(freq[i])
            achord.append(freq[i])

        #print(achord)

        for [key, value] in frekvence.items():
            if (np.allclose(value, achord)):
                izhod += key

    return izhod