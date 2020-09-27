#load ".paket/load/main.group.fsx"

open Fable.React

let Sun =
    FunctionComponent.Of((fun () -> h1 [] [ str "Sun.." ]), "Sun")

open Feliz

let Moon =
    React.functionComponent ("Moon", (fun () -> h1 [] [ str "Moon.." ]))
