let Posts = [
  {
    id: 1,
    title: "aPost 1",
    text: "this is test text for text Poest 1 !!",
    date: "1400/06/22",
  }, 
  {
    id: 2,
    title: "dePost 2",
    text: "this is test text for text Poest 2 !!",
    date: "1400/04/20",
  }, 
  {
    id: 3,
    title: "rtPost 3",
    text: "this is test text for text Poest 3 !!",
    date: "1399/10/30",
  }, 
  {
    id: 4,
    title: "bgPost 4",
    text: "this is test text for text Poest 4 !!",
    date: "1401/08/03",
  }, 
  {
    id: 5,
    title: "bPost 5",
    text: "this is test text for text Poest 5 !!",
    date: "1388/12/03",
  }, 
]

 export const getdata = () => {
  return Posts;
};

export const getPost = (params) =>{
  return Posts.find(post => post.id === params)
}


export const removePost = id =>{
  Posts = Posts.filter((post) => post.id !== id)
}
