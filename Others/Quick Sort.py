# Uses python3
import sys
import random

# following are the 2 ways of using quick sort


# This divides arr into 3 segments, 
# and works erfectly for arr that has multiple occurences of elements.
def partition3(a, l, r):
    #write your code here
    x, m1, m2 = a[l], l, r
    i = m1

    while i <= m2 :
        if a[i] < x:
            a[m1], a[i] = a[i], a[m1]
            m1 += 1

        elif a[i] > x:
            a[m2], a[i] = a[i], a[m2]
            m2 -= 1
            i -= 1
        i += 1   
    return m1, m2

def randomized_quick_sort3(a, l, r):
    if l >= r:
        return
    #use partition3
    m1, m2 = partition3(a, l, r)
    randomized_quick_sort3(a, l, m1-1)
    randomized_quick_sort3(a, m2+1, r)
    return a



# This divides arr into 2 segments
def partition2(a, l, r):
    x = a[l]
    j = l
    for i in range(l + 1, r + 1):
        if a[i] <= x:
            j += 1
            a[i], a[j] = a[j], a[i]
    a[l], a[j] = a[j], a[l]
    return j


def randomized_quick_sort2(a, l, r):
    if l >= r:
        return
    k = random.randint(l, r)
    a[l], a[k] = a[k], a[l]
    #use partition3
    m = partition2(a, l, r)
    randomized_quick_sort2(a, l, m - 1)
    randomized_quick_sort2(a, m + 1, r)


arr = [9,3,9,2,1,2,1,5,6,3,1]
print(randomized_quick_sort3(arr, 0, len(arr)-1))