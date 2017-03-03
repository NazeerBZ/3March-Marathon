

export function Calc(state = { screen: '' }, action) {

    switch (action.type) {
        case 'ADDITION':
            var val = document.getElementById("ScreenView").value
            var n = val.indexOf("+")
            var x = parseInt(val.slice(0, n))
            var y = parseInt(val.slice(n + 1))
            var add = x + y
            if (isNaN(add)) {
                return state = { screen: '' }
            }
            else return state = { screen: add }

        case 'SUBTRACTION':
            var val = document.getElementById("ScreenView").value
            var n = val.indexOf("-")
            var x = parseInt(val.slice(0, n))
            var y = parseInt(val.slice(n + 1))
            var sub = x - y
            if (isNaN(sub)) {
                return state = { screen: '' }
            }
            else return state = { screen: sub }

        case 'DIVIDE':
            var val = document.getElementById("ScreenView").value
            var n = val.indexOf("/")
            var x = parseInt(val.slice(0, n))
            var y = parseInt(val.slice(n + 1))
            var div = x / y
            if (isNaN(div)) {
                return state = { screen: '' }
            }
            else return state = { screen: div }

        case 'MULTIPLICATION':
            var val = document.getElementById("ScreenView").value
            var n = val.indexOf("*")
            var x = parseInt(val.slice(0, n))
            var y = parseInt(val.slice(n + 1))
            var multi = x * y
            if (isNaN(multi)) {
                return state = { screen: '' }
            }
            else return state = { screen: multi }
        default: return state

    }
}