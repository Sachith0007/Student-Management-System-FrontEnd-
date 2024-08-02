import React, {useState,useEffect} from 'react'; //methana useEffect kiyana component eka use karala thiynwa, mee component eka render weddi display ekata monwada wenna ona kiyala denna thami meka use krnne.bacEnd ekn data genna gaddi meka wedagath wnw. useEffect use krnna nm api dewal/ options dekk denna ona ekata. 1st eka  api kohmda back end eke thiyana data tika ganna hithn inne kiyala.methanadinm api useEffect kiyala function ekk hdagnnwa ., 2nd eka array ekak. ehma data gaddi monwada thiyenna ona options kiyala array eka athule denna ona. methandinm ehma mkt nathi nisa empty array ekk denwa.
import axios from 'axios'; //database eke thiyana data ganna use krna dependency ekak 

export default function AllStudents(){

    const [students,setStudents] = useState([]); //back end eken ena data tika enne array ekk vidiyata. eka dagnna "students" kiyala state ekk hadagnnwa usestate kiyana keyword ek use karala. state ekk kiyanne mokkd kiyala frontEnd vidoe set eke 1 video eke thoynw.ee hadagnna state eka array ekk krgnnw [] dala. dn eka students kiyana array ekak. userState eke dewal dekak return karanwa. ekak state eke variable name eka, anika eka update karanna ona function eka.
     
    // useEffect use krnna nm api dewal/options dekk denna ona ekata. 1st eka  api kohmda back end eke thiyana data tika ganna hithn inne kiyala.methanadinm api useEffect kiyala function ekk hdagnnwa ., 2nd eka array ekak. ehma data gaddi monwada thiyenna ona options kiyala array eka athule denna ona. methandinm ehma mkt nathi nisa empty array ekk denwa.(yata line ek)
    useEffect(()=>{      
          
         const getStudents=()=>{                     //arrow function ekak. useEffect kiyana arrow function ek athule thamai me arrow function eka hdala thiyenne

            axios.get("http://localhost:8080/student/").then((res)=>{ //kohenda data ganne kiyala link ek denwa. mhm data gaddi dewal dekak wenna plwn. 1 pass ,2 fail. pass nam wenna ona eka then dala function ekk hadala liynwa
                console.log(res);
                    // setStudents(res.data);    // backEnd ekn ena response eke thiyena data tika aragena setStudent kiyana state ekata(athathat eka "students" kiyana array ekak) dagnnwa.
                }).catch((err)=>{
                    alert(err.message);       // fail nam error message eka alert krnwa.
                })
         
            }
            getStudents(); //getstudent kiyana function eka call krgnnwa. ethakot thamai function eka weda karanne. dn students lita home eke display wenawa.

    },[])//options 1,2

    return(
        <div className='container'>
          <h1>All student</h1>
        </div>
    )
}