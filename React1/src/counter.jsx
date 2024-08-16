const Counter=(props)=>{
    const{buttonLabel1,color,count,countButtonClick}=props;
    const total=0;
    
    return(
        <>
        <button>This is a Button</button>
        <button onClick={() => countButtonClick()} style={{borderColor:color}}>
            {buttonLabel1}
        </button>
        </>
    );
};
export dafault Counter;