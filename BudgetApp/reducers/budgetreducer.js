const initialdata={
    list:[]
}

//const [list,setList] = useState([]);

const budgetreducer=(state=initialdata,action)=>{
    const {data} = action.payload;

    return {
        ...state,
        data:[...state.list,
            {data:data}
        ]
    }
}

export default budgetreducer;