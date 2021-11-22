import matplotlib.pyplot as plt 
import numpy as np

offset = int(input("Type in the offset you want : "))
range_lower = int(input("Enter the lower end of the range for the Sin wave : "))
range_upper = int(input("Enter the upper end of the range for the Sin wave : "))

t = np.arange(range_lower, range_upper, 0.01)
s = offset + np.sin(2 * np.pi * t)

fig, ax = plt.subplots()
ax.plot(t, s)

ax.set(xlabel='time (s)', ylabel='voltage (V)',
       title='Plot of a sin wave with a offset.')
ax.grid()

plt.show()
