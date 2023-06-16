export class Services {
    getPhones = async () => {
      try {
        const res = await axios({
          url: 'https://647f185fc246f166da9010a7.mockapi.io/Products',
          method: 'GET',
        });
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
  
    addPhone = async (phone) => {
      try {
        await axios({
          url: 'https://647f185fc246f166da9010a7.mockapi.io/Products',
          method: 'POST',
          data: phone,
        });
      } catch (err) {
        console.log(err);
      }
    };
  
    deletePhone = async (id) => {
      try {
        await axios({
          url: `https://647f185fc246f166da9010a7.mockapi.io/Products/${id}`,
          method: 'DELETE',
        });
      } catch (err) {
        console.log(err);
      }
    };
  
    getPhoneById = async (id) => {
      try {
        const res = await axios({
          url: `https://647f185fc246f166da9010a7.mockapi.io/Products/${id}`,
          method: 'GET',
        });
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
  
    updatePhone = async (phone) => {
      try {
        await axios({
          url: `https://647f185fc246f166da9010a7.mockapi.io/Products/${phone.id}`,
          method: 'PUT',
          data: phone,
        });
      } catch (err) {
        console.log(err);
      }
    };
  }