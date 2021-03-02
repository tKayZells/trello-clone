const NotFoundComponent = () => {

    return (
        <div style={{ 
            height: '100vh',
            display: 'flex',
            flexDirection : 'column',
            justifyContent: 'center',
            alignItems: 'center'
           }}>
            <span style={{ textAlign : "center", fontSize: "3rem", fontStyle : "italic", marginBottom: "1rem"}}>
                This is not the webpage you're looking for.
            </span>
            <span style={{ fontSize: "2rem", fontStyle : "italic"}}>
                404
            </span>
        </div>
    );
}

export default NotFoundComponent;