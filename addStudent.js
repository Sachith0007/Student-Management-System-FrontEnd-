import React,{useState} from "react";
import axios from "axios";   //axios kiyana npm package eka download karala methanat import karagnnwa.

export default function AddStudent(){    //function eka hadaganna thenama mhm import krnnt plwn, ethakot yata aye import krnn one na.
   
    // const [student, setStudent]= useState({
    //     name:"",
    //     age:"18",
    //     gender:""
    // })
    const [name,setName]=useState("");       //conatant variable 3k hadagnnnwa user input karana name,age,gen kiyana value 3 daganna.mewa states... me variables hadala thiyenne database eke neme. just browser eke. page eka reload krot meke thiyena data tika nathi wnw.ekai api input field ekata data add krala page ek reload nokara eka submit krnne. 
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");  // ("")  useState eken passe mhem thiyenne initial values walata. input feilds walata default value ekak denna one nm methana denw. nathnm nknm double chords dagannw.

    // const handleChange=(e)=>{
    //     setStudent((prevState)=>({
    //         ...prevState,
    //         [e.target.name]:e.target.value
    //     }))
        
    // }

    // const handleSubmit =(e)=>{
    //     e.preventDefault();
    //     console.log(student);
    // }

    const sendData=(e)=>{    //(e) kiyala danne meka event ekak nisa. meka qwe meka neme.<form> eka athule thiyena, me function eka call karapu, onSubmit kiyana event eka.
        e.preventDefault();
        // alert("Insert");


        const newStudent={   //newStudent kiyala object ekak hdagnnwa. ekata ara uda api setters walin data insert karagaththa variable 3 dagnnwa.
            name,
            age,
            gender
        }

        axios.post("http://localhost:8080/Student/add",newStudent).then(()=>{           //axio kiyana eke post kiyala method ekak thiynawa, eeka http method ekak. mkd api backend ek saha frntend eka athara data pass krnne http requests vidiyata.  api eka used karalaback end ekata uda hadagtta newStudent object eka pass krnw(eke thiyana data tika). mekata values 2k denwa. 1 weni eka data tika post wenna ona kohetd kiyala, backend eke url eka. 2 weni eka post wenna ona data tika.
            alert("student added")                                             //data back end ekata send una nm alert krnw mhem.
            
        
        }).catch((err)=>{
            alert(err)                                  //send une nathnm, ee error eka catch karala eka alert karanwa frontend ekata.
        })

       
    
    }

  
    


    return(
        <div className="container">             
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label for="name">Student Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter Student Name" onChange={(e)=>{ //onchange kiyanne arrow function ekak.
                        
                       setName(e.target.value);  //me input feild eken ena value eka setName kiyana setter eka(setName) haraha name kiyna variable ekata dagnnw.

                    }}/>
                    {/* <input type="text" className="form-control" name="name" id="name" placeholder="Enter Student Name" /> */}
                </div>


                <div className="mb-3">
                    <label for="age">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Student Age" onChange={(e)=>{

                        setAge(e.target.value); //onchange kiyala event ekk hadagnnw. eken setage eka haraha me event eken ena value eka uda age kiyana variable ekata dagnnwa.

                    }}/>
                    {/* <input type="text" className="form-control" name="age" id="age" placeholder="Enter Student Age"  /> */}
                </div>


                <div className="mb-3">
                    <label for="gender">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Male/Female"onChange={(e)=>{

                    setGender(e.target.value);

                    }}/>
                    {/* <input type="text" name="gender" className="form-control" id="gender" placeholder="Male/Female" /> */}
                </div>

                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

    
}