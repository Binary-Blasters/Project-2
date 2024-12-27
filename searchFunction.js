let srch=document.getElementById("srch");

const search=()=>{
  
    if(srch.value==="Notes" || srch.value==="notes"){
          window.location.href = "notes.html";
          srch.value="";
    }
    else if(srch.value==="syllabus" ||srch.value==="Syllabus" || srch.value==="sylabus" || srch.value==="Subject"|| srch.value==="subject" || srch.value==="Subject"|| srch.value==="subjects"){
        window.location.href="Cards.html";
        srch.value="";
    }
    else if(srch.value==="About" || srch.value==="about" || srch.value==="Abouts Us" || srch.value==="Aboutus" || srch.value==="about us" || srch.value==="aboutus"){
        window.location.href="About.html";
        srch.value="";
    }
    else{
        srch.value="Please Enter Someting";
    }
}


