import {useState} from "react";
const Revision = () => {
    let [checked,setChecked]  = useState({
        html:false,
        css:false,
        js:false
    })
    let {html,css,js}  = checked;
    let handlecheckBox = (data,value)=>{
        setChecked({...checked,[data]:value})
        
    }
    console.log(checked);
  return (
    <div>
        <article>
            <form action="">
                <label htmlFor="name">Skills</label>
                <input type="checkbox" checked={html} onChange={(e) => handlecheckBox('html', e.target.checked)} />Html
                <input type="checkbox"checked={css} onChange={(e) => handlecheckBox('css', e.target.checked)} />css
                <input type="checkbox"checked={js} onChange={(e) => handlecheckBox('js', e.target.checked)} />Javascript    
                <input type="submit" value ="submit" />
        </form>
        </article>
    </div>
  )
}

export default Revision