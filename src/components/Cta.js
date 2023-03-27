
function Cta(props) {
 
  return (
    <div className="cta">
        <button className="cta__button"> 
           <p>{props.label}</p>
        </button>
    </div>
  );
}

export default Cta;