import Input from "../../Form/input";
import Button from "../../Form/button"
import { useState } from "react";

function FormUser({handleSubmit, btnText}){


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   

    function submit(e){
        e.preventDefault()
        handleSubmit({email, password})
    }

    return(
        <div>
            <form onSubmit={submit}>
                <Input
                    type="email" 
                    text="Email do Usuario:"
                    name="email" 
                    value={email}
                    placeholder="Digite o seu Email!"
                    handlechange={(e) =>
                        setEmail(e.target.value)
                    }
                ></Input>
                <Input
                    type="password" 
                    text="Senha (no minimo 8 caracteres)"
                    name="password" 
                    value={password}
                    placeholder="Digite uma senha!" 
                    handlechange={(e) =>
                        setPassword(e.target.value)
                    }
                ></Input>
                <Button text={btnText}></Button>
            </form>
    </div>
    )


}





export default FormUser;