module.exports = function reverse (n) {
    n = Math.abs(n)
    n = n + ""
    n = n.split('').reverse().join('')
    n = n / 1
    return n
}
