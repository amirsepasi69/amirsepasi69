
export const dataReducer = (state, action)  => {
    switch (action.type) {
        case "ADD_TO_DATA":
    
                // return {...state, msg: [...state.msg, action.payload ]}
                console.log("Action payload of add to data", action.payload);
                return {msg:[action.payload]}

        case "ADD_TO_CODE":
            console.log("ADD_TO_CODE Reducer activated");
            console.log("state", state);
            console.log("Action payload", action.payload);

            // localStorage.setItem("fkey", action.payload);

            

                return {
                    code:[action.payload]
                }

                case "ADD_TO_MEETINGID":
                    console.log("ADD_TO_MEETINGID Reducer activated");
                    // console.log("state", state);
                    console.log("Action payload of meeting id", action.payload);
        
                    // localStorage.setItem("fkey", action.payload);
        
                    
        
                        return {
                            // meetingID:[...state.meetingID, action.payload],
                             meetingID:[state.meetingID, action.payload],
                            match: action.payload
                        }
            
        default:
            return state;
    }
}