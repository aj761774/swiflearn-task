import React,{useState} from 'react';

const Pagination = () => {
    
    const tabs = [5,6,7,8,9];
    const activeArr = [1,...tabs.slice(1,tabs.length).map((tab) => 0)];
    const zeroesArr = [...tabs.map((tab) => 0)];
    const [activeTab, setActiveTab] = useState(activeArr);

    const handleActiveClick = (index)=>{
         const currentArr = zeroesArr;
         currentArr[index] = 1;
         setActiveTab(currentArr);
    }


    return (
        <div className="pagination">
            {
                tabs.map((tab,i)=>{
                    return <span key={i} className={activeTab[i] ? 'active-tab':''} onClick={()=>handleActiveClick(i)}>{tab}</span>
                })
            }
            
        </div>
    )
}

export default Pagination;
