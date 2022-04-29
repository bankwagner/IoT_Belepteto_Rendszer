const Simple= () => {
    const title="Beléptető rendszer";
    const people_inside=0;
    //const data_example={RFID: 'sfjnsofj', inside: 'True'};
  
    const link="http://www.google.com"

    return ( 
        <div className="Simple">
            <h1>{title}</h1>
            <p>People currently inside: {people_inside}</p>
            <p>People currently inside: {Math.random()*10}</p>
            <a href={link}>Google</a>
        </div>
     );
}
 
export default Simple;