export class Service {
    getPhones = async () => {
        try {
            const res = await axios({
                url: "https://647f185fc246f166da9010a7.mockapi.io/Products",
                method: "GET",
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    getPhoneById = async (id) => {
        try {
            const res = await axios({
                url: `https://647f185fc246f166da9010a7.mockapi.io/Products/${id}`,
                method: "GET",
            });

            return res.data;
        } catch (err) {
            console.log(err);
        }
    };
}
