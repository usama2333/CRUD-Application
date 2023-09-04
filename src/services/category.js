// import axios from "axios";

// export default async function forgotPasswordData(method='Post',data=null,id=null, res,err ) {
//     let url = id ? `http://192.168.77.18:18008/users/reset/${id}`: "http://192.168.77.18:18008/users/reset"
//   try {

//     let axioObject = data?{
//         url,
//         method,
//         data
//     }: {
//         url,
//         method
//     }
//     const response = await axios(axioObject);

//     if (response.status === 200 || response.status === 201) {
//       history.replace("/login");
//     }
//   } catch (error) {
//     console.log(error.message);
//     setLogin(false);
//     setTimeout(() => {
//       setLogin(true);
//     }, 6000);
//     notify(error.message);
//   }
// }
