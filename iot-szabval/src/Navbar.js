import video from "./video.mp4"

const Navbar = () => {
    return ( 
            <section className="navbar">
                <video src={video} autoPlay={true} loop muted ></video>
                <h1 className="title">Beléptető rendszer</h1>
            </section>
     );
}
 
export default Navbar;