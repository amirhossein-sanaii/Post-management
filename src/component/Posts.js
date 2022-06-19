import { NavLink , Outlet , useSearchParams , useLocation } from "react-router-dom"

import {getdata} from "../data/data"


const Posts =()=>{
    const Datapost = getdata()
    let [searchParams, setSearchParams] = useSearchParams();
    const Location = useLocation()
    return(
        <>
        <hr/>
        <div style={{display:'flex'}}>
            <nav style={{borderRight:"solid 1px black" , padding: '1rem'}}>
                <input 
                    className="form-control" 
                    type={'text'} 
                    placeholder="Search ..."
                    value={searchParams.get('filter')||""}
                    onChange={
                        event=>{
                            let filter = event.target.value;
                            // console.log(filter);
                            if(filter){
                                setSearchParams({filter:filter})
                            }else{
                                setSearchParams({})
                            }
                        }
                    }
                />
                {
                    Datapost.filter((post)=>{
                        let filter = searchParams.get("filter");
                        // console.log(filter);
                        if(!filter) return true;
                        let title = post.title.toLocaleLowerCase();
                        return title.startsWith(filter.toLocaleLowerCase())
                    })
                    .map((post)=>(
                        <NavLink className="link-success" 
                        style={({isActive}) =>{
                            return{
                                display:"block",
                                textDecoration:'none',
                                color: isActive ? 'red':'green'
                            }
                        }} 
                        to={`/Posts/${post.id}${Location.search}`} key={post.id}>
                            {post.title}
                        </NavLink>
                    ))
                }
            </nav>
            <Outlet/> 
        </div>
        </>
    )
}

export default Posts