import Textbox from "./textbox";
import Link from "next/link";


export default function Login() {

    const handleSave = () => {
     
    };

    return(
        <div>
            <div className="absolute flex flex-row  bg-black" style={{height:'calc(100vh/8)',width:'100%'}}>
                <div className="absolute top-5 left-4 text-white text-xl">Admin</div>
                <button className=" absolute top-5 right-4 w-7 h-7 bg-white rounded-2xl ml-2 "onClick={handleSave()}>A</button>
                <button className="absolute felx flex-row top-5 right-14 text-white">Login</button>
            </div>
            <div className=" flex felx-row">   
            <Textbox placeholder='select option'  id="gender" dropdown options={[{ value: 'add-domain', label: 'add domain' }, { value: 'add user', label: 'add user' },{value: 'delete',label:'delete user'}]} className="absolute w-60 top-28 ml-14 left-96  "    showImage={false} />    
            <Textbox  id="name" name="name" placeholder="user-id"  type="text" className="absolute w-60 top-52 ml-14 left-96  " labelClassName="text-semiGrey" showImage={false} />
            <Link href="/login"><button className="bg-black w-48 rounded-xl absolute top-60 left-96 ml-20 text-white mt-10 h-10" >Change</button></Link>
            </div>
        </div>
    )
}