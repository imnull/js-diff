//         0 1 2 3 4 5 6 7 8 9
const a = [1,2,3,3,4,5,7,9,8,8]
const b = [1,2,2,3,5,6,7,7,8]

const diff = (
    a: any[], i: number,
    b: any[], j: number,
    f: { (t: 's' | 'c' | 'e', i: number, j: number): void }
) => {
    if(i >= a.length || j >= b.length) {
        f('e', i, j)
        return
    }
    if(a[i] === b[j]) {
        f('s', i, j)
        diff(a, i + 1, b, j + 1, f)
    } else {
        f('c', i, j)
        const idx = b.indexOf(a[i], j)
        if(idx < 0) {
            diff(a, i + 1, b, j, f)
        } else {
            diff(a, i, b, idx, f)
        }
    }
}

let ii: number, jj: number, arr: any[] = [], it: any[] = [], ss: any[] = []
diff(a, 0, b, 0, (t, i, j) => {
    jj = j
    if(t === 'c') {
        arr.push([i, j])
    } else if(t === 's') {
        ss.push([j, i])
        // it = []
        // arr.push([j, i])
    } else if(t === 'e') {

    }
    console.log(t, i, j, a[i])
})

const sss = ss.map(([s]) => s)
// arr = arr.filter(([s]) => sss.indexOf(s) < 0)

console.log(arr)
console.log(ss)