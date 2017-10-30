function sleepSort(arr) {
	arr.forEach((n) => setTimeout(() => console.log(n), n))
}

const arr = [9, 5, 3, 99, 11, 2, 0]
sleepSort(arr)

/* stdout:
0
2
3
5
9
11
99
*/
