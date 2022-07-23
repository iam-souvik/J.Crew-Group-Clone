

let getData=async(url)=>{
    try{
        let res= await fetch(url)
        let data=await res.json();
        return data;
    }catch(err){
        return err
    }
}

export {getData};