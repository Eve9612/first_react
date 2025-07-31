function Avatar({size}){

    return (
        <img 
            src="/Quechua.jpeg" 
            alt="Image Here" 
            width={40}
            height={40}
            style={{ 
                borderRadius: '50%',  // Makes the image circular
                objectFit: 'cover',   // Crops the image to fill the circle properly
              }}
        />
    );
}

export default Avatar