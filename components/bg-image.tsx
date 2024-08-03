import bgImage from '../public/board2.jpg'; // Adjust the path as necessary

export default function AppBgImg() {
    return (
        <div style={{ 
            position: 'fixed', 
            width: '100vw', 
            height: '100vh', 
            zIndex: -1, 
            top: 0, 
            left: 0, 
            overflow: 'hidden'  // Ensures the image does not overflow the container
        }}>
            <div style={{ 
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                top: 0, 
                left: 0, 
                opacity: 0.15,  // Set the opacity here
                background: `url(${bgImage.src}) no-repeat center center`, 
                backgroundSize: 'cover' 
            }}>
                {/* The Image component is not needed here */}
            </div>
        </div>
    );

}