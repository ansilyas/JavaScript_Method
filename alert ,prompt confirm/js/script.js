alert("Enter the Value of a!") //(alert) always take value as a (string)
let a = prompt("Enter A Here", "577") //In (prompt) (Second) Value is the (default) value
a = Number.parseInt(a)
alert("you enter a of type" + (typeof a))
let write = confirm("Do you want to write it to the age ")
if (write) {
    document.write(a)
}
else {
    document.write("Please Allow me to Write ")
}
