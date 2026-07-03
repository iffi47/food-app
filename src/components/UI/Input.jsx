export default function Input({isTextarea, type, label, errorMessage, id, error, ...props }){
  return (
   <>
    <div className="control no-margin">
     <label htmlFor={id}>{label}</label>
     {!isTextarea && (
      <input
       id={id}
       type={type}
       name={id}
       {...props}
      />
     )}
     {isTextarea && (
      <textarea
       id={id}
       name={id}
       {...props}
      />
     )}
     {error && <div className="error">{error && <p>{errorMessage}</p>}</div>}
    </div>
   </>
  );
}