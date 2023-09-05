// import axios from "axios";

// export default async function fetchItem(dispatch, tableActions,setLoading, setError,setShow) {

//   try {
   
//     // const response = await axios.get(`${apiUrl}/api/public/getCoinList`);
//     const response = await axios.get('https://64f6b5689d77540849527cd5.mockapi.io/api/item/');

//     const data = await response.data;
    

//     if (response.status === 200 || response.status === 201) {
//       console.log("data is get successfully");
//       console.log(data,'get');
//       dispatch(tableActions.setData(data));
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }
