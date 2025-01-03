function Greeting({name}){
    return(
       <h1>Hello, {name || "world"}!</h1>
    )
}

export default Greeting;