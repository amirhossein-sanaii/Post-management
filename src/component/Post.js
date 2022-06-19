import { useNavigate, useParams,useLocation } from "react-router-dom";
import {getPost , removePost} from "../data/data";

const Post = ()=>{
    const idPost = useParams();
    const post = getPost(Number(idPost.postId));
    const navigate = useNavigate()
    const Location = useLocation()


        if (post) {
            return(
                <>
                <div className="card" style={{width: '18rem' , margin:" 1em auto" , padding:"1rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
                    <p className="card-text">{post.text}</p>
                    <button onClick={()=>{removePost(post.id) ; navigate('/Posts' + Location.search)}} className="btn btn-danger">Remove</button>
                </div>
                </div>
                </>
            )
        }else{
            return(
                <>
                <div className="card" style={{width: '18rem' , margin:" 1em auto" , padding:"1rem"}}>
                <div className="card-body">
                    <h1>Not finde Post</h1>
                </div>
                </div>
                </>
            )
        }


    
}

export default Post