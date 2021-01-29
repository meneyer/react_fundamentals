const Contacts = (props) => {
    return (
    <div>
        <h3>{props.name}</h3>
        {/* <p> {props.age} </p>
        <p> {props.school} </p>
        <p> {props.graduationYear}</p> */}
        <p> I'm {props.age}.  I went to {props.school} and graduated in {props.graduationYear}</p>
    </div>
    )
};

export default Contacts;