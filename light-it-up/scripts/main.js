const _ = query => document.querySelector(query)
const $ = query => Array.from(document.querySelectorAll(query))


// gates
const gate_exec = {}
gate_exec["NOT"] = (bit) => !bit;
gate_exec["OR"] = (bit_1, bit_2) => bit_1 || bit_2;
gate_exec["AND"] = (bit_1, bit_2) => bit_1 && bit_2;
gate_exec["XOR"] = (bit_1, bit_2) => bit_1 != bit_2;
gate_exec["XNOR"] = (bit_1, bit_2) => gate_exec["NOT"](gate_exec["XOR"](bit_1, bit_2));
gate_exec["NAND"] = (bit_1, bit_2) => gate_exec["NOT"](gate_exec["AND"](bit_1, bit_2));
gate_exec["NOR"] = (bit_1, bit_2) => gate_exec["NOT"](gate_exec["OR"](bit_1, bit_2));


// builders
function Bulb(id, input) {
    return {
        type: "bulb",
        state: false, // out state
        input, // in node
        id: id, // bulb id
    }
}

function Gate(gate, wire_id, input) {
    return {
        type: "gate",
        state: false,
        gate, // gate type
        input, // in nodes
        wire_id: wire_id, // out wire id
    }
}

function Switch(id, wire_id) {
    return {
        type: "switch",
        state: false,
        wire_id: wire_id, // out wire id
        id: id, // switch id
    }
}

function run_board(node) {
    if(node.type == "switch") {
        if(node.state) {
            _(`#${node.id} text`).innerHTML = 1
            _(`#${node.id}`).classList.add("on")
            _(`#${node.wire_id}`).classList.add("on")
        } else {
            _(`#${node.id} text`).innerHTML = 0
            _(`#${node.id}`).classList.remove("on")
            _(`#${node.wire_id}`).classList.remove("on")
        }
        return node.state
    } else if (node.type == "gate") {
        let state = gate_exec[node.gate](...node.input.map(run_board))
        if(state) {
            _(`#${node.wire_id}`).classList.add("on")
        } else {
            _(`#${node.wire_id}`).classList.remove("on")
        }
        return state
    }
}

function render() {
    bulbs.forEach(bulb => {
        if(run_board(bulb.input)) {
            _(`#${bulb.id}`).classList.add("on")

        } else {
            _(`#${bulb.id}`).classList.remove("on")
        }
    })
}

function toggleSwitch(s) {
    // console.warn(s.id)
    switches[s.id].state = !s.classList.contains("on")
    render()
}


function _s(sname) {
    return switches[`switch-${sname}`]
}

function _g(sname) {
    return gates[`gate-${sname}`]
}

// function show_wire_id(w) {
//     console.log(w.target.id)
// }

// $(".wire").forEach(w => {
//     w.addEventListener("mousemove", show_wire_id)
// })

// switches
const switches = {
    "switch-1": Switch("switch-1", "wire-67"),
    "switch-2": Switch("switch-2", "wire-66"),
    "switch-3": Switch("switch-3", "wire-2"),
    "switch-4": Switch("switch-4", "wire-1"),
    "switch-5": Switch("switch-5", "wire-5"),
    "switch-6": Switch("switch-6", "wire-12"),
    "switch-7": Switch("switch-7", "wire-16"),
    "switch-8": Switch("switch-8", "wire-18"),
    "switch-9": Switch("switch-9", "wire-20"),
    "switch-10": Switch("switch-10", "wire-23"),
    "switch-11": Switch("switch-11", "wire-26"),
    "switch-12": Switch("switch-12", "wire-31"),
    "switch-13": Switch("switch-13", "wire-34"),
    "switch-14": Switch("switch-14", "wire-38"),
    "switch-15": Switch("switch-15", "wire-42"),
    "switch-16": Switch("switch-16", "wire-47"),
    "switch-17": Switch("switch-17", "wire-48"),
    "switch-18": Switch("switch-18", "wire-54"),
    "switch-19": Switch("switch-19", "wire-55"),
    "switch-20": Switch("switch-20", "wire-62"),
    "switch-21": Switch("switch-21", "wire-60"),
}

