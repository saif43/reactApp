n = '1222311'

count = 1

for i in range(len(n)):
    try:
        if n[i] == n[i+1]:
            count += 1
        else:
            print((count, int(n[i])),end =" ")
            count = 1
    except:
        print((count, int(n[i])),end =" ")
        count = 1
