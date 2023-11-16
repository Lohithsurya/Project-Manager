import Textbox from "./textbox";
import Link from "next/link";
import data from '../../data.json';

export default function Login() {

    const handleSave = () => {
     
    };

    return(
        <div>
            <div className="absolute flex flex-row  bg-black" style={{height:'calc(100vh/8)',width:'100%'}}>
                <div className="absolute top-5 left-4 text-white text-xl">Mentor</div>
                <button className=" absolute top-5 right-4 w-7 h-7 bg-white rounded-2xl ml-2 "onClick={handleSave()}>A</button>
                <button className="absolute felx flex-row top-5 right-14 text-white">Login</button>
            </div>
            <div className=" flex felx-row">   
            <table className="w-full absolute top-40 " style={{scrollbarWidth:"none", }}>
                  <thead className="sticky top-0 bg-lightWhite">
                    <tr >
                      <th className="text-lightblack text-[10px] text-justify pl-5 pr-10 font-medium">task-id</th>
                      <th className="text-lightblack text-[10px]  pl-1  text-justify font-medium">task-name</th>
                      <th className="text-lightblack text-[10px] pr-5 text-justify font-medium">status</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((user, index) => (
          <tr key={index} className="border-b border-gg ">
            
            <td className="p-2 pl-7 text-xs" >{user["task-id"]}</td>
            <td className="pr-10 text-xs" >{user["task-name"]}</td>
            <td className=" text-xs" >{user["status"]}</td>
            
          </tr>
        ))}
                  </tbody>
                </table>    
            <Textbox  id="name" name="name" placeholder="task-id"  type="text" className="absolute w-60 top-80 ml-14 left-96  " labelClassName="text-semiGrey" showImage={false} />
            <Textbox placeholder='select option'  id="gender" dropdown options={[{ value: 'completed', label: 'completed' }, { value: 'in progress', label: 'in progress' },{value: 'started',label:'started'}]} className="absolute w-60 top-96 ml-14 left-96  "    showImage={false} /> 
            <Link href="/login"><button className="bg-black w-48 rounded-xl absolute top-96 mt-20 left-96 ml-20 text-white  h-10" >Change</button></Link>
            </div>
        </div>
    )
}