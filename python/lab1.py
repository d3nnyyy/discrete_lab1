def arrayWithUniqueElements(arr):
    newArr = [0] * len(arr)
    index = 0
    for i in range(len(arr)):
            isDuplicate = False
            for j in range(index):
                if arr[i] == newArr[j]:
                    isDuplicate = True
                    break
            if not isDuplicate:
                newArr[index] = arr[i]
                index += 1
    return newArr[:index]


print(arrayWithUniqueElements([1,2,3,3,4,4,5]))

def CartesianProduct(A, B):
    arr = []
    for i in A:
        for j in B:
            arr += [[i, j]]
    return arr;

print(CartesianProduct(A=[1, 3], B=[2, 4]))