// import axios from "axios";

// export default async function itemData( data,selectCategory, history, authCtx, notify, login, setLogin ) {
//   const apiUrl = 'https://64f6b5689d77540849527cd5.mockapi.io/api/item/';
//   console.log(selectCategory,'category.............')
//   try {
//     const response = await axios({
//       method: "post",
//       url: apiUrl,

//       data: {
//         name: data.name,
//         discription: data.discription,
//         price : data.price,
//         category : selectCategory,
//       },
//     });

//     // authCtx.login(response.data.token);

//     if (response.status === 200 || response.status === 201) {
//     //   history.push("/home");
//     //   setLogin(true);
//     console.log('api hit')
//     console.log(response)
//     }
//   } catch (error) {
//     console.log(error.message);
//     console.log('api error')
//     // setLogin(false);
//     // setTimeout(() => {
//     //   setLogin(true);
//     // }, 6000);
//     // notify(error.message);
//   }
// }