// gates
gates = {}
gates["gate-1"] = Gate("NOT", "wire-65", [ _s(2) ])
gates["gate-2"] = Gate("AND", "wire-3", [ _s(3), _s(4) ])
gates["gate-3"] = Gate("NOT", "wire-4", [ _s(4) ])
gates["gate-4"] = Gate("NOR", "wire-6", [ _g(2), _g(3) ])
gates["gate-5"] = Gate("XOR", "wire-7", [ _g(3), _s(5) ])
gates["gate-6"] = Gate("AND", "wire-8", [ _g(4), _g(5) ])
gates["gate-7"] = Gate("NOT", "wire-11", [ _s(6) ])
gates["gate-8"] = Gate("XOR", "wire-13", [ _s(5), _g(7) ])
gates["gate-9"] = Gate("NOT", "wire-15", [ _g(8) ])
gates["gate-10"] = Gate("AND", "wire-14", [ _g(9), _s(7) ])
gates["gate-11"] = Gate("NAND", "wire-9", [ _g(6), _g(10) ])
gates["gate-12"] = Gate("NOT", "wire-10", [ _g(11) ])
gates["gate-13"] = Gate("NOT", "wire-17", [ _s(7) ])
gates["gate-14"] = Gate("OR", "wire-19", [ _g(13), _s(8) ])
gates["gate-15"] = Gate("NOT", "wire-21", [ _s(9) ])
gates["gate-16"] = Gate("OR", "wire-22", [ _g(14), _g(15) ])
gates["gate-17"] = Gate("NOT", "wire-24", [ _s(10) ])
gates["gate-18"] = Gate("AND", "wire-25", [ _s(9), _g(17) ])
gates["gate-19"] = Gate("NOT", "wire-32", [ _s(12) ])
gates["gate-20"] = Gate("NAND", "wire-27", [ _s(11), _g(19) ])
gates["gate-21"] = Gate("XNOR", "wire-28", [ _g(18), _g(20) ])
gates["gate-22"] = Gate("NOT", "wire-30", [ _g(21) ])
gates["gate-23"] = Gate("NOT", "wire-33", [ _g(20) ])
gates["gate-24"] = Gate("AND", "wire-29", [ _g(22), _g(23) ])
gates["gate-25"] = Gate("AND", "wire-36", [ _s(12), _s(13) ])
gates["gate-26"] = Gate("NOT", "wire-35", [ _s(13) ])
gates["gate-27"] = Gate("NOR", "wire-37", [ _g(25), _g(26) ])
gates["gate-28"] = Gate("AND", "wire-41", [ _g(27), _s(14) ])
gates["gate-29"] = Gate("NOT", "wire-43", [ _s(15) ])
gates["gate-30"] = Gate("XOR", "wire-44", [ _s(14), _g(29) ])
gates["gate-31"] = Gate("NOT", "wire-45", [ _g(30) ])
gates["gate-32"] = Gate("AND", "wire-46", [ _g(31), _s(16) ])
gates["gate-33"] = Gate("NAND", "wire-40", [ _g(28), _g(32) ])
gates["gate-34"] = Gate("NOT", "wire-39", [ _g(33) ])
gates["gate-35"] = Gate("NOT", "wire-49", [ _s(16) ])
gates["gate-36"] = Gate("NOT", "wire-50", [ _s(17) ])
gates["gate-37"] = Gate("OR", "wire-51", [ _g(35), _g(36) ])
gates["gate-38"] = Gate("NOT", "wire-53", [ _s(18) ])
gates["gate-39"] = Gate("OR", "wire-52", [ _g(37), _g(38) ])
gates["gate-40"] = Gate("NOT", "wire-56", [ _s(19) ])
gates["gate-41"] = Gate("AND", "wire-57", [ _s(18), _g(40) ])
gates["gate-42"] = Gate("NOT", "wire-61", [ _s(21) ])
gates["gate-43"] = Gate("NAND", "wire-63", [ _s(20), _g(42) ])
gates["gate-44"] = Gate("XNOR", "wire-58", [ _g(41), _g(43) ])
gates["gate-45"] = Gate("NOT", "wire-64", [ _g(43) ])
gates["gate-46"] = Gate("AND", "wire-59", [ _g(44), _g(45) ])

// bulbs
const bulbs = [
    Bulb("bulb-1", _s(1)),
    Bulb("bulb-2", _g(1)),
    Bulb("bulb-3", _g(12)),
    Bulb("bulb-4", _g(16)),
    Bulb("bulb-5", _g(24)),
    Bulb("bulb-6", _g(34)),
    Bulb("bulb-7", _g(39)),
    Bulb("bulb-8", _g(46)),
]

// on by default
switches["switch-2"].state = true
switches["switch-7"].state = true
switches["switch-16"].state = true
switches["switch-17"].state = true
switches["switch-18"].state = true
render()

// function render_mod() {
//     return bulbs.every(bulb => {
//         return run_board(bulb.input)
//     })
// }

// function test(i) {
//     i.toString(2)
//         .padStart(21, "0")
//         .split("")
//         .forEach((bit, i) => {
//             switches[`switch-${i+1}`].state = bit == "1"
//         })
//         if(
//             // /^1001101110101101(000|001|011|100|101)10$/.test(i.toString(2).padStart(21, "0"))
//             render_mod()
//         ) {
//             console.warn(`Got seq: ${i}: ${i.toString(2).padStart(21, "0")}`)
//         }
//     if(i % 10000 == 0) {
//         console.log(i)
//     }
// }


// for(let i=0; i<(2 ** 21); i++) {
//     test(i)
// }
