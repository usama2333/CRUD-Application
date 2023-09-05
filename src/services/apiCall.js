import axios from "axios";

export default async function apiCall(method='post',data,id, onResponse ) {
    let url = id ? `https://64f6b5689d77540849527cd5.mockapi.io/api/item/${id}`: "https://64f6b5689d77540849527cd5.mockapi.io/api/item/"
  try {

    let axioObject = data?{
        url,
        method,
        data
    }: {
        url,
        method
    }
    const response = await axios(axioObject);
    const resData = await response.data;

    if (response.status === 200 || response.status === 201) {
 onResponse(resData)
    }
  } catch (error) {
    console.log(error.message);
  }
}
