const Footer = () => {   
    let d = new Date();
    let y = d.getFullYear();

    return (
        <p>Copyright, EFA {y} </p>
        // <p> Copyright, EFA { (new Date().getFullYear())} </p>  <--another way to write it
    )
};

export default Footer;