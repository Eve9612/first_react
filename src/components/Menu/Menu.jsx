function Menu({chooseVideo}){
    const handleClick = (e) => {
        const text = e.target.value;
        chooseVideo(text);
    }; 
    
    return(
        <div>
          <button value="fast" onClick={handleClick}>Fast</button>
          <button value="slow" onClick={handleClick}>Slow</button>
          <button value="cute" onClick={handleClick}>Cute</button>
          <button value="eek" onClick={handleClick}>Eek</button>
        </div>
    );
}

export default Menu