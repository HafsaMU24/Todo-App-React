import React,{ useState} from "react";

type NewTodoFormProps = {
   addTodo: (text: string) => void;
};

const NewTodoForm: React.FC<NewTodoFormProps> = ({ addTodo }) => {
 const [text, setText] = useState('');

 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(text.trim()){
        addTodo(text);
        setText(''); // Rensa 
    }
};

return (
    <form className="text" onSubmit={handleSubmit} style={{marginBottom: '20px'}}>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Lägg till en todo"
        style={{
            padding:'10px',
            fontSize: '16px',
            width: '350px',
            marginRight: '10px',
            fontFamily: '20px', 
           
        }}
        />
        <button className= "submit" style={{padding:'12px 20px', fontSize:'16px', backgroundColor:'burlywood'}}> Lägg till 
        </button>
        </form>   
);
};

export default NewTodoForm;