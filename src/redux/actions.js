import axios from "axios"

export const getTimeline = (eventId) => {
    return async function (dispatch){
        await axios.get("http://localhost:3001/")
        .catch(error => console.log("Action creator getAnswerList:", error))
            .then(response => {
                dispatch({
                    type:'GET_TIMELINE',
                    payload:response
                });
            });}}
 
export const getArticle = (articleId) =>{
    return async function (dispatch) {
        await axios.get("http://localhost:3001/")
        .catch(error => console.log("Action creator getAnswerList:", error))
        .then(response => {
            dispatch({
                type:'GET_ARTICLE',
                payload:response
            });
        });
}}

export const loadData = () => {
    return async function (dispatch) {
      const response = await axios.get('http://localhost:3001');
      dispatch({
        type: 'LOAD_DATA',
        payload: response.data,
      });
    };
  };

