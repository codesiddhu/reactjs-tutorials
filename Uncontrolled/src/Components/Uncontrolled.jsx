import {useRef} from "react";

const Uncontrolled = () => {
    let usernameRef = useRef();
    let passwordRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(usernameRef.current.value === "" && passwordRef.current.value === ""){
            alert("Please fill in the form")
        }else{
            alert(`Username: ${usernameRef.current.value} \nPassword: ${passwordRef.current.value}`)
            let personDetails ={
                name:usernameRef.current.value,
                password:passwordRef.current.value
            }
            validation(personDetails)
        }
    }
    let validation = (data) =>{
        if(data.name === "" || data.password === ""){
            alert("Please fill in the form")
        }
        else{
            alert(`Username: ${data.name} \nPassword: ${data.password}`)
        }
    }
  return (
    <div>
        <aside>
            <form action="" onSubmit={handleSubmit} >
                <aside>
                    <label htmlFor="">username</label>
                    <input ref={usernameRef} type="text" name="" id="" />
                </aside>
                <aside>
                    <label htmlFor="">password</label>
                    <input ref={passwordRef} type="password" name=""  />  

                </aside>
                <button type="submit">Login</button>
            </form>
        </aside>
    </div>
  )
}

export default Uncontrolled