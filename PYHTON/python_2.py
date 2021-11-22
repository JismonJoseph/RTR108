no_hours = input("Enter the number of hours worked : ")
rate = input("Enter the hourly pay : ")

if float(no_hours) > 40:
    t = float(no_hours) - 40
    amount = (40 * float(rate)) + (t * 1.5 * float(rate))
else:
    amount = float(no_hours) * float(rate)