import numpy as np
from scipy.io.wavfile import write
from matplotlib import pyplot as plt

#######################################
# Ustvarjanje zvoka (ton)
T = 2 # trajanje v sekundah
fs = 44100 # Hz - frekvenca vzorčenja
N = T * fs # število vzorcev

# časovna os
t = np.arange(0, N) / fs 

# Amplitude
amp = 1.0

# Frekvence tonov za tikpo 1
f1=697
f2=1209

# Ustvarimo signal
x1 = amp * np.sin(2 * np.pi * f1 * t)
x2 = amp * np.sin(2 * np.pi * f2 * t)
x = x1 + x2
# Normalizacija na [-1, 1]
x = x / max(abs(x))

# Zapišimo v datoteko
write('1.wav', fs, x.astype(np.float32))

#########################################
# Razpoznava tonov
f = np.arange(0, N) * (fs/N) # frekvenčna os
X = np.fft.fft(x)
# Močnostni spekter
P = np.square(np.abs(X)) / (N * N)

# Narišimo grafe
figure, axis = plt.subplots(2,1)
axis[0].plot(t, x)
axis[0].set_title('Amplituda vs. čas')
axis[0].set_xlabel('t [s]')

axis[1].plot(f, P)
axis[1].set_title('Moč vs. frekvenca')
axis[1].set_xlabel('f [Hz]')

plt.show()