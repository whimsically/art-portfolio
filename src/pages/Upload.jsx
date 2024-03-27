import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { v4 as uuidv4} from 'uuid';

const Upload = () => {
    const user = useUser();
    const supabase = useSupabaseClient();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function supabaseLogin() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
          });

        if (data) {
            window.location.reload()
        } else {
            alert('Error logging in!');
            console.log(error);
        }
    }

    async function uploadImage(e) {
        let image = e.target.files[0];

        const { data, error } = await supabase.storage.from('art').upload(user.id + '/' + uuidv4(), image);
        
        if (data) {
            alert('Success!')
        } else {
            alert('Error');
            console.log(error)
        }
    }

    return (
        <>
        { user === null ?
        <div>
            <h2 className="text-center">Login</h2>
            <form className="leading-loose mx-auto w-2/3">
                <label htmlFor='email'>Email:</label>
                <input type='text' id='email' name='email' className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                onChange={(e) => setEmail(e.target.value)}></input><br />
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                onChange={(e) => setPassword(e.target.value)}></input><br />
                 <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-2" type='button'
                 onClick={ () => supabaseLogin()}
                 >Submit</button>
            </form>
        </div>
        : 
        <div>
            <h2 className="font-bold text-purple-500">Hi Hannah!</h2>
            <form >
                <label htmlFor='img'>Upload an image:</label><br/>
                <input type="file" id="img" name="img" accept="image/*" onChange={(e) => uploadImage(e)}></input><br/>
            </form>
        </div>
        }
        </>
    );
}

export default Upload;